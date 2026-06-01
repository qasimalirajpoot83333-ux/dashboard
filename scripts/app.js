const App = {
    version: '2.1.0',
    environment: process.env.NODE_ENV || 'production',
    modules: [],
    startTime: performance.now(),
    init() {
        Logger.info(`=== Aviation Dashboard v${this.version} ===`);
        Logger.info(`Environment: ${this.environment}`);
        try {
            this.checkBrowserSupport();
            this.preloadAssets();
            this.initializeModules();
            this.setupEventListeners();
            this.setupServiceWorker();
            this.reportPerformance();
            Logger.info('✅ Application initialized successfully');
        } catch (error) {
            Logger.error('❌ Failed to initialize application', error);
            this.showErrorMessage('Failed to load dashboard');
        }
    },
    checkBrowserSupport() {
        const required = ['fetch', 'Promise', 'Array.from'];
        const missing = required.filter(api => !(api in window));
        if (missing.length > 0) {
            Logger.warn(`Missing APIs: ${missing.join(', ')}`);
        }
    },
    preloadAssets() {
        const stylesheets = [
            'styles/base.css',
            'styles/components.css',
            'styles/responsive.css'
        ];
        stylesheets.forEach(href => {
            const link = document.querySelector(`link[href="${href}"]`);
            if (link) {
                link.setAttribute('rel', 'preload');
                link.setAttribute('as', 'style');
            }
        });
    },
    initializeModules() {
        const moduleList = [
            { name: 'DateTimeModule', obj: DateTimeModule },
            { name: 'SearchModule', obj: SearchModule },
            { name: 'NavigationModule', obj: NavigationModule }
        ];
        moduleList.forEach(({ name, obj }) => {
            try {
                if (obj && obj.init) {
                    obj.init();
                    this.modules.push(obj);
                    Logger.debug(`Module initialized: ${name}`);
                }
            } catch (error) {
                Logger.error(`Failed to initialize ${name}`, error);
            }
        });
        Logger.info(`${this.modules.length} modules loaded`);
    },
    setupEventListeners() {
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                Logger.debug('Page hidden');
            } else {
                Logger.debug('Page visible');
            }
        });
        window.addEventListener('beforeunload', () => {
            Logger.info('Page unloading');
            this.cleanup();
        });
        window.addEventListener('error', (event) => {
            Logger.error('Uncaught error', event.error);
            this.reportError(event.error);
        });
        window.addEventListener('unhandledrejection', (event) => {
            Logger.error('Unhandled promise rejection', event.reason);
            this.reportError(event.reason);
        });
        window.addEventListener('online', () => {
            Logger.info('Back online');
        });
        window.addEventListener('offline', () => {
            Logger.warn('Application offline');
        });
    },
    setupServiceWorker() {
        if (!('serviceWorker' in navigator)) {
            Logger.info('Service Worker not supported');
            return;
        }
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then((registration) => {
                    Logger.info('Service Worker registered');
                })
                .catch((error) => {
                    Logger.warn('Service Worker registration failed', error);
                });
        });
    },
    reportPerformance() {
        const endTime = performance.now();
        const loadTime = (endTime - this.startTime).toFixed(2);
        Logger.info(`⚡ Application loaded in ${loadTime}ms`);
        if (window.performance && window.performance.timing) {
            const perf = window.performance.timing;
            const pageLoadTime = perf.loadEventEnd - perf.navigationStart;
            Logger.debug(`Total page load time: ${pageLoadTime}ms`);
        }
    },
    reportError(error) {
        const errorData = {
            message: error.message,
            stack: error.stack,
            url: window.location.href,
            timestamp: new Date().toISOString()
        };
        Logger.debug('Error reported:', errorData);
    },
    showErrorMessage(message) {
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ef4444;
            color: white;
            padding: 16px 20px;
            border-radius: 8px;
            z-index: 9999;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        `;
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);
        setTimeout(() => errorDiv.remove(), 5000);
    },
    cleanup() {
        this.modules.forEach(module => {
            if (module.destroy) {
                module.destroy();
            }
        });
        Logger.info('Application cleanup complete');
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        App.init();
    });
} else {
    App.init();
}

window.App = App;
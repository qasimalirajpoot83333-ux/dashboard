/**
 * Logger Utility - Enhanced
 * Centralized logging and error tracking
 */

const Logger = {
    isDev: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1',
    logLevel: 'debug',
    logs: [],
    maxLogs: 100,

    /**
     * Log info message
     */
    info(message, data = null) {
        this.log('INFO', message, data, '#2563eb');
    },

    /**
     * Log debug message
     */
    debug(message, data = null) {
        if (this.isDev) {
            this.log('DEBUG', message, data, '#666');
        }
    },

    /**
     * Log warning message
     */
    warn(message, data = null) {
        this.log('WARN', message, data, '#f59e0b');
    },

    /**
     * Log error message
     */
    error(message, error = null) {
        this.log('ERROR', message, error, '#ef4444');
    },

    /**
     * Internal logging function
     */
    log(level, message, data, color) {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = { level, message, data, timestamp };
        this.logs.push(logEntry);

        // Keep only last N logs
        if (this.logs.length > this.maxLogs) {
            this.logs.shift();
        }

        // Console output
        if (this.isDev || level === 'ERROR') {
            const style = `color: ${color}; font-weight: bold;`;
            console.log(`%c[${level}] ${message}`, style, data || '');
        }
    },

    /**
     * Get all logs
     */
    getLogs() {
        return this.logs;
    },

    /**
     * Clear logs
     */
    clearLogs() {
        this.logs = [];
    }
};

// Make available globally
window.Logger = Logger;
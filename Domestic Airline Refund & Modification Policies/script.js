// Dynamic JSON Data containing all airline policies and logos
const policiesData = [
    {
        id: "airsial-dom",
        name: "AirSial",
        subtitle: "(Domestic)",
        category: "domestic",
        logo: "https://crystalpng.com/wp-content/uploads/2022/06/Airsial-logo-1.png",
        headers: ["Timeframe / Condition", "Modification", "Refund Fee"],
        rows: [
            ["More than 48 hours before departure", "Non Changeable", "PKR 5,000"],
            ["Within 48 hours to 24 hours", "-", "PKR 6,000"],
            ["Within 24 Hours / After departure / NO SHOW", "-", "PKR 10,500"],
            ["Flight delay > 5 hours", "-", "Full Refund"],
            ["29 Days after departure", "No Modification", "No Refund"]
        ]
    },
    {
        id: "airsial-jeddah",
        name: "AirSial",
        subtitle: "(Jeddah)",
        category: "jeddah",
        logo: "https://crystalpng.com/wp-content/uploads/2022/06/Airsial-logo-1.png",
        headers: ["Condition", "Refund & Mod Charges (Plus)"],
        rows: [
            ["More than 120 hours before departure", "PKR 20,000"],
            ["Within 120 to 48 hours of departure", "PKR 30,000"],
            ["Within 48 to 24 hours of departure", "PKR 40,000"],
            ["Within 24 Hours / After departure / No Show", "PKR 60,000"],
            ["60 Days after flight departure", "No Refund / Modification"],
            ["Flight Delayed 5+ hours / Early 1+ hours", "Full Refund"]
        ]
    },
    {
        id: "airsial-intl",
        name: "AirSial",
        subtitle: "(International)",
        category: "international",
        logo: "https://crystalpng.com/wp-content/uploads/2022/06/Airsial-logo-1.png",
        headers: ["Condition", "Refund & Mod Charges (Nill Baggage)"],
        rows: [
            ["More than 120 hours before departure", "PKR 20,000"],
            ["Within 120 to 48 hours of departure", "PKR 25,000"],
            ["Within 48 to 24 hours of departure", "PKR 30,000"],
            ["Within 24 Hours / After departure / No Show", "PKR 35,000"],
            ["60 Days after flight departure", "No Refund / Modification"],
            ["Flight Delayed 5+ hours / Early 1+ hours", "Full Refund"]
        ]
    },
    {
        id: "airblue-dom",
        name: "Airblue",
        subtitle: "(Domestic)",
        category: "domestic",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Airblue_Logo.svg/3840px-Airblue_Logo.svg.png",
        headers: ["Timeframe", "Cancellation Fee"],
        rows: [
            ["More than 48 hours before departure", "PKR 6,500"],
            ["Within 48 hours of departure", "PKR 7,500"],
            ["After departure", "PKR 12,000"]
        ]
    },
    {
        id: "airblue-intl",
        name: "Airblue",
        subtitle: "(International)",
        category: "international",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Airblue_Logo.svg/3840px-Airblue_Logo.svg.png",
        headers: ["Timeframe", "Change Fees", "Cancel Fees"],
        rows: [
            ["More than 48 hours before departure", "PKR 25,000", "PKR 30,000"],
            ["Within 48 hours of departure", "PKR 30,000", "PKR 35,000"],
            ["After departure", "PKR 35,000", "PKR 40,000"]
        ]
    },
    {
        id: "flyjinnah-dom",
        name: "Fly Jinnah",
        subtitle: "(Domestic)",
        category: "domestic",
        logo: "https://crystalpng.com/wp-content/uploads/2025/10/fly-jinnah-logo.png",
        headers: ["Condition", "Policy / Charges"],
        rows: [
            ["Up to 24 hours before departure", "Modifications/Cancellations Allowed"],
            ["Cancellation 24 Hours before departure", "PKR 5,500"],
            ["Refund Method", "Credit voucher (Valid for 1 year)"]
        ]
    },
    {
        id: "flyjinnah-intl",
        name: "Fly Jinnah",
        subtitle: "(International)",
        category: "international",
        logo: "https://crystalpng.com/wp-content/uploads/2025/10/fly-jinnah-logo.png",
        headers: ["Item", "Basic", "Value", "Ultimate"],
        rows: [
            ["Refund (credit)", "Minimum 200 AED up to 24 hrs* (Not permitted within 24 hrs)", "100 AED up to 24h* (Not permitted within 24 hrs)", "Up to 8h* (Not permitted within 8 hrs)"]
        ]
    },
    {
        id: "pia-dom",
        name: "PIA",
        subtitle: "(Domestic)",
        category: "domestic",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pakistan_International_Airlines_Logo.svg/1280px-Pakistan_International_Airlines_Logo.svg.png",
        headers: ["Condition", "Refund Fee (Per Person)"],
        rows: [
            ["6 hours before departure", "PKR 2,500"],
            ["Less than 6 hours / NO SHOW", "PKR 4,000"],
            ["N9 Taxes / Manually Selected Seats", "Non-refundable"]
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('policyGrid');
    const searchInput = document.getElementById('searchInput');
    const tabs = document.querySelectorAll('.tab-btn');
    const noResults = document.getElementById('noResults');
    const themeToggle = document.getElementById('themeToggle');
    const printAllBtn = document.getElementById('printAllBtn');

    // Global Print Function
    printAllBtn.addEventListener('click', () => {
        window.print();
    });

    // Render Tickets dynamically from JSON
    function renderTickets(data) {
        grid.innerHTML = '';
        if (data.length === 0) {
            noResults.style.display = 'block';
            return;
        }
        noResults.style.display = 'none';

        data.forEach(policy => {
            // Generate Table Headers dynamically
            let headersHTML = policy.headers.map(h => `<th>${h}</th>`).join('');
            
            // Generate Table Rows dynamically
            let rowsHTML = policy.rows.map(row => {
                let tds = row.map(cell => `<td>${cell}</td>`).join('');
                return `<tr>${tds}</tr>`;
            }).join('');

            // Build full ticket HTML
            const ticketHTML = `
                <div class="ticket airline-card" data-category="${policy.category}">
                    <div class="ticket-stub">
                        <img src="${policy.logo}" alt="${policy.name} Logo" class="airline-logo" onerror="this.style.display='none'">
                        <h2>${policy.name}</h2>
                        <p>${policy.subtitle}</p>
                    </div>
                    <div class="ticket-body">
                        <table class="policy-table">
                            <thead><tr>${headersHTML}</tr></thead>
                            <tbody>${rowsHTML}</tbody>
                        </table>
                    </div>
                </div>
            `;
            grid.innerHTML += ticketHTML;
        });
    }

    // Initial Render
    renderTickets(policiesData);

    // Filter Logic (Search & Tabs)
    function filterPolicies() {
        const query = searchInput.value.toLowerCase();
        const activeTab = document.querySelector('.tab-btn.active').dataset.category;

        const filtered = policiesData.filter(policy => {
            const matchesSearch = policy.name.toLowerCase().includes(query) || policy.subtitle.toLowerCase().includes(query);
            const matchesTab = activeTab === 'all' || policy.category === activeTab;
            return matchesSearch && matchesTab;
        });

        renderTickets(filtered);
    }

    searchInput.addEventListener('keyup', filterPolicies);

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            filterPolicies();
        });
    });

    // Dark Mode Toggle Logic
    let isDark = false;
    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        if (isDark) {
            document.body.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️ Light Mode';
        } else {
            document.body.removeAttribute('data-theme');
            themeToggle.textContent = '🌙 Dark Mode';
        }
    });
});
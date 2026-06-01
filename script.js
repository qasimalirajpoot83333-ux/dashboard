// ==========================================
// TICKET DASHBOARD LOGIC
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Live GMT Clock (Matching the image style) ---
    function updateClock() {
        const now = new Date();
        
        // Format options for: WED, 25 OCT 2023, 14:38 GMT
        const optionsDate = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
        
        let datePart = now.toLocaleDateString('en-GB', optionsDate).toUpperCase();
        
        // Time Formatting
        let hours = now.getHours().toString().padStart(2, '0');
        let minutes = now.getMinutes().toString().padStart(2, '0');
        
        document.getElementById('live-datetime').textContent = `${datePart}, ${hours}:${minutes} LOCAL`;
    }

    updateClock();
    setInterval(updateClock, 1000);

    // --- 2. Live Search for Ticket Modules ---
    const searchInput = document.getElementById('module-search');
    const searchCards = document.querySelectorAll('.ticket'); 

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            searchCards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                if (cardText.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

});
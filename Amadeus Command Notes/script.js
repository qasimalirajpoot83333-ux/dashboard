// The MASTER Data Array
const amadeusData = [
    {
        category: "PNR Elements",
        id: "pnr-elements",
        items: [
            { action: "NAME", command: "NM1" },
            { action: "SEAT/BOOKING/ITINERARY/SEGMENT SELL", command: "SS1T1" },
            { action: "CONTACT ELEMENT", command: "AP" },
            { action: "TICKETING ARRANGMENT", command: "TKOK" },
            { action: "RECEIVED FROM SD IS YOUR NAME INITIALS", command: "RFSD;ER" }
        ]
    },
    {
        category: "Show Availability",
        id: "show-availability",
        items: [
            { action: "Show Availability Help", command: "HE AN" },
            { action: "Check Availability for a Specific Airline", command: "AN01MARKHIJED/ASV" },
            { action: "Check Dual City Availability", command: "AN12MARKHILHR/AQR*15APRMANKHI/AQR" },
            { action: "Check Round Trip in One Display", command: "AN12APRKHIBKK/ATG*22APR" },
            { action: "Check Availability by Cabin Class", command: "AN01MARKHIJED/ASV/KC (KW,KY)" },
            { action: "Check Availability for Scheduled Flight Date Only", command: "AN/10JANKHILYP/APK" },
            { action: "Check Return Flight After X Days", command: "ACR20" },
            { action: "Check Return Flight on a Specific Date", command: "ACR15SEP" },
            { action: "Direct Access (EK, GF, WY, ΤΚ)", command: "1EKAD25JUNKHILHR" },
            { action: "Check Return Flight 45 Days After Outbound", command: "ACR45" },
            { action: "Move to Next Date", command: "MN" },
            { action: "Move to Previous Date", command: "MY" }
        ]
    },
    {
        category: "Name Elements",
        id: "name-elements",
        items: [
            { action: "Name Elements Help", command: "HE NM" },
            { action: "Single Adult Passenger Name (General)", command: "NM1HUSSAIN/ALI MR" },
            { action: "Adult Passenger (ADT Procedure)", command: "NM1REHMAN/BAZIL MR", description: "Adds one standard adult passenger." },
            { action: "Child Name with DOB (General)", command: "NM1HUSSAIN/NASEER MSTR(CHD/01JAN03)" },
            { action: "Child Passenger (CHD Procedure)", command: "NM1REHMAN/MUNEEB MSTR(CHD/27APR17)", description: "Adds a child passenger with Date of Birth." },
            { action: "Infant with DOB (General)", command: "NM1KHAN/AISHA MRS (INFAHMED/NABIL/10JAN" },
            { action: "Infant Passenger (INF Procedure)", command: "NM1BAZIL/AYESHA MRS(INFBIN BAZIL/SHAZIL/10JAN25)", description: "Adds an adult passenger with an infant attached, including the infant's Date of Birth." },
            { action: "Remove Infant from passenger 4", command: "4/ (Type Enter)" },
            { action: "Add Infant to passenger 5", command: "5/(INFKHAN/ALI/12DEC22)" }
        ]
    },
    {
        category: "Segment Sell",
        id: "segment-sell",
        items: [
            { action: "Segment Sell Help", command: "HE SS" },
            { action: "Sell 2 seats in V-cls on line 4 of Availability", command: "SS2V4" },
            { action: "Sell 2 seats in J-cls leg 1 and F-cls leg 2 of line 3", command: "SS2JF3" },
            { action: "Long sell", command: "SSSV001B15MARKHIMED1" },
            { action: "Surface Segment", command: "SIARNK" },
            { action: "Wait list", command: "SS1L1/PE" }
        ]
    },
    {
        category: "Contact & SSRs",
        id: "contact",
        items: [
            { action: "Contact Help", command: "HE AP" },
            { action: "MOBILE Number Field", command: "APM-092 4667579" },
            { action: "MOBILE FOR SERENE & PIA", command: "APM+923212121321" },
            { action: "Enter your office name & number", command: "AP (Type Enter)" },
            { action: "E-mail Address Field", command: "APE-abc@abc.com" },
            { action: "Phone in SSR (General)", command: "SRCTCM-92325253252/P1" },
            { action: "Add Mobile Number via SSR (Procedure)", command: "SRCTCM-923016229745", description: "Special Service Request (SSR) to attach a contact mobile number directly to the airline." },
            { action: "Email in SSR (General)", command: "SRCTCE-ABC//GMAIL.COM/P1" },
            { action: "Add Email Address via SSR (Procedure)", command: "SRCTCE-REHMANBAZIL5//GMAIL.COM", description: "SSR for contact email (CTCE). Note the double slash '//' replaces the '@' symbol." },
            { action: "Add Passport / DOCS", command: "SRDOCSPKHK1-P-PK-AB1234561-PK-27APR01-M-27JUN35-REHMAN/BAZIL MR", description: "Adds APIS/Passport details: Format is SSR DOCS [Airline] [Status] - [Doc Type] - [Issue Country] - [Doc Number] - [Nationality] - [DOB] - [Gender] - [Expiry] - [Name]." }
        ]
    },
    {
        category: "Ticket Arrangement",
        id: "ticket-arrangement",
        items: [
            { action: "Ticket Arrangement Help", command: "HE TK" },
            { action: "No Time limit", command: "TKOK" },
            { action: "Specific Time Limit with Date and Time", command: "TKTL12MAR/1200" },
            { action: "Auto Cancellation on Specific Date and Time", command: "TKXL12MAR/1200" },
            { action: "Received from", command: "RFAG" },
            { action: "End the File and close the PNR", command: "ET" },
            { action: "End the File and Redisplay PNR", command: "ER" }
        ]
    },
    {
        category: "Retrieve PNR & Frequent Flyer",
        id: "retrieve-pnr",
        items: [
            { action: "Retrieve PNR Help", command: "HE RT" },
            { action: "Retrieve PNR by Record Locator", command: "RTXXXXXX" },
            { action: "Retrieve By Name", command: "RT/AHMED" },
            { action: "Retrieve By Alphabet", command: "RT/A" },
            { action: "Retrieve PNR on line 4 of the List", command: "RT4" },
            { action: "Frequent Flyer Number Help", command: "HE FFN" },
            { action: "Enter Frequent Flyer Number Automated", command: "FFNSV-1111111111" },
            { action: "Manual Entry for Frequent Flyer (SV)", command: "SRFQTVSV-SV1111111111" },
            { action: "Manual Entry for Frequent Flyer (EK)", command: "SRFQTSEK-EK1111111111" }
        ]
    },
    {
        category: "Seat Map, OSI & Services Required",
        id: "seat-map",
        items: [
            { action: "Seat Map Help", command: "HE SM" },
            { action: "Display Seat Map for all Segments", command: "SM" },
            { action: "Display Seat Map for Segment Number 3", command: "SM3" },
            { action: "Information for specific carrier", command: "OS SV PAX OK TO BOARD" },
            { action: "Information for All carriers", command: "OS YY PAX IS VIP" },
            { action: "Check in Remarks", command: "SRCKINYY-PAX OK TO BOARD" },
            { action: "Specific Meal request for All Carriers and Segments", command: "SR VGML" },
            { action: "Meal codes", command: "HE MEAL (MS22 TO DISPLAY ALL CODES)" }
        ]
    },
    {
        category: "Cancellation, Split PNR & History",
        id: "cancellation",
        items: [
            { action: "Cancellation Help", command: "HEXI" },
            { action: "Specific Segment cancel", command: "XE4" },
            { action: "Multiple Segments cancel", command: "XE2,5 & XE2-4" },
            { action: "Cancel Itinerary", command: "XI" },
            { action: "Delete unwanted segment", command: "DL2" },
            { action: "Delete/confirm unwanted multiple segments (HX,UN, NO,TK)", command: "RFS;ERK" },
            { action: "Split passenger # 3", command: "SP3" },
            { action: "Received from", command: "RF AG" },
            { action: "File Split PNR", command: "EF" },
            { action: "REPRINT TOTAL TRAVEL RECORD", command: "TTR" },
            { action: "Retrieve History for TICKETS AND EMDS", command: "RHFA" }
        ]
    },
    {
        category: "FOID, Passport & Email Itinerary",
        id: "foid",
        items: [
            { action: "FOID FOR NIC", command: "SRFOID-N14252552525255/P1" },
            { action: "FOID FOR PASSPORT", command: "SRFOID-PPVG526525" },
            { action: "Command to get PDF on Email", command: "RMZ/CONF*FORMAT:PDF" },
            { action: "FOR DETAILS WITH TICKET", command: "IEP-EML-ABC@GMAIL.COM" },
            { action: "FOR JOINT ITINERARY", command: "IEPJ-EML-ABC@GMAIL.COM" },
            { action: "FOR DETAILS WITH PRICE", command: "ITR-EML-ABC@GMAIL.COM" }
        ]
    },
    {
        category: "Master Pricer & Pricing",
        id: "master-pricer",
        items: [
            { action: "ONE WAY", command: "FXDKHI/D25DECDXB" },
            { action: "RETURN", command: "FXDISB/D25MARDXB/D30APRISB" },
            { action: "FOR 4 PASSENGERS", command: "FXD4ISB/D25MARDXB/D30APRISB" },
            { action: "BUSINESS CLASS", command: "FXDISB/D25MARLHR/D30APRISB//KC" },
            { action: "FOR ONE ADT AND CHD", command: "FXD2ISB/D25MARLHR/D30APRISB//PAX/1/RCH" },
            { action: "MULTI DEPARTURES/ARRIVALS", command: "FXDKHI, LHE, ISB/D25JANBKK/D10FEBKHI,LHE, ISB" },
            { action: "MULTI AIRLINES", command: "FXDISB/D25MARDXB/D30APRISB//AEK, QR, EY" },
            { action: "BEAT THE PRICE MENTIONED", command: "FXDISB/D25MARLHR/D30APRISB//KC/PB250000" },
            { action: "BEST PRICER", command: "FXR" },
            { action: "PRICE IN SAME CLASS", command: "FXX" },
            { action: "Price with Specific Corporate/Discount", command: "FXX/A-QYflr" },
            { action: "TO CHECK LOWEST AVAILABLE/SOLD OUT FARE", command: "FXL" },
            { action: "TO PRICE BOOKED CLASSES", command: "FXP" },
            { action: "TO PRICE BEST AVAILABLE FARE OR COMBINATION", command: "FXB" },
            { action: "UMRAH FARE FOR ADULT", command: "FXP/RPLM" },
            { action: "MARKET NEGOTIATED FARES", command: "FXP/R,U" },
            { action: "Price TST and re-enter basic fare", command: "TTK/IUSD500.00" },
            { action: "Add tour code *Mandatory", command: "FT*abcgr" },
            { action: "COMMISSION", command: "FM O or FM 5" },
            { action: "FORM OF PAYMENT", command: "FP AGT OR FP AGT ABC TRAVEL (REFERENCE)" }
        ]
    },
    {
        category: "Ticket Issuance, Void & Reissuance",
        id: "ticket-issuance",
        items: [
            { action: "TICKET ISSUANCE", command: "TTP/RT" },
            { action: "ISSUE WITH PASSENGER SELECTION", command: "TTP/P1-5/RT" },
            { action: "ISSUE WITH TST SELECTION", command: "TTP/T1/RT" },
            { action: "TICKET VOID (FA OR TICKET LINE NUMBER)", command: "TRDC/L11" },
            { action: "TICKET VOID (LAST 10 DIGITS OF TICKET)", command: "TRDC/TK-1234567890" },
            { action: "AUTO REISSUANCE for specific segments", command: "FXQ/S2-5" },
            { action: "BEST FARE/COMBINATION FOR REISSAUNCE", command: "FXO" },
            { action: "OLD FOP IF REQUIRED OTHERWISE NO NEED", command: "FPO/AGT+/AGT" },
            { action: "REISSUANCE WITH TST NUMBER", command: "TTP/T2/RT" },
            { action: "COMBINE REISSANCE WITH EMD", command: "TTP/T2/TTM/M1/RT" }
        ]
    },
    {
        category: "Refunds",
        id: "refunds",
        items: [
            { action: "FULL REFUND (Ticket Number)", command: "TRF157-5259725100" },
            { action: "TO CHARGE PENALTY", command: "TRFU/CP5000A" },
            { action: "PROCESS REFUND", command: "TRFP" },
            { action: "EMD REFUND (Ticket Number)", command: "TRF065-5252525252/EMD" },
            { action: "REPRINT REFUND COUPON", command: "TRF065-3262323322 (Enter)" },
            { action: "Select from display (It will display Refund record)", command: "TRF/i-1" },
            { action: "TO ENTER USED FARE", command: "TRFU/U35000" },
            { action: "TO VIEW TAXES", command: "TRFT" },
            { action: "TO DELETE TAX 1", command: "TRFU/TX1" },
            { action: "TO UPDATE TAX AMOUNT", command: "TRFU/TU2-2500" },
            { action: "TO RETURN AND CHECK AND VERIFY TOTAL REFUND AMOUNT", command: "TRF" }
        ]
    },
    {
        category: "EMD, Tax Exempt & FOP",
        id: "emd-tax",
        items: [
            { action: "TO CHECK LIST OF EMD CODES (EK IS AIRLINE CODE)", command: "EGSD/VEK" },
            { action: "EMD CREATION", command: "JUEKNN1DEPOKHIJED/50CT/P1" },
            { action: "AIRLINE CODE MAY CHANGE AS REQUIRED", command: "TMC/VEK" },
            { action: "Enter EMD values and form of payment", command: "TMI/CV-50000/FPKR50000/DEK/AKHI/FP-AGT" },
            { action: "50 PERC DEPOSIT FOR GROUP", command: "TMI/FE-50 PERC DEPOSIT FOR GROUP" },
            { action: "ISSUE EMD", command: "TTM/RT" },
            { action: "TO CHECK EMD STORED PRICE", command: "TQM" },
            { action: "DISPLAY EMD THROUGH LINE NUMBER", command: "EWD/L7" },
            { action: "OPEN THROUGH EMD NUMBER", command: "EWD/EMD157-8285889252" },
            { action: "PRINT DIRECTLY THROUGH PNR", command: "EMR" },
            { action: "Apply Tax Exemption", command: "TTK/R,ET-RG-SP-YD" },
            { action: "DISPLAY TST", command: "TQT" },
            { action: "DELETE TST", command: "TTE/ALL" },
            { action: "IATA EPAY FOP", command: "FP CCEP161131754136578/0921" },
            { action: "CREDIT CARD FOP", command: "FPCCCA25252525252525/0924" }
        ]
    },
    {
        category: "Procedures & Workflows (Multi-Step Processes)",
        id: "procedures",
        items: [
            { 
                action: "Check Reissue Charges", 
                command: "RT\nAN----\nFXQ/S1\nMD", 
                description: "1. RT (Retrieve PNR)<br>2. AN (Check availability for segment)<br>3. FXQ/S[Line No.] (Quote reissue for specific segment)<br>4. MD (Move down to check breakdown/charges)." 
            },
            { 
                action: "Add Ancillary (Baggage/Seats) & Issue EMD", 
                command: "RT123ABC\nFXK\nFWK01\nTQM\nRFBZ\nER\nIR\nERK\nTTM/RT", 
                description: "1. RT (Retrieve PNR)<br>2. FXK (Check/Price Ancillary)<br>3. FWK01 (Book specific ancillary option)<br>4. TQM (Display EMD stored price)<br>5. RF/ER/IR (Sign off and save)<br>6. ERK (End and retrieve)<br>7. TTM/RT (Issue EMD and retrieve)." 
            },
            { 
                action: "Queue PNR to Specific Office", 
                command: "ESLHEPK3200-B\nRFBZ\nER\nIR", 
                description: "1. ES (Extended Security/Queue to specific Office ID like LHEPK3200)<br>2. RF (Receive from initials)<br>3. ER (End and retrieve)<br>4. IR (Ignore and retrieve to refresh)." 
            },
            { 
                action: "Send PDF Itinerary via Email", 
                command: "RMZ/CONF*FORMAT:PDF\nRFBZ\nER\nIR\nIEP-EML-REHMANBAZIL5@GMAIL.COM", 
                description: "1. RMZ (Add remark to format as PDF)<br>2. RF/ER/IR (Save changes to PNR)<br>3. IEP-EML (Send Electronic Itinerary to the specified email)." 
            },
            { 
                action: "Save New Fare & Upsell Baggage", 
                command: "FXA\nFXB\nFXP\nFXY\nFXU1\nRFBZ\nER\nIR", 
                description: "1. FXA (Check if fare is same)<br>2. FXB (Save lowest available fare)<br>3. FXP (Save specific fare)<br>4. FXY then FXU[line no.] (Upsell baggage)<br>5. RF/ER/IR (Save changes)." 
            },
            { 
                action: "Standard Ticket Issuance", 
                command: "RFPNR\nFM0\nTTP/RT", 
                description: "1. RFPNR (Receive from PNR)<br>2. FM0 (Set commission to 0)<br>3. TTP/RT (Issue ticket and retrieve PNR)." 
            },
            { 
                action: "Issue EMD and Ticket Simultaneously", 
                command: "TTP/TTM/RT", 
                description: "Issues both the electronic ticket (TTP) and the Electronic Miscellaneous Document (TTM) in one command, then retrieves (RT)." 
            }
        ]
    }
];

// DOM Elements
const container = document.getElementById('contentContainer');
const themeToggle = document.getElementById('themeToggle');
const sidebarNav = document.getElementById('sidebarNav');

// Theme Toggle Logic
themeToggle.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙 Dark';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️ Light';
    }
});

// Copy to Clipboard Logic
function copyToClipboard(text, buttonElement) {
    const cleanText = text.replace(/<\/?[^>]+(>|$)/g, "\n").trim();
    navigator.clipboard.writeText(cleanText).then(() => {
        buttonElement.textContent = '✅';
        setTimeout(() => {
            buttonElement.textContent = '📋';
        }, 2000);
    });
}

// Syntax Highlighter Engine
function applySyntaxHighlighting(commandStr) {
    let highlighted = commandStr;
    
    // Highlight Dates (e.g., 25DEC, 10JAN25) -> Green
    highlighted = highlighted.replace(/(\b\d{1,2}[A-Z]{3}(?:\d{2,4})?\b)/g, '<span class="syn-date">$1</span>');
    
    // Highlight Action Codes at the start of a line -> Blue
    highlighted = highlighted.replace(/^([A-Z]{2,3}[0-9]?)(?=[A-Z0-9\/\- ]|$)/gm, '<span class="syn-action">$1</span>');
    
    // Highlight typical 3-letter Airport Codes bounded by slashes/start/end -> Red
    highlighted = highlighted.replace(/(?<=\/|^|D|A)([A-Z]{3})(?=\/|$|D|A)/g, '<span class="syn-airport">$1</span>');

    return highlighted;
}

// Render Function
function renderApp(dataToRender) {
    container.innerHTML = '';
    sidebarNav.innerHTML = '';

    dataToRender.forEach(categoryObj => {
        // --- Sidebar ---
        const navLink = document.createElement('a');
        navLink.href = `#${categoryObj.id}`;
        navLink.textContent = categoryObj.category.split(' (')[0];
        sidebarNav.appendChild(navLink);

        if (categoryObj.id === "procedures") {
            categoryObj.items.forEach((item, index) => {
                const subLink = document.createElement('a');
                subLink.href = `#${categoryObj.id}-item-${index}`;
                subLink.textContent = item.action;
                subLink.className = 'sub-link';
                sidebarNav.appendChild(subLink);
            });
        }

        // --- Main Section ---
        const section = document.createElement('div');
        section.className = 'category-section';
        section.id = categoryObj.id;

        // Accordion Title
        const title = document.createElement('h2');
        title.className = 'category-title';
        title.textContent = `✈️ ${categoryObj.category}`;
        title.addEventListener('click', () => {
            section.classList.toggle('collapsed');
        });
        section.appendChild(title);

        // Wrapper to hold tickets (makes collapsing easy)
        const ticketWrapper = document.createElement('div');
        ticketWrapper.className = 'ticket-wrapper';

        // Insert Interactive Builder specifically for Master Pricer
        if (categoryObj.id === "master-pricer") {
            const builderHTML = `
                <div class="interactive-builder">
                    <h4>🛠️ Interactive Master Pricer Builder</h4>
                    <div class="builder-inputs">
                        <input type="text" id="b-origin" placeholder="Origin (e.g. LHE)" maxlength="3" />
                        <input type="text" id="b-date" placeholder="Date (e.g. 15AUG)" maxlength="5" />
                        <input type="text" id="b-dest" placeholder="Dest (e.g. JFK)" maxlength="3" />
                    </div>
                    <div class="builder-result-box">
                        <code id="b-output">FXD<span class="syn-airport">LHE</span>/D<span class="syn-date">15AUG</span><span class="syn-airport">JFK</span></code>
                        <button class="copy-btn" id="b-copy">📋 Copy Builder Result</button>
                    </div>
                </div>
            `;
            ticketWrapper.insertAdjacentHTML('beforeend', builderHTML);
        }

        // Generate Tickets
        categoryObj.items.forEach((item, index) => {
            const ticket = document.createElement('div');
            ticket.className = 'ticket';
            if (categoryObj.id === "procedures") ticket.id = `${categoryObj.id}-item-${index}`;
            
            let highlightedCmd = applySyntaxHighlighting(item.command);
            const formattedCommand = highlightedCmd.split('\n').map(cmd => `<code>${cmd.trim()}</code>`).join('<br>');
            const formattedAction = item.action.split('\n').join('<br>');
            const explanationHtml = item.description ? `<div class="explanation">${item.description}</div>` : '';

            ticket.innerHTML = `
                <div class="ticket-action">
                    <span class="label">Action / Procedure</span>
                    <div class="value">${formattedAction}</div>
                    ${explanationHtml}
                </div>
                <div class="ticket-command">
                    <button class="copy-btn" title="Copy Command">📋</button>
                    <span class="label">Amadeus Command</span>
                    <div class="value">${formattedCommand}</div>
                </div>
            `;

            const copyBtn = ticket.querySelector('.copy-btn');
            copyBtn.addEventListener('click', () => copyToClipboard(item.command, copyBtn));
            ticketWrapper.appendChild(ticket);
        });

        section.appendChild(ticketWrapper);
        container.appendChild(section);
    });

    // Attach Event Listeners for the Master Pricer Builder
    const bOrigin = document.getElementById('b-origin');
    const bDate = document.getElementById('b-date');
    const bDest = document.getElementById('b-dest');
    const bOutput = document.getElementById('b-output');
    const bCopy = document.getElementById('b-copy');

    if (bOrigin && bDate && bDest && bOutput && bCopy) {
        const updateBuilder = () => {
            const ori = bOrigin.value.toUpperCase() || 'LHE';
            const dat = bDate.value.toUpperCase() || '15AUG';
            const des = bDest.value.toUpperCase() || 'JFK';
            
            const rawString = `FXD${ori}/D${dat}${des}`;
            bOutput.innerHTML = applySyntaxHighlighting(rawString);
        };

        bOrigin.addEventListener('input', updateBuilder);
        bDate.addEventListener('input', updateBuilder);
        bDest.addEventListener('input', updateBuilder);

        bCopy.addEventListener('click', () => {
            const ori = bOrigin.value.toUpperCase() || 'LHE';
            const dat = bDate.value.toUpperCase() || '15AUG';
            const des = bDest.value.toUpperCase() || 'JFK';
            const rawString = `FXD${ori}/D${dat}${des}`;
            copyToClipboard(rawString, bCopy);
        });
    }
}

// Initialize App
renderApp(amadeusData);
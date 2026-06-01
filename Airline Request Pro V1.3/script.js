// AUTO AIRLINE EMAIL
const airlineEmails = {
    "Qatar Airways": "qrreservations@qatarairways.com",
    "Fly Jinnah": "trade@flyjinnah.com",
    "Pakistan International Airlines (PIA)": "CONTACT@piac.aero, lheurpk@piac.aero, ahafeez.butt@piac.aero",
    "Emirates": "support@emirates.com",
    "Turkish Airlines": "customer@thy.com",
    "Etihad Airways": "contactcentre@etihad.ae",
    "AirSial": "spolhe@airsial.com, faisal.karim@airsial.com",
    "Airblue": "sales.lhe@airblue.com"
};

// Set initial email on page load
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("email").value = airlineEmails["Pakistan International Airlines (PIA)"];
});

function toggleCustomAirline() {
    let airline = document.getElementById("airline").value;
    document.getElementById("customAirline").style.display = airline === "custom" ? "block" : "none";
}

document.getElementById("airline").addEventListener("change", function () {
    let selected = this.value;
    if (airlineEmails[selected]) {
        document.getElementById("email").value = airlineEmails[selected];
    } else {
        document.getElementById("email").value = "";
    }
});

// GENERATE EMAIL 
async function generateEmail() {
    // Helper to auto-capitalize
    const capitalizeWords = (str) => {
        return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
    };

    let type = document.getElementById("requestType").value;
    let airline = document.getElementById("airline").value;
    let custom = document.getElementById("customAirline").value;
    if (airline === "custom") airline = custom;

    let pnr = document.getElementById("pnr").value.toUpperCase().trim();
    let wrong = capitalizeWords(document.getElementById("wrong").value.trim());
    let correct = capitalizeWords(document.getElementById("correct").value.trim());
    let flight = document.getElementById("flight").value.toUpperCase().trim();
    let rawDate = document.getElementById("date").value;
    let serial = document.getElementById("serial").value.trim();
    let name = capitalizeWords(document.getElementById("yourName").value.trim());
    
    let errorMsg = document.getElementById("error-msg");
    let successMsg = document.getElementById("success-msg");

    if (!pnr || !wrong || !correct || !flight || !rawDate || !serial || !name) {
        errorMsg.style.display = "block";
        successMsg.style.display = "none";
        return;
    }
    errorMsg.style.display = "none"; 

    // Format Date nicely
    const dateObj = new Date(rawDate);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = `${String(dateObj.getDate()).padStart(2, '0')} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

    let subject = `${type === 'name' ? 'NAME' : 'TITLE'} CORRECTION REQUEST for ${airline} PNR- ${pnr}`;
    let typeLabel = type === 'name' ? 'Name' : 'Title';
    let attachmentNote = type === 'name' ? 'Passport' : 'CNIC';

    // Ticket-Style HTML Body (Light Blue Gradient & Transparent Logo)
    let bodyHTML = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f1f5f9; padding: 20px; text-align: center;">
        
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); text-align: left;">
            
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: #38bdf8; background: linear-gradient(180deg, #7dd3fc 0%, #0ea5e9 100%); width: 100%; border-bottom: 3px solid #0284c7; border-collapse: collapse;">
                <tr>
                    <td style="padding: 25px 30px; text-align: center; vertical-align: middle;">
                        <img src="https://cdn.bookmepk.com/static/custom/V3/images/New-Logo---Bookme.png" alt="Bookme" width="160" style="display: inline-block; margin-bottom: 15px;">
                        <h2 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">${typeLabel} Correction Request</h2>
                        <p style="margin: 8px 0 0 0; color: #f0f9ff; font-size: 14px; font-weight: 500;">Airline: ${airline}</p>
                    </td>
                </tr>
            </table>

            <div style="padding: 25px 30px 10px 30px;">
                <p style="margin: 0 0 15px 0; font-size: 16px; color: #334155;">Dear Team,</p>
                <p style="margin: 0; font-size: 15px; color: #475569; line-height: 1.6;">Please process a <b>${typeLabel.toLowerCase()} correction</b> for the passenger details below. We kindly request this to be updated as soon as possible.</p>
            </div>

            <div style="padding: 0 30px;">
                <div style="background-color: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 8px; padding: 20px; margin: 15px 0;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 600;">Booking Ref (PNR)</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 16px; font-weight: bold; text-align: right; letter-spacing: 1px;">${pnr}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 600;">Flight & Date</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px; font-weight: bold; text-align: right;">${flight} | ${formattedDate}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 600;">Serial No.</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px; font-weight: bold; text-align: right;">${serial}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #dc2626; font-size: 12px; text-transform: uppercase; font-weight: 600;">❌ Incorrect ${typeLabel}</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #dc2626; font-size: 15px; font-weight: bold; text-align: right; text-decoration: line-through;">${wrong}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; color: #16a34a; font-size: 12px; text-transform: uppercase; font-weight: 600;">✅ Correct ${typeLabel}</td>
                            <td style="padding: 12px 0; color: #16a34a; font-size: 15px; font-weight: bold; text-align: right;">${correct}</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div style="padding: 5px 30px 20px 30px;">
                <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 0 8px 8px 0; color: #1e40af; font-size: 14px; font-weight: 500;">
                    <span style="font-size: 18px; vertical-align: middle; margin-right: 8px;">📎</span> 
                    <b>${attachmentNote} attached for reference.</b> Kindly process urgently.
                </div>
            </div>

            <div style="background-color: #f8fafc; padding: 20px 30px; border-top: 1px solid #e2e8f0; font-size: 14px; color: #475569;">
                <p style="margin: 0 0 10px 0;">If you need any further details, please let us know.</p>
                <p style="margin: 0;">Regards,<br><b style="color: #0f172a; font-size: 15px;">${name}</b><br>Ticketing Support | Bookme</p>
            </div>

        </div>
    </div>`;

    document.getElementById("subject").value = subject;
    
    let bodyElement = document.getElementById("body");
    bodyElement.innerHTML = bodyHTML;
    bodyElement.setAttribute("data-copy-html", bodyHTML);

    try {
        const typeHtml = new Blob([bodyHTML], { type: "text/html" });
        const typeText = new Blob([bodyHTML.replace(/<[^>]+>/g, '\n')], { type: "text/plain" }); 
        
        const clipboardData = new ClipboardItem({
            "text/html": typeHtml,
            "text/plain": typeText
        });

        await navigator.clipboard.write([clipboardData]);

        successMsg.style.display = "block";
        setTimeout(() => { successMsg.style.display = "none"; }, 6000);
    } catch (err) {
        console.error("Failed to auto-copy text: ", err);
    }
}

// MANUAL COPY FUNCTION
async function copyText(id, button) {
    let element = document.getElementById(id);
    let isHtml = id === 'body';
    
    try {
        let clipboardData;
        if (isHtml) {
            let htmlStr = element.getAttribute("data-copy-html") || element.innerHTML;
            const typeHtml = new Blob([htmlStr], { type: "text/html" });
            const typeText = new Blob([htmlStr.replace(/<[^>]+>/g, '\n')], { type: "text/plain" });
            clipboardData = new ClipboardItem({ "text/html": typeHtml, "text/plain": typeText });
        } else {
            const typeText = new Blob([element.value], { type: "text/plain" });
            clipboardData = new ClipboardItem({ "text/plain": typeText });
        }

        await navigator.clipboard.write([clipboardData]);

        let originalText = button.innerText;
        button.innerText = "Copied! ✔";
        button.style.background = "#22c55e"; 
        
        setTimeout(() => {
            button.innerText = originalText;
            button.style.background = "var(--border)"; 
        }, 2000);
    } catch (err) {
        console.error("Failed to copy text: ", err);
        // Fallback for older browsers
        if (!isHtml) {
            element.select();
            document.execCommand("copy");
        }
    }
}

// SEND EMAIL 
function sendEmail() {
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();

    if (!email || !subject) {
        alert("Please generate the email first before sending!");
        return;
    }

    let gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
    window.open(gmailLink, '_blank');
}

// CLEAR FORM
function clearAll() {
    document.querySelectorAll("input, textarea").forEach(el => el.value = "");
    document.getElementById("body").innerHTML = "Generated email will appear here...";
    document.getElementById("error-msg").style.display = "none";
    document.getElementById("success-msg").style.display = "none";
    document.getElementById("requestType").selectedIndex = 0;
    document.getElementById("airline").selectedIndex = 0;
    document.getElementById("email").value = airlineEmails["Pakistan International Airlines (PIA)"];
    toggleCustomAirline();
}
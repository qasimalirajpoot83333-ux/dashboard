// --- THEME TOGGLE ---
function toggleTheme() {
  const htmlTag = document.documentElement;
  const toggleBtn = document.querySelector('.theme-toggle');
  
  if (htmlTag.getAttribute('data-theme') === 'dark') {
    htmlTag.setAttribute('data-theme', 'light');
    toggleBtn.innerHTML = '🌙 Dark Mode';
  } else {
    htmlTag.setAttribute('data-theme', 'dark');
    toggleBtn.innerHTML = '☀️ Light Mode';
  }
}

// --- GENERATE EMAIL ---
function generateEmail() {
  // Helper function to capitalize the first letter of every word
  const capitalizeWords = (str) => {
    return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  };

  // 1. Gather Inputs
  const paxName = capitalizeWords(document.getElementById("paxName").value.trim());
  const pnr = document.getElementById("pnr").value.toUpperCase().trim();
  const route = document.getElementById("route").value.toUpperCase().trim();
  const flightDate = document.getElementById("flightDate").value;
  const flightTime = document.getElementById("flightTime").value;
  const agentName = capitalizeWords(document.getElementById("agentName").value.trim());

  // 2. Validate
  if (!paxName || !pnr || !route || !flightDate || !flightTime || !agentName) {
    alert("Please fill out all the fields (including the calendar and clock) before generating the email.");
    return false;
  }

  // --- Combine Date and Time from the Calendar & Clock ---
  const dateObj = new Date(`${flightDate}T${flightTime}`);
  
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const dayName = days[dateObj.getDay()]; 
  const dayNum = String(dateObj.getDate()).padStart(2, '0');
  const monthName = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  
  let hours = dateObj.getHours();
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  const strHours = String(hours).padStart(2, '0');
  
  const formattedDeparture = `${dayName}, ${dayNum} ${monthName} ${year} - ${strHours}:${minutes} ${ampm}`;

  // 3. Construct Subject
  const subject = `Request for Full Refund Due to Flight Cancellation – PNR ${pnr}`;
  
  // 4. Construct Body (Ticket-Style Layout for Cancellation)
  const bodyHTML = `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f1f5f9; padding: 20px; text-align: center;">
    
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; border: 1px solid #cbd5e1; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); text-align: left;">
        
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #dc2626; width: 100%; min-width: 100%; border-collapse: collapse;">
            <tr>
                <td width="60%" style="padding: 30px; text-align: left; vertical-align: middle;">
                    <div style="display: inline-block; background-color: #ffffff; color: #dc2626; width: 40px; height: 40px; line-height: 40px; text-align: center; border-radius: 50%; font-size: 22px; margin-bottom: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        ✈️
                    </div>
                    <p style="margin: 0; color: #fca5a5; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">Refund Request</p>
                    <h2 style="margin: 5px 0 0 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">Fly Jinnah</h2>
                </td>
                <td width="40%" style="padding: 30px; text-align: right; vertical-align: middle;">
                    <div style="display: inline-block; background-color: #ffffff; color: #dc2626; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: bold; letter-spacing: 1px;">
                        CANCELLED
                    </div>
                    <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 14px; opacity: 0.9;">PNR: <b style="letter-spacing: 1px;">${pnr}</b></p>
                </td>
            </tr>
        </table>

        <div style="background-color: #fef2f2; border-bottom: 1px solid #fecaca; padding: 12px 30px; color: #991b1b; font-size: 13px; font-weight: 600; text-align: center;">
            <span style="font-size: 16px; vertical-align: middle; margin-right: 8px;">📎</span> Screenshot of cancelled flight status attached.
        </div>

        <div style="padding: 25px 30px 10px 30px;">
            <p style="margin: 0 0 15px 0; font-size: 16px; color: #334155;">Dear Team,</p>
            <p style="margin: 0; font-size: 15px; color: #475569; line-height: 1.6;">Please note that the below-mentioned flight has been cancelled from the airline side. We kindly request you to process a full refund into the agency account.</p>
        </div>

        <div style="padding: 0 30px;">
            <div style="background-color: #ffffff; border: 2px dashed #cbd5e1; border-radius: 8px; padding: 20px; margin: 15px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Passenger</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 16px; font-weight: bold; text-align: right;">${paxName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Booking Ref (PNR)</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #dc2626; font-size: 16px; font-weight: bold; text-align: right; letter-spacing: 1px;">${pnr}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Route</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 15px; font-weight: bold; text-align: right;">${route}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Departure</td>
                        <td style="padding: 12px 0; color: #0f172a; font-size: 14px; font-weight: bold; text-align: right;">${formattedDeparture}</td>
                    </tr>
                </table>
            </div>
        </div>

        <div style="background-color: #f8fafc; padding: 20px 30px; border-top: 1px solid #e2e8f0; font-size: 14px; color: #475569;">
            <p style="margin: 0 0 10px 0;">Your prompt assistance will be highly appreciated.</p>
            <p style="margin: 0;">Regards,<br><b style="color: #0f172a; font-size: 15px;">${agentName}</b><br>Ticketing Support | Bookme</p>
        </div>

    </div>
  </div>`;

  // 5. Output to screen
  document.getElementById("subject").value = subject;
  
  const bodyDiv = document.getElementById("body");
  bodyDiv.innerHTML = bodyHTML;
  bodyDiv.setAttribute("data-copy-html", bodyHTML);

  // 6. Auto-Copy to Clipboard
  setTimeout(() => {
    copyRichTextToClipboard();
  }, 100);

  return true;
}
// --- BULLETPROOF RICH TEXT COPY ---
function copyRichTextToClipboard() {
  const element = document.getElementById("body");
  const htmlString = element.getAttribute("data-copy-html");
  
  // Create an invisible box to copy from
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  tempDiv.style.position = "absolute";
  tempDiv.style.left = "-9999px"; 
  document.body.appendChild(tempDiv);
  
  // Select and copy
  const range = document.createRange();
  range.selectNodeContents(tempDiv);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  
  document.execCommand("copy");
  
  // Clean up
  document.body.removeChild(tempDiv);
  selection.removeAllRanges(); 
  
  // Alert User
  alert("✅ Email body successfully copied to clipboard!\n\nYou can now click 'Open in Gmail' and paste (Ctrl+V) it into the body. Don't forget to attach your screenshot!");
}

// --- OPEN IN GMAIL ---
function openEmail() {
  // Ensure fields are generated first
  const subjectInput = document.getElementById("subject").value;
  if (!subjectInput) {
    if(!generateEmail()) return; 
  }

  const subject = document.getElementById("subject").value;
  
  // Specific emails requested by user
  const toEmails = "trade@flyjinnah.com";
  const ccEmails = "zamzam@bookme.pk";

  // Construct Gmail link
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(toEmails)}&cc=${encodeURIComponent(ccEmails)}&su=${encodeURIComponent(subject)}`;
  
  window.open(gmailLink, '_blank'); 
}
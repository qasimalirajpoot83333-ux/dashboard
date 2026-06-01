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

  // 1. Gather Inputs & Apply Formatting (Uppercase for PNR/Flights, Capitalized for Names/Routes)
  const pnr = document.getElementById("pnr").value.toUpperCase().trim();
  const cRoute = capitalizeWords(document.getElementById("correctRoute").value.trim());
  const cFlight = document.getElementById("correctFlight").value.toUpperCase().trim();
  const wRoute = capitalizeWords(document.getElementById("wrongRoute").value.trim());
  const wFlight = document.getElementById("wrongFlight").value.toUpperCase().trim();
  const agentName = capitalizeWords(document.getElementById("agentName").value.trim());

  // 2. Validate
  if (!pnr || !cRoute || !cFlight || !wRoute || !wFlight || !agentName) {
    alert("Please fill out all the fields before generating the email.");
    return false;
  }

  // 3. Construct Subject
  const subject = `API Issue: Extra Segment Removal - PNR ${pnr}`;
  
  // 4. Construct Body (Tabular and Professional)
  const bodyHTML = `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 650px; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; color: #334155; line-height: 1.6;">
    
    <div style="background-color: #1a73e8; color: #ffffff; padding: 16px 20px;">
        <h3 style="margin: 0; font-size: 18px; font-weight: 600; letter-spacing: 0.5px;">API Error: Extra Segment Removal Request</h3>
    </div>

    <div style="padding: 24px 20px;">
        <p style="margin-top: 0;">Dear Team,</p>
        
        <p>Our customer booked their ticket via the Bookme portal, but due to an API issue, an <b>extra segment was automatically added</b> under PNR: <b style="font-size: 16px; color: #1a73e8; letter-spacing: 1px;">${pnr}</b>.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 25px 0; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden;">
            <tr style="background-color: #f8fafc; border-bottom: 2px solid #cbd5e1;">
                <th style="padding: 12px 15px; text-align: left; color: #475569; font-size: 13px; text-transform: uppercase;">Status</th>
                <th style="padding: 12px 15px; text-align: left; color: #475569; font-size: 13px; text-transform: uppercase;">Route</th>
                <th style="padding: 12px 15px; text-align: left; color: #475569; font-size: 13px; text-transform: uppercase;">Flight No.</th>
            </tr>
            
            <tr style="border-bottom: 1px solid #e2e8f0; background-color: #f0fdf4;">
                <td style="padding: 14px 15px; color: #16a34a; font-weight: 600; font-size: 14px;">✅ Actual Itinerary</td>
                <td style="padding: 14px 15px; font-weight: 600; color: #0f172a;">${cRoute}</td>
                <td style="padding: 14px 15px; font-weight: 600; color: #0f172a;">${cFlight}</td>
            </tr>

            <tr style="background-color: #fef2f2;">
                <td style="padding: 14px 15px; color: #dc2626; font-weight: 600; font-size: 14px;">❌ Extra Segment (Remove)</td>
                <td style="padding: 14px 15px; font-weight: 500; color: #64748b; text-decoration: line-through;">${wRoute}</td>
                <td style="padding: 14px 15px; font-weight: 500; color: #64748b; text-decoration: line-through;">${wFlight}</td>
            </tr>
        </table>
        
        <p>Please remove the extra segment highlighted above and process the refund for the corresponding amount to our agency ID.</p>
        
        <br>
        <p style="margin: 0; font-size: 14px; color: #64748b;">Best regards,</p>
        <p style="margin: 4px 0 0 0; font-weight: bold; font-size: 15px; color: #0f172a;">${agentName}</p>
        <p style="margin: 2px 0 0 0; font-size: 13px; color: #1a73e8; font-weight: 500;">Ticketing Support | Bookme</p>
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
  alert("✅ Email body successfully copied to clipboard!\n\nYou can now click 'Open in Gmail' and paste (Ctrl+V) it into the body.");
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
  const toEmails = "SPOLHE@airsial.com,faisal.karim@airsial.com";
  const ccEmails = "zamzam@bookme.pk";

  // Construct Gmail link
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(toEmails)}&cc=${encodeURIComponent(ccEmails)}&su=${encodeURIComponent(subject)}`;
  
  window.open(gmailLink, '_blank'); 
}
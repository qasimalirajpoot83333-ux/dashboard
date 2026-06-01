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

// --- CLIPBOARD PASTE FUNCTION ---
async function pasteFromClipboard(targetId) {
  try {
    const text = await navigator.clipboard.readText();
    document.getElementById(targetId).value = text;
  } catch (err) {
    alert("Clipboard access denied or empty. Please allow permissions in your browser or paste manually using Ctrl+V.");
    console.error("Paste failed:", err);
  }
}

// --- AIRLINE CONFIGURATION (WITH LOGOS) ---
const airlinesConfig = {
  // Pakistani
  pia: { name: "Pakistan International Airlines", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pakistan_International_Airlines_Logo.svg/1280px-Pakistan_International_Airlines_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  airblue: { name: "Airblue", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Airblue_Logo.svg/3840px-Airblue_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", fields: ["Airline PNR", "Ticket Number"] },
  serene: { name: "SereneAir", logo: "https://crystalpng.com/wp-content/uploads/2025/10/serene-air-logo.png", fields: ["Airline PNR"] }, // Left empty for now
  airsial: { name: "AirSial", logo: "https://crystalpng.com/wp-content/uploads/2022/06/Airsial-logo-1.png", fields: ["Airline PNR"] },
  flyjinnah: { name: "Fly Jinnah", logo: "https://crystalpng.com/wp-content/uploads/2025/10/fly-jinnah-logo.png", fields: ["Airline PNR"] },

  // Middle East & Gulf
  emirates: { name: "Emirates", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/960px-Emirates_logo.svg.png", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  qatar: { name: "Qatar Airways", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Qatar_Airways_logo.svg/3840px-Qatar_Airways_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  etihad: { name: "Etihad Airways", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Etihad-airways-logo.svg/3840px-Etihad-airways-logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  saudia: { name: "Saudia", logo: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Saudia_logo_2023.png", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  flydubai: { name: "flydubai", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Fly_Dubai_logo_2010_03.svg/1280px-Fly_Dubai_logo_2010_03.svg.png", fields: ["Airline PNR"] },
  airarabia: { name: "Air Arabia", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Air_Arabia_Logo.svg/1280px-Air_Arabia_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", fields: ["Airline PNR"] },
  flyadeal: { name: "flyadeal", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flyadeal_Logo.svg/1280px-Flyadeal_Logo.svg.png", fields: ["Airline PNR"] },
  salamair: { name: "Salam Air", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Salam_Air_Logo.svg/3840px-Salam_Air_Logo.svg.png", fields: ["Airline PNR"] },
  flynas: { name: "flynas", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Flynas_Logo.svg/1280px-Flynas_Logo.svg.png", fields: ["Airline PNR"] },
  JazeeraAirways: { name: "Jazeera Airways", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jazeera_Airways_logo.svg/3840px-Jazeera_Airways_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", fields: ["Airline PNR"] },
  gulf: { name: "Gulf Air", logo: "https://logos-world.net/wp-content/uploads/2023/01/Gulf-Air-Logo-1983.png", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  oman: { name: "Oman Air", logo: "https://1000logos.net/wp-content/uploads/2020/04/Oman-Air-Logo.png", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  rj: { name: "Royal Jordanian", logo: "https://vectorseek.com/wp-content/uploads/2023/09/Royal-Jordanian-Airlines-Logo-Vector.svg-.png", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },

  // Asia Pacific (Left empty to show how it defaults nicely)
  srilankan: { name: "SriLankan Airlines", logo: "https://upload.wikimedia.org/wikipedia/de/thumb/7/7e/Sri_Lankan_Airlines_Logo.svg/500px-Sri_Lankan_Airlines_Logo.svg.png", fields: ["Airline PNR", "Ticket Number"] },
  china: { name: "China Southern Airlines", logo: "https://companieslogo.com/img/orig/600029.SS-e7ea2d1d.png?t=1720244490", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  thai: { name: "Thai Airways", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Thai_Airways_logo.svg/330px-Thai_Airways_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  singapore: { name: "Singapore Airlines", logo: "https://cdn.freebiesupply.com/logos/large/2x/singapore-airlines-logo-png-transparent.png", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  malaysia: { name: "Malaysia Airlines", logo: "https://brandslogos.com/wp-content/uploads/images/large/malaysia-airlines-logo.png", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  cathay: { name: "Cathay Pacific", logo: "https://static.vecteezy.com/system/resources/previews/070/344/206/non_2x/glossy-cathay-pacific-airlines-logo-rounded-square-cathay-pacific-airlines-logo-free-png.png", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  airindia: { name: "Air India", logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/Air_India_logo_%282007%E2%80%932023%29.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  indigo: { name: "IndiGo", logo: "https://i0.wp.com/pathfinderstraining.com/wp-content/uploads/2023/03/IndiGo-Logo.png?fit=2817%2C775&ssl=1", fields: ["Airline PNR"] },

  // Europe & UK
  turkish: { name: "Turkish Airlines", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Turkish_Airlines_logo_%282010-2017%29.svg/1280px-Turkish_Airlines_logo_%282010-2017%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  ba: { name: "British Airways", logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/4/42/British_Airways_Logo.svg/1280px-British_Airways_Logo.svg.png", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  virgin: { name: "Virgin Atlantic", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Virgin_Atlantic_logo.svg/960px-Virgin_Atlantic_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  lufthansa: { name: "Lufthansa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lufthansa_Logo_2018.svg/1280px-Lufthansa_Logo_2018.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  airfrance: { name: "Air France", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/3840px-Air_France_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  klm: { name: "KLM Royal Dutch Airlines", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDay2p1SFvvh_QkJy9uAJOzLouk9KmWazYZg&s", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },

  // North America
  american: { name: "American Airlines", logo: "https://s202.q4cdn.com/986123435/files/doc_downloads/logos/american-airlines/aa_aa__hrz_rgb_grd_pos.png", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  delta: { name: "Delta Air Lines", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Delta_logo.svg/3840px-Delta_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  united: { name: "United Airlines", logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/e/e0/United_Airlines_Logo.svg/1280px-United_Airlines_Logo.svg.png", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  aircanada: { name: "Air Canada", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Air_Canada_logo.svg/3840px-Air_Canada_logo.svg.png", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },
  kamair: { name: "Kam Air", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Kam_Air_Logo.png", fields: ["Booking PNR", "Airline PNR", "Ticket Number"] },

  // Custom
  custom: { name: "Custom", logo: "", fields: ["Airline Name", "Booking PNR", "Airline PNR", "Ticket Number"] }
};

// --- DYNAMIC FIELDS FUNCTION ---
function updateFields() {
  const airlineKey = document.getElementById("airline").value;
  const fieldsDiv = document.getElementById("fields");
  fieldsDiv.innerHTML = "";

  if (!airlineKey || !airlinesConfig[airlineKey]) return;

  airlinesConfig[airlineKey].fields.forEach(field => {
    const id = field.replace(/\s/g, ""); 
    fieldsDiv.innerHTML += `
      <div>
        <label>${field}:</label>
        <div class="input-wrapper">
          <input type="text" id="${id}" placeholder="Enter ${field}" style="text-transform: uppercase;">
          <button type="button" class="btn-paste" onclick="pasteFromClipboard('${id}')" title="Paste from clipboard">📋 Paste</button>
        </div>
      </div>
    `;
  });
}

// --- EMAIL GENERATION FUNCTION ---
function generateEmail() {
  const airlineKey = document.getElementById("airline").value;
  const agentName = document.getElementById("name").value;

  if (!airlineKey || !agentName) {
    alert("Please select an airline and enter your name.");
    return false;
  }

  const dynamicInputs = document.querySelectorAll('#fields input');
  for (let input of dynamicInputs) {
    if (!input.value.trim()) {
      alert(`Please fill out the ${input.previousElementSibling?.innerText.replace(':', '') || "fields"}`);
      return false;
    }
  }

  const get = id => document.getElementById(id)?.value.toUpperCase() || "";
  const config = airlinesConfig[airlineKey];
  const airlineName = airlineKey === "custom" ? get("AirlineName") : config.name;

  // Build the Logos HTML (Bookme + Airline if available)
  let logosHTML = `<img src="https://cdn.bookmepk.com/static/custom/V3/images/New-Logo---Bookme.png" alt="Bookme" height="38" style="display: inline-block; vertical-align: middle;">`;
  if (config.logo) {
    logosHTML += `
      <span style="color: rgba(255,255,255,0.4); font-size: 26px; margin: 0 12px; vertical-align: middle;">|</span>
      <img src="${config.logo}" alt="${airlineName}" height="38" style="display: inline-block; vertical-align: middle;">`;
  }

  let ticketDataRows = "";
  config.fields.forEach(field => {
    if (field !== "Airline Name") {
      const id = field.replace(/\s/g, "");
      ticketDataRows += `
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">${field}</td>
          <td align="right" style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 16px; font-weight: bold; letter-spacing: 1px;">${get(id)}</td>
        </tr>`;
    }
  });

  const subjectPnr = get("AirlinePNR") || get("BookingPNR") || "";
  const includeOkToBoard = document.getElementById("chkOkToBoard").checked;
  const includeTwoWay = document.getElementById("chkTwoWay").checked;

  let standardNotesHTML = "";
  if (includeOkToBoard || includeTwoWay) {
      if (includeOkToBoard) {
        standardNotesHTML += `<li style="margin-bottom: 8px;"><b>O.K. to Board</b> is required for visit visa and E-Visa passengers.</li>`;
      }
      if (includeTwoWay) {
        standardNotesHTML += `<li style="margin-bottom: 8px;">A <b>two-way ticket</b> is mandatory for visiting tourists and E-Visa holders.</li>
        <li style="margin-bottom: 8px;"><b>Work visa holders</b> must have a valid <b>Protector</b>. Kindly share scanned PDF copies of your passport, visa, and Protector documents at least <b>72 hours prior</b> to departure to process the Ok to Board approval.</li>`;
      }
  }

  standardNotesHTML += `<li style="margin-bottom: 8px;">Name changes are <b style="color: #d32f2f;">not permitted</b> after ticket issuance.</li>
<li style="margin-bottom: 8px;">Any changes or cancellations are subject to airline policy.</li>
<li style="margin-bottom: 8px;">Passengers are advised to report at the airport at least <b>4 hours prior</b> to scheduled departure.</li>
<li>Bookme will not be liable if immigration does not approve your visa-related travel.</li>`;

  const subject = `Your ${airlineName} E-Ticket Confirmed - ${subjectPnr}`;
  
  // Strict Table HTML Structure
  const bodyHTML = `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f1f5f9; padding: 20px;">
    
    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0" style="width: 100%; max-width: 850px; background-color: #ffffff; border-radius: 12px; border: 1px solid #cbd5e1; box-shadow: 0 10px 25px rgba(0,0,0,0.05); overflow: hidden; margin: 0 auto;">
      
      <tr>
        <td style="background-color: #0ea5e9; background-image: linear-gradient(180deg, #38bdf8 0%, #0ea5e9 100%); border-bottom: 3px solid #0284c7;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td width="65%" style="padding: 25px 30px; text-align: left; vertical-align: middle;">
                
                <div style="margin-bottom: 15px; white-space: nowrap;">
                  ${logosHTML}
                </div>

                <p style="margin: 0; color: #e0f2fe; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">E-Ticket Itinerary</p>
                <h2 style="margin: 5px 0 0 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">${airlineName}</h2>
              </td>
              <td width="35%" style="padding: 25px 30px; text-align: right; vertical-align: middle;">
                <table border="0" cellspacing="0" cellpadding="0" align="right">
                  <tr>
                    <td align="right">
                      <div style="background-color: #ffffff; border-radius: 20px; padding: 8px 16px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1); display: inline-block;">
                        <span style="color: #0284c7; font-size: 13px; font-weight: 800; letter-spacing: 1px;">CONFIRMED</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="right" style="padding-top: 10px;">
                      <span style="color: #ffffff; font-size: 15px; opacity: 0.95;">Ref: <b style="letter-spacing: 1px;">${subjectPnr}</b></span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; padding: 12px 30px; text-align: center;">
          <span style="color: #475569; font-size: 13px; font-weight: 500;"><span style="font-size: 16px; vertical-align: middle; margin-right: 8px;">📄</span> Please find your official E-Ticket PDF attached to this email.</span>
        </td>
      </tr>

      <tr>
        <td style="padding: 25px 30px 10px 30px;">
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #334155;">Dear Customer,</p>
          <p style="margin: 0; font-size: 15px; color: #475569; line-height: 1.6;">Thank you for choosing <b style="color: #0ea5e9;">Bookme</b>. We are pleased to inform you that your flight is confirmed. Please review your booking details below:</p>
        </td>
      </tr>

      <tr>
        <td style="padding: 10px 30px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border: 2px dashed #cbd5e1; border-radius: 8px;">
            <tr>
              <td style="padding: 20px;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  ${ticketDataRows}
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding: 15px 30px 25px 30px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #0ea5e9; border-radius: 4px;">
            <tr>
              <td style="padding: 20px;">
                <h4 style="margin: 0 0 12px 0; color: #1e293b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">ℹ️ Important Information</h4>
                <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: #475569; line-height: 1.6;">
                  ${standardNotesHTML}
                </ul>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="background-color: #f8fafc; padding: 20px 30px; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #475569;">If you need further assistance, please contact our helpline at <b style="color: #0ea5e9;">042 111 266 563</b>.</p>
          <p style="margin: 0; font-size: 14px; color: #475569;">Warm regards,<br><b style="color: #0f172a; font-size: 15px;">${agentName}</b><br>Ticketing Team</p>
        </td>
      </tr>

    </table>
  </div>`;

  document.getElementById("subject").value = subject;
  document.getElementById("body").innerHTML = bodyHTML;
  document.getElementById("body").setAttribute("data-copy-html", bodyHTML);

  setTimeout(() => { copyRichText('body', true); }, 100);
  return true;
}

// --- OPEN EMAIL IN GMAIL ---
function openEmail() {
  const email = document.getElementById("customerEmail").value;
  if (!generateEmail()) return;
  const subject = document.getElementById("subject").value;
  if (!email) { alert("Please enter a customer email to open in Gmail."); return; }
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
  window.open(gmailLink, '_blank'); 
}

// --- COPY TEXT ---
function copyText(id) {
  const text = document.getElementById(id);
  text.select();
  document.execCommand("copy");
  const btn = text.nextElementSibling;
  const originalText = btn.innerText;
  btn.innerText = "✅ Copied!";
  setTimeout(() => btn.innerText = originalText, 2000);
}

// --- COPY RICH TEXT ---
function copyRichText(id, isAuto = false) {
  const element = document.getElementById(id);
  const htmlString = element.getAttribute("data-copy-html");
  
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  tempDiv.style.position = "absolute";
  tempDiv.style.left = "-9999px"; 
  tempDiv.style.color = "#000000"; 
  tempDiv.style.backgroundColor = "#ffffff"; 
  document.body.appendChild(tempDiv);
  
  const range = document.createRange();
  range.selectNodeContents(tempDiv);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  
  document.execCommand("copy");
  
  document.body.removeChild(tempDiv);
  selection.removeAllRanges(); 
  
  if (!isAuto) {
    const btn = element.nextElementSibling;
    if (btn) {
      const originalText = btn.innerText;
      btn.innerText = "✅ Copied!";
      setTimeout(() => btn.innerText = originalText, 2000);
    }
  }
}

// --- RESET FUNCTION ---
function resetForm() { location.reload(); }
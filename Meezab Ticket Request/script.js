function generateEmail() {
    let airline = document.getElementById("airline").value.trim();
    let pnr = document.getElementById("pnr").value.trim();
    let writer = document.getElementById("writer").value.trim();

    if (!airline || !pnr || !writer) {
        alert("Please fill all fields.");
        return;
    }

    let subject = `Request for ticket issue: ${pnr} QR NDC AMADEUS`;

    let body = 
`Dear Team,

Please issue this ${airline} PNR : ${pnr}

Regards,
${writer}`;

    document.getElementById("subject").value = subject;
    document.getElementById("body").value = body;
}

function sendEmail() {
    let subject = document.getElementById("subject").value.trim();
    let body = document.getElementById("body").value.trim();

    if (!subject || !body) {
        alert("Please generate or enter subject and body.");
        return;
    }

    let to = "Ticketing1@meezabair.com.pk";
    let cc = "zamzam@bookme.pk";

    let gmailLink = `https://mail.google.com/mail/?view=cm&to=${to}&cc=${cc}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
window.open(gmailLink, "_blank");

    window.open(mailtoLink, "_blank");
}
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  // Grab all fields from the query string
  const firstName = params.get("firstName");
  const lastName = params.get("lastName");
  const email = params.get("email");
  const mobile = params.get("mobile");
  const businessName = params.get("businessName");
  const membership = params.get("membership");
  const timestamp = params.get("timestamp");

  // Format the date nicely
  let formattedDate = "Not available";
  if (timestamp) {
    const dateObj = new Date(Number(timestamp));
    if (!isNaN(dateObj)) {
      formattedDate = new Intl.DateTimeFormat("es-EC", {
        weekday: "long",   // viernes
        year: "numeric",   // 2026
        month: "long",     // julio
        day: "numeric",    // 31
        hour: "numeric",   // 12
        minute: "2-digit", // 46
        hour12: true       // formato AM/PM
      }).format(dateObj);
    }
  }

  // Build confirmation HTML
  document.getElementById("confirmation").innerHTML = `
    <ul style="list-style-type:none; padding-left:0;">
      <li><strong>Nombre:</strong> ${firstName || ""} ${lastName || ""}</li>
      <li><strong>Email:</strong> ${email || ""}</li>
      <li><strong>Móvil:</strong> ${mobile || ""}</li>
      <li><strong>Negocio:</strong> ${businessName || ""}</li>
      <li><strong>Membresía:</strong> ${membership || ""}</li>
      <li><strong>Fecha de envío:</strong> ${formattedDate}</li>
    </ul>
    <a href="index.html" class="button">Back to Home</a>
  `;
});




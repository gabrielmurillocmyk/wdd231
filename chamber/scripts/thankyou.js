document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const firstName = params.get("firstName");
  const lastName = params.get("lastName");
  const email = params.get("email");
  const mobile = params.get("mobile");
  const organization = params.get("organization");
  const timestamp = params.get("timestamp");
    let formattedDate = "Not available";
    if (timestamp) {
    const dateObj = new Date(Number(timestamp));  
    if (!isNaN(dateObj)) {
      formattedDate = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    }).format(dateObj);
  }
}

  document.getElementById("confirmation").innerHTML = `
    <h2>Confirmation Details</h2>
    <ul>
      <li><strong>First Name:</strong> ${firstName}</li>
      <li><strong>Last Name:</strong> ${lastName}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Mobile Phone:</strong> ${mobile}</li>
      <li><strong>Organization:</strong> ${organization}</li>
      <li><strong>Date Submitted:</strong> ${new Date(timestamp).toLocaleString()}</li>
    </ul>
    <a href="index.html" class="button">Back to Home</a>
  `;
});


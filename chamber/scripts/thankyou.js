document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const firstName = params.get("firstName");
  const lastName = params.get("lastName");
  const email = params.get("email");
  const mobile = params.get("mobile");
  const organization = params.get("organization");
  const membership = params.get("membership");
  const description = params.get("description");
  const timestamp = params.get("timestamp");

  const dateObj = new Date(timestamp);
    
  document.getElementById("confirmation").innerHTML = `
    <h2>Thank you for joining the Calderón Chamber of Commerce</h2>
    <p>We have received your application with the following information:</p>
    <ul style="list-style-type:none; padding-left:0;">
      <li><strong>Name:</strong> ${firstName || ""} ${lastName || ""}</li>
      <li><strong>Email:</strong> ${email || ""}</li>
      <li><strong>Mobile:</strong> ${mobile || ""}</li>
      <li><strong>Organization:</strong> ${organization || ""}</li>
      <li><strong>Membership:</strong> ${membership || ""}</li>
      <li><strong>Description:</strong> ${description || ""}</li>
      <li><strong>Date Submitted:</strong> ${formattedDate}</li>
    </ul>
    <a href="index.html" class="button">Back Home</a>
  `;
});





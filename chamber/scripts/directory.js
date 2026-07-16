// Footer dynamic year + last modified
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Hamburger toggle
const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuButton.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});

// Fetch members.json and display
async function loadMembers() {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();
    const container = document.querySelector("#members");

    container.innerHTML = "";
    members.forEach(member => {
    const card = document.createElement("article");
    card.classList.add("member-card");
    card.innerHTML = `
      <h2>${member.name}</h2>
      <p class="tagline">${member.tagline}</p>
      <hr>
      <div class="card-body">
        <div class="card-image">
          <img src="images/${member.image}" alt="${member.name}">
      </div>
      <div class="card-info">
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Membership Level:</strong> ${member.membership}</p>
      </div>
    </div>
  `;
  container.appendChild(card);
});

  } catch (error) {
    console.error("Error loading members:", error);
  }
}

loadMembers();

// Grid/List toggle
const gridBtn = document.querySelector("#gridView");
const listBtn = document.querySelector("#listView");
const directory = document.querySelector(".directory-grid");

gridBtn.addEventListener("click", () => {
  directory.classList.remove("list");
});

listBtn.addEventListener("click", () => {
  directory.classList.add("list");
});

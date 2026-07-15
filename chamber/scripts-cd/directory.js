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
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h2>${member.name}</h2>
        <p class="tagline">${member.tagline}</p>
        <p>${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p>Email: ${member.email}</p>
        <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership Level: ${member.membership}</p>
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

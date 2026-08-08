import { places } from '../data/places.mjs';

document.addEventListener('DOMContentLoaded', () => {
  renderPlacesGrid();
  handleVisitorTracking();
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Build 8 cards using exact structural requirements requested
function renderPlacesGrid() {
  const container = document.getElementById('places-container');
  if (!container) return;

  container.innerHTML = ''; // Reset workspace safely

  places.forEach(place => {
    const card = document.createElement('article');
    card.className = 'place-card';

    // 1. Heading element (h2) for the place title
    const heading = document.createElement('h2');
    heading.textContent = place.name;

    // 2. Figure element housing the image with standard lazy loading
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = place.image;
    img.alt = `Photograph capturing the layout of ${place.name}`;
    img.loading = 'lazy'; // Performance strategy requirement
    img.width = 300;
    img.height = 200;
    figure.appendChild(img);

    // 3. Address element for geographic references
    const address = document.createElement('address');
    address.textContent = place.address;

    // 4. Paragraph element for descriptive insights
    const p = document.createElement('p');
    p.textContent = place.description;

    // 5. Action Button titled exactly "learn more"
    const button = document.createElement('button');
    button.textContent = 'Learn More';
    button.className = 'btn-learn';
    button.addEventListener('click', () => {
      alert(`Further structural documents and detail arrays for ${place.name} will be loaded here.`);
    });

    // Construct card node tree mapping sequence constraints smoothly
    card.appendChild(heading);
    card.appendChild(figure);
    card.appendChild(p);
    card.appendChild(address);
    card.appendChild(button);
    container.appendChild(card);
  });
}

// Client-side Local Storage visitor computation metrics loop
function handleVisitorTracking() {
  const messageField = document.getElementById('visit-message');
  if (!messageField) return;

  const lastVisit = localStorage.getItem('lastChamberVisitTimestamp');
  const currentTimestamp = Date.now();
  
  // Store the modern active timestamp instantly
  localStorage.setItem('lastChamberVisitTimestamp', currentTimestamp.toString());

  if (!lastVisit) {
    messageField.textContent = "Welcome! Let us know if you have any questions.";
    return;
  }

  // Calculate day counts mathematically via absolute millisecond conversion
  const timeDifferenceMilliseconds = currentTimestamp - parseInt(lastVisit, 10);
  const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
  const daysDifference = Math.floor(timeDifferenceMilliseconds / oneDayInMilliseconds);

  if (daysDifference < 1) {
    messageField.textContent = "Back so soon? Awesome!";
  } else {
    if (daysDifference === 1) {
      messageField.textContent = "You last visited 1 day ago.";
    } else {
      messageField.textContent = `You last visited ${daysDifference} days ago.`;
    }
  }
}

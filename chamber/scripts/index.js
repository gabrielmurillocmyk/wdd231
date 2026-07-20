const apiKey = 'YOUR_API_KEY';
const city = 'Quito,EC';

async function fetchWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Quito,EC&units=metric&appid=${apiKey}`);
  const data = await response.json();

  const weatherSection = document.getElementById('weather');
  const current = data.list[0];

  weatherSection.innerHTML = `
    <h2>Local Weather</h2>
    <p>Current: ${current.main.temp}°C, ${current.weather[0].description}</p>
  `;

  [8, 16, 24].forEach((i, idx) => {
    const day = data.list[i];
    weatherSection.innerHTML += `
      <p>Day ${idx + 1}: ${day.main.temp}°C, ${day.weather[0].description}</p>
    `;
  });
}

fetchWeather();

async function loadSpotlights() {
  const response = await fetch('data/members.json');
  const members = await response.json();

  const eligible = members.filter(m => m.membership === "2" || m.membership === "3");
  const selected = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);

  const container = document.getElementById('spotlights');
  container.innerHTML = '<h2>Member Spotlights</h2>';

  selected.forEach(member => {
    container.innerHTML += `
      <div class="spotlight">
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.tagline}</p>
        <p>${member.membership === "3" ? "Gold Member" : "Silver Member"}</p>
        <p>${member.phone}</p>
        <p>${member.address}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      </div>
    `;
  });
}

loadSpotlights();

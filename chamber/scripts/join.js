
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add("show");
    }, i * 300); // staggered animation
  });

  // Modal functionality
  const modals = document.querySelectorAll(".modal");
  const links = document.querySelectorAll(".card a");
  const closes = document.querySelectorAll(".close");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const modalId = link.getAttribute("href");
      document.querySelector(modalId).style.display = "block";
    });
  });

  closes.forEach(close => {
    close.addEventListener("click", () => {
      close.closest(".modal").style.display = "none";
    });
  });

  window.addEventListener("click", e => {
    modals.forEach(modal => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  const form = document.querySelector('.join-left form');
  const submitBtn = form.querySelector('input[type="submit"]');

  form.addEventListener('input', () => {
  submitBtn.disabled = !form.checkValidity();
});

document.addEventListener("DOMContentLoaded", () => {
  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    timestampField.value = Date.now();
  }
});


});


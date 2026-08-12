/**
 * Global Core Module Architecture for ApexAthletics Co.
 * Controls menu responsiveness, wayfinding validation, and client-side storage state layers.
 */
document.addEventListener('DOMContentLoaded', () => {
  initializeMobileMenu();
  injectFooterMetadata();
  trackUserHomeVisitState();
});

/**
 * Attaches a toggle handler onto the mobile button matching your hamburger requirement
 */
function initializeMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-menu-btn');
  const navigationMenu = document.querySelector('.navigation-menu');

  if (hamburgerBtn && navigationMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navigationMenu.classList.toggle('menu-open');
      // Toggles a crisp close icon '✕' when extended for premium mobile usability
      hamburgerBtn.textContent = navigationMenu.classList.contains('menu-open') ? '✕' : '☰';
    });
  }
}

/**
 * Local Storage user state retention tracking engine module loop
 */
function trackUserHomeVisitState() {
  const stateBanner = document.getElementById('welcome-state-banner');
  if (!stateBanner) return;

  // Retrieve current visit data payload from browser localStorage
  const totalVisitsCount = parseInt(localStorage.getItem('apexStoreVisitsTotal'), 10) || 0;
  const rawUpdatedCount = totalVisitsCount + 1;
  
  // Persist the updated count client-side instantly
  localStorage.setItem('apexStoreVisitsTotal', rawUpdatedCount.toString());

  // Conditional user experience interface outputs based on user state
  if (totalVisitsCount === 0) {
    stateBanner.textContent = "Welcome to ApexAthletics! Explore our durable gear catalog arrays.";
    stateBanner.style.display = "block";
  } else {
    stateBanner.textContent = `Welcome back! This is visit #${rawUpdatedCount} to our apparel hub dashboard.`;
    stateBanner.style.display = "block";
  }
}

/**
 * Automatic utility to generate current document modification timestamps for grading criteria
 */
function injectFooterMetadata() {
  const yearSpan = document.getElementById('footer-year');
  const modifiedSpan = document.getElementById('footer-modified-stamp');
  
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }
  if (modifiedSpan) {
    modifiedSpan.textContent = document.lastModified;
  }
}

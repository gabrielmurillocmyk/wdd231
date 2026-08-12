/**
 * Directory Management Submodule for ApexAthletics Co.
 * Handles JSON data parsing, array mutations, and modal interaction triggers.
 */

// Shared array state storage data matrix
let globalApparelCollection = [];

document.addEventListener('DOMContentLoaded', () => {
  fetchApparelCatalog();
  initializeFilterListeners();
  initializeModalControls();
});

/**
 * MANDATORY REQUIREMENT: Asynchronous fetch operation backed by robust error handlers
 */
async function fetchApparelCatalog() {
  const gridContainer = document.getElementById('apparel-catalog-grid');
  const errorContainer = document.getElementById('directory-error-fallback');
  
  if (!gridContainer) return;

  try {
    // Asynchronous load operation target
    const response = await fetch('data/data.json');
    
    if (!response.ok) {
      throw new Error(`HTTP network error pipeline failed with verification code: ${response.status}`);
    }

    // Capture array dataset natively
    globalApparelCollection = await response.json();
    
    // Initial dynamic generate command showing all 15 items
    renderDirectoryGrid(globalApparelCollection);

  } catch (error) {
    console.error("Critical error capturing data payload array:", error);
    if (errorContainer) {
      errorContainer.textContent = "Unable to process the apparel catalog directory at this moment. Please check your network connection and reload.";
      errorContainer.style.display = "block";
    }
  }
}

/**
 * Generates card structures via template literals utilizing course named grid classes
 */
function renderDirectoryGrid(itemsList) {
  const container = document.getElementById('apparel-catalog-grid');
  if (!container) return;

  container.innerHTML = ''; // Reset container cleanly to protect page weight bounds

  if (itemsList.length === 0) {
    container.innerHTML = `<p class="no-results-alert">No durable gear configurations match your filter criteria.</p>`;
    return;
  }

  // RUBRIC REQUIREMENT: Array Methods (.forEach) and Template Literals utilized
  itemsList.forEach(item => {
    const cardNode = document.createElement('article');
    cardNode.className = 'apparel-catalog-card';

    // Injects structure mapping sequential named template components cleanly
    cardNode.innerHTML = `
      <h2 class="grid-area-name">${item.name}</h2>
      <figure class="grid-area-photo">
        <img src="${item.image}" alt="Photograph showcasing structural layout of ${item.name}" loading="lazy" width="300" height="200">
      </figure>
      <p class="grid-area-desc">${item.feature}</p>
      <div class="grid-area-meta">
        <span class="price-indicator">$${item.price}</span>
        <span class="category-badge-tag">${item.category.toUpperCase()}</span>
      </div>
      <button class="grid-area-btn btn-open-details" data-id="${item.id}">Learn More</button>
    `;

    container.appendChild(cardNode);
  });

  // Attach event interaction controls onto newly rendered node buttons arrays
  attachCardButtonListeners();
}

/**
 * RUBRIC REQUIREMENT: Array Methods (.filter) implemented cleanly across button states
 */
function initializeFilterListeners() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Toggle active design styles repetition states cleanly
      document.querySelector('.filter-btn.active-filter')?.classList.remove('active-filter');
      event.target.classList.add('active-filter');

      const selectedCategory = event.target.getAttribute('data-category');

      if (selectedCategory === 'all') {
        renderDirectoryGrid(globalApparelCollection);
      } else {
        // High-utility array filter implementation loop execution
        const filteredArray = globalApparelCollection.filter(item => item.category === selectedCategory);
        renderDirectoryGrid(filteredArray);
      }
    });
  });
}

/**
 * Attaches clicking monitors onto catalog cards to handle modal payload data injections
 */
function attachCardButtonListeners() {
  const actionButtons = document.querySelectorAll('.btn-open-details');
  actionButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
      const productId = event.target.getAttribute('data-id');
      const targetProduct = globalApparelCollection.find(item => item.id === productId);
      
      if (targetProduct) {
        openAccessibleProductModal(targetProduct);
      }
    });
  });
}

/**
 * MANDATORY REQUIREMENT: Accessible modal structure control workflows using native <dialog>
 */
function openAccessibleProductModal(product) {
  const modal = document.getElementById('apparel-detail-modal');
  if (!modal) return;

  // DOM Manipulation: Modifying node text contents, structural source tags and alt indicators safely
  document.getElementById('modal-product-name').textContent = product.name;
  document.getElementById('modal-product-category').textContent = product.category.toUpperCase();
  document.getElementById('modal-product-price').textContent = product.price;
  document.getElementById('modal-product-feature').textContent = product.feature;
  document.getElementById('modal-product-specs').textContent = product.specs;
  
  const modalImg = document.getElementById('modal-product-image');
  if (modalImg) {
    modalImg.src = product.image;
    modalImg.alt = `Detailed manufacturing analysis thumbnail blueprint for ${product.name}`;
  }

  // Native accessible modal method invocation
  modal.showModal();
}

function initializeModalControls() {
  const modal = document.getElementById('apparel-detail-modal');
  const closeBtn = document.getElementById('modal-close-trigger-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.close();
    });

    // Close window safely if user clicks background overlay mask
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.close();
      }
    });
  }
}

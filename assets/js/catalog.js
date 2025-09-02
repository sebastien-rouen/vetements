// Clothing Catalog Data Structure and Configuration

// Categories configuration with icons, labels and SVG emojis
const categories = {
  tshirts: { 
    icon: "👕", 
    label: "T-Shirts",
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="24" height="28" fill="#87CEEB"/>
      <rect x="16" y="20" width="8" height="12" fill="#87CEEB"/>
      <rect x="40" y="20" width="8" height="12" fill="#87CEEB"/>
      <rect x="28" y="16" width="8" height="8" fill="#87CEEB"/>
    </svg>`
  },
  polos: { 
    icon: "👔", 
    label: "Polos",
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="24" height="28" fill="#4A90E2"/>
      <rect x="16" y="20" width="8" height="12" fill="#4A90E2"/>
      <rect x="40" y="20" width="8" height="12" fill="#4A90E2"/>
      <rect x="28" y="16" width="8" height="8" fill="#4A90E2"/>
      <rect x="30" y="20" width="4" height="8" fill="#FFF"/>
    </svg>`
  },
  maillots: { 
    icon: "🏊", 
    label: "Maillots",
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="20" width="16" height="24" fill="#FF69B4"/>
      <rect x="20" y="24" width="8" height="8" fill="#FF69B4"/>
      <rect x="36" y="24" width="8" height="8" fill="#FF69B4"/>
      <rect x="28" y="16" width="8" height="8" fill="#FFB366"/>
    </svg>`
  },
  "sous-couches": { 
    icon: "🩲", 
    label: "Sous-couches",
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="18" width="20" height="28" fill="#E6E6FA"/>
      <rect x="18" y="18" width="8" height="12" fill="#E6E6FA"/>
      <rect x="38" y="18" width="8" height="12" fill="#E6E6FA"/>
      <rect x="26" y="14" width="12" height="8" fill="#E6E6FA"/>
      <rect x="24" y="22" width="16" height="2" fill="#D8BFD8"/>
    </svg>`
  },
  chaussettes: { 
    icon: "🧦", 
    label: "Chaussettes",
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="28" y="16" width="8" height="20" fill="#E74C3C"/>
      <ellipse cx="32" cy="40" rx="6" ry="8" fill="#E74C3C"/>
      <rect x="26" y="44" width="12" height="4" fill="#333"/>
    </svg>`
  },
  vestes: { 
    icon: "🧥", 
    label: "Vestes",
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="24" height="28" fill="#2C3E50"/>
      <rect x="16" y="20" width="8" height="16" fill="#2C3E50"/>
      <rect x="40" y="20" width="8" height="16" fill="#2C3E50"/>
      <rect x="28" y="16" width="8" height="8" fill="#2C3E50"/>
      <rect x="24" y="24" width="16" height="4" fill="#34495E"/>
    </svg>`
  },
  accessoires: { 
    icon: "🎩", 
    label: "Accessoires",
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="32" cy="45" rx="20" ry="4" fill="#2C3E50"/>
      <rect x="24" y="20" width="16" height="25" fill="#2C3E50"/>
      <rect x="20" y="42" width="24" height="3" fill="#34495E"/>
    </svg>`
  },
  pulls: { 
    icon: "🧶", 
    label: "Pulls",
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="24" height="28" fill="#8B4513"/>
      <rect x="16" y="20" width="8" height="16" fill="#8B4513"/>
      <rect x="40" y="20" width="8" height="16" fill="#8B4513"/>
      <rect x="28" y="16" width="8" height="8" fill="#8B4513"/>
      <rect x="22" y="22" width="20" height="2" fill="#A0522D"/>
    </svg>`
  },
  pantalons: { 
    icon: "👖", 
    label: "Pantalons",
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="16" width="16" height="12" fill="#4A90E2"/>
      <rect x="24" y="28" width="6" height="24" fill="#4A90E2"/>
      <rect x="34" y="28" width="6" height="24" fill="#4A90E2"/>
      <rect x="22" y="52" width="10" height="4" fill="#2C3E50"/>
      <rect x="32" y="52" width="10" height="4" fill="#2C3E50"/>
    </svg>`
  },
  collants: { 
    icon: "🩱", 
    label: "Collants",
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="26" y="16" width="12" height="12" fill="#FF69B4"/>
      <rect x="26" y="28" width="4" height="28" fill="#FF69B4"/>
      <rect x="34" y="28" width="4" height="28" fill="#FF69B4"/>
    </svg>`
  },
  sacs: { 
    icon: "🎒", 
    label: "Sacs",
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="24" height="28" fill="#8B4513"/>
      <rect x="28" y="16" width="8" height="8" fill="#A0522D"/>
      <rect x="24" y="24" width="16" height="4" fill="#654321"/>
      <rect x="30" y="30" width="4" height="8" fill="#654321"/>
    </svg>`
  },
  camping: { 
    icon: "🏕️", 
    label: "Camping",
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 48 L32 20 L48 48 Z" fill="#228B22"/>
      <rect x="30" y="35" width="4" height="13" fill="#8B4513"/>
      <rect x="16" y="48" width="32" height="4" fill="#654321"/>
    </svg>`
  },
  costumes: { 
    icon: "🤵", 
    label: "Costumes",
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="16" r="8" fill="#FFB366"/>
      <rect x="26" y="24" width="12" height="20" fill="#2C3E50"/>
      <rect x="28" y="26" width="8" height="16" fill="#FFF"/>
      <rect x="30" y="28" width="4" height="12" fill="#E74C3C"/>
      <rect x="24" y="44" width="4" height="16" fill="#2C3E50"/>
      <rect x="36" y="44" width="4" height="16" fill="#2C3E50"/>
    </svg>`
  },
  chemises: { 
    icon: "👔", 
    label: "Chemises",
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="16" width="16" height="24" fill="#87CEEB"/>
      <rect x="28" y="18" width="8" height="20" fill="#FFF"/>
      <rect x="30" y="20" width="4" height="16" fill="#4A90E2"/>
      <rect x="20" y="20" width="8" height="4" fill="#87CEEB"/>
      <rect x="36" y="20" width="8" height="4" fill="#87CEEB"/>
      <rect x="28" y="14" width="8" height="4" fill="#FFF"/>
    </svg>`
  },
  robes: { 
    icon: "👗", 
    label: "Robes",
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="16" r="8" fill="#FFB366"/>
      <path d="M20 24 L44 24 L42 48 L22 48 Z" fill="#FF69B4"/>
      <rect x="28" y="24" width="8" height="8" fill="#FFB366"/>
      <rect x="24" y="48" width="4" height="12" fill="#FFB366"/>
      <rect x="36" y="48" width="4" height="12" fill="#FFB366"/>
    </svg>`
  },
  chaussures: { 
    icon: "👟", 
    label: "Chaussures",
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="32" cy="45" rx="16" ry="6" fill="#333"/>
      <ellipse cx="32" cy="42" rx="14" ry="5" fill="#FFF"/>
      <path d="M18 42 Q32 35 46 42" stroke="#4A90E2" stroke-width="2" fill="none"/>
      <circle cx="24" cy="40" r="2" fill="#E74C3C"/>
      <circle cx="40" cy="40" r="2" fill="#E74C3C"/>
    </svg>`
  }
};

// Owners configuration
const owners = {
  bastou: { label: "Bastou" },
  magali: { label: "Magali" }
};

// Clothing Item Data Model
class ClothingItem {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.category = data.category; // costumes, chemises, robes, chaussures, etc.
    this.owner = data.owner; // bastou, magali
    this.year = data.year;
    this.price = data.price;
    this.link = data.link || null;
    this.images = data.images || [];
    this.description = data.description || "";
  }

  // Validate clothing item data
  isValid() {
    return this.id && 
           this.name && 
           this.category && 
           categories.hasOwnProperty(this.category) &&
           this.owner && 
           owners.hasOwnProperty(this.owner) &&
           this.year;
  }

  // Get primary image path
  getPrimaryImage() {
    return this.images.length > 0 ? this.images[0] : null;
  }

  // Get category info
  getCategoryInfo() {
    return categories[this.category] || { icon: "👕", label: "Autre" };
  }
}

// Clothing data will be loaded from configuration file
let clothingData = [];

// Create clothing items from data (will be populated after config load)
let clothingItems = [];

// Utility functions for data manipulation
const CatalogUtils = {
  // Get all items for a specific owner
  getItemsByOwner(owner) {
    return clothingItems.filter(item => item.owner === owner);
  },

  // Get all items for a specific category
  getItemsByCategory(category) {
    return clothingItems.filter(item => item.category === category);
  },

  // Get items by owner and category
  getItemsByOwnerAndCategory(owner, category) {
    return clothingItems.filter(item => 
      item.owner === owner && item.category === category
    );
  },

  // Get all valid items
  getValidItems() {
    return clothingItems.filter(item => item.isValid());
  },

  // Get unique categories for an owner
  getCategoriesForOwner(owner) {
    const items = this.getItemsByOwner(owner);
    const uniqueCategories = [...new Set(items.map(item => item.category))];
    return uniqueCategories.map(cat => ({
      key: cat,
      ...categories[cat]
    }));
  },

  // Search items by name or description
  searchItems(query) {
    const lowercaseQuery = query.toLowerCase();
    return clothingItems.filter(item => 
      item.name.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery)
    );
  }
};

// Catalog Display Functionality
class CatalogDisplay {
  constructor() {
    this.currentOwner = null;
    this.currentCategory = 'all';
    this.clothingGrid = null;
    this.filterButtons = null;
    this.isDataLoaded = false;
    this.loadingErrors = [];
    
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupCatalog());
    } else {
      this.setupCatalog();
    }
  }

  setupCatalog() {
    this.clothingGrid = document.querySelector('.clothing-grid');
    this.filterButtons = document.querySelectorAll('.filter-btn');
    
    if (!this.clothingGrid) {
      return;
    }

    this.setupFilterButtons();
    this.loadData();
    
    // Add performance optimizations
    this.setupPerformanceOptimizations();
  }

  // Setup performance optimizations
  setupPerformanceOptimizations() {
    // Debounce resize events for better performance
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Re-initialize lazy loading on resize to handle responsive changes
        if (this.isDataLoaded) {
          this.initializeLazyLoading();
        }
      }, 250);
    });

    // Optimize scroll performance
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Any scroll-based optimizations can go here
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // Load and validate clothing data
  loadData() {
    try {
      // Validate all clothing items
      const validItems = clothingItems.filter(item => {
        if (!item.isValid()) {
          this.loadingErrors.push(`Données d'article invalides: ${item.name || 'Article inconnu'}`);
          return false;
        }
        return true;
      });

      // Check for image loading issues
      this.preloadImages(validItems);
      this.isDataLoaded = true;
      
    } catch (error) {
      this.showErrorMessage('Erreur lors du chargement des données');
    }
  }

  // Preload images and handle errors gracefully
  preloadImages(items) {
    items.forEach(item => {
      if (item.images && item.images.length > 0) {
        item.images.forEach((imagePath) => {
          const img = new Image();
          img.onload = () => {
            // Image loaded successfully
          };
          img.onerror = () => {
            this.loadingErrors.push(`Image introuvable: ${imagePath}`);
          };
          img.src = imagePath;
        });
      }
    });
  }

  // Show error message in the catalog grid
  showErrorMessage(message) {
    if (this.clothingGrid) {
      this.clothingGrid.innerHTML = `
        <div class="no-items">
          <div style="color: #e74c3c; margin-bottom: 10px;">⚠️ ${message}</div>
          <div style="font-size: 0.9em; opacity: 0.8;">Veuillez vérifier la console pour plus de détails.</div>
        </div>
      `;
    }
  }

  setupFilterButtons() {
    this.filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const category = e.target.getAttribute('data-category');
        
        // Use the global filter change handler to update URL hash
        if (typeof window.handleFilterChange === 'function') {
          window.handleFilterChange(category);
        } else {
          // Fallback to direct filtering if navigation.js isn't loaded
          this.filterByCategory(category);
          this.updateActiveFilterButton(category);
        }
      });
    });
  }

  displayCatalog(owner = null) {
    if (!this.isDataLoaded) {
      this.loadData();
    }
    
    this.currentOwner = owner;
    
    // Update header based on owner
    this.updateCatalogHeader(owner);
    
    // Reset category filter when switching owners
    this.currentCategory = 'all';
    this.updateActiveFilterButton('all');
    
    // Display items
    this.renderClothingItems();
    
    // Log display action for debugging
    const ownerName = owner ? (owner === 'bastou' ? 'Bastou' : 'Magali') : 'Tous';
  }

  // Update active filter button
  updateActiveFilterButton(category) {
    this.filterButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-category') === category) {
        btn.classList.add('active');
      }
    });
  }

  updateCatalogHeader(owner) {
    const header = document.querySelector('.catalog-container header h1');
    const subtitle = document.querySelector('.catalog-container header .subtitle');
    
    if (header && subtitle) {
      if (owner) {
        const ownerName = owner === 'bastou' ? 'Bastou' : 'Magali';
        const ownerIcon = owner === 'bastou' ? '👨' : '👩';
        header.textContent = `${ownerIcon} Catalogue ${ownerName}`;
        subtitle.textContent = `Collection personnelle de ${ownerName}`;
      } else {
        header.textContent = '👔 Catalogue de Vêtements';
        subtitle.textContent = 'Collection personnelle organisée';
      }
    }
  }

  filterByCategory(category) {
    if (!this.isDataLoaded) {
      return;
    }
    
    this.currentCategory = category;
    this.renderClothingItems();
  }

  getFilteredItems() {
    let items = CatalogUtils.getValidItems();
    
    // Filter by owner if specified
    if (this.currentOwner) {
      items = items.filter(item => item.owner === this.currentOwner);
    }
    
    // Filter by category if not 'all'
    if (this.currentCategory !== 'all') {
      items = items.filter(item => item.category === this.currentCategory);
    }
    
    return items;
  }

  renderClothingItems() {
    if (!this.clothingGrid) {
      return;
    }
    
    if (!this.isDataLoaded) {
      this.clothingGrid.innerHTML = `
        <div class="loading-indicator">
          <div class="loading-spinner"></div>
          <div>Chargement des données...</div>
        </div>
      `;
      return;
    }
    
    try {
      const items = this.getFilteredItems();
      
      // Clear existing items
      this.clothingGrid.innerHTML = '';
      
      if (items.length === 0) {
        const ownerText = this.currentOwner ? ` pour ${this.currentOwner === 'bastou' ? 'Bastou' : 'Magali'}` : '';
        const categoryText = this.currentCategory !== 'all' ? ` dans la catégorie "${categories[this.currentCategory]?.label || this.currentCategory}"` : '';
        this.clothingGrid.innerHTML = `<div class="no-items">Aucun vêtement trouvé${ownerText}${categoryText}.</div>`;
        return;
      }
      
      // Create and append clothing cards
      items.forEach((item) => {
        try {
          const card = this.createClothingCard(item);
          this.clothingGrid.appendChild(card);
        } catch (error) {
          console.error(`Erreur lors de la création de la carte pour l'article ${item.name}:`, error);
          // Continue with other items even if one fails
        }
      });
      
      // Initialize lazy loading for newly added images
      this.initializeLazyLoading();
      
    } catch (error) {
      console.error('Erreur lors de l\'affichage des articles de vêtements:', error);
      this.showErrorMessage('Erreur lors de l\'affichage des vêtements');
    }
  }

  createClothingCard(item) {
    const card = document.createElement('div');
    card.className = 'clothing-card';
    card.setAttribute('data-item-id', item.id);
    
    const categoryInfo = item.getCategoryInfo();
    const primaryImage = item.getPrimaryImage();
    
    card.innerHTML = `
      <div class="clothing-image-container" ${primaryImage ? `style="cursor: pointer;" title="Cliquer pour agrandir l'image"` : ''}>
        ${primaryImage ? 
          `<img data-src="${primaryImage}" alt="${item.name} - ${item.description || categoryInfo.label}" class="clothing-image lazy-load" loading="lazy" onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='<div class=\\'clothing-placeholder svg-placeholder\\'>${categoryInfo.svg}</div>` :
          `<div class="clothing-placeholder svg-placeholder">
            ${categoryInfo.svg}
          </div>`
        }
      </div>
      <div class="clothing-info">
        <h3 class="clothing-name">${item.name}</h3>
        <div class="clothing-category">
          <span class="category-icon" aria-hidden="true">${categoryInfo.icon}</span>
          <span class="category-label">${categoryInfo.label}</span>
        </div>
        <div class="clothing-details">
          <span class="clothing-year">Année: ${item.year}</span>
          <span class="clothing-price">${item.price}</span>
        </div>
        ${item.description ? `<p class="clothing-description">${item.description}</p>` : ''}
        ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="clothing-link" onclick="event.stopPropagation();" aria-label="Voir le produit ${item.name} sur le site marchand">Voir le produit →</a>` : ''}
      </div>
    `;
    
    // Add click event for image to open in new tab
    const imageContainer = card.querySelector('.clothing-image-container');
    if (primaryImage && imageContainer) {
      imageContainer.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent card click event
        window.open(primaryImage, '_blank', 'noopener,noreferrer');
      });
      
      // Add keyboard support for image
      imageContainer.setAttribute('tabindex', '0');
      imageContainer.setAttribute('role', 'button');
      imageContainer.setAttribute('aria-label', `Agrandir l'image de ${item.name}`);
      
      imageContainer.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          window.open(primaryImage, '_blank', 'noopener,noreferrer');
        }
      });
    }

    // Add click event for potential modal functionality
    card.addEventListener('click', () => {
      this.showItemDetails(item);
    });

    // Add keyboard navigation support
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Voir les détails de ${item.name}`);
    
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.showItemDetails(item);
      }
    });
    
    return card;
  }

  // Initialize lazy loading for images
  initializeLazyLoading() {
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            
            if (src) {
              // Add loading placeholder
              img.style.opacity = '0.5';
              img.style.transition = 'opacity 0.3s ease';
              
              // Load the image
              img.src = src;
              img.removeAttribute('data-src');
              
              // Remove loading effect when image loads
              img.onload = () => {
                img.style.opacity = '1';
                img.classList.remove('lazy-load');
              };
              
              // Handle load errors
              img.onerror = () => {
                img.style.opacity = '1';
                img.classList.remove('lazy-load');
              };
              
              // Stop observing this image
              observer.unobserve(img);
            }
          }
        });
      }, {
        // Load images when they're 50px away from viewport
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      // Observe all lazy-load images
      const lazyImages = document.querySelectorAll('.lazy-load');
      lazyImages.forEach(img => imageObserver.observe(img));
      
    } else {
      // Fallback for browsers without Intersection Observer
      this.loadAllImagesImmediately();
    }
  }

  // Fallback method for older browsers
  loadAllImagesImmediately() {
    const lazyImages = document.querySelectorAll('.lazy-load');
    lazyImages.forEach(img => {
      const src = img.getAttribute('data-src');
      if (src) {
        img.style.opacity = '0.5';
        img.style.transition = 'opacity 0.3s ease';
        img.src = src;
        img.removeAttribute('data-src');
        img.classList.remove('lazy-load');
        
        img.onload = () => {
          img.style.opacity = '1';
        };
        
        img.onerror = () => {
          img.style.opacity = '1';
        };
      }
    });
  }

  showItemDetails(item) {
    // For now, just log the item details
    // This could be expanded to show a modal with more details
    console.log('Détails de l\'article:', item);
    
    // Future: Implement modal display
    // this.showModal(item);
  }
}

// Data integrity check function
function checkDataIntegrity() {
  console.log('=== Vérification de l\'intégrité des données du catalogue ===');
  
  const totalItems = clothingData.length;
  const validItems = clothingItems.filter(item => item.isValid());
  const invalidItems = clothingItems.filter(item => !item.isValid());
  
  console.log(`Articles totaux: ${totalItems}`);
  console.log(`Articles valides: ${validItems.length}`);
  console.log(`Articles invalides: ${invalidItems.length}`);
  
  if (invalidItems.length > 0) {
    console.warn('Articles invalides trouvés:', invalidItems.map(item => item.name || 'Inconnu'));
  }
  
  // Check categories
  const usedCategories = [...new Set(validItems.map(item => item.category))];
  console.log('Catégories utilisées:', usedCategories);
  
  // Check owners
  const usedOwners = [...new Set(validItems.map(item => item.owner))];
  console.log('Propriétaires dans les données:', usedOwners);
  
  // Check for items with missing images
  const itemsWithoutImages = validItems.filter(item => !item.images || item.images.length === 0);
  if (itemsWithoutImages.length > 0) {
    console.warn('Articles sans images:', itemsWithoutImages.map(item => item.name));
  }
  
  console.log('=== Fin de la vérification de l\'intégrité ===');
  
  return {
    total: totalItems,
    valid: validItems.length,
    invalid: invalidItems.length,
    categories: usedCategories,
    owners: usedOwners,
    withoutImages: itemsWithoutImages.length
  };
}

// Configuration loading functionality
async function loadClothingConfiguration() {
  try {
    // Try to load from external config file
    if (typeof clothingConfig !== 'undefined') {
      clothingData = clothingConfig;
    } else {
      // Fallback to default data if config not available
      console.warn('Configuration externe non trouvée, utilisation des données par défaut');
      clothingData = []; // Empty array as fallback
    }
    
    // Create clothing items from loaded data
    clothingItems = clothingData.map(data => new ClothingItem(data));
    
    console.log(`Configuration chargée: ${clothingItems.length} articles`);
    return true;
  } catch (error) {
    console.error('Erreur lors du chargement de la configuration:', error);
    return false;
  }
}

// Initialize catalog display
let catalogDisplay;

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
  try {
    // Load configuration first
    const configLoaded = await loadClothingConfiguration();
    
    if (!configLoaded) {
      console.error('Échec du chargement de la configuration');
      return;
    }
    
    // Initialize catalog display
    catalogDisplay = new CatalogDisplay();
    
    // Make sure it's globally accessible
    window.catalogDisplay = catalogDisplay;
    
    // Run data integrity check
    const integrityCheck = checkDataIntegrity();
    
    // Dispatch custom event to notify other scripts
    window.dispatchEvent(new CustomEvent('catalogReady', { 
      detail: { 
        catalogDisplay: catalogDisplay,
        integrityCheck: integrityCheck
      }
    }));
    
  } catch (error) {
    console.error('Erreur critique lors de l\'initialisation du catalogue:', error);
  }
});

// Export for use in other modules (if using modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    categories,
    owners,
    ClothingItem,
    clothingItems,
    CatalogUtils,
    CatalogDisplay,
    catalogDisplay,
    checkDataIntegrity,
    loadClothingConfiguration
  };
}
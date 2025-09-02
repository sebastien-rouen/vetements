// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    let catalogReady = false;
    
    // Listen for catalog ready event
    window.addEventListener('catalogReady', function() {
        catalogReady = true;
        
        // If we're currently on a catalog page, try to display it now
        const currentHash = window.location.hash;
        if (currentHash.startsWith('#catalog-bastou') || currentHash.startsWith('#catalog-magali')) {
            const { person, filter } = parseHashRoute(currentHash);
            
            // Small delay to ensure everything is ready
            setTimeout(() => {
                if (typeof catalogDisplay !== 'undefined' && catalogDisplay) {
                    catalogDisplay.displayCatalog(person);
                    if (filter && filter !== 'all') {
                        catalogDisplay.filterByCategory(filter);
                        catalogDisplay.updateActiveFilterButton(filter);
                    }
                }
            }, 50);
        }
    });
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Change hamburger icon when active
        if (navToggle.classList.contains('active')) {
            navToggle.textContent = '✕';
        } else {
            navToggle.textContent = '☰';
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.textContent = '☰';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.textContent = '☰';
        }
    });

    // Handle navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            
            // Update URL hash
            window.location.hash = href;
            
            // Handle the route
            handleRoute(href);
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash || '#guide';
        handleRoute(hash);
    });

    // Handle initial page load with hash
    window.addEventListener('load', function() {
        const hash = window.location.hash || '#guide';
        handleRoute(hash);
    });

    // Parse hash route to extract person and filter
    function parseHashRoute(hash) {
        const parts = hash.split('/');
        const basePart = parts[0];
        const filterPart = parts[1];
        
        let person = null;
        let filter = 'all';
        
        if (basePart === '#catalog-bastou') {
            person = 'bastou';
        } else if (basePart === '#catalog-magali') {
            person = 'magali';
        }
        
        if (filterPart) {
            filter = filterPart;
        }
        
        return { person, filter };
    }

    // Build hash route from person and filter
    function buildHashRoute(person, filter = 'all') {
        const basePart = person ? `#catalog-${person}` : '#guide';
        if (person && filter && filter !== 'all') {
            return `${basePart}/${filter}`;
        }
        return basePart;
    }

    // Handle filter changes and update URL
    function handleFilterChange(filter) {
        const currentHash = window.location.hash;
        const { person } = parseHashRoute(currentHash);
        
        if (person) {
            const newHash = buildHashRoute(person, filter);
            window.location.hash = newHash;
        }
    }

    // Expose filter change handler globally for filter buttons
    window.handleFilterChange = handleFilterChange;

    function handleRoute(hash) {
        const { person, filter } = parseHashRoute(hash);
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to current link (use base hash without filter)
        const baseHash = person ? `#catalog-${person}` : hash;
        const activeLink = document.querySelector(`a[href="${baseHash}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Show/hide content based on hash
        if (hash === '#guide' || (!person && !hash.startsWith('#catalog-'))) {
            showGuideContent();
        } else if (person === 'bastou') {
            showCatalogContent('bastou', filter);
        } else if (person === 'magali') {
            showCatalogContent('magali', filter);
        } else {
            // Default to guide if unknown hash
            showGuideContent();
        }
    }

    function showGuideContent() {
        // Hide catalog and show guide content
        const guideContent = document.querySelector('.guide-content');
        const catalogContent = document.querySelector('.catalog-container');
        
        if (guideContent) guideContent.style.display = 'block';
        if (catalogContent) catalogContent.style.display = 'none';
        
        // Update page title
        document.title = 'Guide des Tailles';
    }

    function showCatalogContent(person, filter = 'all') {
        // Hide guide content and show catalog
        const guideContent = document.querySelector('.guide-content');
        const catalogContent = document.querySelector('.catalog-container');
        
        if (guideContent) guideContent.style.display = 'none';
        if (catalogContent) {
            catalogContent.style.display = 'block';
            
            // Function to attempt catalog display
            const attemptCatalogDisplay = () => {
                // Check if catalogDisplay is available
                if (typeof catalogDisplay !== 'undefined' && catalogDisplay && typeof catalogDisplay.displayCatalog === 'function') {
                    try {
                        catalogDisplay.displayCatalog(person);
                        if (filter && filter !== 'all') {
                            catalogDisplay.filterByCategory(filter);
                            catalogDisplay.updateActiveFilterButton(filter);
                        }
                        return true;
                    } catch (error) {
                        return false;
                    }
                }
                
                // Also check window.catalogDisplay as fallback
                if (window.catalogDisplay && typeof window.catalogDisplay.displayCatalog === 'function') {
                    try {
                        window.catalogDisplay.displayCatalog(person);
                        if (filter && filter !== 'all') {
                            window.catalogDisplay.filterByCategory(filter);
                            window.catalogDisplay.updateActiveFilterButton(filter);
                        }
                        return true;
                    } catch (error) {
                        return false;
                    }
                }
                
                return false;
            };

            // Show loading state immediately
            const clothingGrid = document.querySelector('.clothing-grid');
            if (clothingGrid) {
                clothingGrid.innerHTML = `
                    <div class="loading-indicator">
                        <div class="loading-spinner"></div>
                        <div>Chargement du catalogue...</div>
                    </div>
                `;
            }

            // Try to display immediately
            if (attemptCatalogDisplay()) {
                // Success - nothing more to do
            } else {
                // Retry mechanism with exponential backoff
                let retryCount = 0;
                const maxRetries = 20;
                let retryInterval = 100; // Start with 100ms
                
                const retryDisplay = () => {
                    setTimeout(() => {
                        retryCount++;
                        
                        if (attemptCatalogDisplay()) {
                            console.log(`✅ Catalogue affiché après ${retryCount} tentatives`);
                        } else if (retryCount < maxRetries) {
                            // Exponential backoff: increase interval slightly each time
                            retryInterval = Math.min(retryInterval * 1.1, 500);
                            retryDisplay();
                        } else {
                            console.error('❌ Impossible d\'afficher le catalogue après plusieurs tentatives');
                            
                            // Show error message with retry option
                            if (clothingGrid) {
                                clothingGrid.innerHTML = `
                                    <div class="no-items">
                                        <div style="color: #e74c3c; margin-bottom: 10px;">⚠️ Erreur de chargement</div>
                                        <div style="font-size: 0.9em; opacity: 0.8; margin-bottom: 15px;">
                                            Le catalogue n'a pas pu se charger. Essayez de cliquer sur "Tous" ou actualisez la page.
                                        </div>
                                        <button onclick="location.reload()" style="
                                            background: #3498db; 
                                            color: white; 
                                            border: none; 
                                            padding: 10px 20px; 
                                            border-radius: 5px; 
                                            cursor: pointer;
                                        ">
                                            🔄 Actualiser la page
                                        </button>
                                    </div>
                                `;
                            }
                        }
                    }, retryInterval);
                };
                
                // Start retry process
                retryDisplay();
            }
        }
        
        // Update page title
        const personName = person === 'bastou' ? 'Bastou' : 'Magali';
        document.title = `Catalogue ${personName}`;
    }
});
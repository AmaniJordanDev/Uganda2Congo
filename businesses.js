/* ===================================================
   UGANDA2CONGO — BUSINESSES PAGE JAVASCRIPT
=================================================== */

// ===================================================
// BUSINESS FILTERING
// ===================================================

const businessSearch = document.getElementById('businessSearch');
const countryFilter = document.getElementById('countryFilter');
const searchBtn = document.getElementById('searchBtn');

const businessCards = document.querySelectorAll('.business-card');
const categoryButtons = document.querySelectorAll('.category-card');
const noResults = document.getElementById('noResults');
const viewAllBtn = document.getElementById('viewAllBtn');

let selectedCategory = 'all';

function filterBusinesses() {
    const searchTerm = businessSearch.value.trim().toLowerCase();
    const selectedCountry = countryFilter.value.toLowerCase();

    let visibleBusinesses = 0;

    businessCards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const category = card.dataset.category.toLowerCase();
        const country = card.dataset.country.toLowerCase();
        const description = card.querySelector('p')?.textContent.toLowerCase() || '';

        // Check if search term matches
        const matchesSearch = 
            searchTerm === '' ||
            name.includes(searchTerm) ||
            category.includes(searchTerm) ||
            description.includes(searchTerm);

        // Check if category matches
        const matchesCategory = 
            selectedCategory === 'all' ||
            category === selectedCategory;

        // Check if country matches
        const matchesCountry = 
            selectedCountry === 'all' ||
            country === selectedCountry;

        // Show or hide card
        if (matchesSearch && matchesCategory && matchesCountry) {
            card.style.display = '';
            visibleBusinesses++;
        } else {
            card.style.display = 'none';
        }
    });

    // Show/hide no results message
    if (visibleBusinesses === 0) {
        noResults.classList.add('show');
    } else {
        noResults.classList.remove('show');
    }
}

// Search when clicking search button
if (searchBtn) {
    searchBtn.addEventListener('click', filterBusinesses);
}

// Search when pressing Enter
if (businessSearch) {
    businessSearch.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            filterBusinesses();
        }
    });
}

// Filter by country
if (countryFilter) {
    countryFilter.addEventListener('change', filterBusinesses);
}


// ===================================================
// CATEGORY FILTERING
// ===================================================

if (categoryButtons.length > 0) {
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(item => {
                item.classList.remove('active');
            });

            // Add active class to clicked button
            button.classList.add('active');

            // Update selected category
            selectedCategory = button.dataset.category;

            // Filter businesses
            filterBusinesses();

            // Scroll to results
            const featuredSection = document.querySelector('.featured-section');
            if (featuredSection) {
                featuredSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Set "All Businesses" as active by default
    const allButton = document.querySelector('[data-category="all"]');
    if (allButton) {
        allButton.classList.add('active');
    }
}


// ===================================================
// VIEW ALL BUTTON
// ===================================================

if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
        selectedCategory = 'all';
        
        categoryButtons.forEach(button => {
            button.classList.remove('active');
        });

        const allButton = document.querySelector('[data-category="all"]');
        if (allButton) {
            allButton.classList.add('active');
        }

        if (businessSearch) {
            businessSearch.value = '';
        }

        if (countryFilter) {
            countryFilter.value = 'all';
        }

        filterBusinesses();

        const featuredSection = document.querySelector('.featured-section');
        if (featuredSection) {
            featuredSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}


// ===================================================
// BUSINESS CARD INTERACTIONS
// ===================================================

const businessButtons = document.querySelectorAll('.contact-business');

businessButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.business-card');
        const businessName = card?.dataset.name;

        if (businessName) {
            alert(`${businessName}\n\nBusiness profile pages will be connected here soon.`);
        }
    });
});


// ===================================================
// INITIAL FILTER
// ===================================================

document.addEventListener('DOMContentLoaded', () => {
    filterBusinesses();
});

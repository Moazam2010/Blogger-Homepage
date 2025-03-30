// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to navigation links based on current page
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links li');
    
    navLinks.forEach(link => {
        const linkHref = link.querySelector('a').getAttribute('href');
        
        // Check if the current page matches the link's href
        if (
            (currentLocation === '/' && linkHref === 'index.html') ||
            currentLocation.includes(linkHref)
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Search functionality
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    if (searchButton && searchBar) {
        searchButton.addEventListener('click', performSearch);
        searchBar.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    function performSearch() {
        const query = searchBar.value.trim();
        if (query) {
            // This is a placeholder for actual search functionality
            alert(`Searching for: ${query}`);
            // In a real implementation, you might redirect to a search results page
            // window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
        }
    }

    // Animation for feature cards on scroll
    const featureCards = document.querySelectorAll('.feature-card');
    
    if (featureCards.length > 0) {
        // Create an Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    // Stop observing once animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        // Observe each feature card
        featureCards.forEach(card => {
            observer.observe(card);
        });
    }

    // Mobile menu toggle (for responsive design)
    // This would require adding a hamburger menu button in the HTML for mobile views
    const menuToggle = document.querySelector('.menu-toggle');
    const navlinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
}); 
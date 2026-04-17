// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggleMenuIcon();
});

// Close mobile menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            toggleMenuIcon();
        }
    });
});

function toggleMenuIcon() {
    const bars = document.querySelectorAll('.bar');
    if (navLinks.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
}

// Show Specific Menu
function showMenu(category) {
    // Show the container if it's hidden
    const container = document.getElementById('detailed-menus');
    if (container.style.display === 'none') {
        container.style.display = 'block';
    }

    // Hide all menus
    const allMenus = document.querySelectorAll('.menu-category-details');
    allMenus.forEach(menu => {
        menu.style.display = 'none';
    });

    // Show the selected menu
    const selectedMenu = document.getElementById(`menu-${category}`);
    if (selectedMenu) {
        selectedMenu.style.display = 'block';
        
        // Scroll smoothly to the menu container
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Handle Selectable Items Logic
document.addEventListener('DOMContentLoaded', () => {
    // Add event delegation or wait for DOM load
    const container = document.querySelector('.detailed-menus-container');
    if(container) {
        container.addEventListener('click', function(e) {
            if(e.target && e.target.tagName === 'LI' && e.target.closest('.selectable-items')) {
                // Toggle the 'selected' class on the clicked chip
                e.target.classList.toggle('selected');
            }
        });
    }
});

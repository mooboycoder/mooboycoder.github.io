// A self-contained script for a professional website.
// This script handles responsive navigation and smooth scrolling.

document.addEventListener('DOMContentLoaded', () => {
    // Select the mobile menu button and the navigation links.
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Add a click event listener to the menu button.
    menuToggle.addEventListener('click', () => {
        // Toggle the 'open' class on the navigation links to show/hide the menu.
        navLinks.classList.toggle('open');
    });

    // Add a click event listener to each navigation link for smooth scrolling.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default jump-to-anchor behavior.

            // Get the target element to scroll to.
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Close the mobile menu if it's open.
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
            }

            // Scroll to the target element smoothly.
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header height.
                    behavior: 'smooth'
                });
            }
        });
    });
});

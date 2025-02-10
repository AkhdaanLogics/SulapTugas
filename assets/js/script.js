// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav ul');

    menuBtn.addEventListener('click', function() {
        nav.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            nav.classList.remove('show');
        }
    });

    // Prevent menu from closing when clicking inside
    nav.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
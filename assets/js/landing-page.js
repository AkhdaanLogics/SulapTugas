document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const slides = document.querySelectorAll('.slide');
    const navBtns = document.querySelectorAll('.nav-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Remove active class from all slides and nav buttons
        slides.forEach(slide => slide.classList.remove('active'));
        navBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to current slide and nav button
        slides[index].classList.add('active');
        navBtns[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Add click event listeners to navigation buttons
    navBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            resetInterval();
        });
    });

    // Add click event listeners to prev/next buttons
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Start the auto-slide interval
    slideInterval = setInterval(nextSlide, 5000);

    // Search functionality
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        // Add search logic here
    });

    // Category card click handler
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.querySelector('h3').textContent;
            // Add category filter logic here
        });
    });
});
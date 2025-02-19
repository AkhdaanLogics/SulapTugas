document.addEventListener('DOMContentLoaded', function() {
    // Tutor data
    const tutors = [
        {
            name: "A***** S****",
            university: "Universitas Indonesia",
            rating: "4.9",
            reviews: "120",
            tasks: "156"
        },
        {
            name: "M******* A******",
            university: "Universitas Amikom Yogyakarta",
            rating: "5.0",
            reviews: "372",
            tasks: "400"
        },
        {
            name: "D*** S******",
            university: "Universitas Ahmad Dahlan",
            rating: "4.9",
            reviews: "219",
            tasks: "220"
        },
        {
            name: "S****** G****",
            university: "Universitas Mercu Buana",
            rating: "4.9",
            reviews: "120",
            tasks: "156"
        }
    ];

    const tutorGrid = document.querySelector('.tutor-grid');
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';

    // Function to create tutor card
    function createTutorCard(tutor) {
        return `
            <div class="tutor-card">
                <img src="images/DJV MAR 1011-04.jpg" alt="Tutor" class="tutor-image">
                <div class="tutor-info">
                    <h3 class="tutor-name">${tutor.name}</h3>
                    <p class="tutor-university">${tutor.university}</p>
                    <div class="tutor-stats">
                        <span class="rating">
                            <i class="fas fa-star"></i>
                            ${tutor.rating} (${tutor.reviews} review)
                        </span>
                        <span class="completed-tasks">
                            <i class="fas fa-check-circle"></i>
                            ${tutor.tasks} tugas
                        </span>
                    </div>
                </div>
            </div>
        `;
    }

    // Add original cards
    tutors.forEach(tutor => {
        sliderContainer.insertAdjacentHTML('beforeend', createTutorCard(tutor));
    });

    // Clone cards for infinite scroll
    tutors.forEach(tutor => {
        sliderContainer.insertAdjacentHTML('beforeend', createTutorCard(tutor));
    });

    // Add the slider container to the grid
    tutorGrid.appendChild(sliderContainer);

    // Optional: Reset animation when it ends
    sliderContainer.addEventListener('animationend', () => {
        sliderContainer.style.animation = 'none';
        sliderContainer.offsetHeight; // Trigger reflow
        sliderContainer.style.animation = 'slideLeft 40s linear infinite';
    });

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
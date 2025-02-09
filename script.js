let currentIndex = 0;

function slideImages() {
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slider img').length;

    currentIndex = (currentIndex + 1) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Pindah slide setiap 3 detik
setInterval(slideImages, 3000);

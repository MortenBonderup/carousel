let currentIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const carouselInner = document.querySelector('.carousel-inner');

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    // The line below, deside when to show 4 or 2 images in the carousel
    const offset = -currentIndex * 100 / (window.innerWidth > 768 ? 4 : 2);
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex++;
    showSlides();
}

function prevSlide() {
    currentIndex--;
    showSlides();
}

window.onload = showSlides;
window.onresize = showSlides
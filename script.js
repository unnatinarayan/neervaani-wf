// script.js
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

let currentSlideIndex = 0;

// Function to navigate to a specific slide
function goToSlide(index) {
    currentSlideIndex = index; // Update the current slide index
    updateSlider(); // Update the slider position and dots
}

// Function to update the slider and active dot
function updateSlider() {
    // Move the slides container to the correct slide
    slides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    // Update the active state of dots
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlideIndex);
    });
}

// Add event listeners to dots
dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        const slideIndex = parseInt(dot.getAttribute('data-slide'), 10);
        goToSlide(slideIndex);
    });
});

// Initialize slider to the first slide
updateSlider();

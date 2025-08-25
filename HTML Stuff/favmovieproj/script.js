let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => {
        slide.classList.remove("active", "slide-left", "slide-right");
    });
    
    // Add active class to the new slide
    slides[index].classList.add("active");
    currentSlide = index;
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

function goToSlide(index) {
    showSlide(index);
}

function toggleDescription(num) {
    const desc = document.getElementById("desc" + num);
    desc.classList.toggle("active");
    
    // Close other descriptions when opening one
    if (desc.classList.contains("active")) {
        document.querySelectorAll('.description').forEach(otherDesc => {
            if (otherDesc !== desc && otherDesc.classList.contains('active')) {
                otherDesc.classList.remove('active');
            }
        });
    }
}

// Init first slide
document.addEventListener('DOMContentLoaded', function() {
    showSlide(0);
});

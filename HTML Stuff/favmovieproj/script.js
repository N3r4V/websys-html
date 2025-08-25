let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    
    // Add active class to the new slide
    slides[index].classList.add("active");
    currentSlide = index;
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    
    // Set animation direction
    slides[currentSlide].classList.add("slide-left");
    slides[nextIndex].classList.add("slide-right");
    slides[nextIndex].classList.add("active");
    
    // Remove animation classes after transition
    setTimeout(() => {
        slides[currentSlide].classList.remove("slide-left", "active");
        slides[nextIndex].classList.remove("slide-right");
        currentSlide = nextIndex;
    }, 600); // Match this with CSS transition duration
}

function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    
    // Set animation direction
    slides[currentSlide].classList.add("slide-right");
    slides[prevIndex].classList.add("slide-left");
    slides[prevIndex].classList.add("active");
    
    // Remove animation classes after transition
    setTimeout(() => {
        slides[currentSlide].classList.remove("slide-right", "active");
        slides[prevIndex].classList.remove("slide-left");
        currentSlide = prevIndex;
    }, 600); // Match this with CSS transition duration
}

function goToSlide(index) {
    if (index > currentSlide) {
        nextSlide();
    } else if (index < currentSlide) {
        prevSlide();
    }
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

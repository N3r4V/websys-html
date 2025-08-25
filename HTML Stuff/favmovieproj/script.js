let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    // Remove active class and prepare for animation
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        
        // Set slide direction for animation
        if (i === currentSlide) {
            if (index > currentSlide) {
                slide.classList.add("slide-left");
            } else {
                slide.classList.add("slide-right");
            }
        }
    });
    
    // Add active class to new slide with delay for smooth transition
    setTimeout(() => {
        slides.forEach(slide => {
            slide.classList.remove("slide-left", "slide-right");
        });
        
        slides[index].classList.add("active");
        currentSlide = index;
    }, 50);
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
    
    // Make sure first slide is properly positioned
    setTimeout(() => {
        slides[0].classList.add("active");
    }, 100);
});

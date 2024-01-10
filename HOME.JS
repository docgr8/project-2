let currentIndex = 0;

function showSlide(index) {
    const slider = document.getElementById('image-slider');
    const slideWidth = document.querySelector('.slider-image').clientWidth;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + 3) % 3;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % 3;
    showSlide(currentIndex);
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.left === "0px") {
        menu.style.left = "-250px";
    } else {
        menu.style.left = "0px";
    }
}

// Close menu on clicking elsewhere
document.addEventListener("click", function (event) {
    const menu = document.getElementById('menu');
    const menuBtn = document.getElementById('menu-btn');
    if (event.target !== menu && event.target !== menuBtn) {
        menu.style.left = "-250px";
    }
});
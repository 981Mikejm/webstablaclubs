const slides = document.querySelector('.slides');
let index = 0;
let interval;

function startCarousel() {
    interval = setInterval(() => {
        slides.style.transform = `translateX(-${300 * index}px)`;  
        index = (index + 1) % slides.children.length; 
    }, 4000);
}

function stopCarousel() {
    clearInterval(interval);
}

slides.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseover', stopCarousel);
    img.addEventListener('mouseout', startCarousel);
});

startCarousel();

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % slides.children.length;
    slides.style.transform = `translateX(-${300 * index}px)`;
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + slides.children.length) % slides.children.length;
    slides.style.transform = `translateX(-${300 * index}px)`;
});

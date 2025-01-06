// Слайдер
    const slides = document.querySelectorAll('.slider img');
    let currentSlide = 0;

    function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

    setInterval(showNextSlide, 3000);

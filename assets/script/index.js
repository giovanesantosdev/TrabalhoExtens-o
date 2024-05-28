document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach((slide, index) => {
            if (index === n) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
        // Atualizar o estado do radio button
        radioButtons[n].checked = true;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Mostrando o primeiro slide
    showSlide(currentSlide);

    // Passando pelas imagens automaticamente a cada 5 segundos com transição de 1 segundo
    setInterval(nextSlide, 5000);

    // Adicionando evento de clique aos radio buttons
    radioButtons.forEach((radioButton, index) => {
        radioButton.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});

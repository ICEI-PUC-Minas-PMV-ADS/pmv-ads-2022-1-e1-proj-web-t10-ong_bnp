let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

document.querySelector('.slider--width').style.width = 
    `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.heigth = 
    `${document.querySelector('.slider').clientHeight}px`;


window.onload = setInterval(() => {
    goNext();
}, 5000);

    function goPrev(){
        currentSlide--;
        if(currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        updateMargin();
    }

    function goNext() {
        currentSlide++;
        if(currentSlide > (totalSlides-1)) {
            currentSlide = 0
        }
        updateMargin();
    }

    function updateMargin() {
        let newMargin = (currentSlide * document.body.clientWidth);
        document.querySelector('.slider--width').style.marginLeft = 
        `-${newMargin}px`;
    }
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".quotes__content");
    if (n > slides.length) {
        slideIndex = 1;
    };
    if (n < 1) {
        slideIndex = slides.length;
    };
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slides[slideIndex - 1].style.display = "flex";
}

var leftIcon = document.querySelector(".quotes__icon--left");
var rightIcon = document.querySelector(".quotes__icon--right");

leftIcon.addEventListener('click', function () {
    plusSlides(1)
});
rightIcon.addEventListener('click', function () {
    plusSlides(-1)
});
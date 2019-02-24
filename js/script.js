document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 1;

  const showSlides = n => {
    let i;
    const slides = document.querySelectorAll(".quotes__wrapper");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
  };

  showSlides(slideIndex);

  const plusSlides = n => {
    showSlides((slideIndex += n));
  };

  const leftIcon = document.querySelector(".quotes__icon--left");
  const rightIcon = document.querySelector(".quotes__icon--right");

  leftIcon.addEventListener("click", () => plusSlides(1));
  rightIcon.addEventListener("click", () => plusSlides(-1));

  const navBtn = document.querySelector(".main__mobile");
  const navMenu = document.querySelector(".main__nav");
  navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("change");
    navMenu.classList.toggle("change__menu");
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      navBtn.classList.toggle("change");
      navMenu.classList.toggle("change__menu");
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});

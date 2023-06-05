var swiper = new Swiper(".slide-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});

const cardsContainer = document.querySelector('.cards-container');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

arrowLeft.addEventListener('click', () => {
  cardsContainer.style.transform = 'translateX(0)';
});

arrowRight.addEventListener('click', () => {
  cardsContainer.style.transform = 'translateX(-100%)';
});



import Swiper from 'swiper/swiper-bundle.min';

class StaticSlider {
  constructor(container) {
    this.slider = container.querySelector('.swiper');
    this.btnPrev = container.querySelector('.btn-prev');
    this.btnNext = container.querySelector('.btn-next');
    this.scrollbar = container.querySelector('.swiper-scrollbar');
    this.swiperSlider = null;
    this.init();
  }

  initSlider() {
    this.swiperSlider = new Swiper(this.slider, {
      speed: 700,
      clickable: false,
      slidesPerView: 'auto',
      slideToClickedSlide: false,
      navigation: {
        nextEl: this.btnNext,
        prevEl: this.btnPrev,
      },
      scrollbar: {
        el: this.scrollbar,
        draggable: true,
      },
    });
  }

  init() {
    this.initSlider();
  }
}

const jsStaticSlider = document.querySelectorAll('.static-slider');

jsStaticSlider.forEach((el) => {
  new StaticSlider(el);
});

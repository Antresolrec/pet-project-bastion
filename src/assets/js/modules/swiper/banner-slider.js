import Swiper from 'swiper/swiper-bundle.min';

class BannerSlider {
  constructor(container) {
    this.slider = container.querySelector('.swiper');
    this.btnPrev = container.querySelector('.btn-prev');
    this.btnNext = container.querySelector('.btn-next');
    this.swiperSlider = null;
    this.init();
  }

  initSlider() {
    this.swiperSlider = new Swiper(this.slider, {
      speed: 1500,
      parallax: true,
      loop: true,
      navigation: {
        nextEl: this.btnNext,
        prevEl: this.btnPrev,
      },
    });
  }

  init() {
    this.initSlider();
  }
}

const jsBannerSlider = document.querySelectorAll('.banner-slider');

jsBannerSlider.forEach((el) => {
  new BannerSlider(el);
});

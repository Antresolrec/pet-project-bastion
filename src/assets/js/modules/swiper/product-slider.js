import Swiper from 'swiper/swiper-bundle.js';

class DoubleSlider {
  constructor(container) {
    this.slider = container.querySelector('.double-slider__main-container');
    this.slidesSlider = this.slider.querySelectorAll('.swiper-slide');
    this.prevSlide = container.querySelector('.btn-prev');
    this.nextSlide = container.querySelector('.btn-next');
    this.pag = container.querySelector('.swiper-pagination');

    this.thumbs = container.querySelector('.double-slider__thumb-container');
    this.quantityThumbs = this.thumbs.hasAttribute('data-quantity-thumbs')
      ? this.thumbs.getAttribute('data-quantity-thumbs')
      : 5;
    this.slidesThumbs = this.thumbs.querySelectorAll('.swiper-slide');
    this.prevThumb = container.querySelector('.button-thumb-prev');
    this.nextThumb = container.querySelector('.button-thumb-next');

    this.swiperSlider = null;
    this.swiperThumbs = null;

    this.init();
  }

  initSlider() {
    this.swiperSlider = new Swiper(this.slider, {
      speed: 500,
      thumbs: {
        swiper: this.swiperThumbs,
      },
      navigation: {
        nextEl: this.nextSlide,
        prevEl: this.prevSlide,
      },
      pagination: {
        el: this.pag,
        clickable: true,
      },
    });
  }

  initThumbs() {
    this.swiperThumbs = new Swiper(this.thumbs, {
      direction: 'vertical',
      slidesPerView: 5,
      speed: 500,
    });
  }

  initNavigationThumbs() {
    this.prevThumb.addEventListener('click', () => {
      this.swiperSlider.slidePrev();
    });
    this.nextThumb.addEventListener('click', () => {
      this.swiperSlider.slideNext();
    });
    if (this.slidesThumbs.length <= this.quantityThumbs) {
      this.prevThumb.classList.add('_lock');
      this.nextThumb.classList.add('_lock');
    }
  }

  init() {
    if (this.thumbs) {
      this.initThumbs();
    }
    this.initSlider();
    this.initNavigationThumbs();
  }
}

const doubleSlider = document.querySelectorAll('.double-slider');

doubleSlider.forEach((el) => {
  new DoubleSlider(el);
});

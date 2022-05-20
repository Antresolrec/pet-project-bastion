import checkFavorite from './checkFavorite';

function addFlyImage(el, width, height, top, left) {
  el.style.cssText = `
  width: ${width}px;
  height: ${height}px;
  top: ${top}px;
  left: ${left}px;
  `;
}

function removeFlyImage(el, top, left) {
  el.style.cssText = `
  top: ${top + 5}px;
  left: ${left + 15}px;
  width: 0px;
  height: 0px;
  opacity: 0;
  pointer-events: none;
  `;
}

export default function addToFavorite(target) {
  if (target.closest('.js-add-to-favorite input')) {
    const input = target.closest('.js-add-to-favorite input');
    const card = target.closest('.card');
    const key = card.getAttribute('data-key');
    const img = card.querySelector('.card__img img')
      ? card.querySelector('.card__img img').getAttribute('src')
      : '';
    const title = card.querySelector('.card__title')
      ? card.querySelector('.card__title').textContent
      : '';
    const price = card.querySelector('.card__price--actual span')
      ? card.querySelector('.card__price--actual span').textContent
      : '';
    const priceSale = card.querySelector('.card__price--red span')
      ? card.querySelector('.card__price--red span').textContent
      : '';
    const popupCartList = document.querySelector('.js-favorite-list');
    const cardMini = document.createElement('div');

    cardMini.classList.add('actions-header__unit');
    cardMini.setAttribute('data-key-mini', key);
    cardMini.innerHTML = `
    <a href="#" class="actions-header__info">
      <img src="${img}" alt="фото товара">
      <p>
        <span class="actions-header__info-title">${title}</span>
        <span><span class="actions-header__info-price">${price}${priceSale}</span> руб</span>
      </p>
    </a>
    <button type="button" class="icon-page icon-page--small js-delete-favorite">
      <img src="content/icons/icon-trash.svg" alt="" aria-hidden="true">
    </button>
    `;

    const container = document.querySelector(
      '.favorite-header .actions-header__icon'
    );
    const cardImg = card.querySelector('.card__img img');
    const flyImg = cardImg.cloneNode(true);
    flyImg.classList.add('fly-img');
    const fliImgWidth = cardImg.offsetWidth;
    const fliImgHeight = cardImg.offsetHeight;
    const fliImgTop = cardImg.getBoundingClientRect().top;
    const fliImgLeft = cardImg.getBoundingClientRect().left;

    document.body.append(flyImg);

    const flyToTop = container.getBoundingClientRect().top;
    const flyToLeft = container.getBoundingClientRect().left;

    const countFavorite = document.querySelectorAll('.count-favorite');
    countFavorite.forEach((el) => {
      const getValue = el.textContent;
      const value = Number(getValue);
      if (input.checked) {
        addFlyImage(flyImg, fliImgWidth, fliImgHeight, fliImgTop, fliImgLeft);
        setTimeout(() => {
          removeFlyImage(flyImg, flyToTop, flyToLeft);
        }, 10);
        setTimeout(() => {
          flyImg.remove();
        }, 1000);
        el.innerText = `${value + 1}`;
        popupCartList.append(cardMini);
      } else {
        removeFlyImage(flyImg, flyToTop, flyToLeft);
        setTimeout(() => {
          addFlyImage(flyImg, fliImgWidth, fliImgHeight, fliImgTop, fliImgLeft);
        }, 10);
        setTimeout(() => {
          flyImg.remove();
        }, 1000);
        el.innerText = `${value - 1}`;
        card.getAttribute('data-key');
        const keysMini = document.querySelectorAll('[data-key-mini]');
        keysMini.forEach((keyMini) => {
          const getKeyMini = keyMini.getAttribute('data-key-mini');
          if (key === getKeyMini) {
            keyMini.remove();
          }
        });
      }
    });
    checkFavorite();
  }
}

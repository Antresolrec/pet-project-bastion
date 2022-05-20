import checkCart from './checkCart';

export default function addToCart(target) {
  if (target.closest('.js-add-to-cart')) {
    const card = target.closest('.card');
    const img = card.querySelector('.card__img img')
      ? card.querySelector('.card__img img').getAttribute('src')
      : '';
    const code = card.querySelector('.card__code span')
      ? card.querySelector('.card__code span').textContent
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
    const count = card.querySelector('.count-field__input input')
      ? card.querySelector('.count-field__input input').value
      : '';
    const popup = document.querySelector('.card-popup');
    const popupImg = popup.querySelector('.card-popup__img img');
    const popupCode = popup.querySelector('.card-popup__code span');
    const popupTitle = popup.querySelector('.card-popup__title');
    const popupPrice = popup.querySelector('.card-popup__price');
    const popupCount = popup.querySelector('.card-popup__count');

    const sumCart = document.querySelector('.sum-cart');
    const getSum = sumCart.textContent;

    const countCart = document.querySelector('.count-cart');
    const getValue = countCart.textContent;

    const sumN = Number(getSum);
    const PriceN = Number(price);
    const PriceSaleN = Number(priceSale);
    const countN = Number(count);
    const valueN = Number(getValue);

    popupImg.setAttribute('src', img);
    popupCode.innerText = `${code}`;
    popupTitle.innerText = `${title}`;
    popupPrice.innerText = `${price}${priceSale}руб.`;
    popupCount.innerText = `${count}шт.`;

    const countCartUpd = valueN + countN;
    countCart.innerText = `${countCartUpd}`;

    const popupCartList = document.querySelector('.js-cart-list');
    const cardMini = document.createElement('div');

    cardMini.classList.add('actions-header__unit');
    cardMini.innerHTML = `
    <a href="#" class="actions-header__info">
      <img src="${img}" alt="фото товара">
      <p>
        ${title}
        <span><span class="actions-header__info-price">${price}${priceSale}</span> руб / <span class="actions-header__info-count">${count}</span> шт.</span>
      </p>
    </a>
    <button type="button" class="icon-page icon-page--small js-delete-card">
      <img src="content/icons/icon-trash.svg" alt="" aria-hidden="true">
    </button>
    `;

    popupCartList.append(cardMini);

    const sumCartUpd = sumN + PriceN * count + PriceSaleN * count;
    sumCart.innerText = `${sumCartUpd}`;

    checkCart();
  }
}

import checkCart from './checkCart';
import { toNumber, getValue } from './getNumber';

export default function removeFromCart(target) {
  if (target.closest('.js-delete-card')) {
    const card = target.closest('.actions-header__unit');
    const countItem = card.querySelector('.actions-header__info-count');
    const price = card.querySelector('.actions-header__info-price');
    const countCart = document.querySelector('.count-cart');
    const sumCart = document.querySelector('.sum-cart');

    if (toNumber(getValue(countItem)) > 1) {
      const countCartUpd = toNumber(getValue(countCart)) - 1;
      countCart.innerText = `${countCartUpd}`;
      const sumCartUpd =
        toNumber(getValue(sumCart)) - toNumber(getValue(price));
      sumCart.innerText = `${sumCartUpd}`;
      const countUpd = getValue(countItem) - 1;
      countItem.textContent = `${countUpd}`;
    } else {
      const countCartUpd =
        toNumber(getValue(countCart)) - toNumber(getValue(countItem));
      countCart.innerText = `${countCartUpd}`;
      const sumCartUpd =
        toNumber(getValue(sumCart)) -
        toNumber(getValue(price)) * toNumber(getValue(countItem));
      sumCart.innerText = `${sumCartUpd}`;
      card.remove();
      checkCart();
    }
  }
}

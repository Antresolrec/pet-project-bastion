import checkCart from './checkCart';

export default function removeFromCart(target) {
  if (target.closest('.js-delete-card')) {
    const card = target.closest('.actions-header__unit');
    const countItem = card.querySelector('.actions-header__info-count');
    const count = countItem.textContent;
    const price = card.querySelector('.actions-header__info-price').textContent;
    const countCart = document.querySelector('.count-cart');
    const sumCart = document.querySelector('.sum-cart');

    const getValue = countCart.textContent;
    const getSum = sumCart.textContent;

    const valueN = Number(getValue);
    const countN = Number(count);
    const sumN = Number(getSum);
    const PriceN = Number(price);

    if (countN > 1) {
      const countCartUpd = valueN - 1;
      countCart.innerText = `${countCartUpd}`;
      const sumCartUpd = sumN - PriceN;
      sumCart.innerText = `${sumCartUpd}`;
      const countUpd = count - 1;
      countItem.textContent = `${countUpd}`;
    } else {
      const countCartUpd = valueN - countN;
      countCart.innerText = `${countCartUpd}`;
      const sumCartUpd = sumN - PriceN * countN;
      sumCart.innerText = `${sumCartUpd}`;
      card.remove();
      checkCart();
    }
  }
}

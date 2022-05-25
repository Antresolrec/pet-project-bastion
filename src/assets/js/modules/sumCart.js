import { toNumber, getValue } from './getNumber';

const cartTotalValue = document.querySelector('.cart__total-value span');

export default function sumCart() {
  if (cartTotalValue) {
    const arr = [];
    const cards = document.querySelectorAll('.item-cart');
    cards.forEach((card) => {
      const itemCoast = card.querySelector('.item-cart__price span');
      const itemCount = card.querySelector('.count-field__input input').value;
      const itemSum = toNumber(getValue(itemCoast)) * toNumber(itemCount);
      const itemValue = card.querySelector('.item-cart__total span');
      itemValue.textContent = itemSum;
      arr.push(toNumber(getValue(itemValue)));
    });
    const totalSum = arr.reduce((x, y) => x + y, 0);
    cartTotalValue.innerText = totalSum;
  }
}

if (cartTotalValue) {
  sumCart();
  const input = document.querySelectorAll('.count-field__input input');
  input.forEach((el) => {
    el.addEventListener('input', () => {
      sumCart();
    });
  });
}

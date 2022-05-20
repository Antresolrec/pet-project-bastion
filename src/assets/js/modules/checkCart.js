export default function checkCart() {
  const cartHeader = document.querySelector('.cart-header');
  const title = cartHeader.querySelector('.actions-header__head-title');
  const count = cartHeader.querySelector('.count-cart').textContent;
  const countN = Number(count);
  if (countN < 1) {
    cartHeader.classList.add('_empty');
    title.innerHTML = `Корзина пуста <span>Добавьте необходимые товары в корзину</span>`;
  } else {
    cartHeader.classList.remove('_empty');
    title.innerHTML = `Итого в корзине`;
  }
}

checkCart();

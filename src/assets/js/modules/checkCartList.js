const cart = document.querySelector('.cart');

export default function checkCartList() {
  if (cart) {
    const items = document.querySelectorAll('.item-cart');
    if (items.length < 1) {
      cart.classList.add('_empty');
    } else {
      cart.classList.remove('_empty');
    }
  }
}

checkCartList();

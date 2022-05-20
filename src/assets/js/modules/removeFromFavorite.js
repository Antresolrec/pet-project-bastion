import checkFavorite from './checkFavorite';

export default function removeFromFavorite(target) {
  if (target.closest('.js-delete-favorite')) {
    const card = target.closest('.actions-header__unit');
    const countCart = document.querySelectorAll('.count-favorite');
    const key = card.getAttribute('data-key-mini');
    const cardBig = document.querySelectorAll('[data-key]');
    cardBig.forEach((el) => {
      const keyBig = el.getAttribute('data-key');
      if (keyBig === key) {
        const checkbox = el.querySelector('.js-add-to-favorite input');
        checkbox.checked = false;
      }
    });
    countCart.forEach((el) => {
      const getValue = el.textContent;
      const valueN = Number(getValue);
      const countCartUpd = valueN - 1;
      el.innerText = `${countCartUpd}`;
    });
    card.remove();
    checkFavorite();
  }
}

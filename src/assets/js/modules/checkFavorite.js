export default function checkFavorite() {
  const cartHeader = document.querySelector('.favorite-header');
  const title = cartHeader.querySelector('.actions-header__head-title');
  const count = cartHeader.querySelector('.count-favorite').textContent;
  const countN = Number(count);
  if (countN < 1) {
    cartHeader.classList.add('_empty');
    title.innerHTML = `В избранном нет товаров <span>Добавьте необходимые товары в избранное</span>`;
  } else {
    cartHeader.classList.remove('_empty');
    title.innerHTML = `Всего в избранном`;
  }
}

checkFavorite();

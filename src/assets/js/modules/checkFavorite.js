const favoriteHeader = document.querySelector('.favorite-header');

export default function checkFavorite() {
  const title = favoriteHeader.querySelector('.actions-header__head-title');
  const count = favoriteHeader.querySelector('.count-favorite').textContent;
  const countN = Number(count);
  if (countN < 1) {
    favoriteHeader.classList.add('_empty');
    title.innerHTML = `В избранном нет товаров <span>Добавьте необходимые товары в избранное</span>`;
  } else {
    favoriteHeader.classList.remove('_empty');
    title.innerHTML = `Всего в избранном`;
  }
}
if (favoriteHeader) {
  checkFavorite();
}

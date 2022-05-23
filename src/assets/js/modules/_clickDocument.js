import closeDropMenu from './custom-drop-menu';
import closeStepMenu from './menu-steps-header';
import { checkOpenCatalog } from './burger';
import addToCart from './addToCart';
import addToFavorite from './addToFavorite';
import removeFromCart from './removeFromCart';
import removeFromFavorite from './removeFromFavorite';
import setCatalog from './switch-catalog';
import jsToggle from './clickToggle';

document.addEventListener('click', (e) => {
  const target = e.target;
  closeDropMenu(target);
  closeStepMenu(target);
  addToCart(target);
  addToFavorite(target);
  removeFromCart(target);
  removeFromFavorite(target);
  checkOpenCatalog();
  setCatalog(target);
  jsToggle(target);
});

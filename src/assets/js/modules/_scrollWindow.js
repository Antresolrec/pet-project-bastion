import scrollHeader from './header-scroll';
import setScroll from './scroll';

window.addEventListener('scroll', () => {
  scrollHeader();
  setScroll();
});

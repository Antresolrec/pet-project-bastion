function openNavSide(e) {
  const target = e.target;
  if (target.classList.contains('nav-page-side__title-mobile')) {
    this.classList.toggle('open');
  }
  if (!target.closest('.nav-page-side')) {
    this.classList.remove('open');
  }
}
const navSide = document.querySelector('.nav-page-side');
if (navSide) {
  window.addEventListener('click', openNavSide.bind(navSide));
}

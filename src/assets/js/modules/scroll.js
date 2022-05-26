function offsetPage(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

const scrItems = document.querySelectorAll('.js-anim');

export default function setScroll() {
  if (scrItems) {
    setTimeout(() => {
      const srcValue = window.scrollY;
      for (let index = 0; index < scrItems.length; index++) {
        const scrItem = scrItems[index];
        const scrItemOffset = offsetPage(scrItem).top;
        const scrItemHeight = scrItem.offsetHeight;
        let scrItemPoint =
          window.innerHeight - (window.innerHeight - scrItemHeight / 3);
        if (window.innerHeight > scrItemHeight) {
          scrItemPoint = window.innerHeight - scrItemHeight / 3;
        }
        if (
          srcValue > scrItemOffset - scrItemPoint &&
          srcValue < scrItemOffset + scrItemHeight
        ) {
          scrItem.classList.add('_show');
        }
      }
    }, 100);
  }
}

setScroll();

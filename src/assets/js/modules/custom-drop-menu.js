function getWindowForDropMenu(el) {
  const initSize = el.parentNode.getAttribute('data-max');
  if (initSize) {
    if (window.innerWidth <= initSize) {
      el.parentNode.classList.add('init');
    } else {
      el.parentNode.classList.remove('init');
    }
  } else {
    el.parentNode.classList.add('init');
  }
}

const customDropMenu = document.querySelectorAll('.js-drop-menu__trigger');

if (customDropMenu) {
  customDropMenu.forEach((dropMenu) => {
    getWindowForDropMenu(dropMenu);
    window.addEventListener('resize', () => {
      getWindowForDropMenu(dropMenu);
    });
    dropMenu.addEventListener('click', (event) => {
      const isCurOpen = event.currentTarget.parentNode.classList.contains(
        'js-drop-menu--open'
      );
      const target = event.currentTarget;
      if (isCurOpen) {
        target.parentNode.classList.remove('js-drop-menu--open');
      } else {
        customDropMenu.forEach((thisDropMenu) => {
          thisDropMenu.parentNode.classList.remove('js-drop-menu--open');
        });
        target.parentNode.classList.add('js-drop-menu--open');
      }
    });
  });

  window.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('.js-drop-menu--open')) {
      customDropMenu.forEach((dropMenu) => {
        dropMenu.parentNode.classList.remove('js-drop-menu--open');
      });
    }
  });
}

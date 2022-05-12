const subMenu = document.querySelectorAll('.js-submenu-trigger');
const openClass = '_open';

export default function closeStepMenu(target) {
  if (target.closest('.js-menu-step-back')) {
    const parent = target.closest('._open');
    parent.classList.remove(openClass);
  }
}

function closeStepMobile() {
  if (window.innerWidth < 768) {
    const menuWrapper = document.querySelector('.catalog-header__wrapper');
    const steps = menuWrapper.querySelectorAll('._open');
    if (steps) {
      steps.forEach((step) => {
        step.classList.remove(openClass);
      });
    }
  }
}

closeStepMobile();

window.addEventListener('resize', () => {
  closeStepMobile();
});

subMenu.forEach((link) => {
  link.addEventListener('click', (event) => {
    const isCurOpen =
      event.currentTarget.parentNode.classList.contains(openClass);
    const target = event.currentTarget;
    if (isCurOpen) {
      target.parentNode.classList.remove(openClass);
    } else {
      subMenu.forEach((linkThis) => {
        linkThis.parentNode.classList.remove(openClass);
      });
      target.parentNode.classList.add(openClass);
    }
  });
});

const lastMenu = document.querySelectorAll('.js-lastmenu-trigger');

lastMenu.forEach((link) => {
  link.addEventListener('click', (event) => {
    const isCurOpen =
      event.currentTarget.parentNode.classList.contains(openClass);
    const target = event.currentTarget;
    if (isCurOpen) {
      target.parentNode.classList.remove(openClass);
    } else {
      lastMenu.forEach((linkThis) => {
        linkThis.parentNode.classList.remove(openClass);
      });
      target.parentNode.classList.add(openClass);
    }
  });
});

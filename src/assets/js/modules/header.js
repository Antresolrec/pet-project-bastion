const navHeader = document.querySelector('.header__nav');
const iconBurger = document.querySelector('.menu-burger');
const stepMenu = document.querySelector('.submenu__step-back');
const searchHeaderIcon = document.querySelector(
  '.search-header__icon--trigger'
);

let unlock = true;

function bodyLockRemove(delay) {
  const body = document.querySelector('body');
  if (unlock) {
    const lockPadding = document.querySelectorAll('.js-lock-padding');
    setTimeout(() => {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      body.classList.remove('_lock');
    }, delay);

    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, delay);
  }
}

function bodyLockAdd(delay) {
  const body = document.querySelector('body');
  if (unlock) {
    const lockPadding = document.querySelectorAll('.js-lock-padding');
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = `${
        window.innerWidth - document.querySelector('.wrapper').offsetWidth
      }px`;
    }
    body.style.paddingRight = `${
      window.innerWidth - document.querySelector('.wrapper').offsetWidth
    }px`;
    body.classList.add('_lock');

    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, delay);
  }
}

function bodyLock(delay) {
  const body = document.querySelector('body');
  if (body.classList.contains('_lock')) {
    bodyLockRemove(delay);
  } else {
    bodyLockAdd(delay);
  }
}
function menuClose(delay) {
  const menuBody = document.querySelector('.menu-mobile');
  const headerBody = document.querySelector('.header__body');
  iconBurger.classList.remove('js-menu-open');
  menuBody.classList.remove('js-menu-open');
  headerBody.classList.remove('js-menu-open');
  bodyLockRemove(delay);
}

if (iconBurger != null) {
  const delay = 500;
  const menuBody = document.querySelector('.menu-mobile');
  const headerBody = document.querySelector('.header__body');
  iconBurger.addEventListener('click', (e) => {
    e.preventDefault();
    if (unlock) {
      bodyLock(delay);
      iconBurger.classList.toggle('js-menu-open');
      menuBody.classList.toggle('js-menu-open');
      headerBody.classList.toggle('js-menu-open');
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1400) {
      menuClose();
    }
  });
}

function openSearchHeader(el) {
  navHeader.classList.add('js-nav-hidden');
  if (window.innerWidth > 700) {
    setTimeout(() => {
      el.parentNode.classList.add('js-search-open');
    }, 1000);
  } else {
    el.parentNode.classList.add('js-search-open');
  }
}

function closeSearchHeader(e) {
  if (
    (!e.target.closest('.search-header') ||
      e.target.closest('.search-header__icon--close')) &&
    searchHeaderIcon.parentNode.classList.contains('js-search-open')
  ) {
    navHeader.classList.remove('js-nav-hidden');
    searchHeaderIcon.parentNode.classList.remove('js-search-open');
  }
}

if (searchHeaderIcon) {
  searchHeaderIcon.addEventListener('click', () => {
    openSearchHeader(searchHeaderIcon);
  });
  window.addEventListener('click', closeSearchHeader);
}

if (stepMenu) {
  const stepMenuParent = stepMenu.closest('.submenu--big');
  stepMenu.addEventListener('click', () => {
    if (stepMenuParent.classList.contains('js-submenu-open')) {
      stepMenuParent.classList.remove('js-submenu-open');
    }
  });
}

const subMenu = document.querySelectorAll('.submenu__trigger');

subMenu.forEach((link) => {
  link.addEventListener('click', (event) => {
    const isCurOpen = event.currentTarget.parentNode.classList.contains(
      'js-submenu-open'
    );
    const target = event.currentTarget;
    if (isCurOpen) {
      target.parentNode.classList.remove('js-submenu-open');
    } else {
      subMenu.forEach((linkThis) => {
        linkThis.parentNode.classList.remove('js-submenu-open');
      });
      target.parentNode.classList.add('js-submenu-open');
    }
  });
});

window.addEventListener('click', (e) => {
  const target = e.target;
  if (!target.closest('header')) {
    subMenu.forEach((link) => {
      link.parentNode.classList.remove('js-submenu-open');
    });
  }
});

const subList = document.querySelectorAll('.sublist__trigger');

subList.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = event.currentTarget;
    subList.forEach((linkThis) => {
      linkThis.parentNode.classList.remove('js-sublist-open');
    });
    target.parentNode.classList.add('js-sublist-open');
  });
});

function scrollHeader() {
  const srcValue = window.pageYOffset;
  const header = document.querySelector('.header__wrapper');
  if (header !== null) {
    if (srcValue > 100) {
      header.classList.add('js-header-scroll');
    } else {
      header.classList.remove('js-header-scroll');
    }
  }
}

window.addEventListener('scroll', scrollHeader);

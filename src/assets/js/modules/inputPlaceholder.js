function addClass(el) {
  el.classList.add('_fly');
}

function removeClass(el) {
  el.classList.remove('_fly');
}

function isAddClass(el, input) {
  if (input.value === '' || input.value) {
    addClass(el);
  } else {
    removeClass(el);
  }
}

function isRemoveClass(el, input) {
  if (input.value === '') {
    removeClass(el);
  }
}

function isCheckClass(el, input) {
  if (input.value) {
    addClass(el);
  }
}

const flyPlaceholders = document.querySelectorAll('.fly-placeholder');

if (flyPlaceholders) {
  flyPlaceholders.forEach((el) => {
    const input = el.querySelector('.label-form__input');

    ['focus', 'input', 'change'].forEach((evt) => {
      input.addEventListener(evt, () => {
        isAddClass(el, input);
      });
    });

    ['blur', 'change'].forEach((evt) => {
      input.addEventListener(evt, () => {
        isRemoveClass(el, input);
      });
    });

    isCheckClass(el, input);
  });
}

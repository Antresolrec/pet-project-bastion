const locationTrigger = document.querySelector('.location-page__trigger');

export function toggleLocationList(target) {
  if (target.closest('.location-page__trigger')) {
    target.closest('.location-page').classList.toggle('_open');
  } else if (locationTrigger) {
    locationTrigger.closest('.location-page').classList.remove('_open');
  }
}

export function setLocation(target) {
  if (locationTrigger) {
    const container = document.querySelector('.location-page');
    const text = container.querySelector('.location-page__trigger span');
    let getValue = text.textContent;
    if (target && target.closest('.location-page__list li')) {
      getValue = target.textContent;
    }
    const input = container.querySelector('.location-page__input');
    const link = container.querySelectorAll('.location-page__list li');
    link.forEach((el) => {
      const linkText = el.textContent;
      if (getValue === linkText) {
        el.classList.add('_stop');
      } else {
        el.classList.remove('_stop');
      }
    });
    input.value = getValue;
    text.innerText = `${getValue}`;
  }
}
setLocation();

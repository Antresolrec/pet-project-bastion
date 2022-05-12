const locationTrigger = document.querySelector('.location-page__trigger');

function closeLocationList(target) {
  if (!target.closest('.location-page__trigger')) {
    locationTrigger.parentNode.classList.remove('_open');
  }
}

function setLocation(target) {
  let container = document.querySelector('.location-page');
  const text = container.querySelector('.location-page__trigger span');
  let getValue = text.textContent;
  if (target) {
    container = target.closest('.location-page');
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

if (locationTrigger) {
  setLocation();

  locationTrigger.addEventListener('click', (e) => {
    const isCurOpen = e.currentTarget.parentNode.classList.contains('_open');
    const target = e.currentTarget;
    if (isCurOpen) {
      target.parentNode.classList.remove('_open');
    } else {
      locationTrigger.parentNode.classList.remove('_open');
      target.parentNode.classList.add('_open');
    }
  });

  document.addEventListener('click', (e) => {
    const dropTarget = e.target;
    closeLocationList(dropTarget);
    if (dropTarget.closest('.location-page__list li')) {
      setLocation(dropTarget);
    }
  });
}

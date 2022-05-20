import SlimSelect from 'slim-select';

function createSelect(el) {
  new SlimSelect({
    select: el,
    showSearch: false,
    hideSelectedOption: true,
  });
}
function destroySelect(el) {
  el.slim.destroy();
}
function setSelect(el) {
  el.slim.set();
}
function initSelect(block) {
  if (block != null) {
    const customSelects = block.querySelectorAll('.js-select');
    customSelects.forEach((select) => {
      createSelect(select);
    });
    return true;
  }
  const customSelects = document.querySelectorAll('.js-select');
  customSelects.forEach((select) => {
    createSelect(select);
  });
  return true;
}
initSelect();

function resetSelect(block) {
  if (block != null) {
    const customSelects = block.querySelectorAll('select');
    customSelects.forEach((select) => {
      destroySelect(select);
    });
    return true;
  }
  const customSelects = document.querySelectorAll('select');
  customSelects.forEach((select) => {
    destroySelect(select);
  });
  return true;
}

function clearSelect(block) {
  if (block != null) {
    const customSelects = block.querySelectorAll('select');
    customSelects.forEach((select) => {
      setSelect(select);
    });
    return true;
  }
  const customSelects = document.querySelectorAll('select');
  customSelects.forEach((select) => {
    setSelect(select);
  });
  return true;
}

window.initSelects = initSelect;
window.resetSelects = resetSelect;
window.clearSelects = clearSelect;

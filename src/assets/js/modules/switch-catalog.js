const catalogRow = document.querySelector('.js-catalog-row');

export default function setCatalog(target) {
  if (catalogRow) {
    if (target.closest('.cards-switch-list')) {
      catalogRow.classList.add('_list');
    } else if (target.closest('.cards-switch-table')) {
      catalogRow.classList.remove('_list');
    }
  }
}

function checkCatalog() {
  const switchToList = document.querySelector('.cards-switch-list');
  if (switchToList.checked) {
    catalogRow.classList.add('_list');
  } else {
    catalogRow.classList.remove('_list');
  }
}

if (catalogRow) {
  checkCatalog();
}

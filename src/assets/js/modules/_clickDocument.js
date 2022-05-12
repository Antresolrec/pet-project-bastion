import closeDropMenu from './custom-drop-menu';
import closeStepMenu from './menu-steps-header';

document.addEventListener('click', (e) => {
  const target = e.target;
  closeDropMenu(target);
  closeStepMenu(target);
});

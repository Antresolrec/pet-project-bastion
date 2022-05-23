export default function jsToggle(target) {
  if (target.closest('.js-toggle__trigger')) {
    const section = target.closest('.js-toggle');
    section.classList.toggle('_show');
  }
}

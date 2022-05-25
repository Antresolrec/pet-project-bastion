export default function deleteCard(target) {
  if (target.closest('.js-delete')) {
    const card = target.closest('.item-cart');
    card.remove();
  }
  if (target.closest('.js-delete-full')) {
    const cards = document.querySelectorAll('.item-cart');
    cards.forEach((card) => {
      card.remove();
    });
  }
}

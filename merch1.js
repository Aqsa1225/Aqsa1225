
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const message = document.createElement('p');
      message.textContent = 'Thank you for your purchase!';
      message.classList.add('purchase-message');

      button.parentNode.appendChild(message);
      button.disabled = true;
    });
  });
});


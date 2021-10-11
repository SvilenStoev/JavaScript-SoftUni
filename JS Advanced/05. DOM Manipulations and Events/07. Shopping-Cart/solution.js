function solve() {
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkOut);

   const textAreaEl = document.getElementsByTagName('textarea')[0];
   const cart = [];

   function onClick(ev) {
      if (ev.target.tagName == 'BUTTON' && ev.target.className == 'add-product') {
         const prodEl = ev.target.parentNode.parentNode;
         const name = prodEl.querySelector('.product-title').textContent;
         const price = Number(prodEl.querySelector('.product-line-price').textContent);

         cart.push({
            name,
            price
         });

         textAreaEl.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      }
   }

   function checkOut() {
      const uniqueProducts = new Set();
      cart.forEach(p => uniqueProducts.add(p.name));

      const totalPrice = cart.reduce((t, p) => t + p.price, 0);

      textAreaEl.value += `You bought ${[...uniqueProducts.keys()].join(', ')} for ${totalPrice.toFixed(2)}.`;

      Array.from(document.querySelectorAll('button')).forEach(b => b.disabled = true);
   }
}
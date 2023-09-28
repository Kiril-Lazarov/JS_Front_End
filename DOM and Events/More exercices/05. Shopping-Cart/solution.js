function solve() {
   let cartInfo = Array.from(document.querySelectorAll('body > div > .product'));
   let buttonCheckout = document.getElementsByClassName('checkout')[0];
   let outputTextArea = document.getElementsByTagName('textarea')[0];

   buttonCheckout.addEventListener('click', checkoutHandler)
   let cart = {
      Tomatoes: 0,
      Bread: 0,
      Milk: 0,
      productBought: new Set()
   };
   cartInfo.forEach(element => {

      element.addEventListener('click', clickHandler);
   })

   function clickHandler(event) {
      let button = event.target;
      let buttonParent = button.parentElement.parentElement;
      let title = buttonParent.children[1].children[0].textContent;
      cart.productBought.add(title);
      let price = Number(buttonParent.children[3].textContent);
      outputTextArea.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`

      cart[title] += price;

   }

   function checkoutHandler(event) {
      let total = (cart.Bread + cart.Milk + cart.Tomatoes).toFixed(2);
      outputTextArea.value += `You bought ${Array.from(cart.productBought).join(', ')} for ${total}.`
      let allButtons = Array.from(document.getElementsByTagName('button'));
      for (let button of allButtons) {
         button.disabled = true;
      }
   }
}
function create(words) {
   let divParent = document.getElementById('content');

   for(let el of words){
      let newDiv = document.createElement('div');

      let newParagraph = document.createElement('p');
      newParagraph.style.display = 'none';
      newParagraph.textContent = el;
      newDiv.appendChild(newParagraph);


      newDiv.addEventListener('click', addDiv)
      divParent.appendChild(newDiv);

   }

   function addDiv(event){
      let currDiv = event.currentTarget;
      console.log(currDiv.children[0]);
      currDiv.children[0].style.display = 'inline';
   }
}
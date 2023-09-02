function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let previousClasses = document.getElementsByClassName('select');
      let tableData = document.getElementsByTagName('td');
      let input = document.getElementById('searchField');
      const regex = new RegExp(input.value);

      if(previousClasses.length !== 0){
         for(let el of previousClasses){
            el.classList.remove('select');
         }
      }

      for(let row of tableData){



         if(regex.test(row.textContent)){
            row.parentElement.classList.add('select');

         }
      }
      input.value= '';

   }
}
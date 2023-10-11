function search() {
   let patern = document.getElementById('searchText').value;
   const regex = new RegExp(patern);
   let towns = Array.from(document.getElementById('towns').children);
   let count = 0;

   towns.forEach(element => {
      console.log(regex.test(element.textContent));
      if(element.hasAttribute('style')){
         element.removeAttribute('style');
      }
      if(regex.test(element.textContent)){
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         count += 1;
      }
      document.getElementById('result').textContent = `${count} matches found`
   })
}

function solve() {
  let input = document.getElementById('text').value.toLowerCase();
  let textCase = document.getElementById('naming-convention').value;
  let resultContainer = document.getElementById('result');

  if(textCase !== 'Camel Case' && textCase!=='Pascal Case'){
    resultContainer.textContent = 'Error!';
  }
  else{
    let inputArray = input.split(' ');

    for(let i = 0; i < inputArray.length; i++){
     
      if(i===0 && textCase === 'Camel Case'){
        continue;
      }
      else{
        let upperChar = inputArray[i][0].toUpperCase();
        let newWord = upperChar + inputArray[i].slice(1,inputArray[i].length);
        inputArray[i] = newWord;
      }

    }
 
    resultContainer.textContent = inputArray.join('');
  }

 
}
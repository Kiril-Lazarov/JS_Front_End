function solve() {
    let number = document.getElementById('input');
    
    let selectMenuTo = document.getElementById('selectMenuTo');
    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', optionHandler);

    let binChoice = selectMenuTo.children[0];
    binChoice.value = 'binary';
   
    let hexChoice = document.createElement('option');
    hexChoice.value = 'hexadecimal';
    hexChoice.textContent= 'Hexadecimal';
    selectMenuTo.appendChild(hexChoice);
    binChoice.textContent = 'Binary';

    function optionHandler(){
        let choice = selectMenuTo.value;
        let result;
        if(choice==='binary'){
            result = Number(number.value).toString(2);
        }
        else{
            result = Number(number.value).toString(16).toUpperCase();
        }
        let resultField = document.getElementById('result');
        resultField.value = result
    }
}


function attachEventsListeners() {
    const inputs = Array.from(document.querySelectorAll('input[type="button"]'));
    let inputsText = Array.from(document.querySelectorAll('input[type="text"]'))

    inputs.forEach(element => {
        element.addEventListener('click', convertHandler);
    })

    function convertAll(day){
        return [day, day*24, day*1440,day*86400]
    }


    function convertHandler(event){
        let el = event.target;
        let elementId = event.target.id;
        let inputTextName = elementId.slice(0, elementId.length-3);
        let valueToConvert = document.getElementById(inputTextName).value;
        let finalValuesList = convertAll(convertToDays(inputTextName, valueToConvert));
    
        for(let i =0; i<inputsText.length; i++){
            inputsText[i].value = finalValuesList[i];
        }

}
    function convertToDays(key, value){
        let factor = 1;
        if(key==='hours'){
            factor = 1/24;
        }
        else if(key==='minutes'){
            factor = 1/1440;
        }
        else if(key==='seconds'){
            factor = 1/86400;
        }
        return Number(value)*factor;
    }
}
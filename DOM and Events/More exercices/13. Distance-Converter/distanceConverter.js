function attachEventsListeners() {
    let inputUnits = document.getElementById('inputUnits');
    let inputDistance = document.getElementById('inputDistance');
    let outputUnits = document.getElementById('outputUnits');
    let outputDistance = document.getElementById('outputDistance');
    let button = document.getElementById('convert');
    button.addEventListener('click', convertHandler);
 

    let convertToMeters = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254,
    }

    function convertHandler(){
        let convertedInputToMeters = Number(inputDistance.value) * convertToMeters[inputUnits.value]
        let result = convertedInputToMeters/convertToMeters[outputUnits.value]
        
        outputDistance.value = result;
    }





}   


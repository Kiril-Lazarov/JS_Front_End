function subtract() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let result = firstNumber - secondNumber;
    let diff = document.getElementById('result');
    diff.textContent = firstNumber - secondNumber
    console.log(firstNumber,secondNumber);
}
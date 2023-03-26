function sameNumbers(number) {
    let total=0;
    let stringNumber = number.toString(); 
    let firstDigit = stringNumber[0];
    let digitCount = 0;
    let lengthString = 0;

    for(let el of stringNumber.split('')) {
        total += parseInt(el);
        lengthString += 1
        if (el===firstDigit) {
            digitCount +=1
        }     
    }
    console.log(digitCount===lengthString)
    console.log(total)   
    
}


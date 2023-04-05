function sumDigits(number) {
    let total=0;
    let stringNumber = number.toString(); 
  
    for(let el of stringNumber.split('')) {
        total += parseInt(el);     
    }
    console.log(total)
}



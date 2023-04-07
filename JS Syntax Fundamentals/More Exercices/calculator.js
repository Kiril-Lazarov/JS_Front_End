function calcualtor(num1, operator,num2) {
    let result;
    switch(operator){
        case '+': result = num1 + num2;
        break;
        case '-': result = num1 - num2;
        break;
        case '/': result = num1 / num2;
        break;
        case '*': result = num1 * num2;
        break; 
    }
    console.log(result.toFixed(2))
}

calcualtor(5, '+', 10)
calcualtor(25.5, '-', 3)

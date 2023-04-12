function validityChecker(x1,y1,x2,y2){
    let firstPair = Math.sqrt(x1**2 + y1**2);
    let secondPair = Math.sqrt(x2**2 + y2**2);
    let thirdPair =  Math.sqrt((x2-x1)**2 +(y2-y1)**2);
    let isValid;
    if (firstPair===Math.floor(firstPair)){
        isValid = 'is valid';
        }
    else{
        isValid = 'is invalid';
    }
    console.log(`{${x1}, ${y1}} to {0, 0} ${isValid}`);
    if (secondPair===Math.floor(secondPair)){
        isValid = 'is valid';
        }
    else{
        isValid = 'is invalid';
    }
    console.log(`{${x2}, ${y2}} to {0, 0} ${isValid}`);
    if (thirdPair===Math.floor(thirdPair)){
        isValid = 'is valid';
        }
    else{
        isValid = 'is invalid';
    }
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} ${isValid}`);   
}


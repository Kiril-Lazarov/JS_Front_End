function circleArea (number) {
    let result;
    if (typeof(number) === 'number') {
        result = number ** 2 * Math.PI
        console.log(`${result.toFixed(2)}`)
    }
    else if (typeof(number)!=='number'){
        console.log(`We can not calculate the circle area, because we receive a ${typeof(number)}.`)
    };
}



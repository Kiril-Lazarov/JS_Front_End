function solve(array) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let el of array) {
        if (el % 2 === 0) {
            sumEven += el
        }
        else {
            sumOdd += el
        };
    }
    console.log(sumEven - sumOdd)
}


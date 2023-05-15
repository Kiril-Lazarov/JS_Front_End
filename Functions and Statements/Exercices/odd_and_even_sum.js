function oddAndEvenSum(number) {
    number = number.toString();
    let digitList = [];
    for (let num of number) {
         digitList.push(Number(num));
        
    }
    function sum(arr) {
        return arr.reduce(function (a, b) {
           return a + b;
        }, 0);
     }

    let oddSum = sum(digitList.filter(element => element % 2===1))
    let evenSum = sum(digitList.filter(element =>element % 2===0))
   
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)


}

oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)
function sortNumbers(arr) {
    let sortArr = arr.sort(function(a, b){return a - b});
    let newArr = []
    while(sortArr) {
        minEl = sortArr.shift()
        newArr.push(minEl)
        if(sortArr.length === 0){
            break
        }
        maxEl = sortArr.pop()        
        newArr.push(maxEl)
        if(sortArr.length === 0){
            break
        }
    }
   
    return newArr
    
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])


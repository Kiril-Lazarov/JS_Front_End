function printElement(arr, step) {
    let newArray=[]
    for(let i=0; i<=arr.length -1; i+= step ){
        newArray.push(arr[i])
     
    }
    return newArray
}


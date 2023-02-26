function reverseArray (number, array) {
   
    let partialArray = array.slice(0,number)
    partialArray.reverse()
    console.log(partialArray.join(' '))
}

reverseArray(4, [-1, 20, 99, 5])

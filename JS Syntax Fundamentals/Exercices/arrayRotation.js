function arrayRotation(arr, number) {
    let el;
    for(let i=0; i<number;i++){
        el = arr.shift()
        arr.push(el)
    }
    console.log(arr.join(' '))
}

arrayRotation([51, 47, 32, 61, 21], 2)
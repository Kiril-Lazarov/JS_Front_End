function listOfNames(arr) {
    let sortArr = arr.sort();

    for(let i=0;i<=sortArr.length-1;i++)
        console.log(`${i+1}.${sortArr[i]}`);
}

listOfNames(['a','c', 'f'])
function printMatrix(num) {
    let line = []
    for(let i = 0; i<num; i++){
        line[i] = []
        for(let j = 0; j<num; j++){
            line[i].push(num.toString());
        }
    }
    line.forEach(element => {
        console.log(element.join(' '))
    });
}


printMatrix(7)
function printAndSum(start, end) {
    let sequence = [];
    let sum = 0;
    for(i=start; i<=end; i++) {
        sequence.push(i)
        sum += i
    }
    console.log(sequence.join(' '))
    console.log(`Sum: ${sum}`)
}


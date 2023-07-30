function sumTable() {
    let data = Array.from(document.querySelectorAll('body > table > tbody ' +
        '> tr:not(:nth-child(1)) > td:nth-child(2)'));
    let sum = 0;
    for(let child of data){
        sum += Number(child.textContent);
    }
    let total = document.getElementById('sum');
    total.textContent = sum;
}
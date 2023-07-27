function colorize() {
    let tableData = document.querySelectorAll('body > table > tbody > tr:nth-child(even)');
    tableData.style = "Teal";
    for (let element of tableData){
        element.style.backgroundColor = 'Teal';
    }
}
function generateReport() {
    let objectArray = [];
    let columnIndex = [];
    let theads = Array.from(document.querySelectorAll('thead > tr > th'));
    for (let i = 0; i < theads.length; i++) {
        if (theads[i].children[0].checked) {
            columnIndex.push([theads[i].children[0].name, i])
        }
    }
    let tbody = Array.from(document.getElementsByTagName('tbody')[0].children);

    for (let element of tbody) {

        let tempData = {};
        for (let [column, index] of columnIndex) {
            tempData[column] = element.children[index].textContent;
        }
        objectArray.push(tempData);
    }
    let finalJSON = JSON.stringify(objectArray);

    let outputField = document.getElementById('output');
    outputField.textContent = finalJSON;
}
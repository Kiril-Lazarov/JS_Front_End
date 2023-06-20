function deleteByEmail() {
    let textInput = document.getElementsByName('email')[0].value;
    let childElements = document.querySelectorAll('#customers > tbody > tr > td:nth-child(even)');
    console.log(textInput);
    // console.log(Array.from(childElements)[0].textContent);
    for(let element of Array.from(childElements)){
        if(textInput === element.textContent){
            let parentNode = element.parentNode;
            console.log(`Parent Node: ${parentNode.textContent}`)
            parentNode.parentNode.removeChild(parentNode);
            document.getElementById('result').textContent = 'Deleted.';
            return;
        }
        document.getElementById('result').textContent = 'Not found.';
    }
}
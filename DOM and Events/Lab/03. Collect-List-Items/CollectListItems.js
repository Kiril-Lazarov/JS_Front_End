function extractText() {
    const items = document.querySelectorAll('ul#items li');
    let result = document.querySelector('#result');

    for(let element of items){
        result.value += element.textContent + '\n';
    }
}
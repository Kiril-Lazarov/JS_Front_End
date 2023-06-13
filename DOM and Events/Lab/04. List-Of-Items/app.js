function addItem() {

    let inEl = document.getElementById('newItemText').value;
    let ulEl = document.getElementById('items');
    let newLi = document.createElement('li');
    let newContent = ulEl.appendChild(newLi);
    newContent.textContent = inEl;
    document.getElementById('newItemText').value = '';
}
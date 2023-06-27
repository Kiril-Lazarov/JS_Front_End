function addItem() {
    let cellText = document.getElementById('newItemText').value;
    let newLi = document.createElement('li');
    newLi.textContent = cellText;
    let newLiParent = document.querySelector('#items');
    document.getElementById('newItemText').value = '';
    let anchor = document.createElement('a');
    anchor.href = '#';
    anchor.addEventListener('click', deleteItem);
    anchor.textContent = '[Delete]';
    newLi.appendChild(anchor);
    console.log(newLi);
    console.log(newLiParent);
    newLiParent.appendChild(newLi)

    function deleteItem(e){
        console.log(e.currentTarget);
        let elToRemove = e.currentTarget.parentElement;
        elToRemove.remove();
    }
}
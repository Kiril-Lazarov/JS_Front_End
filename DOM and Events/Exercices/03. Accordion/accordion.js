function toggle() {
    let button = document.getElementsByClassName('button')[0];
     let hiddenText = document.getElementById('extra');
    console.log(button);
    if(button.textContent === 'More'){
        button.textContent = 'Less';
        hiddenText.style.display = 'block';

    }
    else if(button.textContent === 'Less'){
        button.textContent = 'More';
        hiddenText.style.display = 'none';
    }
}
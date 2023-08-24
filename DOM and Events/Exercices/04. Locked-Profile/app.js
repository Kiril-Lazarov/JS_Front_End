function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('button'));

    let index = 0;
    buttons.forEach(element =>{
        element.addEventListener('click', userHandler);
        index +=1;
    })


    function userHandler(event){
        let currButtonState = event.target;
        let buttonParent = event.target.parentElement;
        let divId = buttonParent.childNodes[18].id;



        if (!buttonParent.getElementsByTagName('input')[0].checked){
            let divEl = document.getElementById(`${divId}`);
            if(currButtonState.textContent==='Show more'){
                divEl.style.display = 'inline';
                currButtonState.textContent = 'Hide it';
            }
            else if(currButtonState.textContent==='Hide it'){
                divEl.style.display = 'none';
                currButtonState.textContent = 'Show more';
            }

        }

    }
}
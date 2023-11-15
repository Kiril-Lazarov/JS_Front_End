function solve() {
    let buttons = document.getElementsByTagName('button');

    buttons[0].addEventListener('click', quickCheckHandler)
    buttons[1].addEventListener('click', clearHandler)
    let paragraph = document.getElementsByTagName('p')[0];

    let tableBorder = document.getElementsByTagName('table')[0];
    let sudomuValues = Array.from(document.querySelectorAll('#exercise > table > tbody > tr > td'));
     

    function quickCheckHandler() {
        
        let rowArray = [];
        let num = 0;
        let isRightNumbers = true;
        for (let i = 0; i < 9; i++) {
            num = sudomuValues[i].children[0].value;
            if(i===0){
                rowArray.push(num);
            }
            if (sudomuValues[i].children[0].value < sudomuValues[i].children[0].min || sudomuValues[i].children[0].value > sudomuValues[i].children[0].max) {
         
                isRightNumbers = false;

            }
            else {
                console.log(`If row array length: ${rowArray.length}`)
                if (rowArray.length !== 3) {
                    if(i!==0){
                    rowArray.push(num);
             
                    }
                }
                else {
                    let setNumbers = new Set(rowArray);
                    console.log(`From set: ${[...setNumbers]}`)
                    if ([...setNumbers].length !== 3) {
                        isRightNumbers = false;
                    }
                    else {
                        rowArray = [num];
                    }
                }
            }
            if (!isRightNumbers) {

                tableBorder.style.border = "2px solid red";
                paragraph.textContent = "NOP! You are not done yet...";
                paragraph.style.color = 'red'
        
                break;
            }
        };
        let tableRows = Array.from(document.querySelectorAll('#exercise > table > tbody > tr'));
        let colArray = [];
        for(let i = 0; i<3;i++){
            for(let j = 0; j<3;j++){
            colArray.push(tableRows[j].children[i].children[0].value);
            }
            let setNumbers = new Set(colArray);
            if ([...setNumbers].length !== 3) {
                isRightNumbers = false;
            }
            colArray = [];
            if (!isRightNumbers) {

                tableBorder.style.border = "2px solid red";
                paragraph.textContent = "NOP! You are not done yet...";
                paragraph.style.color = 'red'
         
                break;
            }

        }

        if (isRightNumbers) {
            tableBorder.style.border = "2px solid green";
            paragraph.textContent = "You solve it! Congratulations!";
            paragraph.style.color = 'green';
            }
        
    }
    function clearHandler() {
        sudomuValues.forEach(element =>{
       
            element.children[0].value = '';
        })
        paragraph.textContent = '';
        paragraph.removeAttribute('style');
        tableBorder.removeAttribute('style');
    }
}
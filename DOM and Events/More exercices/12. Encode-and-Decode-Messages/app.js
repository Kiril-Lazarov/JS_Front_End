function encodeAndDecodeMessages() {
    let textareas = document.getElementsByTagName('textarea');
    let [inputArea, outputArea] = textareas;
 
    let resultMessage;
    // console.log(inputArea.value, outputArea.value);
    let allButtons = Array.from(document.getElementsByTagName('button'));
    allButtons.forEach(element => {
        element.addEventListener('click', codeDecodeHandler);
    });

    function codeDecodeHandler(event){
        const key = event.target.textContent;
        if(key==='Encode and send it'){
            resultMessage = transformChars(inputArea.value, key);
            inputArea.value = '';
            outputArea.value = resultMessage;   
            // console.log(`Result message: ${resultMessage}`)
        }
        else{
            let outputMessage = transformChars(resultMessage, key);
                outputArea.value = outputMessage;
                console.log(`outputArea.value: ${outputArea.value}`)
            }
        }


    function transformChars(text, key){
        let newMessage = '';
        let currentCharNum;
        // console.log(inputArea.value);
        Array.from(text).forEach(char =>{
            currentCharNum = char.charCodeAt();
            if(key==='Encode and send it'){
                currentCharNum+=1;
            }
            else{
                currentCharNum -= 1;
            }
            newMessage += String.fromCharCode(currentCharNum);
        })
        return newMessage;
    }
}


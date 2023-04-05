function stringSubstring(word, text) {
    let lowerWord = word.toLowerCase();
    let textArray = text.split(' ');
    let isFound = false
    for (let element of textArray) {
        if(element.toLowerCase()===lowerWord){
            isFound = true
            break;
            }
 
    }
    if(isFound) {
        console.log(lowerWord);
    }
else{
        console.log(`${lowerWord} not found!`);
    }
}

stringSubstring('javascript',
'JavaScript is the best programming language'
)

stringSubstring('python',
'JavaScript is the best programming language'

)
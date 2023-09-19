function extract(content) {
    let sentence = document.getElementById(content);
    let extractedWords = [];
    let currWord = '';
    let matchedParenthesis = false;
    for(let char of sentence.textContent){
        if(char==='(' && !matchedParenthesis) {
            matchedParenthesis = true;
        }

        else if(char === ')'){
            currWord = currWord.replace('(', '');
            extractedWords.push(currWord);
            currWord = '';
            matchedParenthesis = false;
        }
        else if(matchedParenthesis){
            currWord+=char;
        }
    }
    console.log(extractedWords.join('; '));
    return extractedWords.join('; ');
}


// let text = extract("content");
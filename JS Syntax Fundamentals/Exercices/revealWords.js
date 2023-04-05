function revealWords(words, expression) {
    let wordsList = words.split(', ');
    let expressionList = expression.split(' ');
    let pattern;
    for(let el of wordsList){
        pattern = '*'.repeat(el.length);
        for (let i = 0; i<=expressionList.length; i++){
            if(expressionList[i] === pattern){
                expressionList[i] = el;
            }
        }
    }
    console.log(expressionList.join(' '))
}


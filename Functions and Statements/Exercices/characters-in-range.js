function charactersRange(char1, char2){
    asciiChar1 = char1.charCodeAt(0);
    asciiChar2 = char2.charCodeAt(0);
    let start = asciiChar1 < asciiChar2 ? asciiChar1: asciiChar2;
    let end = start === asciiChar1 ? asciiChar2: asciiChar1;
    let charsList = []
    for (let i = start+1; i <= end -1; i++){
        charsList.push(String.fromCharCode(i))
    } 
    
    console.log(charsList.join(' '))
}

charactersRange('#',':')
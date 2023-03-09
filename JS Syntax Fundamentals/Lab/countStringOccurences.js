function countOccurences(text, word) {
    let count=0;
    for(let el of text.split(' ')){
        if(el==word){
            count+=1            
        };     
    };
    console.log(count);
}


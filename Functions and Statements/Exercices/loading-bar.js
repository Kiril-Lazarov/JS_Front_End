function loadingBar(number){
    let string = '';
    let index = number/10;
    for(let i = 0; i< 10; i++){
        string += i < index ? '%': '.' 
    }
    if ([...string].filter(char => char==='%').length !== 10){        
        console.log(`${number}% [${string}]`)
        console.log('Still loading...');
    }
    else{
        console.log('100% Complete!')
    }
}

loadingBar(30)
loadingBar(50)
loadingBar(100)
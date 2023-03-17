function hashTag(expression) {
    let expressionList = expression.split(' ')

    for(let el of expressionList){
        if(el.startsWith('#') && el.length >1){
            elToPrint = el.substring(1, el.length)
            elUpper = elToPrint.toLowerCase()
            let isForPrint = true
            for(let elem of elUpper){
                if (elem.charCodeAt()<97 || elem.charAt()>122 ){
                    isForPrint = false
                    break
                }
            }
            if(isForPrint){
                console.log(elToPrint)
            }
        }
    }
}

hashTag('The symbol # is known #var^iously in English-speaking #regions as the #number sign')
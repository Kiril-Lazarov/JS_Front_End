function splitMe(text) {
    let newString = ''
    for(let char of text){
        charValue = char.charCodeAt()
        if (charValue>=65 && charValue<=90){
            newString += ' ' + char
        }
        else{
            newString += char
        }
    }
    newString = newString.trim()
    stringArray = newString.split(' ')
    console.log(stringArray.join(', '))
}

splitMe('SplitMeIfYouCanHaHaYouCantOrYouCan')
splitMe('HoldTheDoor')
splitMe('ThisIsSoAnnoyingToDo')
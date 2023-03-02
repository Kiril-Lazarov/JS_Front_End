function substring(word, startIndex,count) {
    let end = startIndex + count
    let result = word.substring(startIndex, end+1)
    console.log(result)
}

substring('ASentence', 1, 8)
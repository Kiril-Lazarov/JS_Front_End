function bitcoinMining(gramsOfGOld){
    let totalMoney = 0;
    const priceBitcoin =  11949.16;
    const priceGold = 67.51;
    let days = 0;
    let firstDay = 0;
    let currBitcoins = 0;
    let isFirstBitcoinGained = false;
    for(let grams of gramsOfGOld){
        days += 1
        if(days%3 === 0){
            grams *= 0.7;
        }
        totalMoney += grams*priceGold;
       
        currBitcoins = Math.floor(totalMoney/priceBitcoin);
        if (currBitcoins>=1 && isFirstBitcoinGained===false){
           isFirstBitcoinGained = true;
           firstDay = days; 
           
        }

    }
    console.log(`Bought bitcoins: ${currBitcoins}`)
    if (isFirstBitcoinGained){
        console.log( `Day of the first purchased bitcoin: ${firstDay}`)
    }
    console.log(`Left money: ${(totalMoney%priceBitcoin).toFixed(2)} lv.`)
}
bitcoinMining([100, 200, 300])
bitcoinMining([50, 100])
bitcoinMining([3124.15, 504.212, 2511.124])


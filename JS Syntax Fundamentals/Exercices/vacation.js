function vacation(peopleCount,type,day) {
    let totalPrice;
    let priceForPerson;
    let discount=1;
    if(type==='Students') {
        if(day==='Friday') {
            priceForPerson = 8.45;
        }
        else if(day==='Saturday') {
            priceForPerson = 9.80;
        }
        else if(day==='Sunday') {
            priceForPerson = 10.46;
        }
        if(peopleCount>=30) {
            discount = 0.85;
        }
    }
    else if(type==='Business') {
        if(day==='Friday') {
            priceForPerson = 10.90;
        }
        else if(day==='Saturday') {
            priceForPerson = 15.60;
        }
        else if(day==='Sunday') {
            priceForPerson = 16;
        }
        if(peopleCount>=100) {
            peopleCount-=10;
        }
    }
    else if(type==='Regular') {
        if(day==='Friday') {
            priceForPerson = 15;
        }
        else if(day==='Saturday') {
            priceForPerson = 20;
        }
        else if(day==='Sunday') {
            priceForPerson = 22.50;
        }
        if(peopleCount>=10 && peopleCount<=20) {
            discount = 0.95
        }
    }
    totalPrice = peopleCount * priceForPerson * discount

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}



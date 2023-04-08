function extractspice(yield) {
    let total = 0;
    const workersConsumation = 26;
    let storage = 0;
    let days = 0;
    while (yield>=100){
     
        storage += workersConsumation
        total += yield - workersConsumation;
        yield -= 10;
        days += 1;
    }
    total -= workersConsumation
    if (total <= 0) {
        total = 0;
    }
    console.log(days);
    console.log(total);
}

extractspice(100)
extractspice(450)
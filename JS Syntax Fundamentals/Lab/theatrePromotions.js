function solve(typeOfDay, age) {
    let result;
    if (age<0 || age>122) {
        result = 'Error!'
    }
    else if (age>=0 && age<=18) {
        if (typeOfDay==='Weekday') {
            result=12
        }
        else if (typeOfDay==='Weekend') {
            result=15
        }
        else if (typeOfDay==='Holiday') {
            result = 5
        };
    }
    else if (age>18 && age<=64) {
        if (typeOfDay==='Weekday') {
            result=18
        }
        else if (typeOfDay==='Weekend') {
            result=20
        }
        else if (typeOfDay==='Holiday') {
            result = 12
        };
    }
    else if (age>64 && age<=122) {
        if (typeOfDay==='Weekday') {
            result=12
        }
        else if (typeOfDay==='Weekend') {
            result=15
        }
        else if (typeOfDay==='Holiday') {
            result = 10
        };
    }
    if (result!=='Error!') {
    console.log(`${result}$`)
    }
    else {
        console.log(`${result}`)
    }
}

solve('Holiday', 15)
function cookingByNumbers(
    number, op1,op2, op3,op4,op5
){
    let operations= [op1,op2, op3,op4,op5]
    number = parseInt(number)
  
    for (let el of operations){
        if (el==='chop'){
            number/=2
        }
        else if (el==='dice'){
            number = Math.sqrt(number)
        }
        else if (el==='spice'){
            number += 1
        }
        else if (el==='bake'){
            number*=3
        }
        else if (el==='fillet'){
            number*=0.80
        }
        console.log(number)
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
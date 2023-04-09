function pyramidMaterials(base, increment){
    let stone = 0;
    let currStone;
    let marble = 0;
    let currMarble;
    let lapisLazuli = 0;
    let currLapisLazuli;
    let gold = 0;

    let lastStage;
    let step = 0
    let area;
    if (base%2===0){
        lastStage= 2;
    }
    else{
        lastStage = 1;
    }
    for(let i = base;i>=lastStage;i-=2){
        step+=1;
        if (step%5===0 && i!==lastStage){
         
            area = i**2;
            currStone = (i-2)**2;
            currLapisLazuli = area - currStone;
            stone+= currStone * increment;
            lapisLazuli += currLapisLazuli * increment;
        }
        else if(i===lastStage){
            area = i**2;
            gold += area * increment;
        }
        else{
            area = i**2;
            currStone = (i-2)**2;
            currMarble = area - currStone;
            stone += currStone * increment;
            marble += currMarble * increment;
        }
        
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step*increment)}`);
}

pyramidMaterials(10,1)
console.log('*'.repeat(20))
pyramidMaterials(11,0.75)
console.log('*'.repeat(20))
pyramidMaterials(12,1)
function login(arr) {
    let username = arr[0];
    let attempts = 0;
    let password = username.split('').reverse().join('');
    arr.shift();
    for (let pass of arr){
        attempts+=1;
        if (password===pass){
            console.log(`User ${username} logged in.`);
            break;
        }
        else {
            if(attempts === 4){
                console.log(`User ${username} blocked!`);
                break;
            }
            else{
                console.log('Incorrect password. Try again.')
            }
        }
    }
}

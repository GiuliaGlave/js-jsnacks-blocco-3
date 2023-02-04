//Snack3
//Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const numberN = parseInt(prompt("metti un numero"));

let i = 0;

while(i < numberN){
    
    const newArray = [];

    let y = 0; 
    while(y < 10){
        newArray.push(Math.floor(Math.random()*100)+1);

        y++;
    }
    
    console.log(newArray);
    i++;
}



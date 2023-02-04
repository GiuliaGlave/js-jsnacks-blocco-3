//Snack4 (Bonus)
//Fai inserire un numero all'utente. Poi continua a chiedere numeri finché la serie è crescente (l'ultimo numero inserito deve essere maggiore del precedente). Alla fine stampali tutti.

let userNumber = parseInt(prompt("inserisci un numero"));
let userAddNumber = parseInt(prompt("inserisci un altro numero"));

//creo un array per stampare tutti i numeri insieme
const arrayNumbers = [userNumber, userAddNumber];

while (userAddNumber >= userNumber){

    //finchè la condizione è rispettata, il numero precedente assume il valore del numero successivo e chiedo di inserirne un altro
    userNumber = userAddNumber;
    userAddNumber = parseInt(prompt("inserisci un altro numero"));

    //ogni volta che si aggiunge un numero lo si inserisce nell'array
    arrayNumbers.push(userAddNumber);
    
}


console.log(arrayNumbers);
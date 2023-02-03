//Snack2
//Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const arrayNumbers = [];

let sumNumbers = 0;


while(sumNumbers < 50 ){

    const userNumbers = parseInt(prompt("inserisci un numero"));

    arrayNumbers.push(userNumbers);

    sumNumbers += userNumbers;

    
}

console.log(arrayNumbers);
console.log(sumNumbers);
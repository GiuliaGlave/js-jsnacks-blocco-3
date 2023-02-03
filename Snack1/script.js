//Snack1
//Chiedi all'utente un valore minimo ed un valore massimo. Genera un numero casuale all'interno del range fornito dall'utente.

const userNumberMin = parseInt(prompt("inserisci valore minimo")); 
const userNumberMax = parseInt(prompt("inserisci valore massimo"));

console.log(userNumberMin);
console.log(userNumberMax);

const randomNumber = Math.floor(Math.random()*(userNumberMax - userNumberMin)) + userNumberMin;
console.log(randomNumber);
//Snack5 (Bonus #2)
//Genera un numero a caso compreso tra 1 - 100. Chiedi all’utente un numero fino a quando non indovina quello generato casualmente.Ogni volta che l'utente inserisce un numero, digli se è maggiore o minore di quello generato. Alla fine stampa il numero di tentativi che ci sono voluti per indovinare il numero generato casualmente. (modificato) 

const randomNumber = Math.floor(Math.random()*100) + 1;

let guessedNumber = parseInt(prompt("indovina a che numero sto pensando da 1 a 100"));

const arrayAttempts = [];

//finche non indovina chiedo un numero
while(guessedNumber != randomNumber){

    //se inserisce numeri minori
    if (guessedNumber < randomNumber){
        //dico che è maggiore
        alert("prova con un numero maggiore");
        
        //altrimenti se inserisce numeri maggiori
        } else if(guessedNumber > randomNumber){
            //dico che è minore
            alert("prova con un numero minore");
        }

    guessedNumber = parseInt(prompt("hai sbagliato, ritenta"));
    
    arrayAttempts.push(guessedNumber);
}

//stampo numero di tentativi
const attempts = arrayAttempts.length;

alert("bravo! hai indovinato dopo " + arrayAttempts.length + " tentativi");
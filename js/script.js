/*
-Chiedo all'utente tramite input di inserire una parola
-Inizializzo una funzione per vedere SE questa parola è palindroma (si legge in entrambi i sensi)
oppure NO:
*/

//!Prendiamo la parola inserita dall'utente e la salviamo in una variabile
let userInput = document.getElementById("user-word").value;
console.log(userInput);
//!Usiamo il metodo split per dividere la parole in lettere(trasformando ciascuna in una stringa)
let splitWord = userInput.split("");
console.log(splitWord);
//!Con il metodo reverse capovolgiamo la parola  
splitWord = splitWord.reverse("");
console.log(splitWord);
//!Infine con il metodo join andiamo a riunire le lettere formando un unica stringa della parola capovolta
let reverseWord = splitWord.join("");
console.log(reverseWord);

if(userInput == reverseWord){                //!Se la parola inserita dall'utente è uguale alla parola capovolta allora sarà palindroma
    console.log("La parola è palindroma");
}else{                                          //!Altrimenti non sarà palindroma
    console.log("La parola non è palindroma");
}


function checkWord(){
    
}

/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


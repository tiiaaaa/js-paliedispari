/*
-Chiedo all'utente tramite input di inserire una parola
-Inizializzo una funzione per vedere SE questa parola è palindroma (si legge in entrambi i sensi)
oppure NO:
*/
//!Prendiamo la parola inserita dall'utente e la salviamo in una variabile
let userInput = document.getElementById("user-word").value;
console.log(userInput);

//! Andiamo a prendere il bottone e lo assegnamo a una variabile
const checkButton = document.getElementById("check");

checkButton.addEventListener("click", function(){

    checkWord()

    function checkWord(){
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
        
    }
    
})




/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// let general = "";

//! Prendo il bottone pari e lo assegno a una variabile
const evenBtn = document.getElementById("pari");
// console.log(evenBtn);
//! Inizializzo una variabile vuota
let vero = "";
//! Aggiungo un Eventlistener al bottone, al click la variabile assumera il valore booleano True
evenBtn.addEventListener("click", function(){
    let vero = true
    console.log("L'utente ha scelto pari");
})
//! Prendo il bottone dispari e lo assegno a una variabile
const oddBtn = document.getElementById("dispari");
// console.log(oddBtn);
//! Inizializzo una variabile vuota
let falso = "";
//! Aggiungo un Eventlistener al bottone, al click la variabile assumera il valore booleano False
oddBtn.addEventListener("click", function(){
    let falso = false
    console.log("L'utente ha scelto dispari");
})

//* Input utente
//!Recupero il bottone start nel HTML e lo assegno ad una variabile
const startButton = document.getElementById("start");
//! Aggiungo un Eventlistener al bottone, al click.. 
startButton.addEventListener("click", function(){

    //!..recupera il valore del input inerito dal utente e lo salva in una variabile
    let number = document.getElementById("user-number").value;
    console.log("Il numero del utente è" + " " + number);

    //!Genera un numero randomico per il computer e lo assegna as una variabile 
    let computerNumber = Math.floor(Math.random() * 5) + 1;
    console.log("Il numero del computer è" + " " + computerNumber);

    //!Somma l'intero del numero inserito dal utente con il numero randomico del computer
    let sum = parseInt(number) + computerNumber;
    console.log("La somma è" + " " + sum);

    //!Se la somma è un numero pari 
    if(sum % 2 == 0){
        sum = vero;
        console.log("Il valore è pari");
    } else if(sum % 2 == 1){
        sum = falso
        console.log("Il valore è dispari")
    }


})


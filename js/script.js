// Palidroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt('Inserisci una parola');
var paliOrNot = palindromo(parola);
if(paliOrNot == true){
    document.getElementById('palindromo').innerHTML = parola + ' è palindromo';
} else{
    document.getElementById('palindromo').innerHTML = parola + ' non è palindromo';
}



// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

var pariDispari = prompt('pari o dispari?');

var userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

var pcNumber = randomNum(1, 5);

var somma = userNumber + pcNumber;

var winner = pariOrNot(somma);

if(winner == true && pariDispari == 'pari' || winner == false && pariDispari == 'dispari'){
    document.getElementById('pari-dispari').innerHTML = 'Hai vinto!';

}else{
    document.getElementById('pari-dispari').innerHTML = 'Hai perso!';

}



// ***** FUNZIONI *****


//per capire se una parola è palindroma
function palindromo(word){
    if(word == word.split('').reverse().join('')){
        return true;
    }
}


// generare un numero random
function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// stabilire se la somma è pari o dispari
function pariOrNot(num){
    if(num % 2 == 0){
        return true;
    }
}
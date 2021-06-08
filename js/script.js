// Palidroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma


//****** metodo javascript ******/
var parola = prompt('Inserisci una parola');
if(palindromo(parola)){
    document.getElementById('palindromo').innerHTML = parola + ' è palindromo';
} else{
    document.getElementById('palindromo').innerHTML = parola + ' non è palindromo';
}

//****** metodo ciclo for ******/
var parola2 = prompt('Inserisci una parola');
if(palinFor(parola2)){
    document.getElementById('palinfor').innerHTML = parola2 + ' è palindromo';
} else{
    document.getElementById('palinfor').innerHTML = parola2 + ' non è palindromo';
}



// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

var pariDispari = prompt('pari o dispari?');
var userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

var somma = userNumber + randomNum(1, 5);

if(isEven(somma) && pariDispari == 'pari' || !isEven(somma) && pariDispari == 'dispari'){
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
    return false;
}

//parola palindroma con ciclo for...in questo caso il metodo prende la parola partendo dalla fine e analizzando le lettere
function palinFor(word){
    var wordReverse = '';

    for(var i = word.length - 1; i >= 0; i--){
        wordReverse += word[i];
    }

    if(word == wordReverse){
        return true;
    }
    return false;
}




// generare un numero random
function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// stabilire se la somma è pari o dispari
function isEven(num){
    if(num % 2 == 0){
        return true;
    }
    return false;
}
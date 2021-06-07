// Palidroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt('Inserisci una parola');
var paliOrNot = palindromo(parola);
if(paliOrNot == true){
    document.getElementById('palindromo').innerHTML = parola + ' è palindromo';
} else{
    document.getElementById('palindromo').innerHTML = parola + ' non è palindromo';
}



// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.








// ***** FUNZIONI *****

function palindromo(word){
    if(word == word.split('').reverse().join('')){
        return true;
    } else{
        return false;
    }
}

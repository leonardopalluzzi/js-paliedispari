/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/

const userChoice = Number(prompt('scegliere 1 per pari due per dispari'));
const userNumber = Number(prompt('scegliere un numero intero da 1 a 5'));


function randomNumber() {
    const numb = Math.floor(Math.random() * 5);
    return numb;
}

const pcNumber = randomNumber(numb);
console.log(pcNumber);

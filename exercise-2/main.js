/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/




function randomNumber() {
    const numb = Math.floor(Math.random() * 5);
    return numb;
}

function sum(userNumb, pcNumb){
    let oddFlag = false;
    let evenFlag = false;
    const sum = userNumb + pcNumb;
    if (sum % 2 == 0){
        evenFlag = true;
    } else {
        oddFlag = true;
    }
    console.log(oddFlag, evenFlag);
    
    return evenFlag, oddFlag;
}



const userChoice = Number(prompt('scegliere 1 per pari due per dispari'));
const userNumber = Number(prompt('scegliere un numero intero da 1 a 5'));
const pcNumber = randomNumber();
console.log(pcNumber);

sum(userNumber, pcNumber);
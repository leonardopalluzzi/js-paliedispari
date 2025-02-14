/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/




function randomNumber() {
    const numb = Math.floor(Math.random() * 5) + 1;
    return numb;
}

function sum(userNumb, pcNumb) {
    let evenFlag = false;
    const sum = userNumb + pcNumb;
    if (sum % 2 == 0) {
        evenFlag = true;
    }
    console.log(evenFlag);

    return evenFlag;
}



let userChoice = Number(prompt('scegliere 1 per pari 2 per dispari'));

while (isNaN(userChoice) || userChoice !== 1 && userChoice !== 2) {
    userChoice = Number(prompt('per favore inserire 1 per pari e 2 per dispari'));
}

if (userChoice == 1){
    userChoice = 'pari';
} else if (userChoice == 2){
    userChoice = 'dispari';
}

let userNumber = Number(prompt('scegliere un numero intero da 1 a 5'));
while (isNaN(userNumber) || userNumber < 1 || userNumber > 5){
    userNumber = Number(prompt('per favore, scegliere un numero intero da 1 a 5'));
}

const pcNumber = randomNumber();
const flag = sum(userNumber, pcNumber);
console.log(pcNumber);

if (userChoice == 'pari' && flag == true) {
    alert(`HAI VINTO! il risultato e PARI. score: la tua scelta: ${userChoice}, il tuo numero: ${userNumber}, il numero del tuo avversario: ${pcNumber}`);

} else if (userChoice == 'dispari' && flag == true) {
    alert(`HAI PERSO il risultato e DISPARI score: la tua scelta: ${userChoice}, il tuo numero: ${userNumber}, il numero del tuo avversario: ${pcNumber}`);

} else if (userChoice == 'pari' && flag == false) {
    alert(`HAI PERSO il risultato e dispari score: la tua scelta: ${userChoice}, il tuo numero: ${userNumber}, il numero del tuo avversario: ${pcNumber}`);

} else if (userChoice == 'dispari' && flag == false) {
    alert(`HAI VINTO il risultato e DISAPRI score: la tua scelta: ${userChoice}, il tuo numero: ${userNumber}, il numero del tuo avversario: ${pcNumber}`);

}

location.reload();
/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/




function randomNumber() {
    const numb = Math.floor(Math.random() * 5) + 1;
    return numb;
}

function sum(userNumb, pcNumb){
    let evenFlag = false;
    const sum = userNumb + pcNumb;
    if (sum % 2 == 0){
        evenFlag = true;
    }
    console.log(evenFlag);
    
    return evenFlag;
}



const userChoice = Number(prompt('scegliere 1 per pari 2 per dispari'));
const userNumber = Number(prompt('scegliere un numero intero da 1 a 5'));
const pcNumber = randomNumber();
const flag = sum(userNumber, pcNumber);
console.log(pcNumber);

if(userChoice == 1 && flag == true){
    alert('HAI VINTO! il risultato e PARI');
    
} else if(userChoice == 2 && flag == true) {
    alert('HAI PERSO il risultato e DISPARI');
    
} else if(userChoice == 1 && flag == false){
    alert('HAI PERSO il risultato e dispari');
    
} else if(userChoice ==2 && flag == false){
    alert('HAI VINTO il risultato e DISAPRI');
    
}

location.reload();
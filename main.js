/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma*/
 //radar


 //funzione per testing
function arrayReverse(word) {

    let j = word.length;
    const inputArr = [];
    const reverseArr = [];
    for (let i = 0; i < word.length; i++){
        inputArr[i] = word[i];
        j--;
    }
    console.log(inputArr);
}



 function getPalindrome (word){
    //mettere ogni carattere della parola in un array
    const initialWord = [];
    for (let i = 0; i < word.length; i++){
        initialWord[i] = word[i];
    }
    console.log(initialWord);
    
    //creare un array analogo ed invertirlo
    //cofrontare i due array
 }

 const userWord = prompt('inserire una parola per scoprire se e palindroma');
 arrayReverse(userWord);
 getPalindrome(userWord);
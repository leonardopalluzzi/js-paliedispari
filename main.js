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
    const initialArr = [];
    const reverseArr = [];
    for (let i = 0; i < word.length; i++){
        initialArr[i] = word[i];
    }
    console.log(initialArr);
    
    //creare un array analogo ed invertirlo
    let j = initialArr.length - 1;
    for(let i = 0; i < initialArr.length; i++){
        reverseArr[j] = initialArr[i];
        j--;
    }
    console.log(reverseArr);
    
    //cofrontare i due array
    if(initialArr == reverseArr){
        console.log('la parola e palindroma');
        
    }
 }

 const userWord = prompt('inserire una parola per scoprire se e palindroma');
 arrayReverse(userWord);
 getPalindrome(userWord);
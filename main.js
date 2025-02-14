/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma*/
 //radar

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
    let equalCounter = true;
    for(let i = 0; i < word.length; i++){
        if(initialArr[i] == reverseArr[i]){
            equalCounter = true;
        } else {
            equalCounter = false;
            break;
        }
    }
    console.log(equalCounter);
    return equalCounter;
 }

 const userWord = prompt('inserire una parola per scoprire se e palindroma');
 arrayReverse(userWord);
 const palindrome = getPalindrome(userWord);
 

 if (palindrome == true){
    console.log('la parola è palindroma');
    
 } else {
    console.log('la parola non è palindroma');
    
 }
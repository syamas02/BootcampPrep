// YOUR CODE BELOW

const myMnemonic = (...words) => {
    mymnemonic = '';

    for(let i = 0; i < words.length; i++){
        currentWord = words[i];
        currentCharacter = currentWord[0];
        mymnemonic += currentCharacter;
    }
    return mymnemonic

}

//console.log(myMnemonic("Sanjai", "Syamaprasad", "Krist", "Jesus"))
console.log(typeof(myMnemonic('')));
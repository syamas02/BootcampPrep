// YOUR CODE BELOW
const crazyCaps = (word) => {

  let crazycaps = '';

  for(let i = 0; i < word.length; i++){
    if(i%2 === 1)
      crazycaps += word[i].toUpperCase();
    else
      crazycaps += word[i].toLowerCase();
    
  }

  return crazycaps;
}
// YOUR CODE BELOW
const frequencyAnalysis = (str) => {

  const freqObj = {};

  for ( let i = 0; i < str.length; i++){
    if(freqObj[str[i]])
      freqObj[str[i]]++;
    else
      freqObj[str[i]] = 1;
  }

  return freqObj;

}
// YOUR CODE BELOW

const onlyOdds = (num) => {

  if (num === 0)
    return 0;
  else {
    var sum = 0;
    for(let i=1; i<=num; i++){
      if(i%2 !== 0) 
        sum+=i;
    }
  }

  return sum;
}
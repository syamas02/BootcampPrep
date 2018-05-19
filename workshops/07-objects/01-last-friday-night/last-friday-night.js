// YOUR CODE BELOW
const lastFridayNight = (transacs) => {
  let sum = 0;
  
  for (let i=0; i< transacs.length; i++){
    const { amount } = transacs[i];
    sum+=amount;

    console.log({ amount });
  }
  return sum;

}
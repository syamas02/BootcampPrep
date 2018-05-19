// YOUR CODE BELOW
const compareObjects = (obj1, obj2) => {
  
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if(obj1Keys.length !== obj2Keys.length)
    return false;

  for(let i = 0; i < obj1Keys.length; i++) {
    if(obj1[obj1Keys[i]] !== obj2[obj1Keys[i]])
      return false;
  }

  return true;

}
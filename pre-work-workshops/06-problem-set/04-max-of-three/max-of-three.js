// YOUR CODE BELOW
const maxOfThree = (x, y, z) => {
    let max = x;
    if (y > max)
        max = y;
    if (z > max)
        max = z;
    return max;

}
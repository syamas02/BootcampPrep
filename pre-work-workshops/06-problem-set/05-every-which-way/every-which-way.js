// YOUR CODE BELOW
const everyWhichWay = (x, y, ans) => {
    let sum         = x+y;
    let difference  = x-y;
    let product     = x*y;
    let fraction    = x/y;

    switch(ans){
        case sum:
            return "sum";
        case difference:
            return "difference";
        case product:
            return "product";
        case fraction:
            return "fraction";
        default:
            return null;
    }
}
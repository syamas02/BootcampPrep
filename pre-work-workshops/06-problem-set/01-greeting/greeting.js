// YOUR CODE BELOW
const greeting = (name) => {
    let hello = "Hello";
    if (name)
        hello += " " + name;
    hello += '!'
    return hello;

}

console.log(greeting("Sanjai"))
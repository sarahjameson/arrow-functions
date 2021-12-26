/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(x, y) {
    // code block
    return x + y;
}
let sum = addTwoNumbers(3, 5);
console.log(sum)

// Arrow Function With Parameters
const addTwoNumbers = (x, y) => {
    return x + y;
}

// Single Line Arrow Function With Parameters
const addTwoNumbers = (x, y) => x + y;

// Implicit Returns
const sayHello = () => console.log("Hello")
sayHello()

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>
    `
)
console.log(returnMultipleLines());
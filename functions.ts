function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) { // if you hover over this function the return type is void because it doesn't return anything
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { // void in cb functions type means it will IGNORE the return it doesn't need to be function that doesn't return anything
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 12));

// Function as a type of a variable 
// let combinedValues: Function;

// Function type
let combinedValues: (a: number, b: number) => number; // combined values should accept any function that takes two parameters that are both numbers and function then returns a number 

combinedValues = add;
// combinedValues = printResult; // throws an error
// combinedValues = 5; // throws an error

console.log(combinedValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result)
    return result;
})
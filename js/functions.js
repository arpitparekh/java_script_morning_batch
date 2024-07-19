// function is a block of code that runs when we called

// function name
// function parameter
// function block
// function return type

function maruFunction() {           // function defination
    console.log("From Function")
}

maruFunction()  // function calling
maruFunction()  // function calling
maruFunction()  // function calling
maruFunction()  // function calling
maruFunction()  // function calling
maruFunction()  // function calling

// code reuse

// function parameter(arguments)
// somethings that we pass from outside into function

function display(a) {  // let a = 12
    console.log(a)
}

display(12)               // we are passing the value inside a function while calling
display(14)
display("Bascom")
display(12.3434)

function sum(a, b) {
    console.log(a + b)
}

sum(10, 12)
sum(20, 12)
sum(30, 12)
sum(10, 42)

// function return type ////////////////////////////////////////////////////

function mustFunction() {
    return 12                 // whole function turns into a value
}

let j = mustFunction() + mustFunction()

console.log(j)


function multi(a, b) {
    return a * b
}

console.log(multi(10, 12))

/////////////////////////////////////////////////////////////////////////
// a * b + c * d

function mySum(a, b) {
    return a + b
}

function myMul(a, b) {
    return a * b
}

console.log(mySum(myMul(10, 20), myMul(20, 30)))

///////////////////////////////////////////////////////////////////////////
// functions in javascript
// block of code that runs when we call it and we can reuse it

// function name
// function parameter
// function block
// function return type

function jump(){
    console.log("jumping")
}

function display(){            // function declaration
    jump();
}

function myFunction(a ,b){
    console.log(a+b);
}

function greater(a,b){
    if (a > b) {
        return a
    } else {
        return b
    }
}

display()
display()
display()
display()

myFunction(12,13)

result = greater(10,30) + 30
console.log(result)


// pass function into another function parameter

function demo(xyz){
    console.log(xyz());
}

isnet =  function(){   // storing function inside a variable
    console.log("isnet");
    return 12
}

demo(isnet)

// arrow functions

bascom = function(a,b){
    return a+b
}

bascom2 = (a,b) => a+b

bascom3 = () => "Hello"

bascom4 = a => a+10

console.log(bascom(12,13));  // 25
console.log(bascom2(10,20)); // 30
console.log(bascom3());      // "Hello"
console.log(bascom4(10));    // 20


// oopc
// class
// object
// inheritance
// abstraction
// encapsulation
// polymorphism
// constructor
// getter
// setter
// static
// this
// super
// extends



// console.log()
// document.getElementById(id).innerHTML =
// console.write()

// let var const

let a = 12;
let b = 13;

// operators  // are the symbols to do some specific task

// arithmetic operator  // + - / * %  **

console.log("Exponential Operator : "+ (2**3) )

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// %  // gives us reminder  // modulo

a = 10;
b = 6;

a = 11;
b = 12;

console.log(a % b);  // 11 % 12 // 11

let x = 1234
let y = 10

console.log(x % y)  // 124543543 % 10 = 3

// increment decrement ++  --

let num = 23

++num

console.log("Number is " + num)

let value = 45

// pre-increment and post increment

console.log(++value)
console.log(value)

let data = 67

// pre-decrement and post-decrement

console.log(data--)
console.log(data)

// assignment operator  // = 

let a1 = 23;
let b1 = a1 % 10;

console.log(b1)

// +=  -=  *=   /=   %=  **=

let a2 = 55;

// a2 = a2 + 10;

a2 **= 10

console.log(a2)

// conditional operator  //  < > <= >= == !=   // conditional operator gives us boolean value in return

// == equality operator  // != 

let f = 10
let g = 11

let h = f != g

console.log(h)

///////////////////////////  string variable addition ////////////////////////////

console.log("My number is " + h)
console.log("First Name : Arpit " + "Last Name : Parekh")
console.log("20" + "5")
console.log("5" == "5")   // lexicographical  // 2 = 50  // 5 => 53

let name1 = "Bascom"
let name2 = "Bascom"

console.log(name1 == name2)

// senario

let name3 = "98"
let number = 98

console.log(name3 == number) // true

// ===  // also datatype should be same  // == (===)

console.log(name3 === number)

let x1 = true            // different in boolean
let y1 = "true"

console.log(x1 == y1)

console.log(true == 1); // true
console.log(false == 0); // true

// logical operators

// &&(AND)  ||(OR)  !(NOT)

let condition = 12 > 13 || 12 != 13

console.log(!condition)  // ahead of boolean variable

let condition2 = !(12 > 13) || !(12 != 13)

console.log(condition2)  // ahead of condition
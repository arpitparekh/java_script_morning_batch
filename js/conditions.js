// conditions

// toi manage the flow of the program

// if and else

let a = 13

if (a > 15) {
    console.log("If Statement")
}

if (a > 55) {
    console.log(a+" If")
} else {
    console.log(a+" Else")
}


// check if the year is leap year or not

let year = 2023

if (year%4 == 0) {
    console.log(year +" is leap year")
} else {
    console.log(year +" is not leap year")
}


// check if  number is positive or negetive

let num = -12

if (num < 0) {   // condiitonal statement
    console.log(num +" is negetive")
} else {
    console.log(num +" is positive")
}

// check if number is even or odd

let n = 57

if (n%2==0) {
    console.log(n +" is even")
} else {
    console.log(n +" is odd")
}

// if else  [else if] ladder


let name1 = "Lj1"

if (name1 == "Tops") {
    console.log("Name is Tops")
} else if (name1 == "Red And White") {
    console.log("Name is Red and White")
} else if (name1 == "Lj") {
    console.log("Name is Lj")
} else {
    console.log("Name not found")
}

// check the grade of student

let marks = 45

// 85> A
// 65 and 85 vacche B
// 65< C grade

if (marks >= 85) {
    console.log("Grade A")
} else if (marks < 85 && marks >= 65) {
    console.log("Grade B")
} else {
    console.log("Grade C")
}

// temperature

// 40 >= hot
// 25 >=  40< warm
// 25< cold

// dificulty level up

// find maxium of 2 numbers using if else

let a1 = 88
let b1 = 13


if (a1 < b1) {
    console.log(b1+" is greater")
} else {
    console.log(a1+" is greater")
}

// find maxium of 3 numbers using if else and else if

let a2 = 8  // 
let b2 = 13
let c2 = 56

if (a2 > b2 && a2 > c2) {
    console.log(a2+" is greater")
} else if (b2>c2) {
    console.log(b2+" is greater")
} else {
    console.log(c2+" is greater")
}

// nested if else

let f = 68

if (f < 67) {
    
    if (f > 34) {
         console.log("Inner If")
    } else {
         console.log("Inner Else")
    }

} else {
    console.log("Outer Else")
}


// switch statement

let h = 57

switch (h) {
    case 10:
        console.log("Value 10 che")
        break
    case 20:
        console.log("Value 20 che")
        break
    case 45:
        console.log("Value 45 che")
        break
    
    case 56:                                          // common case    
    case 57:
        console.log("Value 57 kyato 56 che")
        break
    
    default:
        console.log("Value not found")

}
console.log("Hello")

// loops

// initial stage
// condtion stage
// increment decrement

let i;

for (i = 1; i <= 50; i ++){
    console.log("Hello")
}

console.log(i)

for (let a = 1, b = 2; a <= 100 , b <= 50 ; a++, b++){ // a = 4  // b  = 51
    console.log(a+" => "+b)
}

// let a = 1, b = 2

// for(;a <= 100 && b <= 50;){ // a = 4  // b  = 51
//     console.log(a + " => " + b)
//     a++, b++;
// }

// for loop is used to print array

list = [1, 2, 54, 87, 65, 4, 3, 65, 7, 6]

console.log(list[3])

for (n = 0; n < list.length; n++){  // 0..9
    console.log(list[n])
}

// advance for loop // used to print range datatype values

// for of and for in

for (let x in list) {  // in range
    console.log(x)
}

for (let x of list) {  // of value
    console.log(x)
}
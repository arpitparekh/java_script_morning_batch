// 1 check number is or not prime number
// 2 fibonacci
// 3 no digit
// 7 factorial

// 5 sum of digit
// 

// 6 armsrong number
// 4 palindrome




// 1

// number only divisible by 1 and itself
// 2 3 5 7 11 13

let n = 14
let prime = true

for (let i = 2; i < n; i++) {  // 2..13
    
    if (n % i == 0) { // 12 % 2
        prime = false
        break
    }
}

if (prime) {
    console.log("Prime che")
} else {
    console.log("Prime nathi")  // break walu
}

// 7   

// 7*6*5*4*3*2*1 
// factorial od a number

n = 7
factorial = 1 // 1  // 2  // 6 // 24

for (let i = 1; i <= n; i++){ // 3  // 4 // 5
    factorial = factorial * i
}

console.log("Factorial of " + n + " is " + factorial)

// 2

// fibonacci series
// 1 1 2 3 5 8 13

// a = 1 / 1 / 2 / 3 / 5
// b = 1 / 2 / 3 / 5 / 8
// c = a+b = 2 / 3 / 5 / 8 / 13

// a = b
// b = c
// c = a+b

a = 1
b = 1 

n = 10

for (let i = 1; i <= n; i++){

    console.log(a)  // 1  // 1
    c = a + b   // 2 //
    a = b  // 1
    b = c  // 2

}

// 3
// no of digit in number

// 1234567

// n = 1234
// n / 10 = 123
// n / 10 = 12
// n / 10 = 1
// 1 / 10 = 0

let n1 = 123444
let count = 0
reverse = ""

while (n1 != 0) {  // 1234  // 123  // 12  // 1
    
    let last_digit = n1 % 10  // 4 // 3  / 2  / 1
    
    reverse = reverse + last_digit

    n1 = ~~(n1 / 10)
    count++
}

console.log("Count is : " + count)
console.log("reverse is : " + reverse)
// 1213121
// 121  // 1234321  // 156521 (not plaindrome)

let count = 0;

for (let i = 1; i <= 100000000; i++){
    
    let n = i
    let original = n

    let reverse = 0

    while (n != 0) {
    
        let lastDigit = n % 10  // 4  // 3 // 2 // 1

        reverse = reverse*10 + lastDigit  // main logic

        n = ~~(n/10)  // 123  // 12  / 1  // 0
    }   

    if (reverse == original) {
        console.log(i)
        count++
    }
}

console.log("total : " + count)


// armstrong number

// 152

// no of digit
// 3

// 1^3 + 5^3 + 2^3 = 152



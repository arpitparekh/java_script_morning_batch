function primeCheKNai(n) {
    
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

}

primeCheKNai(11)
primeCheKNai(31)
primeCheKNai(32)
primeCheKNai(99)
primeCheKNai(55)
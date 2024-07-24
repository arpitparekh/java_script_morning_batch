let a = 12.1;

console.log(Math.PI);
console.log(Math.round(a));

console.log(Math.ceil(a)); // nothing related to round off
console.log(Math.floor(a));

console.log(Math.trunc(a)); // does not take value after point

console.log(Math.pow(7, 8));

console.log(Math.sqrt(16));

console.log(Math.cbrt(64));

console.log(Math.abs(-12)); // |x|

// rendom number between 1..100

// Math.floor(Math.random() * 70) + 5

// Math.floor(Math.random() * (max - min) ) + min);

// console.log(Math.floor(Math.random() * 65) + 5)

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// function getRndInteger(min, max) {                        // without including max and min
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

console.log(getRndInteger(10, 30));
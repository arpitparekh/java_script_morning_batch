function myFuction(a, b) {
  console.log(a);
  console.log(b);
}

myFuction(12, 13);
myFuction(50, 60);

function anotherFunction() {
  return 12;
}

console.log(anotherFunction());

let result = anotherFunction() + 50;

console.log(result);

// annonioums function in javascript

let data = function () {
  console.log("This is annonious function");
};

data();
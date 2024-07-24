person = {
  p_name: "pradip",
  p_age: 20,
  p_gender: "male",
};

console.log(person);
console.log(person.p_name);
console.log(person.p_gender);
console.log(person["p_age"]);  // also access object like this

// empty object
// in java script we can create an empty object using 2 ways

values = {};
console.log(values);

values.number = 12;
values.name = "bascom";
values.age = 23;

console.log(values);

// names = new Object()  // you can also create an object like this

// this keyword
// this refer to the object itself

vehicle = {
  name: "bike", // property : value
  color: "red",
  speed: 100,
  //   full_detail: function () {
  //     return this.name + " " + this.color + " " + this.speed;
  //   },
//   full_detail: function() {
//     console.log(this.name);
//     console.log(this.color);
//     console.log(this.speed);
    //   },
};

// console.log(vehicle.full_detail());

vehicle.full_detail();

// you can create an copy of an object

let x = vehicle;
console.log(x.name);
console.log(x);

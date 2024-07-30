// object constrcutor

// person = {
//   name: "jimit",
//   age: 45,
// };

// person2 = {
//   name: "darshil",
//   age: 25,
// };

// person3 = {
//   name: "hooman",
//   age: 27,
// };                 // we have to avoid this

function person(name, age) {
  // object constructor  // function
  this.name = name;
  this.age = age;
}

// we can create an dynamic object like this

person1 = new person("jimit", 45); // new keyword used to allocate memory in javascript
person2 = new person("hooman", 27);
person3 = new person("darshil", 25);

console.log(person1);
console.log(person2);
console.log(person3);
//////////////////////////////////////////////////////

function vehicle(name, brand, price) {
  // object constrcutor
  this.name = name;
  this.brand = brand;
  this.no_wheels = 4; // default object values
  this.price = price;
}

vehicle.prototype.color = "red"; // adding new porperty into object constrcutor using prototype

maruti = new vehicle("maruti", "suzuki", "80000");
s1 = new vehicle("s1", "bmw", "8000000");
figo = new vehicle("figo", "ford", "800000");
figo.color = "green";

console.log(maruti);
console.log(s1);
console.log(figo);

console.log(maruti.color);
console.log(s1.color);
console.log(figo.color);

////////////////////////////////////////////////////////

function factory(name, chemical_name, no_boilers, no_emp) {
  // object constructor
  this.name = name;
  this.chemical_name = chemical_name;
  this.no_boilers = no_boilers;
  this.no_emp = no_emp;
  this.chemicalDescription = function () {
    return this.chemical_name + " is " + "very reactive";
  };
}

factory.prototype.display = function () {
  // adding function after creating constrcutor
  console.log(this.name);
  console.log(this.chemical_name);
  console.log(this.no_boilers);
  console.log(this.no_emp);
};

factory.prototype.changeName = function (name1) {
  this.name = name1;
};

reliance = new factory("SuratPort", "DymithailXYZ", 6, 50);
adani = new factory("AdaniPort", "MithilinXYZ", 7, 30);

console.log(reliance.chemicalDescription());
console.log(adani.chemicalDescription());

reliance.display();
adani.display();

reliance.changeName("HaziraPort");
reliance.display();

// oopc
// object oriented programming concepts

// class
// class is just a blueprint
// collection variables(property) and function

class Student {
    name = '';
    age = 0;
    address = '';
    height = 0.0;
    weight = 0.0;
}

// object

console.log('Student data');

let student = new Student(); // creating a object of a class  // data container

student.name = 'Rajesh';
student.age = 20;
student.address = 'Mumbai';
student.height = 5.5;

console.log(
    `Name : ${student.name} Age : ${student.age} Address : ${student.address} Height : ${student.height} Weight : ${student.weight}`
);

console.log('Student 2 data');

let student2 = new Student();

student2.name = 'Manish';
student2.age = 21;
student2.address = 'Ahmedabad';
student2.height = 6.5;
student2.weight = 60;

console.log(
    `Name : ${student2.name} Age : ${student2.age} Address : ${student2.address} Height : ${student2.height} Weight : ${student2.weight}`
);

let student3 = new Student();

console.log(student3);

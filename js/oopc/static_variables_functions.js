class Student{

  static id = 45
  name = 'sumit'

  // constructor(id, name) {
  //   this.id = id;
  //   this.name = name;
  // }

  constructor() {

  }

}

class Utility{

  static checkInternet() {

  }

  static checkEmplyField() {

  }

  static checkEmailFormat() {

  }
}

// let s = new Student(1, 'bhavin')
// console.log(s.id);
// console.log(s.name);



console.log(Student.id);

let s1 = new Student();
console.log(s1.id);               // static variable is not part of any object
console.log(s1.name);


Utility.checkInternet()  // without making an object we can call static function

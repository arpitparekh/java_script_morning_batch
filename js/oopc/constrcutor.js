// constrcutor is a method that calls automatically when we crate an object
// constructor name and class name is same

class College {

    constructor(name, no_student) {
        this.name = name;
        this.no_student = no_student;
    }

    display() {
        console.log(this.name);
        console.log(this.no_student);
    }
}

class BookStore {

    constructor(name, no_book) {
        this.name = name;
        this.no_book = no_book;
    }
}

let college = new College('ADIT', 1000);
college.display();

let college2 = new College('SVNIT', 10010);

console.log(college2);
console.log(college2.name);
console.log(college2.no_student);

let bookStore = new BookStore('ABC', 1000);

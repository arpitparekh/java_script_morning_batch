class A {
    constructor() {
        console.log('This is class A constrcutor');
    }
}

class B extends A {
    constructor(a, b) {
        super();
        console.log('This is class B constrcutor');
        console.log(a, b);
    }
}

class C extends B {
  
    constructor(a) {
        super(a, a + 10);
        console.log('This is class C constrcutor');
    }
}

// we must have to call parent class constructor from child class constrcutor
// super keyword is used to access parent class inside a child class
// using super keyword we can call parent class constructor
// using super in inherirance to call parent constructor is called constructor chaining

let c = new C(12);

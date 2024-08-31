// inheritance
// when one class used properties and methods of another class it is called inheritance


class Parent{

  name = ""
  age = 0

  dance() {
    console.log("Dancing");
  }
}


class Child extends Parent{

}

let child = new Child();
child.dance();             // calling parent class method from child class


class A{  // base class

  dance() {
    console.log("Dancing");
  }
}

class B extends A{  // derived class
  swim() {
    console.log("Swimming");
  }
}

class c extends B{
  cycling() {
    console.log("Cycling");
  }
}

c = new c();
c.dance();
c.swim();
c.cycling();


class X{

}

class Y extends X{

}

class Z extends X{

}

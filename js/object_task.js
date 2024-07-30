// Create an object car with properties make, model, and year. 
// Then, add a method displayInfo that prints out the car's details

car = {
    make: "Toyota",
    model: "Corolla",
    year: 2018,
    displayData: function () {
        console.log("Makers of this car is : " + this.make)
        console.log("Model of this car is : " + this.model);
        console.log("Year of this car is : " + this.year);
    }
}

car.displayData()
delete car.model
console.log(car)

circle = {
    getArea: function (a) {
        return Math.PI * a*a;
    }
}

console.log(circle.getArea(12));
console.log(circle.getArea(34));
console.log(circle.getArea(67));
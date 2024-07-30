institute = {
  name: "Institute of Technology",
  location: "Dublin",
  courses: ["Computer Science", "Engineering", "Mathematics"],
  library: {
    librarian: "Mohit",
    books: [
      "Introduction to Algorithms",
      "Data Structures",
      "Computer Networks",
    ],
  },
};

console.log(institute.name);
console.log(institute.location);
console.log(institute.courses);

console.log(institute.library.librarian);
console.log(institute.library.books);

institute.no_of_student = 30; // adding data in object
console.log(institute.no_of_student);

console.log(institute);
console.log(Object.values(institute)); // convert objects values into an array

// Object.entries // is used in loop

for (let [key, value] of Object.entries(institute)) {
  console.log(key + " => " + value);
}

// numbers = [1, 54, 67, 45, 23, 4];
// console.log(numbers);

// for (x in numbers) {
//   console.log(x);
// }

// for (x of numbers) {
//   console.log(x);
// }

console.log(JSON.stringify(institute))   // convert object into json

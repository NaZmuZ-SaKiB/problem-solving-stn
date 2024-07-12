//* ---------------------
//* ------- TASK 1 ------
//* ---------------------

const persons = [
  { name: "Alice", age: 28, gender: "female" },
  { name: "Bob", age: 32, gender: "male" },
  { name: "Charlie", age: 25, gender: "male" },
  { name: "Diana", age: 30, gender: "female" },
  { name: "Eve", age: 35, gender: "female" },
  { name: "Frank", age: 40, gender: "male" },
  { name: "Grace", age: 22, gender: "female" },
  { name: "Harry", age: 29, gender: "male" },
  { name: "Ivy", age: 27, gender: "female" },
  { name: "Jack", age: 31, gender: "male" },
];

const getMaleNames = (persons) =>
  persons
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);

//* ---------------------
//* ------- TASK 2 ------
//* ---------------------

const books = [
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
  },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    year: 2011,
  },
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
];

const getBookTitles = (books) => books.map((book) => book.title);

//* ---------------------
//* ------- TASK 3 ------
//* ---------------------

const square = (num) => num * num;
const double = (num) => num * 2;
const add5 = (num) => num + 5;

const squareDoubleAndAdd5 = (num) => add5(double(square(num)));

//* ---------------------
//* ------- TASK 4 ------
//* ---------------------

const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2018 },
  { make: "Chevrolet", model: "Camaro", year: 2021 },
  { make: "Tesla", model: "Model 3", year: 2022 },
  { make: "BMW", model: "3 Series", year: 2020 },
  { make: "Mercedes-Benz", model: "C-Class", year: 2019 },
  { make: "Audi", model: "A4", year: 2021 },
  { make: "Volkswagen", model: "Golf", year: 2018 },
  { make: "Nissan", model: "Altima", year: 2022 },
];

const sortCarsInAscending = (cars) => cars.sort((a, b) => a.year - b.year);

//* ---------------------
//* ------ TASK 10 ------
//* ---------------------

const students = [
  { name: "Alice", grades: [85, 90, 78] },
  { name: "Bob", grades: [92, 88, 84] },
  { name: "Charlie", grades: [75, 80, 72] },
  { name: "Diana", grades: [89, 94, 91] },
  { name: "Eve", grades: [76, 85, 88] },
  { name: "Frank", grades: [90, 82, 87] },
  { name: "Grace", grades: [95, 98, 97] },
  { name: "Harry", grades: [78, 83, 79] },
  { name: "Ivy", grades: [88, 92, 91] },
  { name: "Jack", grades: [85, 89, 90] },
];

const getAvgGrade = (student) =>
  student.grades.reduce((prev, newGrade) => prev + newGrade, 0) /
  student.grades.length;

const sortStudentsbyAvgGrade = (students) =>
  students.sort((a, b) => getAvgGrade(b) - getAvgGrade(a));

// ------ Test ------

// console.log("Task 1", getMaleNames(persons));
// console.log("Task 2", getBookTitles(books));
// console.log("Task 3", squareDoubleAndAdd5(2));
// console.log("Task 4", sortCarsInAscending(cars));
// console.log("Task 10", sortStudentsbyAvgGrade(students));

//objects - data structure that stores data in form of key value pairs
//CRUD - create, read, update, delete
//create objects
const user = new Object();//object constructor syntax

//object literal syntax
const person = {
    firstName: "John",
    secondName: "Doe",
    age: 30,
    maritalstatus: "single",
    gender: "male",
    height: 5.9,
    nationality: "Nigerian",
    religion: "Christianity",
    languages: "English",
    'Is this person married?': false,
    movies: ["The Godfather", "The Dark Knight", "Inception"],
    course: {
        name: "Computer Science",
        duration: "4 years",
        teacher:{name: "Mr. Smith", 
                age: 40, 
                subject: "Mathematics"}
    }
}
console.log(person.firstName);
console.log(person.secondName);
console.log(person.age);
console.log(person.maritalstatus);
console.log(person['Is this person married?']);

//how to read objects
//2ways
//1. dot notation
//2. bracket notation


//square bracket notation
console.log(person['firstName']);

//cobject traversal
console.log(person['course']['teacher']['name']);
console.log(person.course.teacher.name);

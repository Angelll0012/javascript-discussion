//variables and data types
let fullname ="Angel Wangui"//string because it has text
const Age =20;//number
var isEnrolled = true//boolean becuz of t & f

//typeof tells js what data type a variable contains
console.log(fullname);
console.log(typeof fullname);

console.log(Age);
console.log(typeof Age);

console.log(isEnrolled);
console.log(typeof isEnrolled);

//operators and type coercion

let numericString = "5"
//numeric string and number
let number =10;

// addition js converts the no to a string
let addition = numericString + number;
//510

//multiplication js converts the string to a number
let multiplication = numericString * number;
50

console.log("Addition:", addition); 
console.log("Type of addition:", typeof addition); 


console.log("Multiplication:", multiplication); 
console.log("Type of multiplication:", typeof multiplication);

//conditional statements

// Store the movie ticket buyer's age
let age = 20;

// Check the age and determine the ticket price
if (age < 5) {
    console.log("Free entry");
} else if (age >= 5 && age <= 17) {
    console.log("Child discount");
} else if (age >= 18 && age <= 64) {
    console.log("Full price");
} else {
    console.log("Senior discount");
}

//conditional (ternary) operator
// Store the user's account balance
let balance = -50;

// Use the ternary operator to check the balance
let accountStatus = balance < 0 ? "Account Overdrawn" : "Account Active";

// Display the account status
console.log(accountStatus);

//comprehensive challenge

let score = 70;

//divide the sore by 10 to creat a grade table range
let grade = Math.floor(score / 10);

//using switch to determine the letter grade
switch(grade){
    case 10:
    case 9: 
    console.log("Grade:A") 
    break;
    
    case 8:
        console.log("Grade :B")
        break;

        case 7:
            console.log("Grade: C")

            case 6:
                console.log("Grade: D")
                break;
//break is used to stop the switch once correct case is chosen

                default:
                    console.log("Grade: F")
}










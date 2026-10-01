let fullname= ('Angel Wangui')
let age= 20
//its limited by blocks eg()

var isMarried= false
//it isnt limited by blocks eg()
if(false){
    var x = notMarried
}
//if declared inside a function

const notMarried = "notMarried"
if (true){
    const notMarried = true
}
//its used to declare variables and to remain unchanged

//data types = number,string, boolean, undefined,null,bigint,symbol

//primitive data types

let primaryColour ="Pink"
let secondaryColour//creates a brand-new slot = primaryColour;
//copies the value pink
 = "Black"

console.log(primaryColour);   // Logs: "Pink" (Unchanged)
console.log(secondaryColour); // Logs: "Black" (changed)

//reference types

let originalCart = [item="banana", price="20"];
//this is an array

let sharedCart = originalCart;
sharedCart.push(item="orange", price="30")

console.log(originalCart); // Logs: ["orange", "banana"] (Affected)

//objects
//let objectA = { score: 100 };
//let objectB = { score: 100 };

//console.log(objectA === objectB); // false (Different spots in memory)

//let objectC = objectA; 
//console.log(objectA === objectC); // true (They share the exact same reference)

//loose equality(==) 
// it converts string to a number
//it converts boolen to a number
//it converts the object into a primitive string

//strict equality(===) is the best practice
//forces u to explicity convert data types


5 == "5"   // true  (the string "5" is coerced into the number 5)
5 === "5"  // false (the values match, but number is not equal to String)

1 == true  // true  (the boolean true is coerced into the number 1)
1 === true // false (number is not equal to boolean)


// logical operators (&&, ||, ---) evaluate expressions from left to right 

//short-circut evaluation it means js will stop executing and evaluating

//the logical and operator (&&) used to safely execute code only when a condition is met
const result1 = true && 0 && "hello";
// Short-circuits at 0  and ignores the rest
console.log(result1);//logs; 0

const result2 ="apple" && "banana" && "orange";
// No falsy values found, so it returns the last truthy value
console.log(results); //logs; orange

//logical and operator (||) searches for 1st truly value and returns the very last value
const result3 = "welcome" || false || 5;
//short-circuits at welcome
console.log(result3);//logs welcome

const result4 = false || null || 0;
//no truly values found thus returns the last value
console.log(results4);//logs 0


//if...else if it determines a users role and permissions

let role = "editor";

if (role === "admin") {
    console.log("Full access");
} else if (role === "editor") {
    console.log("Can publish content");
} else if (role === "guest") {
    console.log("Read-only access");
} else {
    console.log("Access denied");
}

//switch it evalutes the expressions once and jumps directly to the matching case
let work = "manager";

switch (work) {
    case "admin":
        console.log("Full access");
        break;
    case "editor":
        console.log("Can publish content");
        break;
    case "guest":
        console.log("Read-only access");
        break;
    default:
        console.log("Access denied");
}

//default keyword acts eaxactly like the final else statement(default:)












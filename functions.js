function sayHi(fullName){
    return `Hello world ${fullName}`;
}


function userProfile(firstName, lastName, age, phoneNumber){
  return `Hello ${firstName} ${lastName}, 
  you are ${age} years old and
   your phone number is ${phoneNumber}`;
}

function main(){
    const user = userProfile(
        'Angel', 
        'Wangui',
         25, 
         '0765567890');
   
return sayHi(user , `fullName`);
}

console.log(main());

let num = 500

function outerfn(){
    const num1 =100;
    function innerfn(){
        const num2 = 200;
        console.log(num1 + num2 );
    }  
    return innerfn();
}
console.log(outerfn());

function learningscope(){
    const name = 'Angel';

    function greeting(){
        const hello = `Hello ${name}`;
        const age =56

    return `${hello} as you turn ${age}, I wish you all the best`;
}
    return greeting();
}
console.log(learningscope());







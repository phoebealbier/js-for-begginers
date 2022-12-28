console.log("hello world");
let name = "korsat x parmaga"; // string literal
let age = 30 ; // number literal
let IsApproved = true ; // boolean literal
let firstName = undefined ;
let selectedcolor = null ;
console.log(name);

let var1 = 5 ;
let var2 = 8 ;
let var3 = 9 ;
let var4 = 20 ;
 let interestRate = 0.3 ;
 interestRate = 1 ;
 console.log(interestRate);

// # primitives (value types)
// - string
// - number
// - boolean
// - undefined
// - null
// - symbol

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// # Reference
// - objects
// - array
// - function


// object 
let person = {
    Name : 'Phoebe',
    Age : 21

}
console.log(person);

// (Dot notation) (احسن من ال braket notation)
person.Name = "nayra";

// Braket notation 
person["Name"]= "mira" ;

console.log(person.Name);

// Array 
let selectedcolo = ["red" , "blue"]
selectedcolo[2]="green";
selectedcolo[3]=1;

console.log(selectedcolo[0]);
console.log(selectedcolo);
console.log(selectedcolo.length);

// function

// performing a task

function greet (NAME , lastName ){
    console.log(`hello ${NAME} , ${lastName}`);
}
greet("PHOEBE" , "Albiar");
greet("martina");

// calculating A Value
function square(number){
    return number*number;

}
let result = square(2);
console.log(result);
console.log(square(2));
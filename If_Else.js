// make input change every problem
// set an if/else statement that has conditional
// prints either true or false

let input = -55555555555555

if (input % 2 === 0) {
       console.log("even")
} else {
    console.log("odd")
}


// Our objective is to write an if/else statement that takes in the parameters of isTruthy
// Start with "I am string" is true and go from there
// Set up if/else conditional format

// Our objective is to write an if/else statement that takes in the parameters of isTruthy
// Start with "I am a string" is true and go from there
// Set up if/else conditional format

 let var1 = "I am a string"


 if (var1 === "I am a string"){
     console.log(true)
 } else if (var1 === false){
      console.log("The boolean value false is falsy")
 } else if (var1 === null) {
      console.log("The null value is falsy")
 }  else if(var1 === undefined) {
      console.log("undefined is falsy")
 } else if (var1 === 0) { 
     console.log("The number 0 is falsy (the only falsy number)")
 }  else if (var1 === ""){
     console.log("The empty string is falsy (the only falsy string)")
 }

// console.log(a)
// console.log(!true)
// console.log(!a)
// console.log(!!a)
// console.log(typeof a)


// adding two variables together to get the sum
// using if/else if/else statements to use conditionals to get to the sum

 let num1 = -5
 let num2 = 0
 let sum = num1 + num2

 if (sum > 100){
     console.log(sum + " " + "is greater than 100")
 } else if (sum > 0){
    console.log(sum + " " + "is greater than 0")
 } else if (sum === 0){
      console.log(sum + " " +"is equal to 0")
 } else if (sum < 0){
      console.log(sum + " is a negative number")
  } 

// make two variables that both need to be greater than or equal to 5

 let num1 = 5
 let num2 = 5


 if (num1 && num2 >= 5) {
     console.log(true)}
     else {
         console.log(false)
 }

// create a script tag comparing two sets of two vales that will print true if at least one of the pairs is truthy


let param1A = "cake"
let param1B = "cake"
let param2A = "pie"
let param2B = "pie"

if (param1A === param1B || param2A === param2B) {
    console.log(true)
} else {
    console.log(false)
}
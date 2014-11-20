/*
 Aubriana Miller
 WPF 1411 Section 01
 Functions: Personal
 11-20-2014
 */

//How many children will I have?

var age = prompt("How old are you?");//asks user for age
var kids1 = 1;//lowest number of children
var kids2 = 15;//highest number of children

while(isNaN(age) || age===""){//while inputted answer is blank or not a number
    prompt("You must enter an age!");//reminds user to enter age
}

randomize(1,14);//calls function

var result = randomize(kids1,kids2);//variable for result
alert("You will have " + result + " children.");//alerts user of number of children
console.log("You will have " + result + " children.");

//function generating result
function randomize(kids1,kids2){
    var randomNumber = Math.round(Math.random()*(kids2-kids1)+Number(kids1));
    return randomNumber;//returns results
}
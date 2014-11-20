/*
 Aubriana Miller
 WPF 1411 Section 01
 Functions: Personal
 11-20-2014
 */

//How many children will I have?

var age = prompt("How old are you?");
var kids1 = 1;
var kids2 = 15;

while(isNaN(age) || age===""){
    prompt("You must enter an age!");
}

randomize(1,14);

var result = randomize(kids1,kids2);
alert("You will have " + result + " children.");
console.log("You will have " + result + " children.");

function randomize(kids1,kids2){
    var randomNumber = Math.round(Math.random()*(kids2-kids1)+Number(kids1));
    return randomNumber;
}
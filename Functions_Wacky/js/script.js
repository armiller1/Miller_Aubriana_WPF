/*
 Aubriana Miller
 WPF 1411 Section 01
 Functions: Wacky
 11-18-2014
 */

//How many chicken pox did you have?

var age = prompt("How old were you when you got chicken pox?");

var pox1 = 10;
var pox2 = 100;

while(isNaN(age) || age===""){
    prompt("You must enter an age!")
}
randomize(10,100);

var result = randomize(pox1,pox2);
alert("You had " + result + " chicken pox.");
console.log("You had " + result + " chicken pox.");

function randomize(pox1,pox2){
    var randomNum = Math.round(Math.random()*(pox2-pox1)+Number(pox1));
    return randomNum;
}
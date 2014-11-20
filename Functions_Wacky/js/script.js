/*
 Aubriana Miller
 WPF 1411 Section 01
 Functions: Wacky
 11-18-2014
 */

//How many chicken pox did you have?

var age = prompt("How old were you when you got chicken pox?");//asks user for age when they had chicken pox

var pox1 = 10;//lowest number of chicken pox
var pox2 = 100;//highest number of chicken pox

while(isNaN(age) || age===""){//while inputted answer is blank or not a nymber
    prompt("You must enter an age!")//reminds user to enter age
}
randomize(10,100);//calls function

var result = randomize(pox1,pox2);//result variable
alert("You had " + result + " chicken pox.");//alerts user of how many chicken pox they had
console.log("You had " + result + " chicken pox.");

function randomize(pox1,pox2){//Function
    var randomNum = Math.round(Math.random()*(pox2-pox1)+Number(pox1));
    return randomNum;//Return results
}
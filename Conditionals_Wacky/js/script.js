/*
 Aubriana Miller
 WPF 1411 Section 01
 Conditionals_Wacky
 11-11-2014
 */

//How old will you be when you die?
var gender = prompt("Are you male or female?");
var age = prompt("What is your current age?");

if(gender === "male" && age < 16){
    alert("You will be " + age * 5 +  " when you die.");
    console.log("You will be " + age * 5 +  " when you die.");
}if(gender === "female" && age < 16){
    alert("You will be " + age * 6 +  " when you die.");
    console.log("You will be " + age * 6 +  " when you die.");
}

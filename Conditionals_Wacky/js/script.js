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
}if(gender === "male" && age > 15 && age < 30){
    alert("You will be " + age * 3 + " when you die.");
    console.log("You will be " + age * 3 + " when you die.");
}if(gender === "female" && age > 15 && age < 30){
    alert("You will be " + age * 4 + " when you die.");
    console.log("You will be " + age * 4 + " when you die.");
}if(gender === "male" && age > 29 && age < 51 || gender === "female" && age > 29 && age < 51){
    alert("You will be " + age * 2 + " when you die.");
    console.log("You will be " + age * 2 + " when you die.");
}else if(gender == 0 || age == ""){
    alert("You must enter an answer!");
    console.log("You must enter an answer!");
}else{
    alert("You will be " + age * 1.5 + " when you die.");
    console.log("You will be " + age * 1.5 + " when you die.");
}

/*
 Aubriana Miller
 WPF 1411 Section 01
 Conditionals_Industry
 11-11-2014
 */

//Website building package determination by pricing and client needs
var siteType = prompt("Is this website personal, business, or community?");
var clBudget = prompt("How much do you want to spend?");

if(siteType === "personal" && clBudget <= 800 && clBudget > 499){
    alert("I recommend the Bronze Package for $750");
    console.log("I recommend the Bronze Package for $750");
}if(siteType === "business" && clBudget <= 1100 && clBudget > 800){
    alert("I recommend the Silver Package for $1,000");
    console.log("I recommend the Silver Package for $1,000");
}if(siteType === "community" && clBudget <= 1800 && clBudget > 1100){
    alert("I recommend the Gold Package for $1,700");
    console.log("I recommend the Gold Package for $1,700");
}if(siteType === "Personal" && clBudget > 1800 || siteType === "business" && clBudget > 1800 || siteType === "community" && clBudget > 1800){
    alert("I recommend the Gold Package for $1,700");
    console.log("I recommend the Gold Package for $1,700");
}else if(siteType == 0 || clBudget == 0){
    alert("You must enter an answer!");
    console.log("You must enter an answer!");
}else{
    alert("Sorry, we do not offer any packages that fit your budget!");
    console.log("Sorry, we do not offer any packages that fit your budget!");
}
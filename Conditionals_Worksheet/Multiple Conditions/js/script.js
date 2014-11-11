/*
 Aubriana Miller
 WPF 1411 Section 01
 Conditionals Worksheet: Multiple Conditions
 11-10-2014
 */

var tickPrice1 = 12;//Price for times before 3 and after 5 and for ages 11-54
var tickPrice2 = 7;//Price for times between 3-5pm and for ages 0-10 and 55-100

var age = prompt("What is your age?");//Asks user what is their age
var time = prompt("What time does the show start?");//Asks user what time the movie starts

if(age >= 11 && age <= 54 && time <= 2 && time >= 6){
    alert("Your ticket price is $" + tickPrice1);
    console.log("Your ticket price is $" + tickPrice1);
}else if(age >= 11 && age <= 54 && time >= 3 && time <= 5){
    alert("Your ticket price is $" + tickPrice2);
    console.log(tickPrice2);
}else if(age <= 10 && age >= 55 && time <= 2 && time >= 3){
    alert("Your ticket price is $" + tickPrice2);
    console.log(tickPrice2);
}else{
    alert("Your ticket price is $" + tickPrice2);
    console.log("Your ticket price is $" + tickPrice2);
}



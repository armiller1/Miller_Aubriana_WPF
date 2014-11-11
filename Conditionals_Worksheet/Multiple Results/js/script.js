/*
 Aubriana Miller
 WPF 1411 Section 01
 Conditionals Worksheet: Multiple Results
 11-10-2014
 */

//Multiple Results - Grade Letter Calculator

var myScore = prompt("What is your score?");
//var myPercent = alert("You got a " + myScore + "%");

if(myScore >= 90 && myScore <= 100){
    alert("You got a " + myScore + "%" + " which means you got an A! Great Job!");
    console.log("You got a " + myScore + "%" + " which means you got an A! Great Job!");
}else if(myScore >= 80 && myScore <= 89){
    alert("You got a " + myScore + "%" + " which means you got a B! Keep up the good work!");
    console.log("You got a " + myScore + "%" + " which means you got a B! Keep up the good work!");
}else if(myScore >= 70 && myScore <= 79){
    alert("You got a " + myScore + "%" + " which means you got a C! Not bad!");
    console.log("You got a " + myScore + "%" + " which means you got a C! Not bad!");
}else if(myScore >= 60 && myScore <= 69){
    alert("You got a " + myScore + "%" + " which means you got a D, not doing very well!");
    console.log("You got a " + myScore + "%" + " which means you got a D, not doing very well!");
}else if(myScore < 60){
    alert("Sorry, you did not pass this class!");
    console.log("Sorry, you did not pass this class!");
}

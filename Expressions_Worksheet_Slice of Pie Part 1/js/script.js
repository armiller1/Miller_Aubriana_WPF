/*
 Aubriana Miller
 WPF 1411 Section 01
 Assignment: Expressions
 11-6-2014
 */

//Slices of pie Part 1

var stuDents = 7;//Number of students
prompt("How many students are there?");//Asking user to input number of students, in this cas it's 7
var piZza = 4;//Number of pizza pies
prompt("How many pizza pies are there?");//Asking the user to input the number of pizza pies there are,
// in this case it's 4
var slicesPerpie = 8;//Number of slices per pizza
prompt("How many slices per pizza pie?");//Asking user to input number of slices per pie
var slicesPerstudent = slicesPerpie * piZza / stuDents;//Calculation to determine how many slices per student
alert("Each student gets " + slicesPerstudent + " slices of pizza.");//Alerts the user of answer

console.log(slicesPerstudent);

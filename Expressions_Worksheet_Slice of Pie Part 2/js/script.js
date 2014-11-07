/*
 Aubriana Miller
 WPF 1411 Section 01
 Assignment: Expressions
 11-6-2014
 */

//Slice of Pie Part 2

var stuDents = prompt("How many students are there?");//Asks user to enter number of students

var piZzas = prompt("How many pizza pies are there?");//Asks user to input number of pizza pies

var sliCes = 8 * piZzas;//Slices per pizza (standard)

var remainder = sliCes % stuDents;//Calculating the remainder of slices left for Sparky

var spArky = remainder;//Number of slices for Sparky

alert("Sparky gets " + spArky + " slices of pizza.");//Alerts user about the remaining slices for Sparky

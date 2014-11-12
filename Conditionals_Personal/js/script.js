/*
 Aubriana Miller
 WPF 1411 Section 01
 Conditionals_Personal
 11-11-2014
 */

//What shoes should I wear today?

var weather = prompt("What is the temperature right now in Fahrenheit?");
var sunny = prompt("Is it sunny?");


if(weather <= 70 && sunny === "no"){
    alert("It's too cold, you should wear Converse!");
    console.log("It's too cold, you should wear Converse!");
}else if(weather >= 69 && sunny === "yes"){
    alert("It's nice and warm, you can wear flip flops!");
    console.log("It's nice and warm, you can wear flip flops!")
}

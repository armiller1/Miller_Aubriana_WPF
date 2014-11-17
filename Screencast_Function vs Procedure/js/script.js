/*
 Aubriana Miller
 WPF 1411 Section 01
 Screencast: Function vs Procedure
 11-17-2014
 */

//Functions - Function vs Procedure

//this is a function
function calcAreaF(width, height){
    var area = width * height;
    return area;
}

//this is a procedure
function calcAreaP(width, height){
    var area = width * height;
    console.log(area); //no return
}
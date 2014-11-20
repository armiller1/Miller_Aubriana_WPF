/*
 Aubriana Miller
 WPF 1411 Section 01
 Functions: Industry
 11-18-2014
 */

//How long will it take to build the website?

var siteType = prompt("Is the website personal or for a business?");
var numPages = prompt("How many pages are needed on this website?");
var days1 = 14;
var days2 = 90;

while(siteType ==="" || siteType != "personal" && siteType != "business"){
    prompt("Is the website personal or for a business?");
    console.log("Is the website personal or for a business?");
}while(isNaN(numPages) || numPages ===""){
    prompt("How many pages are needed on this website?");
    console.log("How many pages are needed on this website?");
}
determine(14,90);

var result = determine(days1,days2);
alert("Your project will take approximately " + result +" days to complete!");
console.log("Your project will take approximately " + result +" days to complete!");

function determine(days1,days2){
    var numDays = Math.round*(days2-days1)+Number(days1);
    return numDays;
}
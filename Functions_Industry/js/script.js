/*
 Aubriana Miller
 WPF 1411 Section 01
 Functions: Industry
 11-18-2014
 */

//How long will it take to build the website?

var siteType = prompt("Is the website personal or for a business?");//type of site
var numPages = prompt("How many pages are needed on this website?");//how big is the site
//lowest to most amount of days to build site
var days1 = 14;
var days2 = 90;
//while user prompt is different than available answers or left unanswered
while(siteType ==="" || siteType != "personal" || siteType != "business"){
    prompt("Is the website personal or for a business?");
    console.log("Is the website personal or for a business?");
}while(isNaN(numPages) || numPages ===""){
    prompt("How many pages are needed on this website?");
    console.log("How many pages are needed on this website?");
}
determine(14,90);//calls the function

var result = determine(days1,days2);//variable for result
alert("Your project will take approximately " + result +" days to complete!");//alerting user of results
console.log("Your project will take approximately " + result +" days to complete!");

function determine(days1,days2){//function
    var numDays = Math.round*(days2-days1)+Number(days1);
    return numDays;
}
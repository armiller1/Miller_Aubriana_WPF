/*
 Aubriana Miller
 WPF 1411 Section 01
 Screencast: For Loops
 11-18-2014
 */

//While Loops

var b = 50; //sets up the index

while(b < 0){ //checks the condition
    console.log(b + " kegs on the wall");
    b--; //increments or decrements the index
}

//Do-While Loops

var c = 10;

do{
    console.log(c + " kegs on the wall");
    c--;
}
while(c > 0);

//For Loops

for(var i = 10; i > 0; i--){
    console.log(i + " kegs on the wall")
}

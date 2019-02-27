const DATE = new Date();
var hour = DATE.getHours();
var min = DATE.getMinutes();
var greeting;
var el = document.querySelector("#welcome");

var currentGreetings = function () {
    switch(true){
    case hour>=12 && hour<18:
    this.greeting = "Good Afternoon";
    break;
    case hour>=18 && hour<=23 && min < 59:
    this.greeting = "Good Evening";
    break;
    case hour>=0 && hour<12:
    this.greeting = "Good Morning";
    break;
    default :
    this.greeting = "Welcome";   
    } 

    return greeting;
}   

el.innerHTML = currentGreetings();

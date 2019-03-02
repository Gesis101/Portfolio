const DATE1 = new Date();
var hour = DATE1.getHours();
var min = DATE1.getMinutes();
var greeting;
var el = document.querySelector("#showcase-welcome");
var el1 = document.querySelector('#putDate');

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
} ;  

el.style.fontSize = "250%";
el.innerHTML = currentGreetings();
el2.innerHTML = currentGreetings();


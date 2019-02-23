const DATE = new Date();
var hour = DATE.getHours();
var min = DATE.getMinutes();
var greeting;
var el = document.querySelector("#welcome");

switch(true){
    case hour>=12 && hour<18:
    greeting = "Good Afternoon";
    break;
    case hour>=18 && hour<=23 && min < 59:
    greeting = "Good Evening";
    break;
    case hour>=0 && hour<12:
    greeting = "Good Morning";
    break;
    default :
    greeting = "Welcome";
}


el.innerHTML = greeting;

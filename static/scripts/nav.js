var navBtn = document.querySelector("#svg1");
var mainNav = document.querySelector("#mainNav");

var navState = false;

//Close nav
var closeNav = function () {
    mainNav.style.display = "none";
};
//Open nav
var openNav = function () {
    mainNav.style.display = "grid";
};

var ok =  false;
$("#svg1").click(function () {
    $(this).toggleClass("open");

    $('#mainNav').animate({
        height: 'toggle'
    });
    if(!ok){
        $('#nav').css("background","#57636D");
        ok =true;
    }else{
        $('#nav').css("background","transparent");
        ok = false;
    }
    $('#mainNav').css("display", "grid");
});







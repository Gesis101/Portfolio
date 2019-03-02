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


$("#svg1").click(function () {
    $(this).toggleClass("open");

    $('#mainNav').animate({
        height: 'toggle'
    });

    $('#mainNav').css("display", "grid");
});







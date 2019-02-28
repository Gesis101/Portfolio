//This Js file will mainly focus on About me section animation sliders
const module = (function () {
    //Next & previous button
    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');

    //My skills charts
    const skill1 = document.querySelector('#skill1');
    const skill2 = document.querySelector('#skill2');
    const skill3 = document.querySelector('#skill3');
    const skillWidth = document.querySelector('.whoAmI').offsetWidth;
    //Slider div
    let sliderImage = document.querySelectorAll(".slide");
    let btn_close = document.querySelector('#btn-close');
    let side_menu = document.querySelector('#side-menu');

    //private vars 
    var count = 0;
    var skillNumber = 1;
    var currentSkill = 1;


    var displayNone = function (input) {
        input.style.display = 'none';
    };

    //Checks what skill it is and sets it to current skill
    var getSkillNumber = function (input1) {
        switch (true) {
            case input1 == 1:
                skillNumber = 1;
                currentSkill = skill1;           
                break;
            case input1 == 2:
                skillNumber = 2;
                currentSkill = skill2;
                break;
            case input1 == 3:
                skillNumber = 3;
                currentSkill = skill3;
                break;
            default:
                skillNumber = 1;
                currentSkill = skill1;;
        }
        return skillNumber;
    };

    var skill = function () {
        skill1 = displayNone(skill1);
        return skill1;
    };


    var reset = function() {
        for (let i = 0; i < sliderImage.length; i++) {
            sliderImage[i].style.display = "none";
          }
    };

    var start = function(){
        reset();
        sliderImage[0].style.display = "block";
    }

    //Next slide :  (items fixed to 3, need to add if more sections added to html)
    var nextSlide = function () {
        reset();
        sliderImage[count+1].style.display = "block";
        count++;
    };

    //previous slide
    var prevSlide = function () {
        reset();
        sliderImage[count-1].style.display = "block";
        count--;
    };

    //Open slide menu
    var openSlideMenu = function(){
        side_menu.style.width = "250px";
    };

    var closeSlideMenu = function(){
        side_menu.style.width = "0px";
    };


    //event handler
    next.addEventListener("click", function () {
        if(count === sliderImage.length-1){
         count = -1;
        }
        console.log("logged " + skillWidth + " count " + count + " length: " + sliderImage.length);
        nextSlide();
    });

    prev.addEventListener("click", function () {
        if(count === 0){
            count = sliderImage.length;   
        }
        console.log("logged " + skillWidth + " count " + count + " length: " + sliderImage.length);
        prevSlide();
    });

   
    btn_close.addEventListener("click", function() {
        console.log("clicked");
        openSlideMenu();
    });

    return {
        skill: skill,
        prevSlide: prevSlide,
        nextSlide: nextSlide,
        start: start
    }
})();

module.start();



/* //slide wrapper 
const skill_wrapper = document.querySelector('.skill-wrapper');

//Skill descriptions
const descr1 = document.querySelector('#description1');
const descr2 = document.querySelector('#description2');
const descr3 = document.querySelector('#description3'); */
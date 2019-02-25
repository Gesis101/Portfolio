//This Js file will mainly focus on About me section animation sliders
const module = (function(){
    //Next & previous button
    const next = document.querySelector('#next'); 
    const prev = document.querySelector('#prev'); 

    //My skills charts
    const skill1 = document.querySelector('#skill1');
    const skill2 = document.querySelector('#skill2');
    const skill3 = document.querySelector('#skill3');
    const skillWidth = document.querySelector('.whoAmI').offsetWidth;
    //slide wrapper 
    const skill_wrapper = document.querySelector('.skill-wrapper');

    //Skill descriptions
    const descr1 = document.querySelector('#description1');
    const descr2 = document.querySelector('#description2');
    const descr3 = document.querySelector('description3');

    //private vars 
    var count = 1;
    var skillNumber = 1;


    var displayNone = function(input){
        input.style.display = 'none';
    };

    var getSkillNumber = function(input1){
        switch(true){
            case input1 = skill1:
            skillNumber = 1;
            break;
            case input1 = skill2:
            skillNumber = 2;
            break;
            case input1 = skill3:
            skillNumber = 3;
            break;

            default :
            skillNumber = 1;
        }
        return skillNumber;
    };

    var skill = function(){
       skill1 = displayNone(skill1);
        return skill1;
    };

    //Next slide :  (items fixed to 3, need to add if more sections added to html)
        var nextSlide = function(){
            items = getSkillNumber();
            if(count < 3){
                skill1.style.left = "-"+count+this.skillWidth+"px";
            } else if(count = items ){
                skill1.style.left = "0px";
            }
        };

    //previous slide
        var prevSlie = function(){
            if(count > 1){
                
            }
        }
    return {
        skill: skill
    }
})();

//module.skill();



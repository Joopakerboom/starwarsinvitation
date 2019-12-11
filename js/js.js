// ON RELOAD SCROLL TO TOP
window.onload = function() {
 setTimeout (function () {
  scrollTo(0,0);
 }, 100);
}

// CURSOR
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;")
})

// BULLETS

var body = document.querySelector('body');
var bullets = 0;

var gunShot = document.querySelector("audio:nth-of-type(1)");

var gunBarrel = document.querySelector('header svg:nth-of-type(2)');


function myBullets() {
    bullets++;
//    console.log(bullets);
    cursor.classList.add("mouseclick");
    
    setTimeout(function () {
            cursor.classList.remove("mouseclick");
        }, 1000);

    if (bullets >= 1) {
        gunShot.play();
        
    }
}

body.addEventListener("click", myBullets);

//// COLOR CHANGE FUNCTION
//
//window.addEventListener("scroll", function () {
//    var hoogte = window.pageYOffset + window.innerHeight;
////    console.log(hoogte);
//    if (hoogte >= 1000) {
//        headerLogo.classList.add("changecolorlogo");
//        headerOpen.classList.add("changecolor1");
//        gunBarrel.classList.add("changecolorgun");
//    } else {
//        headerLogo.classList.remove("changecolorlogo");
//        headerOpen.classList.remove("changecolor1");
//        gunBarrel.classList.remove("changecolorgun");
//    }
//
//    if (hoogte >= 2000) {
//        headerOpen.classList.remove("changecolor1");
//        gunBarrel.classList.remove("changecolorgun");
//    }
//});

// SETTINGS FUNCTION

var section = document.querySelector('.settingsection--sticky');
var sectionSetting1 = document.querySelector('.sticky article:nth-of-type(1)');
var sectionSetting2 = document.querySelector('.sticky article:nth-of-type(2)');
var img = document.querySelector('.sticky--figure > img');

window.addEventListener('scroll', function () {
    var top = section.getBoundingClientRect().top;
//    console.log(top);
    if (top <= 0) {
        img.style = 'transform: scale(' + ((top / -3000) + .1) + ');';
        img.src='images/Startitle-2.png'
    } else {
        img.style = '';
    }

  

    if (top <= -1250) {
        sectionSetting1.classList.add("showsettinginfo");
        
        img.style = 'transform: scale(0.516)';
        img.src='images/Startitle-3.png'
    } else {
        sectionSetting1.classList.remove("showsettinginfo");
    }

//    if (top <= -1270) {
//        img.style = 'transform: scale(0.516)';
//        img.src='images/Startitle-3.png'
//    }
    
});

//PERSON BUTTONS

var elements = document.querySelectorAll('.js-person-button');
var submitButton = document.querySelector('.js-present-button');

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function(event) {
        removeClass();
        console.log('ettee');
        this.classList.add("person-button--chosen");
        var personName = this.getAttribute('data-person-name');
        submitButton.innerHTML = 'The Jedi ' + personName + ' is present';
    });
}
function removeClass(){
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('person-button--chosen');
    }
}



submitButton.addEventListener('click', function() {
    this.classList.add('jedi-click');
});



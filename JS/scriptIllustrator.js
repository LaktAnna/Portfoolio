//********* Illustraatori animatsioon *********

var illustratorAnimation = bodymovin.loadAnimation({
    container: document.getElementById('illustrator'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'CARD1.2/dataIllustrator.json',
    prerender: true,
})

// Анимируем Иллюстратор
document.getElementById('illustrator').addEventListener('mouseover', function(){ 
    illustratorAnimation.setDirection(1); 
    illustratorAnimation.play(); 
})

document.getElementById('illustrator').addEventListener('mouseleave', function(){ 
//  здесь у нас раньше было bodymovin.setDirection(-1), 
//  что и вызывало ошибку, потому что оно меняло направление анимации для всей библиотеки анимации
  
//  теперь мы меняем направление только для той анимации, что нам нужна, и все хорошо =)
illustratorAnimation.setDirection(-1); 
illustratorAnimation.play(); 
})

//********** Video animatsioon **********

var videoAnimation1 = bodymovin.loadAnimation({
    container: document.getElementById('animOnHover'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'CARD2/dataOnHover2.json',
    prerender: true,
})

var videoAnimation2 = bodymovin.loadAnimation({
    container: document.getElementById('animMouseOut'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'CARD2/dataMouseOut2.json',
    prerender: true,
})

// Анимируем видео, тут ничего не меняла (хотя можно =)
function over() {
    document.getElementById("animOnHover").style.visibility = "visible"; 
    document.getElementById("animMouseOut").style.visibility = "hidden";
    videoAnimation1.goToAndPlay(0);
}

function out() {
    document.getElementById("animOnHover").style.visibility = "hidden"; 
    document.getElementById("animMouseOut").style.visibility = "visible";
    videoAnimation2.goToAndPlay(0);
}

//********* Fotograafia animatsioon *********

var photoraphyAnimation = bodymovin.loadAnimation({
    container: document.getElementById('photo'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'CARD3/dataPhotography.json',
    prerender: true,
})

document.getElementById('photo').addEventListener('mouseover', function(){photoraphyAnimation.setDirection(1);photoraphyAnimation.play(); })
document.getElementById('photo').addEventListener('mouseleave', function(){photoraphyAnimation.setDirection(-1); photoraphyAnimation.play(); })

//********* Web animatsioon *********

var webAnimation = bodymovin.loadAnimation({
    container: document.getElementById('web'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'CARD4/dataHtmlCss.json',
    prerender: true,
})

document.getElementById('web').addEventListener('mouseover', function(){webAnimation.setDirection(1); webAnimation.play(); })
document.getElementById('web').addEventListener('mouseleave', function(){webAnimation.setDirection(-1); webAnimation.play(); })

//********* Õpingud animatsioon *********

var studiesAnimation = bodymovin.loadAnimation({
    container: document.getElementById('studies'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'CARD5.2/dataStudies.json',
    prerender: true,
})

document.getElementById('studies').addEventListener('mouseover', function(){studiesAnimation.setDirection(1); studiesAnimation.play(); })
document.getElementById('studies').addEventListener('mouseleave', function(){studiesAnimation.setDirection(-1); studiesAnimation.play(); })

//********* Kunst animatsioon *********

var kunstAnimation = bodymovin.loadAnimation({
    container: document.getElementById('kunst'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'CARD6/dataArts.json',
    prerender: true,
})

document.getElementById('kunst').addEventListener('mouseover', function(){kunstAnimation.setDirection(1); kunstAnimation.play(); })
document.getElementById('kunst').addEventListener('mouseleave', function(){kunstAnimation.setDirection(-1); kunstAnimation.play(); })

//********* Hobid animatsioon *********

var hobidAnimation = bodymovin.loadAnimation({
    container: document.getElementById('hobid'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'CARD7/dataHobbies.json',
    prerender: true,
})

document.getElementById('hobid').addEventListener('mouseover', function(){hobidAnimation.setDirection(1); hobidAnimation.play(); })
document.getElementById('hobid').addEventListener('mouseleave', function(){hobidAnimation.setDirection(-1); hobidAnimation.play(); })


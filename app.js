$(document).ready(function(){

    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots',
        autoplay: true
    });

     $(window).scroll(function(){
        $('.header').toggleClass('scrolled',$(this).scrollTop()>50);
    });

});

let typed = new Typed ('.typed',{
 
    strings:["I'm a creative",'Designer',],
    typeSpeed: 40,
    backSpeed: 25,
    typeDelay: 1000,
    backDelay: 1500,
    loop: true,
});

let typed2 = new Typed ('.typed2',{
 
    strings:["I'm Md Mehedi Hasan",],
    typeSpeed: 40,
    backSpeed: 25,
    typeDelay: 1000,
    backDelay: 1500,
    loop: true,
});


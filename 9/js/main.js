function header_animation_border(e) {
    let left = e.offset().left + 44, width = e.outerWidth();
    header_nav_choosen = e.index(".header__nav");
    $(".header__nav__border-inner").eq(0).css({left: left, width: width});
}


/* Анимация движения первой буквы */

function screen_1_animation_1() {
    let part_1 = (Math.random() * (1 - (-1))) + (-1);
    let part_2 = (Math.random() * (1 - (-1))) + (-1);
    let left_base = -5/100 * $(window).width();
    let top_base = -6/100 * $(window).height();
    
    let a_t = top_base + part_1 * $(window).height() * 2 / 100;
    let a_l = left_base + part_2 * $(window).width() * 2 / 100;
    
    $(".background__letter__c").css("top", a_t);
    $(".background__letter__c").css("left", a_l);
    setTimeout(screen_1_animation_1, 2000);   
}

/* Анимация движения второй буквы */

function screen_1_animation_2() {
    let part_1 = (Math.random() * (1 - (-1))) + (-1);
    let part_2 = (Math.random() * (1 - (-1))) + (-1);
    let left_base = 12/100 * $(window).width();
    let top_base = 15/100 * $(window).height();
    
    let a_t = top_base + part_1 * $(window).height() * 2 / 100;
    let a_l = left_base + part_2 * $(window).width() * 2 / 100;
    
    $(".background__letter__d").css("top", a_t);
    $(".background__letter__d").css("left", a_l);
    setTimeout(screen_1_animation_2, 2000);   
}

/* Анимация движения третьей буквы */

function screen_1_animation_3() {
    let part_1 = (Math.random() * (1 - (-1))) + (-1);
    let part_2 = (Math.random() * (1 - (-1))) + (-1);
    let left_base = 50/100 * $(window).width();
    let top_base = -6/100 * $(window).height();
    
    let a_t = top_base + part_1 * $(window).height() * 2 / 100;
    let a_l = left_base + part_2 * $(window).width() * 2 / 100;
    
    $(".background__letter__m").css("top", a_t);
    $(".background__letter__m").css("left", a_l);
    setTimeout(screen_1_animation_3, 2000);    

}

/* Анимация появления блоков с текстом */

function screen_2_block_animation(a) {
    let scroll = (a - $(window).height()/2) / ($(window).height()/2);
    $(".screen__second__left").css("opacity", 1 * scroll);
    $(".screen__second__left").css("right", 150 - 150 * scroll);
    
    $(".screen__second__right").css("opacity", 1 * scroll);
    $(".screen__second__right").css("left", 150 - 150 * scroll);
}

/* Анимация движения первых инициалов */

function screen_3_animation_1() {
    let part_1 = (Math.random() * (1 - (-1))) + (-1);
    let part_2 = (Math.random() * (1 - (-1))) + (-1);
    let left_base = 0/100 * $(window).width();
    let top_base = 40/100 * $(window).height();
    
    let a_t = top_base + part_1 * $(window).height() * 1 / 100;
    let a_l = left_base + part_2 * $(window).width() * 1 / 100;
    
    $(".screen__third__block").eq(0).css("top", a_t);
    $(".screen__third__block").eq(0).css("left", a_l);
    setTimeout(screen_3_animation_1, 2000);   
}
function screen_3_animation_2() {
    let part_1 = (Math.random() * (1 - (-1))) + (-1);
    let part_2 = (Math.random() * (1 - (-1))) + (-1);
    let left_base = 15/100 * $(window).width();
    let top_base = 10/100 * $(window).height();
    
    let a_t = top_base + part_1 * $(window).height() * 1 / 100;
    let a_l = left_base + part_2 * $(window).width() * 1 / 100;
    
    $(".screen__third__block").eq(1).css("top", a_t);
    $(".screen__third__block").eq(1).css("left", a_l);
    setTimeout(screen_3_animation_2, 2000);   
}
function screen_3_animation_3() {
    let part_1 = (Math.random() * (1 - (-1))) + (-1);
    let part_2 = (Math.random() * (1 - (-1))) + (-1);
    let left_base = 48/100 * $(window).width();
    let top_base = 20/100 * $(window).height();
    
    let a_t = top_base + part_1 * $(window).height() * 1 / 100;
    let a_l = left_base + part_2 * $(window).width() * 1 / 100;
    
    $(".screen__third__block").eq(2).css("top", a_t);
    $(".screen__third__block").eq(2).css("left", a_l);
    setTimeout(screen_3_animation_3, 2000);   
}
function screen_3_animation_4() {
    let part_1 = (Math.random() * (1 - (-1))) + (-1);
    let part_2 = (Math.random() * (1 - (-1))) + (-1);
    let left_base = 40/100 * $(window).width();
    let top_base = 70/100 * $(window).height();
    
    let a_t = top_base + part_1 * $(window).height() * 1 / 100;
    let a_l = left_base + part_2 * $(window).width() * 1 / 100;
    
    $(".screen__third__block").eq(3).css("top", a_t);
    $(".screen__third__block").eq(3).css("left", a_l);
    setTimeout(screen_3_animation_4, 2000);   
}

$(document).ready(function() {

    $(".header__nav").eq(0).click(function() {
        $('html, body').animate({ scrollTop: 0* $(window).height() }, 600); 
        setTimeout(header_animation_border, 600, $(".header__nav").eq(0));
    });
    $(".header__nav").eq(1).click(function() {
        $('html, body').animate({ scrollTop: 1 * $(window).height() }, 600);
        setTimeout(header_animation_border, 6, $(".header__nav").eq(1), 100);
    });
    $(".header__nav").eq(2).click(function() {
        $('html, body').animate({ scrollTop: 2 * $(window).height() }, 600);
        setTimeout(header_animation_border, 6, $(".header__nav").eq(2), 100);
    });
    $(".header__nav").eq(3).click(function() {
        $('html, body').animate({ scrollTop: 3 * $(window).height() }, 600);
        setTimeout(header_animation_border, 6, $(".header__nav").eq(3), 100);
    });
    $(".header__lang__block").click(function() {
        if (lang == 0) {
            alert ("Реактивное изменение языка на EN");
            $(".header__lang__block").eq(0).addClass("header__lang-click");
            $(".header__lang__block").eq(1).removeClass("header__lang-click");
            lang = 1;
        } else {
            alert ("Реактивное изменение языка на PT");
            $(".header__lang__block").eq(1).addClass("header__lang-click");
            $(".header__lang__block").eq(0).removeClass("header__lang-click");
            lang = 0;
        }
    });
    
    setTimeout(header_animation_border, 50, $(".header__nav").eq(0), 300);
    screen_1_animation_1();
    screen_1_animation_2();
    screen_1_animation_3();
    
    screen_3_animation_1();
    screen_3_animation_2();
    screen_3_animation_3();
    screen_3_animation_4();
    
    /* Анимация первых инициалов */
    
    $(".screen__third__firstblock").mouseover(function(){
        $(this).children().height("100%");
        $(".screen__third__block").eq(1).children(".screen__third__wrapper").css("height", "30%");
        $(".screen__third__block").eq(2).children(".screen__third__wrapper").css("height", "30%");
        $(".screen__third__block").eq(3).children(".screen__third__wrapper").css("height", "30%");

    });
    $(".screen__third__firstblock").click(function(){
        $(this).children().children(".screen__third__text").css("display", "flex");
    });
    $(".screen__third__firstblock").mouseleave(function(){
        $(".screen__third__wrapper").height("50%");
        $(this).children().children(".screen__third__text").css("display", "none");
    });
    
    /* Анимация вторых инициалов */
    
    $(".screen__third__secondblock").mouseover(function(){
        $(this).children().height("100%");
        $(".screen__third__block").eq(0).children(".screen__third__wrapper").css("height", "30%");
        $(".screen__third__block").eq(2).children(".screen__third__wrapper").css("height", "30%");
        $(".screen__third__block").eq(3).children(".screen__third__wrapper").css("height", "30%");
        $(this).children().children(".screen__third__date").css("font-size", "36px");
    });
    $(".screen__third__secondblock").click(function(){
        $(this).children().children(".screen__third__text").css("display", "flex");
    });
    $(".screen__third__secondblock").mouseleave(function(){
        $(".screen__third__wrapper").height("50%");
        $(this).children().children(".screen__third__text").css("display", "none");
        $(this).children().children(".screen__third__date").css("font-size", "18px");
    });
    
    /* Анимация третьих инициалов */
    
    $(".screen__third__thirdblock").mouseover(function(){
        $(this).children().height("100%");
        $(".screen__third__block").eq(0).children(".screen__third__wrapper").css("height", "30%");
        $(".screen__third__block").eq(1).children(".screen__third__wrapper").css("height", "30%");
        $(".screen__third__block").eq(3).children(".screen__third__wrapper").css("height", "30%");
        $(this).children().children(".screen__third__date").css("font-size", "36px");
    });
    $(".screen__third__thirdblock").click(function(){
        $(this).children().children(".screen__third__text").css("display", "flex");
    });
    $(".screen__third__thirdblock").mouseleave(function(){
        $(".screen__third__wrapper").height("50%");
        $(this).children().children(".screen__third__text").css("display", "none");
        $(this).children().children(".screen__third__date").css("font-size", "18px");
    });
    
    /* Анимация четвертых инициалов */
    
    $(".screen__third__fourthblock").mouseover(function(){
        $(this).children().height("100%");
        $(".screen__third__block").eq(0).children(".screen__third__wrapper").css("height", "30%");
        $(".screen__third__block").eq(1).children(".screen__third__wrapper").css("height", "30%");
        $(".screen__third__block").eq(2).children(".screen__third__wrapper").css("height", "30%");
        $(this).children().children(".screen__third__date").css("font-size", "36px");
    });
    $(".screen__third__fourthblock").click(function(){
        $(this).children().children(".screen__third__text").css("display", "flex");
    });
    $(".screen__third__fourthblock").mouseleave(function(){
        $(".screen__third__wrapper").height("50%");
        $(this).children().children(".screen__third__text").css("display", "none");
        $(this).children().children(".screen__third__date").css("font-size", "18px");
    });
});


$(window).resize(function() {
    header_animation_border($(".header__nav").eq(header_nav_choosen), 0);
});


$(window).scroll(function(){ 
    $(".background__letters").eq(0).offset({top: $(window).scrollTop()*0.5});
    $(".background__letters").eq(1).offset({top: $(window).scrollTop()*0.5 + $(window).height()*1.5});
    
    if ($(window).scrollTop() >= $(window).height()/2 && $(window).scrollTop() < $(window).height()) {
        screen_2_block_animation($(window).scrollTop());
    }
    
    if ($(window).scrollTop() < $(window).height()) {
        header_animation_border($(".header__nav").eq(0));
    } else if($(window).scrollTop() < $(window).height() * 2) {
        header_animation_border($(".header__nav").eq(1));
    } else if($(window).scrollTop() < $(window).height() * 3) {
        header_animation_border($(".header__nav").eq(2));
    } else {
        header_animation_border($(".header__nav").eq(3));
    }
    
});






var header_nav_choosen = 0, 
    lang = 0; /* 0 - PT, 1 - EN */




var app = new Vue({
  el: '#name',
  data: {
    message: 'Привет, Vue!'
  }
})
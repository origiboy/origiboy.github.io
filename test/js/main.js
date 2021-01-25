$(document).ready(function(){
    
});
$("#polzunok").slider({
        animate: "slow",
        range: "min",    
        min: 30,
        max: 10000,
        value: 100,
        step: 10,
        slide : function(event, ui) {    
            $(".block__2__1__first__main__input__i").eq(0).html(ui.value );
            $(".polzunok__window").eq(0).html(ui.value + "$");
            $(".polzunok__window").eq(0).css("left", $(".ui-slider-handle").position().left-30);
            $(".block__2__1__first__main__input__i").eq(1).html(ui.value * 1.3);
        }
    });   
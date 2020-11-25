$(document).ready(function()
{
$(".main-search-tag-cross").click(function(){
$(this).parent().css("display", "none");
});

$(".main-block-filter-close").click(function(){
if ($(this).children(".main-block-filter-close-2").css("display")=="none")
{
$(this).children(".main-block-filter-close-2").css("display", "inline-block");
$(".main-block-filter-line").eq($(this).parent().parent().parent().index()).css("display", "none");

}
else
{
$(this).children(".main-block-filter-close-2").css("display", "none");
$(".main-block-filter-line").eq($(this).parent().parent().parent().index()).css("display", "inline-block");
}
});
var flag_lang=0;

$("#main-block-results-nav-2-lang").click(function(){
if (flag_lang==0)
{
flag_lang=1;
$(".main-block-results-nav-2-plus").css("transform", "rotate(45deg)");
$( "#popup-lang" ).css("top", $( "#main-block-results-nav-2-lang" ).offset().top+$( "#main-block-results-nav-2-lang" ).height()+10);
$( "#popup-lang" ).css("left", $( "#main-block-results-nav-2-lang" ).offset().left+$( "#main-block-results-nav-2-lang" ).width()-$( "#popup-lang" ).width()-10);
$( "#popup-lang" ).css("display", "inline-block");
}
else
{
flag_lang=0;
$(".main-block-results-nav-2-plus").css("transform", "rotate(0deg)");
$(this).children().css("transform", "rotate(0deg)");
$( "#popup-lang" ).css("display", "none");
}
});

flag_menu=0;
$("#header-burger").click(function(){
if (flag_menu==0)
{
$("#menu").css("display", "inline-block");
    
$(".header-burger-1").css("transform", "rotate(45deg)");
            $(".header-burger-1").css("top", "8px");
            $(".header-burger-2").css("display", "none");
            $(".header-burger-3").css("transform", "rotate(-45deg)");
            $(".header-burger-3").css("top", "8px");
    
flag_menu=1;
}
else
{
$("#menu").css("display", "none");
            $(".header-burger-1").css("transform", "rotate(0deg)");
            $(".header-burger-1").css("top", "0px");
            $(".header-burger-2").css("display", "inline");
            $(".header-burger-3").css("transform", "rotate(0deg)");
            $(".header-burger-3").css("top", "20px");
flag_menu=0;
}
});

flag_more=0;
$(".main-bottom-icon").eq(1).click(function(){
if (flag_more==0)
{
$( "#main-bottom-icon-menu" ).css("top",$(".main-bottom-icon").eq(1).offset().top-$("#main-bottom-icon-menu").height()-20);
$( "#main-bottom-icon-menu" ).css("left", $(".main-bottom-icon").eq(1).offset().left);
$( "#main-bottom-icon-menu" ).css("display", "inline-block");
flag_more=1;
}
else
{
$("#main-bottom-icon-menu").css("display", "none");
flag_more=0;
}
});

$( ".main-bottom-icon" ).click(function() {
$( "#main-desc-r-order-popup" ).css("top", $( ".main-desc-r-order-extra-1" ).offset().top+30);
$( "#main-desc-r-order-popup" ).css("left", $( ".main-desc-r-order-extra-1" ).offset().left);
$( "#main-desc-r-order-popup" ).css("display", "inline-block");

});


$( ".main-block-filter-line-label" ).click(function() {  
var index=$(this).index('.main-block-filter-line-label');
if ($(this).children().is(':checked'))
{
$('.main-block-lang-points').eq(index).css("display", "flex");
}
else
{
$('.main-block-lang-points').eq(index).css("display", "none");
}
}); 

flag_sort=0;
$(".main-block-results-nav-1-img").eq(0).click(function(){
if (flag_sort==0)
{
$( "#main-block-results-nav-sort" ).css("top",$(".main-block-results-nav-1-img").eq(0).offset().top+$(".main-block-results-nav-1-img").eq(0).height()+10);
$( "#main-block-results-nav-sort" ).css("left", $(".main-block-results-nav-1-img").eq(0).offset().left);
$( "#main-block-results-nav-sort" ).css("display", "inline-block");
flag_sort=1;
}
else
{
$("#main-block-results-nav-sort").css("display", "none");
flag_sort=0;
}
});
    
$(".main-block-results-nav-sort").click(function(){
    $(".main-block-results-nav-1-point").eq(0).html($(this).html());
    $("#main-block-results-nav-sort").css("display", "none");
});
    
    
});


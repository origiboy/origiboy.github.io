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

$("#main-block-lang").click(function(){
if (flag_lang==0)
{
flag_lang=1;
$(this).children().css("transform", "rotate(180deg)");
$( "#popup-lang" ).css("top", $( "#main-block-lang" ).offset().top+$( "#main-block-lang" ).height()+10);
$( "#popup-lang" ).css("left", $( "#main-block-lang" ).offset().left);
$( "#popup-lang" ).css("display", "inline-block");
}
else
{
flag_lang=0;
$(this).children().css("transform", "rotate(0deg)");
$( "#popup-lang" ).css("display", "none");
}
});
flag_menu=0;
$("#header-burger").click(function(){
if (flag_menu==0)
{
$("#menu").css("display", "inline-block");
flag_menu=1;
}
else
{
$("#menu").css("display", "none");
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
let index=$(this).index('.main-block-filter-line-label');
if ($(this).children().is(':checked'))
{
$('.header-flag').eq(index).css("display", "inline-block");
}
else
{
$('.header-flag').eq(index).css("display", "none");
}
}); 

});
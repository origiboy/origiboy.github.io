var tags_count=0;
$(document).ready(function()
{
var str=$(".main-block-line-r-word").css("font-size");
str=str.replace("px", "");
var line_height=Number(str);
$(".main-block-line-r-places").height(line_height*3)


$(".main-block-top").click(function(){
$(".main-block-top").css("font-weight", "100");
$(this).css("font-weight", "900");
$(".main-block").css("display", "none");
$(".main-block").eq($(this).index()).css("display", "inline-block");
});
var flag_extra=0;

$(".main-block-line-r-more").click(function(){
if (flag_extra==0)
{
$(this).parent().children(".main-block-line-r-places").css("height", "auto");
flag_extra=1;
$(this).css("transform", "rotate(45deg)");
}
else
{
$(this).parent().children(".main-block-line-r-places").css("height", line_height*3+"px");
flag_extra=0;
$(this).css("transform", "rotate(0deg)");
}
});

var flag_extra_c=0;

$(".main-block-more-c").click(function(){
var index=$(this).index('.main-block-more-c');
if (flag_extra_c==0)
{ 
$(".main-block-more-c-extra").eq(index).css("display", "inline");
flag_extra_c=1;
$(this).children(".main-block-more-c-img").css("transform", "rotate(45deg)");
}
else
{
$(".main-block-more-c-extra").eq(index).css("display", "none");
flag_extra_c=0;
$(this).children(".main-block-more-c-img").css("transform", "rotate(0deg)");
}
});

$(".main-block-2-l-head").css("color", "rgb(153, 153, 153)");
$(".main-block-2-l-head").css("background", "rgb(238, 238, 238)");
$(".main-block-2-l-head").eq(0).css("color", "rgb(255, 255, 255)");
$(".main-block-2-l-head").eq(0).css("background", "rgb(0, 0, 0)");
$(".main-block-2-r").fadeOut( "fast" );

$(".main-block-2-r").eq(0).delay(300).fadeIn( "fast" );

$(".main-block-2-l-head").click(function(){
$(".main-block-2-l-head").css("color", "rgb(153, 153, 153)");
$(".main-block-2-l-head").css("background", "rgb(238, 238, 238)");
$(this).css("color", "rgb(255, 255, 255)");
$(this).css("background", "rgb(0, 0, 0)");
$(".main-block-2-r").fadeOut( "fast" );
$(".main-block-2-r").eq($(this).index()).delay(300).fadeIn( "fast" );
});

/*Добавление тегов в поисковую строку*/



$(".main-block-line-l").click(function(){
tag_adding(1, $(this));
});
$(".main-block-line-r-word").click(function(){
tag_adding(1, $(this));
});
$(".main-block-2-l-head").click(function(){
tag_adding(1, $(this));
});
$(".main-block-2-r-block-point").click(function(){
tag_adding(2, $(this));
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
});

function tag_delete(a)
{
tags_count--;
a.style.display="none";  
}
function isOverflowed(el) {
  return el.scrollWidth > el.offsetWidth ||
    el.scrollHeight > el.offsetHeight;
}
function tag_adding(type, elem)
{
    if (type==1) {
        $("#main-search-tags").append('<div class="main-search-tag" onclick="tag_delete(this)"><span>'+elem.html()+'</span><img class="main-search-tag-cross" src="images/icon_cross.png"></div>');
        tags_count++;
        if(isOverflowed(document.getElementById("main-search-tags")) == true) {
            $(".main-search-tag").last().remove();
            tags_count--;
        }
    } else {
        $("#main-search-tags").append('<div class="main-search-tag" onclick="tag_delete(this)"><span>'+elem.children('.main-block-2-r-block-point-text').html()+'</span><img class="main-search-tag-cross" src="images/icon_cross.png"></div>');
        tags_count++;
        if(isOverflowed(document.getElementById("main-search-tags")) == true) {
            $(".main-search-tag").last().remove();
            tags_count--;
        }
    }
}
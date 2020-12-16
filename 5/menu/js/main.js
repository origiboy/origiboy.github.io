var burger_c=0;
$("#header-burger").click(function(){
  if (burger_c==0)
  {
    $(".header-burger-1").css("transform", "rotate(45deg)");
    $(".header-burger-1").css("top", "6px");
    $(".header-burger-2").css("display", "none");
    $(".header-burger-3").css("top", "7px");
    $(".header-burger-3").css("transform", "rotate(-45deg)");
    burger_c=1;
  }
  else
  {
    $(".header-burger-1").css("transform", "rotate(0deg)");
    $(".header-burger-1").css("top", "0px");
    $(".header-burger-2").css("display", "flex");
    $(".header-burger-3").css("top", "14px");
    $(".header-burger-3").css("transform", "rotate(0deg)");
    burger_c=0;
  }
  
});

$( window ).resize(function(){
  $("#header-menu").height($( window ).height()-187);
});

$(document).ready(function()
{
$("#header-menu").height($( window ).height()-187);
});
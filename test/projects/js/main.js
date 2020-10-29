var a;
$(document).ready(function()
{
  $(".main-nav").eq(2).css("border-bottom", "4px solid #C1B484");
  $(".main-nav").eq(2).css("font-size", "22px");

a=$(".main-projects-block").css("flex-basis");
a = a.slice(0, -1);
a=Number(a)/100;

$(".main-projects-block").height(a*$(".main-projects").width()/1.64);
$(".main-nav").click(function(){
  $(".main-nav").css("border-bottom", "4px solid #65646C");
  $(".main-nav").css("font-size", "16px");
  $(this).css("border-bottom", "4px solid #C1B484");
  $(this).css("font-size", "22px");

  $(".main-projects").css("display", "none");
  $(".main-projects").eq($(this).index()).css("display", "flex");
});
});

$( window ).resize(function(){
	
  a=$(".main-projects-block").css("flex-basis");
a = a.slice(0, -1);
a=Number(a)/100;

$(".main-projects-block").height(a*$(".main-projects").width()/1.64);
});

$(document).ready(function()
{
  $("#top-bg").height($("#top-bg").width()/1920*2700);
  $("#top-logo-bg").css("top", 200/1920*$(window).width());
  $("#top-nav").css("top", 70/1920*$(window).width());
  $("#main").css("top", 1120/1920*$(window).width());
  $("html").css("font-size", 16/1920*$(window).width()+"px");
  $("body").css("font-size", 16/1920*$(window).width()+"px");

  $(".main-2-b-1").width(240/1920*$(window).width());
  $(".main-2-b-1").height(60/1920*$(window).width());

  $(".main-2-bonus").width(220/1920*$(window).width());
  $(".main-2-bonus").height(60/1920*$(window).width());

  $(".main-2-b-2").width(300/1920*$(window).width());
  $(".main-2-b-2").height(60/1920*$(window).width());

  $(window).resize(function()
  {
      $("#top-bg").height($("#top-bg").width()/1920*2700);
      $("#top-logo-bg").css("top", 200/1920*$(window).width());
      $("#top-nav").css("top", 70/1920*$(window).width());
      $("#main").css("top", 1120/1920*$(window).width());
      $("html").css("font-size", 16/1920*$(window).width()+"px");
  $("body").css("font-size", 16/1920*$(window).width()+"px");

  $(".main-2-b-1").width(240/1920*$(window).width());
  $(".main-2-b-1").height(60/1920*$(window).width());

  $(".main-2-bonus").width(220/1920*$(window).width());
  $(".main-2-bonus").height(60/1920*$(window).width());

  $(".main-2-b-2").width(300/1920*$(window).width());
  $(".main-2-b-2").height(60/1920*$(window).width());
  })
});

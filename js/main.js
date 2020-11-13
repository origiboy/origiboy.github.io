$(document).ready(function()
{
	if ($( document ).width()<=960)
	{
		k=4.3;
	}
	else
	{
		k=1;
	}
//$("#top-bg").height($("#top-bg").width()/1920*2700);
$("#top-logo-bg-1").css("top", 200/1920*$(window).width());
$("#top-logo-bg-2").css("top", 200/1920*$(window).width());

$("#top-nav").css("top", 70/1920*$(window).width());
$("#main").css("top", 1120/1920*$(window).width());
$("html").css("font-size", 16/1920*$(window).width()*k+"px");
$("body").css("font-size", 16/1920*$(window).width()*k+"px");

$(".main-2-b-1").width(240/1920*$(window).width()*k);
$(".main-2-b-1").height(60/1920*$(window).width()*k);

$(".main-2-bonus").width(220/1920*$(window).width()*k);
$(".main-2-bonus").height(60/1920*$(window).width()*k);

$(".main-2-b-2").width(300/1920*$(window).width()*k);
$(".main-2-b-2").height(60/1920*$(window).width()*k);
let open_flag=0;
$("#mobile-nav-open").click(function()
{
	if (open_flag==0)
	{
		$("#mobile-nav").css("right", 0);
		$("#mobile-nav-open").css("background-image", "url(images/menu-c.png)");
		open_flag=1;
	}
	else
	{
		$("#mobile-nav").css("right", "200vw");
		$("#mobile-nav-open").css("background-image", "url(images/menu-o.png)");
		open_flag=0;
	}
});
$(window).resize(function()
{
	if ($( document ).width()<=960)
	{
		k=4.3;
	}
	else
	{
		k=1;
	}
//$("#top-bg").height($("#top-bg").width()/1920*2700);
$("#top-logo-bg").css("top", 200/1920*$(window).width());
$("#top-nav").css("top", 70/1920*$(window).width());
$("#main").css("top", 1120/1920*$(window).width());
$("html").css("font-size", 16/1920*$(window).width()*k+"px");
$("body").css("font-size", 16/1920*$(window).width()*k+"px");

$(".main-2-b-1").width(240/1920*$(window).width()*k);
$(".main-2-b-1").height(60/1920*$(window).width()*k);

$(".main-2-bonus").width(220/1920*$(window).width()*k);
$(".main-2-bonus").height(60/1920*$(window).width()*k);

$(".main-2-b-2").width(300/1920*$(window).width()*k);
$(".main-2-b-2").height(60/1920*$(window).width()*k);
})
});

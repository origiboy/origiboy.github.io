
$(document).ready(function()
{
var image;
if ($(window).width()<=1104)
{
	$("#main-l").css("height", "auto");
}
else
{
	$("#main-l").height($("#main-r").width()*0.48);
}
$("#main-r").height($("#main-r").width()*0.48);

$(".main-bottom-block-text").width($(".main-bottom-block").width()-100);

$(".main-l-icon").click(function(){
		$(".main-l-icon").children().css("display", "none");
  		$(this).children().css("display", "flex");
  		if ($(this).index()==0) // Первое изображение
  		{
  			image="img/1.png";
  		}
  		if ($(this).index()==1) // Второе изображение
  		{
  			image="img/2.png";
  		}
  		if ($(this).index()==2) // Третье изображение
  		{
  			image="img/3.png";
  		}
  		$("#main-r").css("background", "linear-gradient(270deg, rgba(255, 255, 255, 0) 57.29%, rgba(255, 255, 255, 0.44) 100%), url("+image+") 100% 100% no-repeat");
  		
	});

});
$( window ).resize(function(){
  $("#main-r").height($("#main-r").width()*0.48);
  if ($(window).width()<=1104)
{
	$("#main-l").css("height", "auto");
}
else
{
	$("#main-l").height($("#main-r").width()*0.48);
}

  $(".main-bottom-block-text").width($(".main-bottom-block").width()-100);
});


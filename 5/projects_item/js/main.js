var k=1;
if ($(window).width()<=1104)
{
	k=2;
}
$(document).ready(function()
{
	$(".swiper-container").eq(0).width($("#main-content").width()/2*k);
	$(".swiper-container").eq(1).width($("#main-content").width()/2*k-20);
	galleryTop.update();
	galleryThumbs.update();

  	$(".main-content-bottom-block").eq(0).css("border-top", "4px solid #C1B484");
	$(".main-content-bottom-block").click(function(){
  		$(".main-content-bottom-block").css("border-top", "4px solid white");
  		$(this).css("border-top", "4px solid #C1B484");
  		$(".main-content-bottom-main").css("display", "none");
  		$(".main-content-bottom-main").eq($(this).index()).css("display", "flex");
	});
	$("#main-content-bottom-head-mobile").change(function()
	{
		let b=Number($("#main-content-bottom-head-mobile").val());
		$(".main-content-bottom-main").css("display", "none");
  		$(".main-content-bottom-main").eq(b).css("display", "flex");
	});
	
	});
$( window ).resize(function(){
  
	if ($(window).width()<=1104)
	{
	k=2;
	}
	else
	{
		k=1;
	}
	$(".swiper-container").eq(0).width($("#main-content").width()/2*k);
	$(".swiper-container").eq(1).width($("#main-content").width()/2*k-20);
	galleryTop.update();
	galleryThumbs.update();
});



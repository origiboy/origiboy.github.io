$(document).ready(function(){
	$(".portfolio__block__click").click(function(){
		window.open($(this).attr("data-link"));
	});
	
	$(".nav-desktop__point").eq(0).click(function(){
		$('html, body').animate({ scrollTop: $(".about-me").offset().top - 20 }, 300);
	});
	$(".nav-desktop__point").eq(1).click(function(){
		$('html, body').animate({ scrollTop: $(".skills").offset().top - 20 }, 400);
	});
	$(".nav-desktop__point").eq(2).click(function(){
		$('html, body').animate({ scrollTop: $(".portfolio").offset().top - 20 }, 500);
	});
	$(".nav-desktop__point").eq(3).click(function(){
		$('html, body').animate({ scrollTop: $(".contacts").offset().top - 20 }, 600);
	});
	
	$(".skills__hire").eq(0).click(function(){
		$('html, body').animate({ scrollTop: $(".contacts").offset().top - 20 }, 300);
	});
	
	
});
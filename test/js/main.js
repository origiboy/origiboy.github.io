var mob_menu = 0;
$(document).ready(function(){
	
	$(".block__7-arr").click(function(){
		if ($(this).css('transform') == 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)') {
			$(this).css('transform', 'rotate(0deg)');
			$(this).parent().children('.block__7-text').css("display", "inline");
		}
		else {
			$(this).css('transform', 'rotate(180deg)');
			$(this).parent().children('.block__7-text').css("display", "none");
		}
	});
	
	$(".header__nav__mob").click(function(){
		if (mob_menu == 0) {
			$('.popup__mob').eq(0).css('left', '0');
			mob_menu = 1;
		}
		else {
			$('.popup__mob').eq(0).css('left', '-100%');
			mob_menu = 0;
		}
	});
});
var mob_menu = 0;

// Функция плавной прокрутки

function slowScroll(id) { 
         $('html, body').animate({ 
              scrollTop: $(id).offset().top - 20
         }, 300);
         return false; 
} 
$(document).ready(function(){
	
	// Блок отзывов
	
	$(".block__7-line").click(function(){
		var data = $(this).attr("data-open");
		if (data == "0") {
			$(this).children('.block__7-arr').css('transform', 'rotate(0deg)');
			$(this).children('.block__7-text').css("display", "flex");
			$(this).attr("data-open", "1");
		}
		else {
			$(this).children('.block__7-arr').css('transform', 'rotate(180deg)');
			$(this).children('.block__7-text').css("display", "none");
			$(this).attr("data-open", "0");
		}
	});
	
	// Окно мобильной навигации
	
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
	
	// Навигация
	
	$('.header__nav-button').click(function(){
		e_index = $(this).index('.header__nav-button');
		if (e_index == 0 || e_index == 5 || e_index == 10)
		{
			slowScroll('#block__2');
		}
		if (e_index == 1 || e_index == 6 || e_index == 11)
		{
			slowScroll('#block__3');
		}
		if (e_index == 2 || e_index == 7 || e_index == 12)
		{
			slowScroll('#block__5');
		}
		if (mob_menu == 1) {
			$(".ham").eq(0).click();
			
		}
	});
});
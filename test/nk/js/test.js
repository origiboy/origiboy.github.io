var authed = false;
var g_result = null;
var isSendMail = false;
var authedAgain = false;
var userDataChanged = false;
var dataLayer = dataLayer || [];
var testOpen = false;
var testStart = false;
var testEnd = false;
var clubFlag = false;

var easingFn = function(t, b, c, d) {
	var ts = (t /= d) * t;
	var tc = ts * t;
	return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t);
}

var options = {
	useEasing: true,
	easingFn: easingFn,
	useGrouping: true,
	separator: '',
	decimal: '.',
};

var p_flag = false;
var a_flag = false;
var e_flag = false;
var i_flag = false;


// if (!test_done) {
// 	jQuery('.paei_club__link').css('display', 'none');
// }

// + Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);

    return o;
};

function changeFirstDiv() {
    jQuery('.first-div').css('top', jQuery('#gkBottom6').offset().top);
    //jQuery('.first-div').css('height', jQuery('#gkBottom6').height());
    if (jQuery("#gkBottom5").is(":visible"))
        jQuery('.first-div').css('height', jQuery('#gkBottom6').height() + jQuery('#gkBottom5').height());
    else
        jQuery('.first-div').css('height', jQuery('#gkBottom6').height());
}

function validateEmail(email) {
    var p = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    // '
    return email != null && p.test(email);
}

function test() {
	this.token = null;
	this.test_finished_first_time = true;
	this.step = 0;

	this.steps_finished = [
	    false,
	    false,
	    false,
	    false,
	    false,
	    false,
	    false,
	    false,
	    false,
	    false
	];

	this.last_step = false;
	this.def_options = [
        ['Вовлеченный', 'Сомневающийся', 'Яркий', 'Отзывчивый'],
        ['Прямой', 'Анализирующий', 'Харизматичный', 'Чувствующий'],
        ['Делающий', 'Созерцающий', 'Думающий', 'Сопереживающий'],
        ['Отдающий себе отчет', 'Оценивающий', 'Идущий на риск', 'Благожелательный'],
        ['Эффективный', 'Логичный', 'Задающий вопросы', 'Интуитивный'],
        ['Активный', 'Наблюдающий', 'Абстрактный', 'Взаимодействующий'],
        ['Прагматичный', 'Размышляющий', 'Ориентированный на будущее', 'Теплый'],
        ['Побеждающий', 'Наблюдающий', 'Концептуальный', 'Стремящийся к консенсусу'],
        ['Рациональный', 'Сдержанный', 'Генерирующий идеи', 'Осведомленный'],
        ['Деловой, серьезный', 'Аккуратный, точный', 'Яркий, выделяющийся', 'Приятный']
    ];

	this.options = [
    	['Вовлеченный', 'Сомневающийся', 'Яркий', 'Отзывчивый'],
    	['Прямой', 'Анализирующий', 'Харизматичный', 'Чувствующий'],
    	['Делающий', 'Созерцающий', 'Думающий', 'Сопереживающий'],
    	['Отдающий себе отчет', 'Оценивающий', 'Идущий на риск', 'Благожелательный'],
    	['Эффективный', 'Логичный', 'Задающий вопросы', 'Интуитивный'],
    	['Активный', 'Наблюдающий', 'Абстрактный', 'Взаимодействующий'],
    	['Прагматичный', 'Размышляющий', 'Ориентированный на будущее', 'Теплый'],
    	['Побеждающий', 'Наблюдающий', 'Концептуальный', 'Стремящийся к консенсусу'],
    	['Рациональный', 'Сдержанный', 'Генерирующий идеи', 'Осведомленный'],
    	['Деловой, серьезный', 'Аккуратный, точный', 'Яркий, выделяющийся', 'Приятный']
    ];

	this.result = [
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ],
	    [ 0, 0, 0, 0 ]
	];

	this.loaded_result = loaded_result;

	this.classes = {
		'Paei' : {
			name : 'Производитель',
			image : '0.png',
			quality : [ 'целеустремленность', 'упорство', 'любопытство',
					'аналитичность', 'ответственность' ],
			skills : [ 'самоорганизация', 'тайм-менеджмент',
					'управление событиями', 'управление ресурсами' ]
		},
		'P---' : {
			name : 'Герой-одиночка',
			image : '1.png',
			quality : [ 'целеустремленность', 'упорство', 'трудолюбие',
					'верность' ],
			skills : [ 'краткосрочное планирование', 'делегирование поручений',
					'организация и тушение пожаров' ]
		},
		'pAei' : {
			name : 'Администратор',
			image : '2.png',
			quality : [ 'внимательность', 'аналитичность', 'ответственность',
					'методичность', 'критичность' ],
			skills : [ 'самоорганизация', 'внедрение процессов',
					'управление процессами', 'осведомленность' ]
		},
		'paEi' : {
			name : 'Генератор идей',
			image : '3.png',
			quality : [ 'креативность', 'внимательность', 'дальновидность',
					'интуиция' ],
			skills : [ 'умение видеть полную картину', 'генерация идей' ]
		},
		'PaEi' : {
			name : 'Предприниматель',
			image : '4.png',
			quality : [ 'креативность', 'смелость', 'предприимчивость',
					'дальновидность' ],
			skills : [ 'умение видеть полную картину', 'стратегирование',
					'генерация идей', 'управление ресурсами' ]
		},
		'--E-' : {
			name : 'Поджигатель',
			image : '5.png',
			quality : [ 'предприимчивость', 'энергичность', 'обаятельность',
					'креативность' ],
			skills : [ 'краткосрочная мотивация команды',
					'делегирование неудач', 'наживание врагов',
					'увольнение врагов', 'генерация идей' ]
		},
		'paeI' : {
			name : 'Интегратор',
			image : '6.png',
			quality : [ 'лидерство', 'креативность', 'эмпатия', 'энергичность' ],
			skills : [ 'формирование команды', 'сплочение команды',
					'мотивация команды' ]
		},
		'---I' : {
			name : 'Горячий сторонник',
			image : '7.png',
			quality : [ 'осторожность', 'приспособляемость' ],
			skills : [ 'осведомленность', 'умение слушать',
					'умение улавливать настроения людей' ]
		},
		'----' : {
			name : 'Мертвый пень',
			image : '8.png',
			quality : [ 'покладистость', 'дружелюбие', 'трудолюбие',
					'пассивность' ],
			skills : [ 'выживание в организации' ]
		},
		'PA--' : {
			name : 'Надсмотрщик',
			image : '9.png',
			quality : [ 'ответственность', 'целеустремленность',
					'внимательность', 'методичность' ],
			skills : [ 'управление ресурсами', 'тайм-менеджмент',
					'внедрение процессов', 'управление процессами' ]
		},
		'PA-I' : {
			name : 'Милостивый государь',
			image : '10.png',
			quality : [ 'целеустремленность', 'методичность', 'энергичность',
					'эмпатия' ],
			skills : [ 'самоорганизация', 'управление ресурсами',
					'управление процессами', 'сплочение команды' ]
		},
		'-A-I' : {
			name : 'Заботливый бюрократ',
			image : '11.png',
			quality : [ 'внимательность', 'методичность', 'энергичность',
					'эмпатия' ],
			skills : [ 'составление регламентов', 'деловая переписка',
					'управление процессами', 'сплочение команды' ]
		},
		'P--I' : {
			name : 'Тренер малой лиги',
			image : '12.png',
			quality : [ 'целеустремленность', 'упорство', 'лидерство',
					'эмпатия' ],
			skills : [ 'формирование команды', 'сплочение команды',
					'мотивация команды', 'управление ресурсами',
					'самоорганизация' ]
		},
		'P-E-' : {
			name : 'Основоположник',
			image : '13.png',
			quality : [ 'целеустремленность', 'упорство', 'креативность',
					'интуиция' ],
			skills : [ 'самоорганизация', 'управление ресурсами',
					'генерация идей' ]
		},
		'PAE-' : {
			name : 'Изобретатель-одиночка',
			image : '14.png',
			quality : [ 'целеустремленность', 'креативность', 'методичность' ],
			skills : [ 'генерация идей', 'умение видеть картину',
					'управление процессами', 'управление ресурсами' ]
		},
		'--EI' : {
			name : 'Демагог',
			image : '15.png',
			quality : [ 'обаятельность', 'креативность', 'осторожность',
					'приспособляемость' ],
			skills : [ 'генерация идей', 'умение улавливать настроения людей',
					'краткосрочная мотивация команды' ]
		},
		'-AEI' : {
			name : 'Мнимый лидер',
			image : '16.png',
			quality : [ 'целеустремленность', 'предприимчивость',
					'энергичность', 'аккуратность' ],
			skills : [ 'предприимчивость', 'энергичность', 'аккуратность' ]
		},
		'-AE-' : {
			name : 'Зануда',
			image : '17.png',
			quality : [ 'внимательность', 'креативность', 'скрупулезность' ],
			skills : [ 'генерация идей', 'делегирование неудач',
					'составление отчетов' ]
		},
		'P-EI' : {
			name : 'Харизматичный гуру',
			image : '18.png',
			quality : [ 'креативность', 'харизматичность', 'предприимчивость' ],
			skills : [ 'генерация идей', 'умение видеть полную картину',
					'сплочение команды', 'управление ресурсами' ]
		},
		'-A--' : {
			name : 'Бюрократ',
			image : 'default.png',
			quality : [ 'скурпулезность', 'пунктуальность', 'аккуратность' ],
			skills : [ 'составление регламентов', 'составление отчетов',
					'деловая переписка' ]
		}
	};

	var hash = window.location.hash;
	if (hash.length > 0 && hash == '#test_build') {

		for (i = 0; i < 11; i++) {
			this.steps_finished[i] = true;

			if (i < 10)
				this.result[i] = [ 4, 4, 1, 1 ];
		}

		this.step = 9;

		this.check_test_finished();
	}

	this.blocks_circle = null;
	this.points_circle = null;

	this.block_circle_svg = null;
	this.points_circle_svg = null;

	this.blocks_circle_percent = 0;
	this.points_circle_percent = 0;

	this.init_other_functions();
	this.init_options_checkboxes();
	this.init_steps_pager();
	this.create_circles();
	this.draw_step();
	this.display_step();
	this.display_points();
	this.enable_metrika_goals();

	if (this.loaded_result !== null) {
		this.show_loaded_result('', true);
	}
}

test.prototype.init_other_functions = function() {
	var _this = this;

	jQuery('#paei_club__best').change( function() {
		if (jQuery(this).prop('checked')) {
			var result = null;
			if (g_result !== null) {
				result = _this.get_points_summary('result');
			} else if (loaded_result !== null) {
				_this.loaded_result = loaded_result;
				result = _this.get_points_summary('loaded_result', true);
			}

			if (result !== null) {
				jQuery("#club_filter__slider_1").val(
						Math.abs(100 - result['p']));
				jQuery("#club_filter__slider_2").val(
						Math.abs(100 - result['a']));
				jQuery("#club_filter__slider_3").val(
						Math.abs(100 - result['e']));
				jQuery("#club_filter__slider_4").val(
						Math.abs(100 - result['i']));
				filterResults();
			}
		}
	});

	jQuery('.legend_list input[type=checkbox]').change(function() {
		filterResults();
	});

	jQuery("#link_club").click(function() {
		// if (test_done) {
        	jQuery("#gkBottom6").show();
        	// jQuery(window).scrollTop(jQuery('#gkBottom6').offset().top);
        	jQuery('html, body').animate({ scrollTop: jQuery('#gkBottom6').offset().top }, 500);
        // }

        if (!clubFlag) {
            dataLayer.push({'event': 'action','value':'club-window-open'});
            clubFlag = true;
        }
    });

    jQuery("#club-href").click(function(e) {
    	e.preventDefault();
        if (!$(this).hasClass('rotate_180')) {
            jQuery("#link_club").click();
        } else {
            jQuery("#gkHeader, #gkBottom1, #gkBottom2, #gkBottom4").show();

            return true;
        }

        if (!clubFlag) {
            dataLayer.push({'event': 'action','value':'club-window-open'});
            clubFlag = true;
        }

        if (!authed) {
        	setTimeout( function() {
        		jQuery('#modal-paei_club__registration').css('top', jQuery('#gkBottom6')[0].offsetTop);
        		$('#modal-paei_club__registration').modal('show');
        	}, 1000);
        }

        return false;
    });

    jQuery("#stats-href").click(function(e) {
    	e.preventDefault();
        if (!$(this).hasClass('rotate_180')) {
            jQuery("#gkBottom7").show();
        	jQuery('html, body').animate({ scrollTop: jQuery('#gkBottom7').offset().top }, 500);
        } else {
            jQuery("#gkHeader, #gkBottom1, #gkBottom2, #gkBottom4").show();

            return true;
        }

        return false;
    });

	jQuery(window).scroll(function() {
	    if (jQuery(window).scrollTop() == 0)
	        return;

	    var scrollTop = jQuery(window).scrollTop() + 10;
        var teamOffset = jQuery("#team").offset().top;
        var modelOffset = jQuery("#model").offset().top;
        var testOffset = jQuery("#test").offset().top;
        var clubOffset = jQuery("#club").offset().top;

	    if (jQuery("#gkBottom6")[0].getBoundingClientRect().top < document.documentElement.clientHeight && jQuery("#gkBottom6").css('display') === 'block') {
	    	if (!clubFlag) {
            	dataLayer.push({'event': 'action','value':'club-window-open'});
            	clubFlag = true;
        	}

        	if (!authed) {
	    		jQuery('#modal-paei_club__registration').css('top', jQuery('#gkBottom6')[0].offsetTop);
	    		$('#modal-paei_club__registration').modal('show');
		    }
            // if (scrollTop > (clubOffset - 700)) {
            //     if (!authed)
                    // showRegistrationPopup();
            //     filterResults();
            // } else {
            //     hideRegistrationPopup();
            //     jQuery("#modal-rewrite-result").modal('hide');

            //     if (!authed || !test_done) {
            //         jQuery("#gkBottom5").hide();
            //         jQuery("#gkBottom6").hide();
            //     } else {
            //         jQuery("#gkBottom5").show();
            //         jQuery("#gkBottom6").show();
            //     }
            // }
        }

		jQuery("#link_club").removeClass('active');
        jQuery("#link_club").parent().removeClass('active');

		if (jQuery("#gkBottom6").is(":visible")) {

		    if (scrollTop >= teamOffset && scrollTop < modelOffset) {
	            jQuery("#link_team").addClass('active');
	            jQuery("#link_team").parent().addClass('active');

	            jQuery("#link_model").removeClass('active');
	            jQuery("#link_model").parent().removeClass('active');
	            jQuery("#link_test").removeClass('active');
	            jQuery("#link_test").parent().removeClass('active');
	            jQuery("#link_club").removeClass('active');
	            jQuery("#link_club").parent().removeClass('active');
	        } else if (scrollTop >= modelOffset && scrollTop < testOffset) {
	            jQuery("#link_model").addClass('active');
	            jQuery("#link_model").parent().addClass('active');

	            jQuery("#link_team").removeClass('active');
	            jQuery("#link_team").parent().removeClass('active');
	            jQuery("#link_test").removeClass('active');
	            jQuery("#link_test").parent().removeClass('active');
	            jQuery("#link_club").removeClass('active');
	            jQuery("#link_club").parent().removeClass('active');
	        } else if (scrollTop >= testOffset && scrollTop <= clubOffset) {
	            jQuery("#link_test").addClass('active');
	            jQuery("#link_test").parent().addClass('active');
	            if (!testOpen) {
	            	dataLayer.push({'event': 'action','value':'test-window-open'});
	            	testOpen = true;
	            }

	            jQuery("#link_model").removeClass('active');
	            jQuery("#link_model").parent().removeClass('active');
	            jQuery("#link_team").removeClass('active');
	            jQuery("#link_team").parent().removeClass('active');
	            jQuery("#link_club").removeClass('active');
	            jQuery("#link_club").parent().removeClass('active');
	        } else if (scrollTop >= testOffset && scrollTop <= clubOffset - 10) {
	            jQuery("#link_test").addClass('active');
	            jQuery("#link_test").parent().addClass('active');
	            if (!testOpen) {
	            	dataLayer.push({'event': 'action','value':'test-window-open'});
	            	testOpen = true;
	            }

	            jQuery("#link_model").removeClass('active');
	            jQuery("#link_model").parent().removeClass('active');
	            jQuery("#link_team").removeClass('active');
	            jQuery("#link_team").parent().removeClass('active');
	            jQuery("#link_club").removeClass('active');
	            jQuery("#link_club").parent().removeClass('active');
	        } else if (scrollTop > clubOffset - 10) {
	            jQuery("#link_club").addClass('active');
	            jQuery("#link_club").parent().addClass('active');

	            jQuery("#link_model").removeClass('active');
	            jQuery("#link_model").parent().removeClass('active');
	            jQuery("#link_test").removeClass('active');
	            jQuery("#link_test").parent().removeClass('active');
	            jQuery("#link_team").removeClass('active');
	            jQuery("#link_team").parent().removeClass('active');
	        }

		} else {
            if (jQuery("#gkBottom1").is(":visible") && jQuery("#gkBottom2").is(":visible") && jQuery("#gkBottom4").is(":visible")) {
                if (scrollTop >= teamOffset && scrollTop < modelOffset) {
                    jQuery("#link_team").addClass('active');
                    jQuery("#link_team").parent().addClass('active');

                    jQuery("#link_model").removeClass('active');
                    jQuery("#link_model").parent().removeClass('active');
                    jQuery("#link_test").removeClass('active');
                    jQuery("#link_test").parent().removeClass('active');
                    jQuery("#link_club").removeClass('active');
                    jQuery("#link_club").parent().removeClass('active');
                } else if (scrollTop >= modelOffset && scrollTop < testOffset) {
                    jQuery("#link_model").addClass('active');
                    jQuery("#link_model").parent().addClass('active');

                    jQuery("#link_team").removeClass('active');
                    jQuery("#link_team").parent().removeClass('active');
                    jQuery("#link_test").removeClass('active');
                    jQuery("#link_test").parent().removeClass('active');
                    jQuery("#link_club").removeClass('active');
                    jQuery("#link_club").parent().removeClass('active');
                } else if (scrollTop >= testOffset) {
                    jQuery("#link_test").addClass('active');
                    jQuery("#link_test").parent().addClass('active');
                    if (!testOpen) {
		            	dataLayer.push({'event': 'action','value':'test-window-open'});
		            	testOpen = true;
		            }

                    jQuery("#link_model").removeClass('active');
                    jQuery("#link_model").parent().removeClass('active');
                    jQuery("#link_team").removeClass('active');
                    jQuery("#link_team").parent().removeClass('active');
                    jQuery("#link_club").removeClass('active');
                    jQuery("#link_club").parent().removeClass('active');
                }
            } else {
                jQuery("#link_team").removeClass('active');
                jQuery("#link_team").parent().removeClass('active');
                jQuery("#link_model").removeClass('active');
                jQuery("#link_model").parent().removeClass('active');
                jQuery("#link_test").removeClass('active');
                jQuery("#link_test").parent().removeClass('active');
            }
		}

		if (jQuery("#paei_p").is(":visible") && jQuery("#paei_p")[0].getBoundingClientRect().top < document.documentElement.clientHeight && !p_flag) {
			var demo = new CountUp('paei_p', 0, +jQuery("#paei_p").data('col'), 0, 3, options);
			if (!demo.error) {
				demo.start();
			} else {
				console.error(demo.error);
			}

			p_flag = true;
		}

		if (jQuery("#paei_a").is(":visible") && jQuery("#paei_a")[0].getBoundingClientRect().top < document.documentElement.clientHeight && !a_flag) {
			var demo2 = new CountUp('paei_a', 0, +jQuery("#paei_a").data('col'), 0, 3, options);
			if (!demo2.error) {
				demo2.start();
			} else {
				console.error(demo2.error);
			}

			a_flag = true;
		}

		if (jQuery("#paei_e").is(":visible") && jQuery("#paei_e")[0].getBoundingClientRect().top < document.documentElement.clientHeight && !e_flag) {
			var demo3 = new CountUp('paei_e', 0, +jQuery("#paei_e").data('col'), 0, 3, options);
			if (!demo3.error) {
				demo3.start();
			} else {
				console.error(demo3.error);
			}

			e_flag = true;
		}

		if (jQuery("#paei_i").is(":visible") && jQuery("#paei_i")[0].getBoundingClientRect().top < document.documentElement.clientHeight && !i_flag) {
			var demo4 = new CountUp('paei_i', 0, +jQuery("#paei_i").data('col'), 0, 3, options);
			if (!demo4.error) {
				demo4.start();
			} else {
				console.error(demo4.error);
			}

			i_flag = true;
		}
	});

	jQuery("#start_test").click(function() {
		if (authed && test_done) {
			jQuery("#start_test_content").hide();
			jQuery('.balls_blocks .num').svg('destroy');
			jQuery('.balls_balls .num').svg('destroy');
			jQuery('.balls_blocks b').prepend('<span class="num_inner" style="font-size: 20px;">0/10</span>');
			jQuery('.balls_balls b').prepend('<span class="num_inner" style="font-size: 20px;">0/10</span>');

			_this.step = 0;

			_this.steps_finished = [ false, false, false, false, false, false, false,
					false, false, false ];
			_this.last_step = false;
			_this.result = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ],
			    			[ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ],
			    			[ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
			_this.blocks_circle = null;
			_this.points_circle = null;

			_this.block_circle_svg = null;
			_this.points_circle_svg = null;

			_this.blocks_circle_percent = 0;
			_this.points_circle_percent = 0;
			_this.init_options_checkboxes();
			_this.init_steps_pager();
			_this.reload_points_checkboxes();
			_this.create_circles();
			_this.draw_step();
			_this.display_step();
			_this.display_points();


			jQuery(".test_wrapper").show();
			jQuery(".test_navigation").show();
		}
		return true;
	});

	/*
	 * Сохранение данных в профиле
	 */
	jQuery('.paei_club__send_wrapper.edit .paei_club__send').click(function() {
	    if (!userDataChanged) {
	        hideRegistrationPopup();
	    } else {
    		var name = jQuery('#_name'),
    		    city = jQuery('#_city'),
    		    email = jQuery('#_email'),
    		    partnership = jQuery('#_partnership'),
    		    person = jQuery('input[type=radio][name=_person]:checked'),
    		    description = jQuery('#_description'),
    		    errors = false;

    		if (name.val().length == 0) {
    			name.css('border-color', 'red');
    			errors = true;
    		} else {
    			name.css('border-color', '');
    		}

    		if (city.val().length == 0) {
    			city.css('border-color', 'red');
    			errors = true;
    		} else {
    			city.css('border-color', '');
    		}

    		if (email.val().length == 0) {
    			email.css('border-color', 'red');
    			errors = true;
    		} else {
    			email.css('border-color', '');
    		}

    		if (!validateEmail(email.val())) {
    		    email.css('border-color', 'red');
                errors = true;
    		} else {
                email.css('border-color', '');
            }

    		if (!errors) {
    			var data = {
    				name : name.val(),
    				city : city.val(),
    				email : email.val(),
    				partnership : partnership.is(':checked'),
    				person : person.val(),
    				description : description.val()
    			};

    			jQuery.post('/?update', data, function(answer) {
    			    userDataChanged = false;
    				if (answer.status == 'error') {
    					jQuery('#_password').val('');
    					alert(answer.error);
    				} else {
    					hideRegistrationPopup();
    					filterResults();
    				}
    			}, 'json');
    		}
	    }
	});

	/*
	 * Выход с сайта
	 */
	jQuery('.logout_button').click(function() {
	    jQuery.post('/?logout', {}, function(answer) {
	        if (answer.status == 'logged_out') {
	            authed = false;
	            test_done = false;
	            jQuery('#paei_club__best').removeAttr('disabled').trigger('refresh');
	            jQuery('.loggedin').addClass('show_login').removeClass('loggedin');
	            jQuery('.paei_club__registration__head').text('Авторизация');
	            jQuery('.paei_club__user_data_form').slideUp();
	            jQuery('.paei_club__auth').slideUp();
	            jQuery('.paei_club__auth_form').slideDown();
	            jQuery('#paei_club__best').attr('disabled', 'disabled').trigger('refresh');
	            jQuery('#_job').attr('checked', 'checked').prop('checked', true).trigger('refresh');
	            jQuery('#_employee').removeAttr('checked').prop('checked', false).trigger('refresh');

	            var name = jQuery('#_name'),
	                city = jQuery('#_city'),
	                email = jQuery('#_email'),
	                partnership = jQuery('#_partnership'),
	                person = jQuery('input[type=radio][name=_person]:checked'),
	                description = jQuery('#_description');

	            name.val('');
	            city.val('');
	            email.val('');
	            partnership.attr('checked', 'checked').trigger('refresh');
	            description.val('');

	            jQuery(".modal-close").css("display", "none");

	            if (!authed || !test_done) {
	                jQuery("#start_test_content").hide();
	                jQuery(".test_wrapper").show();
	                jQuery(".test_navigation").show();
	            }

	            if (!test_done)
	                jQuery(".paei_club__auth__email").hide();

	            var form = jQuery(".subscribe_form");
	            form.parent().find("p").remove();
	            form.show();

	            jQuery("#gkBottom5").hide();
	            authedAgain = true;
	        } else {
	            alert(answer.error);
	        }
	    }, 'json');

	    return false;
	});

	/*
	 * Регистрация
	 */
	jQuery('.paei_club__send_wrapper.register .paei_club__send').click( function() {
		var name = jQuery('#name'),
		    city = jQuery('#city'),
		    email = jQuery('#email'),
		    partnership = jQuery('#partnership'),
		    person = jQuery('input[type=radio][name=person]:checked'),
		    description = jQuery('#description'),
		    photo = jQuery('#photo'),
		    social = jQuery('#social'),
		    social_id = jQuery('#social_id'),
		    link = jQuery('#link'),
		    password = jQuery('#register_password'),
		    errors = false;

		if (name.val().length == 0) {
			name.css('border-color', 'red');
			errors = true;
		} else {
			name.css('border-color', '');
		}

		if (city.val().length == 0) {
			city.css('border-color', 'red');
			errors = true;
		} else {
			city.css('border-color', '');
		}

		if (email.val().length == 0) {
			email.css('border-color', 'red');
			errors = true;
		} else {
			email.css('border-color', '');
		}

		if (!validateEmail(email.val())) {
            email.css('border-color', 'red');
            errors = true;
        } else {
            email.css('border-color', '');
        }

		if (password.val().length == 0) {
			password.css('border-color', 'red');
			errors = true;
		} else {
			password.css('border-color', '');
		}

		if (!errors) {
			var data = {
				name : name.val(),
				city : city.val(),
				email : email.val(),
				partnership : partnership.is(':checked'),
				person : person.val(),
				description : description.val(),
				photo : photo.val(),
				social : social.val(),
				social_id : social_id.val(),
				link : link.val(),
				password : password.val(),
				key : _this.token
			};

			if (jQuery('#password').val().length > 0) {
				data.password = jQuery('#password').val();
			}

			jQuery.post('/?register', data, function(answer) {
				if (answer.status == 'registered') {
					authProccess(answer);
					jQuery('.paei_club__register_form').hide();
					hideRegistrationPopup();
				} else {
					authed = false;
					alert(answer.error);
				}
			}, 'json');
		}
	});

	jQuery('.custom_elem').styler({
		wrapper : '.paei_club__registration'
	});

	ZeroClipboard.config({
		swfPath : URL + "js/ZeroClipboard.swf"
	});

	var clip = new ZeroClipboard(jQuery('#copy_button'));
	clip.on("ready", function(readyEvent) {
		clip.on("aftercopy", function(event) {
			jQuery('.result_link_field_tip').fadeIn(function() {
				setTimeout(function() {
					jQuery('.result_link_field_tip').fadeOut();
				}, 3000);
			});
		});

		clip.on("copy", function(event) {
			var clipboard = event.clipboardData;
			clipboard.setData("text/plain", jQuery('.result_link_field').val());
		});
	});

    var copylink_button = new ZeroClipboard(jQuery('.copylink-button'));
    copylink_button.on("ready", function(readyEvent) {
		copylink_button.on("aftercopy", function(event) {
			jQuery('.result_link_field_tip').fadeIn(function() {
				setTimeout(function() {
					jQuery('.result_link_field_tip').fadeOut();
				}, 3000);
			});
		});

		copylink_button.on("copy", function(event) {
			var clipboard = event.clipboardData;
			clipboard.setData("text/plain", jQuery('.result_link_field').val());
		});
	});

	document.querySelector('.copylink-button').addEventListener('click', function(e) {
		copyToClipboard(document.getElementById('copy_to_clipboard_button'));
		e.target.parentElement.querySelector('.copylink-helper').style.display = 'none';
		// e.target.parentElement.querySelector('.result_link_field_tip').style.display = 'block';
	})

	function copyToClipboard(elem) {
	  // create hidden text element, if it doesn't already exist
	    var targetId = "_hiddenCopyText_";
	    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
	    var origSelectionStart, origSelectionEnd;
	    if (isInput) {
	        // can just use the original source element for the selection and copy
	        target = elem;
	        origSelectionStart = elem.selectionStart;
	        origSelectionEnd = elem.selectionEnd;
	    } else {
	        // must use a temporary form element for the selection and copy
	        target = document.getElementById(targetId);
	        if (!target) {
	            var target = document.createElement("textarea");
	            target.style.position = "absolute";
	            target.style.left = "-9999px";
	            target.style.top = "0";
	            target.id = targetId;
	            document.body.appendChild(target);
	        }
	        target.textContent = elem.textContent;
	    }
	    // select the content
	    var currentFocus = document.activeElement;
	    target.focus();
	    target.setSelectionRange(0, target.value.length);

	    // copy the selection
	    var succeed;
	    try {
	    	  succeed = document.execCommand("copy");
	    } catch(e) {
	        succeed = false;
	    }
	    // restore original focus
	    if (currentFocus && typeof currentFocus.focus === "function") {
	        currentFocus.focus();
	    }

	    if (isInput) {
	        // restore prior selection
	        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
	    } else {
	        // clear temporary content
	        target.textContent = "";
	    }
	    return succeed;
	}

	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/mails.json', true);
	xhr.send();
	var mailsList;

	xhr.onloadend = function () {
		mailsList = JSON.parse(xhr.response);
	};

	jQuery('.save_on_mail .email_sender').on('click', function(e) {
		e.preventDefault();
		if (!jQuery('.email_holder_field').val()) return false;

		var form_data = $(this).parent().serialize();
		form_data += `&change_name_link=?${getCookie('PHPSESSID')}`
		$.ajax({
			type: "POST",
			url: "/mail_sender.php",
			data: form_data,
			success: function() {
				jQuery('.send_mail_result').fadeIn();
				jQuery('.save_on_mail form.result_link_field_wrapper').css('display','none');
				dataLayer.push({'event': 'action','value':'email'});
			}
		});

		let mailData = {
			'date': new Date().toLocaleString('ru'),
			'mail': jQuery('.email_holder_field').val()
		};

		let doubleMailFlag = false;
		for (let i = 0; i < mailsList.length; i++) {
			if (mailsList[i]['mail'] === mailData['mail']) {
				doubleMailFlag = true;
			}
		}

		if (mailsList.length === 0) {
			mailsList.push(mailData);
		}

		if (!doubleMailFlag) {
			mailsList.push(mailData);
		}

		$.ajax({
			url: '/data.php',
			type: 'POST',
			data: {'myJson': JSON.stringify(mailsList), 'fileName': 'mails.json'},
		});
	});

	jQuery('.step_trigger').on('click', function() {
		$('.first_step').removeClass('visible');
		$('.second_step').addClass('visible');
	});

	let notValid = false;

	$('.input_field').on({
		'focus': function() {
			$(this).closest('.input_label').addClass('input-focused');
		},

		'blur': function() {
			var $this = $(this),
				$wrapper = $this.closest('.input_label'),
				value = $this.val();

			$wrapper.removeClass('input-focused');

			if ($.trim(value)) {
				$wrapper.addClass('input-has-value');
			} else {
				$wrapper.removeClass('input-has-value');
			}
		},

		'input': function() {
			if (notValid) {
				if ($('.name-box').val().length > 2) {
					$('.name-box').closest('.input_label').removeClass('error');
				}

				if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test($('.email-box').val()) ||
					/^\d[\d\(\)\ -]{5,14}\d$/.test($('.email-box').val())) {
						$('.email-box').closest('.input_label').removeClass('error');
				}

				if ($('.text-box').val().length > 0) {
					$('.text-box').closest('.input_label').removeClass('error');
				}
			}
		},

		'click': function() {
			$('.hidden_input').val('secretDenero');
		}
	});

	let hiddenDiv = $('.hiddendiv');
	let txtHeight = 45;
    let blockHeight = 186 - 45; // - textHeight
	jQuery('.text-box').on('keypress', function () {
        let content = $(this).val();
        content = content.replace(/\n/g, '<br>');
        hiddenDiv.html(content + '<br class="lbr">');
        txtHeight = parseInt(hiddenDiv.height()) < txtHeight ? `${txtHeight}px` : parseInt(hiddenDiv.height()) + 19 + 'px';
        $(this).css('height', txtHeight);
        $('.denero_banner').css('height', blockHeight + parseInt(txtHeight) + 'px');
    });

    jQuery('.text-box').on('keydown', function(e) {
        let ths = $(this);
        if (e.keyCode === 8) {
            let content = ths.val();
            content = content.replace(/\n/g, '<br>');
            hiddenDiv.html(content + '<br class="lbr">');
            txtHeight = parseInt(hiddenDiv.height()) < txtHeight ? `${txtHeight}px` : parseInt(hiddenDiv.height()) + 19 + 'px';
            ths.css('height', txtHeight);
            $('.denero_banner').css('height', blockHeight + parseInt(txtHeight) + 'px');
        }
    })

	jQuery('.submit_button').on('click', function(e) {
		e.preventDefault();
		if (jQuery('.name-box').val().length <= 2) {
			jQuery('.name-box').closest('.input_label').addClass('error');
		} else {
			jQuery('.name-box').closest('.input_label').removeClass('error');
		}

		if (jQuery('.text-box').val().length <= 0) {
			jQuery('.text-box').closest('.input_label').addClass('error');
		} else {
			jQuery('.text-box').closest('.input_label').removeClass('error');
		}

		if (!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(jQuery('.email-box').val()) &&
			!/^\d[\d\(\)\ -]{5,14}\d$/.test(jQuery('.email-box').val())) {
			jQuery('.email-box').closest('.input_label').addClass('error');
		} else {
			jQuery('.email-box').closest('.input_label').removeClass('error');
		}

		if (jQuery('.error')[0]) {
			notValid = true;
		} else {
			notValid = false;
			let f_data = $('.feedback_form').serialize();
			$.ajax({
				type: "POST",
				url: "/mail_sender.php",
				data: f_data,
				success: function() {
					// dataLayer.push({'event': 'action','value':'banner'});
				}
			});

			jQuery('.second_step').removeClass('visible');
			jQuery('.third_step').addClass('visible');
			dataLayer.push({'event': 'action','value':'banner'});
		}
	});

	jQuery('.banner_close').on('click', function() {
		jQuery('.denero_banner').removeClass('visible');
		setTimeout(function() {
			jQuery('.denero_banner').fadeOut();
		}, 500);

		setCookie('closeBanner', 'true');
	});

	/* Функции попапа */
	jQuery('.paei_club__auth__email').click(function() {
	    jQuery('#auth_error').empty();
		if (!authed) {
			jQuery('.paei_club__registration__head').text('Регистрация');
		}
		jQuery('.auth_form').slideUp();
		jQuery('.paei_club__register_form').slideDown();

		changeFirstDiv();
		jQuery(window).trigger('resize');
		return false;
	});

	/*
	 * Отмена регистрации
	 */
	jQuery('.cancel_button').click(function() {
	    jQuery('#auth_error').empty();
		jQuery('.paei_club__register_form').slideUp();
		jQuery(".paei_club__auth_form").hide();
		jQuery('.auth_form').slideDown();
		jQuery('.auth_form>div').show();
		jQuery('.paei_club__registration__head').text('Авторизация');

		changeFirstDiv();
		jQuery(window).trigger('resize');
		return false;
	});

	jQuery('.socials__item.vkontakte').click(function() {
		authVkontakte();
		return false;
	});

	jQuery('.socials__item.facebook').click(function() {
		authFacebook();
		return false;
	});

	jQuery('.socials__item.linkedin').click(function() {
		authLinkedin();
		return false;
	});

    jQuery('.copylink_name-button').click(function() {
        var name = jQuery('.copylink_name_field').val();

        if (name.length > 0) {
            _this.set_result_name(name);
        }
    });

    jQuery('.copylink-button').click(function() {
        if (test_done && !short_version)
        // if (getCookie('finishTest'))
            jQuery('#copylink_name_wrapper').slideDown(500);
    });

    jQuery('#link_team, #link_model, #link_test').click(function() {
        if (short_version) {
            jQuery("#gkHeader, #gkBottom1, #gkBottom2, #gkBottom4").show();
            short_version = false;
        }

        return true;
    });
}
let cookieFlag = false;

function getCookie(name) {
	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options) {
	options = options || {};

	var expires = options.expires;

	if (typeof expires == "number" && expires) {
		var d = new Date();
		d.setTime(d.getTime() + expires * 1000);
		expires = options.expires = d;
	}
	if (expires && expires.toUTCString) {
		options.expires = expires.toUTCString();
	}

	value = encodeURIComponent(value);

	var updatedCookie = name + "=" + value;

	for (var propName in options) {
		updatedCookie += "; " + propName;
		var propValue = options[propName];
		if (propValue !== true) {
			updatedCookie += "=" + propValue;
		}
	}

	document.cookie = updatedCookie;
}

test.prototype.set_result_name = function(name) {
    var _this = this;
    jQuery.post('/?setResultName', { result_name : name }, function(answer) {
        console.log(answer);
        if (answer.status == 'error') {
            console.log(answer.error);
        } else {
            result_name = name;
            if (_this.loaded_result != null) {
                _this.show_loaded_result();
            } else if (g_result != null) {
                _this.show_result();
            }
            yaCounter24967658.reachGoal('copylink_name');
        }
    }, 'json');
}

/* Инициализируем цели метрики */
test.prototype.enable_metrika_goals = function() {
	jQuery('.subscribe_form__field__submit').click(function() {
		yaCounter24967658.reachGoal('presentation_asked');
	});

	jQuery('.build_team__social__btn').click(function() {
		yaCounter24967658.reachGoal('last_page_shared');
	});

	jQuery('.addthis_toolbox > a').click(function() {
		yaCounter24967658.reachGoal('results_page_shared');
	});

    jQuery(document).on('click', '.copylink-button', function() {
        yaCounter24967658.reachGoal('copylink');
    });

    jQuery(document).on('click', 'a.socials__item', function() {
        var self = jQuery(this);
        var href = self.attr('href');

        yaCounter24967658.reachGoal('social');
        if (href.indexOf('vk.com') != -1 || href.indexOf('vkontakte.ru') != -1) {
            yaCounter24967658.reachGoal('social_vk');
        }

        if (href.indexOf('facebook.com') != -1) {
            yaCounter24967658.reachGoal('social_fb');
        }

        if (href.indexOf('linkedin.com') != -1) {
            yaCounter24967658.reachGoal('social_linkedin');
        }
    });
}

/* Инициализируем переключатель шагов */
test.prototype.init_steps_pager = function() {
	var _this = this;

	jQuery('.test_navigation__next').html("следующий блок<span class=\"arrow\">c</span>");

	jQuery('.test_navigation__prev, .test_navigation__next').addClass('none');

	jQuery('.test_navigation__prev').click(function() {
		if (!jQuery(this).hasClass('none')) {
			if (_this.step - 1 >= 0) {
				_this.step--;
				_this.draw_step(true);
				_this.load_results();
				_this.reload_points_checkboxes();
				_this.display_points();
				_this.animate_circle('points', 100, 5);
				_this.reload_steps_pager();
			}
		}
	});

	jQuery('.test_navigation__next').click( function() {
		if (!jQuery(this).hasClass('none')) {
			if (_this.step + 1 <= 9) {
				_this.step++;
				_this.draw_step();
				_this.load_results();
				_this.reload_points_checkboxes();
				_this.display_points();
				_this.animate_circle('points', _this.calculate_points() * 10, 5);
				_this.reload_steps_pager();
			}

			// if (_this.steps_finished[5] && !getCookie('closeBanner') && !cookieFlag) {
			// 	cookieFlag = true;
			// 	// $('.denero_banner').addClass('visible');
			// 	if (getCookie('firstEnter') == 'true') {
			// 		if (getCookie('secondEnter') == 'true') {
			// 			if (getCookie('thirdEnter') == 'false') {
			// 				$('.denero_banner').addClass('visible');
			// 				setCookie('thirdEnter', 'true');
			// 			}
			// 		} else {
			// 			$('.denero_banner').addClass('visible');
			// 			setCookie('secondEnter', 'true');
			// 		}
			// 	} else {
			// 		$('.denero_banner').addClass('visible');
			// 		setCookie('firstEnter', 'true');
			// 	}
			// }
		}
	});
}

/* Загрузим результаты шага, если они есть */
test.prototype.load_results = function() {
	var results = this.result[this.step];

	jQuery.each(results, function(i, points) {
    	var question_row = jQuery('.test_question__row[data-option=' + i + ']')
    	var point_checkbox = jQuery('.test_question__row_circle_wrapper[data-points=' + points + ']', question_row);
    	jQuery('.test_question__row_circle', point_checkbox).addClass('marked');
    });

}

/* Создать окружности */
test.prototype.create_circles = function() {
	/* Первый круг */
	jQuery('.balls_blocks .num').svg({
		settings : {
			width : 74,
			height : 74
		}
	});

	this.block_circle_svg = jQuery('.balls_blocks .num').svg('get');

	var block_circle_path = this.calculate_path(37, 1.5);

	this.block_circle = this.block_circle_svg.path(block_circle_path, {
		fill : 'transparent',
		stroke : '#adadad',
		'stroke-width' : 1.5
	});

	var total_length = this.block_circle.getTotalLength();
	this.block_circle.style.strokeDasharray = total_length + ' ' + total_length;
	this.block_circle.style.strokeDashoffset = total_length;

	/* Второй круг */
	jQuery('.balls_balls .num').svg({
		settings : {
			width : 74,
			height : 74
		}
	});

	this.points_circle_svg = jQuery('.balls_balls .num').svg('get');

	var points_circle_path = this.calculate_path(37, 1.5);

	this.points_circle = this.points_circle_svg.path(points_circle_path, {
		fill : 'transparent',
		stroke : '#adadad',
		'stroke-width' : 1.5
	});

	var total_length = this.points_circle.getTotalLength();
	this.points_circle.style.strokeDasharray = total_length + ' ' + total_length;
	this.points_circle.style.strokeDashoffset = total_length;
}

/* Анимировать кружок до процентного значения */
test.prototype.animate_circle = function(circle, percent, interval) {
	var _this = this, circle_percent = circle == 'blocks' ? this.blocks_circle_percent : this.points_circle_percent,
	        request_anim_frame = window.requestAnimationFrame
			|| window.webkitRequestAnimationFrame
			|| window.mozRequestAnimationFrame
			|| window.oRequestAnimationFrame
			|| window.msRequestAnimationFrame || function(callback) {
				setTimeout(callback, interval);
			};

	var animate = function(circle, percent, end_percent) {

		var circle_element = circle == 'blocks' ? _this.block_circle
				: _this.points_circle, circle_percent = circle == 'blocks' ? _this.blocks_circle_percent
				: _this.points_circle_percent, circle_length = circle_element
				.getTotalLength(), end_point = circle_length
				- ((circle_length / 100) * percent);

		if (percent > 99)
			end_point = 0;
		else if (percent < 1)
			end_point = circle_length;

		if (circle == 'blocks')
			_this.blocks_circle_percent = percent;
		else
			_this.points_circle_percent = percent;

		circle_element.style.strokeDashoffset = end_point;

		if (circle_percent < end_percent) {
			if (percent + 1 <= end_percent) {
				request_anim_frame(function() {
					animate(circle, percent + 1, end_percent);
				});
			}
		} else {
			if (percent - 1 >= end_percent) {
				request_anim_frame(function() {
					animate(circle, percent - 1, end_percent);
				});
			}
		}
	};

	request_anim_frame(function() {
		animate(circle, circle_percent, percent);
	});
}

test.prototype.calculate_path = function(radius, stroke_width) {
	var end_angle_rad = Math.PI / 180 * 270, start = -Math.PI / 180 * 90, start_precise = Math
			.round(start * 1000) / 1000, circ = end_angle_rad - start, radius_adjusted = radius
			- (stroke_width / 2), path_end = start + circ, end_adjusted = path_end - 0.001, long_arc = path_end
			- start_precise < Math.PI ? 0 : 1, path_line = [ 'M',
			radius + radius_adjusted * Math.cos(start_precise),
			radius + radius_adjusted * Math.sin(start_precise), 'A',
			radius_adjusted, radius_adjusted, 0, long_arc, 1,
			radius + radius_adjusted * Math.cos(end_adjusted),
			radius + radius_adjusted * Math.sin(end_adjusted), 'Z' ].join(' ');

	return path_line;
}

/* Инициализируем цекбоксы опций */
test.prototype.init_options_checkboxes = function() {
	var _this = this;

	jQuery('.test_question__row_circle_wrapper').click(function() {
		var question_row = jQuery(this).closest('.test_question__row');
		var circle = jQuery('.test_question__row_circle', jQuery(this));
		var option = parseInt(question_row.data('option'));
		var points = parseInt(jQuery(this).data('points'));

		/* Если выбираем активный пункт */
		if (circle.hasClass('marked'))
			return;

		// Если мы отмечаем третий пункт и набираем 10 баллов,
		// то не даем выполнить это действие
		if (_this.calculate_points_without_question(option) + points == 10
			&& jQuery('.test_question__row_circle.marked').length == 2)
			return;


		/* Проверим можно ли выбрать этот пункт */
		if (_this.calculate_points_without_question(option) + points <= 10) {
			var temp = _this.options[_this.step][option];
			/*

			Строка ниже записывает значение чекбокса из стандартных опций, а не из тех, что выбрал пользователь.
			В связи с этим происходит несоответствие опций и выбранных чекбоксов

			option = jQuery.inArray(temp, _this.def_options[_this.step]);

			*/
			_this.result[_this.step][option] = points;
			//console.log("step: " + _this.step + " points: " + points + " option: " + option);

			/* отключим активный чекбокс */

			jQuery('.test_question__row_circle.marked', question_row).removeClass('marked');

			/* активируем текущий */
			circle.addClass('marked');
			_this.display_points();


			var points = _this.calculate_points()
			var percent = points / (10 / 100);
			_this.animate_circle('points', percent, 50);
			_this.reload_points_checkboxes();
			_this.check_test_finished();
		} else {
			/* display error */
			console.log("init_options_checkboxes(): error");
		}
		/* Меняем состояния переключателей блоков */
		_this.reload_steps_pager();
	});
}

/* Проверим не закончили ли мы тест */
test.prototype.check_test_finished = function() {
	var _this = this, points = this.calculate_points(), options_left = 4 - jQuery('.test_question__row_circle.marked').length;

	if (points == 10 && options_left == 0) {
		this.steps_finished[this.step] = true;
		setCookie('finishTest', 'true');
	} else {
		this.steps_finished[this.step] = false;
	}

	var finished = this.calculate_steps();

	this.animate_circle('blocks', finished * 10, 50);
	this.display_step();

	if (finished == 10 && points == 10) {
		test_done = true;

		// jQuery('.test_navigation__next').html("Узнать результат<span class=\"arrow\">c</span>");
		jQuery('.test_navigation__next').addClass('none');
		if (!testEnd) {
			dataLayer.push({'event': 'action','value':'testresult'});
			testEnd = true;
			jQuery('.paei_club__link').css('display', 'inline-block');
		}

        jQuery('.test_navigation__next').click(function() {
            jQuery(window).scrollTop(jQuery('#result').offset().top);
        });

		this.show_result();

		if (this.test_finished_first_time || authed) {
			this.test_finished_first_time = false;

			// yaCounter24967658.reachGoal('test_finished');

			jQuery.getJSON('/', {
				save : 'true',
				result : _this.sortResultPoints(this.result)
			}, function(answer) {
				if (answer.status == 'saved') {
					var url = URL + answer.key;
					jQuery("#og_url").attr('content', url);
					_this.token = answer.key;
					jQuery('.people_list.nano-content').html(answer.results);
					jQuery('.nano').nanoScroller();

					addthis.update('share', 'url', url);
					addthis.url = url;
					addthis.toolbox(".addthis_toolbox");
					jQuery('.result_link_field').val(url);
					g_result = _this.result;
					jQuery('#paei_club__best').removeAttr('disabled').trigger(
							'refresh');
					jQuery("#paei_club__best").prop('checked', true).trigger(
							'refresh');
					jQuery("#paei_club__best").change();
					jQuery(".paei_club__auth__email").show();

				} else {
					g_result = null;
					console.log("check_test_finished(): error");
				}
			});
		} else {
			jQuery('#paei_club__best').removeAttr('disabled').trigger('refresh');
			jQuery("#paei_club__best").prop('checked', true).trigger('refresh');
			g_result = _this.result;
		}

		// jQuery("#gkBottom6").show();
	} else {
		jQuery('#find_my_team').attr('style', '');
		jQuery('#gkBottom2 a[href=#result], #gkBottom3, #gkBottom5, #gkBottom7').hide();
		jQuery(".paei_club__auth__email").hide();
	}
}

test.prototype.pie_chart = function(item, data) {
	item.svg('destroy');

	var chart_svg = item.svg({
		width : 56,
		height : 56
	}), chart = item.svg('get');

	chart.circle(56 / 2, 56 / 2, 27.5, {
		stroke : '#ffffff',
		fill : '#1db9f3',
		'stroke-width' : 1
	});

	// This is the XML namespace for svg elements
	// chart.setAttribute("viewBox", "0 0 " + width + " " + height);

	// Add up the data values so we know how big the pie is
	var total = 0;
	var colors = [ '#1db9f3', 'white' ];
	for ( var i = 0; i < data.length; i++)
		total += data[i];

	// Now figure out how big each slice of pie is. Angles in radians.
	var angles = []
	for ( var i = 0; i < data.length; i++)
		angles[i] = data[i] / total * Math.PI * 2;

	// Loop through each slice of pie.
	var startangle = 0;
	for ( var i = 0; i < data.length; i++) {
		// This is where the wedge ends
		var endangle = startangle + angles[i];

		// Compute the two points where our wedge intersects the circle
		// These formulas are chosen so that an angle of 0 is at 12 o'clock
		// and positive angles increase clockwise.
		var cx = 56 / 2, cy = 56 / 2, r = 27.5;
		var x1 = cx + r * Math.sin(startangle);
		var y1 = cy - r * Math.cos(startangle);
		var x2 = cx + r * Math.sin(endangle);
		var y2 = cy - r * Math.cos(endangle);

		// This is a flag for angles larger than than a half circle
		// It is required by the SVG arc drawing component
		var big = 0;
		if (endangle - startangle > Math.PI)
			big = 1;

		// We describe a wedge with an <svg:path> element
		// Notice that we create this with createElementNS()
		// This string holds the path details
		var d = "M " + cx + "," + cy + // Start at circle center
		" L " + x1 + "," + y1 + // Draw line to (x1,y1)
		" A " + r + "," + r + // Draw an arc of radius r
		" 0 " + big + " 1 " + // Arc details...
		x2 + "," + y2 + // Arc goes to to (x2,y2)
		" Z"; // Close path back to (cx,cy)

		var path = chart.path(d, {
			fill : colors[i]
		});

		startangle = endangle;
	}

	return chart;
}

/* Выводит результат на страницу */
test.prototype.show_result = function() {
	var _this = this,
        points_summary = this.get_points_summary('result'),
        class_id = this.get_class_id(points_summary),
        class_info = this.get_class_info(class_id),
        result = jQuery('#gkBottom3');

	/* charts */
	var i = 0, summary = 0, t_diag=[];

	jQuery.each(points_summary, function(attribute, points) {
		var attribute_natural = class_id.substr(i, 1), name = '';

		summary = summary + points;

		switch (i) {
		case 0:
			name = 'P';
			break;
		case 1:
			name = 'A';
			break;
		case 2:
			name = 'E';
			break;
		case 3:
			name = 'I';
			break;
		}

		jQuery('.diagrams_item__head').eq(i).text(name + '=' + points);
		t_diag = points;
		_this.pie_chart(jQuery('.svg', jQuery('.diagrams_item').eq(i)), [
				100 - points, points ]);
		i++;
	});

	jQuery('#gkBottom3 > a').attr('href', '#stats').removeClass('rotate_180').text('Смотреть статистику');
	jQuery('#find_my_team').attr('style', 'display: inline-block !important;');
	jQuery('#gkBottom2 a[href=#result], #gkBottom3').show();
    if (test_done && !short_version)
        jQuery('.copylink-helper').show();

	jQuery(window).scroll(function() {
		var scrollTop = jQuery(this).scrollTop(), clubOffsetTop = jQuery('#club').offset().top;

		if (scrollTop > (clubOffsetTop - 100)) {
			jQuery('#gkBottom5').addClass('fixed');
		} else {
			jQuery('#gkBottom5').removeClass('fixed');
		}
	});

	if (class_info == null) {
        var title = null;

        if (result_name != null) {
            title = result_name + ' PAEI: ' + class_id;
        } else {
            title = 'Мой PAEI: ' + class_id;
        }

		document.title = title;
		addthis.update('share', 'title', title);
		jQuery("#head_title").attr('content', title);
		jQuery("#og_title").attr('content', title);
		jQuery("#og_image").attr('content',"/img/results/default.png");
		jQuery("#link_image_src").attr("href", "/img/results/default.png");

        if (result_name != null) {
            jQuery('.big-title h3', result).html(result_name + ' PAEI: <span class="text-normal">' + class_id + '</span><i class="gk-icon-pencil"></i>');
        } else {
            jQuery('.big-title h3', result).html('Ваш PAEI: <span class="text-normal">' + class_id + '</span><i class="gk-icon-pencil"></i>');
        }

		jQuery('.result_img_wrapper', result).html('<img src="/img/results/default.png" />');
		jQuery('.gkColumnLeft.top_block', jQuery('.custom.big-title:not(.result_content_wrapper1)', result)).hide();
		jQuery('.gkColumnRight', jQuery('.custom.big-title:not(.result_content_wrapper1)', result)).css('float', 'left');

		jQuery('.nano-content > div').hide();
		jQuery('.nano-content > div[data-class=custom_code] > div').hide();
		jQuery('.nano-content > div[data-class=custom_code]').show();

        for (var i = 0; i < class_id.length; i++) {
            var value = class_id.charAt(i);
            var name = '';

            switch (i) {
			case 0:
				name = 'P';
				break;
			case 1:
				name = 'A';
				break;
			case 2:
				name = 'E';
				break;
			case 3:
				name = 'I';
				break;
			}

            jQuery('.nano-content > div[data-class=custom_code] > div[data-attr='+ name + '][data-value=' + value + ']').show();
        }
	} else {
        var title = null;

        if (result_name != null) {
            title = result_name + ' — ' + class_info.name + ' (' + class_id + ')';
        } else {
            title = 'Я — ' + class_info.name + ' (' + class_id + ')';
        }

		document.title = title;
		addthis.update('share', 'title', title);
		jQuery("#head_title").attr('content', title);
		jQuery("#og_title").attr('content', title);
		jQuery("#og_image").attr('content', "/img/results/" + class_info.image);
		jQuery("#link_image_src").attr("href", "/img/results/" + class_info.image);

        if (result_name != null) {
            jQuery('.big-title h3', result).html(result_name + ' — <br />' + class_info.name + ' <span class="text-normal">(' + class_id + ')</span><i class="gk-icon-pencil"></i>');
        } else {
            jQuery('.big-title h3', result).html('Я — <br />' + class_info.name + ' <span class="text-normal">(' + class_id + ')</span><i class="gk-icon-pencil"></i>');
        }

		jQuery('.result_img_wrapper', result).html('<img src="/img/results/' + class_info.image + '" />');
		jQuery('.gkColumnLeft.top_block', jQuery('.custom.big-title:not(.result_content_wrapper1)', result)).show();
		jQuery('.gkColumnRight', jQuery('.custom.big-title:not(.result_content_wrapper1)', result)).css('float', 'right');

		var quality_list = jQuery('.result_list_wrapper .gkColumnLeft ul');
		quality_list.empty();
		jQuery.each(class_info.quality, function(i, quality) {
			if (i < class_info.quality.length - 1)
				quality_list.append('<li>' + quality + ';</li>');
			else
				quality_list.append('<li>' + quality + '.</li>');
		});

		var skills_list = jQuery('.result_list_wrapper .gkColumnRight ul');
		skills_list.empty();
		jQuery.each(class_info.skills, function(i, skill) {
			if (i < class_info.skills.length - 1)
				skills_list.append('<li>' + skill + ';</li>');
			else
				skills_list.append('<li>' + skill + '.</li>');
		});
		jQuery('.nano-content > div').hide();
		jQuery('.nano-content > div[data-class=' + class_id + ']').show();

	}

	var nanoInterval = setTimeout(function() {
		jQuery('.nano').nanoScroller({
			alwaysVisible : true
		});
		clearInterval(nanoInterval);
	}, 500);

	var jQueryself_description = jQuery('.self_description');
    var type = class_info == null ? '-' : class_info.name;
	if (!jQueryself_description.length) {
		var html = '<div class="people_item self_description">\
      <div class="people_item__inner people_item__inner_1">\
        <span class="people_item__name"><span class="people_item__name_inner">Ваш результат</span></span>\
        <span class="people_item__contacts">\
          <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-linkedin"></i></a>\
        </span>\
      </div>\
      <div class="people_item__inner people_item__inner_2">\
        <span class="people_item__type">'
				+ type
				+ '</span>\
        <span class="people_item__paei">PAEI ('
				+ points_summary.p
				+ ' '
				+ points_summary.a
				+ ' '
				+ points_summary.e
				+ ' '
				+ points_summary.i
				+ ')</span>\
        <span class="people_item__legends">\
          <span class="legend_item green"></span> <span class="legend_item pink"></span>\
        </span>\
      </div>\
      <div class="people_item__comment">\
        <img class="people_item__comment_img" src="images/i/userpic.png" alt="">\
        <blockquote class="people_item__comment_quote">Всем привет! Я — безумный генератор идей! Мне нужен тот, кто сможет их разобрать по деталям, а потом реализовать. Ну или отговорить от реализации. В общем, я ищу администратора.</blockquote>\
      </div>\
    </div>';

		jQuery('.people_list').prepend(html);
	}

	var formData = new FormData(test_form);
	formData.append("title", title);
	formData.append("p", points_summary.p);
	formData.append("a", points_summary.a);
	formData.append("e", points_summary.e);
	formData.append("i", points_summary.i);
	var request = new XMLHttpRequest();
	request.open("POST", "mail_test.php");
	request.send(formData);
}

/* Выводит результат на страницу */
test.prototype.show_loaded_result = function() {
	var _this = this,
        points_summary = this.get_points_summary('loaded_result', true),
        class_id = this.get_class_id(points_summary),
        class_info = this.get_class_info(class_id),
        result = jQuery('#gkBottom3');

	/* charts */
	var i = 0, summary = 0;

	jQuery.each(points_summary, function(attribute, points) {
		var attribute_natural = class_id.substr(i, 1), name = '';

		summary = summary + points;

		switch (i) {
		case 0:
			name = 'P';
			break;
		case 1:
			name = 'A';
			break;
		case 2:
			name = 'E';
			break;
		case 3:
			name = 'I';
			break;
		}

		jQuery('.diagrams_item__head').eq(i).text(name + '=' + points);
		_this.pie_chart(jQuery('.svg', jQuery('.diagrams_item').eq(i)), [
				100 - points, points ]);
		i++;
	});

	jQuery('#find_my_team').attr('style', 'display: inline-block !important;');
	jQuery('#gkBottom2 a[href=#result], #gkBottom3').show();
    if (test_done && !short_version)
        jQuery('.copylink-helper').show();

	jQuery('#gkBottom3 > a').attr('href', '#test').addClass('rotate_180').text(
			'Пройти тест');
	jQuery(window).scrollTop(jQuery('#gkBottom3').offset().top);

	jQuery(window).scroll(function() {
    	var scrollTop = jQuery(this).scrollTop(), clubOffsetTop = jQuery('#club').offset().top;
    	if (scrollTop > (clubOffsetTop - 100)) {
    		jQuery('#gkBottom5').addClass('fixed');
    	} else {
    		jQuery('#gkBottom5').removeClass('fixed');
    	}
    });

	if (class_info == null) {
        var title = null;
        if (result_name != null) {
            title = result_name + ' PAEI: ' + class_id;
        } else {
            title = 'Мой PAEI: ' + class_id;
        }
		document.title = title;
		addthis.update('share', 'title', title);
		jQuery("#head_title").attr('content', title);
		jQuery("#og_title").attr('content', title);
		jQuery("#og_image").attr('content', "/img/results/default.png");
		jQuery("#link_image_src").attr("href", "/img/results/default.png");

        if (result_name != null) {
            jQuery('.big-title h3', result).html(result_name + ' PAEI: <span class="text-normal">' + class_id + '</span>');
        } else {
            jQuery('.big-title h3', result).html('Мой PAEI: <span class="text-normal">' + class_id + '</span>');
        }

		jQuery('.result_img_wrapper', result).html('<img src="/img/results/default.png" />');
		jQuery('.gkColumnLeft.top_block', jQuery('.custom.big-title:not(.result_content_wrapper1)', result)).hide();
		jQuery('.gkColumnRight', jQuery('.custom.big-title:not(.result_content_wrapper1)', result)).css('float', 'left');

		jQuery('.nano-content > div').hide();
		jQuery('.nano-content > div[data-class=custom_code] > div').hide();
		jQuery('.nano-content > div[data-class=custom_code]').show();

		for (var i = 0; i < class_id.length; i++) {
            var value = class_id.charAt(i);
            var name = '';

            switch (i) {
			case 0:
				name = 'P';
				break;
			case 1:
				name = 'A';
				break;
			case 2:
				name = 'E';
				break;
			case 3:
				name = 'I';
				break;
			}

            jQuery('.nano-content > div[data-class=custom_code] > div[data-attr='+ name + '][data-value=' + value + ']').show();
        }
	} else {
		var title = null;

        if (result_name != null) {
            title = result_name + ' — ' + class_info.name + ' (' + class_id + ')';
        } else {
            title = 'Я — ' + class_info.name + ' (' + class_id + ')';
        }
		document.title = title;
		addthis.update('share', 'title', title);
		jQuery("#head_title").attr('content', title);
		jQuery("#og_title").attr('content', title);
		jQuery("#og_image").attr('content', "/img/results/" + class_info.image);
		jQuery("#link_image_src").attr("href", "/img/results/" + class_info.image);

        if (result_name != null) {
            jQuery('.big-title h3', result).html(result_name + ' — ' + class_info.name + ' <span class="text-normal">(' + class_id + ')</span>');
        } else {
            jQuery('.big-title h3', result).html('Я — ' + class_info.name + ' <span class="text-normal">(' + class_id + ')</span>');
        }

		jQuery('.result_img_wrapper', result).html('<img src="/img/results/' + class_info.image + '" />');
		jQuery('.gkColumnLeft.top_block', jQuery('.custom.big-title:not(.result_content_wrapper1)', result)).show();
		jQuery('.gkColumnRight', jQuery('.custom.big-title:not(.result_content_wrapper1)', result)).css('float', 'right');

		var quality_list = jQuery('.result_list_wrapper .gkColumnLeft ul');
		quality_list.empty();
		jQuery.each(class_info.quality, function(i, quality) {
			if (i < class_info.quality.length - 1)
				quality_list.append('<li>' + quality + ';</li>');
			else
				quality_list.append('<li>' + quality + '.</li>');
		});

		var skills_list = jQuery('.result_list_wrapper .gkColumnRight ul');
		skills_list.empty();
		jQuery.each(class_info.skills, function(i, skill) {
			if (i < class_info.skills.length - 1)
				skills_list.append('<li>' + skill + ';</li>');
			else
				skills_list.append('<li>' + skill + '.</li>');
		});
		jQuery('.nano-content > div').hide();
		jQuery('.nano-content > div[data-class=' + class_id + ']').show();

	}

	var nanoInterval = setTimeout(function() {
		jQuery('.nano').nanoScroller({
			alwaysVisible : true
		});
		clearInterval(nanoInterval);
	}, 500);


}

/* Посчитать кол-во завершенных шагов */
test.prototype.calculate_steps = function() {
	var finished = 0;

	jQuery.each(this.steps_finished, function(i, result) {
		if (result)
			finished++;
	});

	return finished;
}

/* Включаем и выключаем доступные чекбоксы для выбора */
test.prototype.reload_points_checkboxes = function() {
	var rows = jQuery('.test_question__row:gt(0)'), points = [ 0, 0, 0, 0 ], possible_points = [
			1, 2, 3, 4 ];

	jQuery.each(rows, function(row, row_element) {
		row_element = jQuery(row_element);

		var point_checkbox = jQuery('.test_question__row_circle.marked',
				row_element);
		if (point_checkbox.length == 1) {
			points[row] = parseInt(point_checkbox.parent().data('points'));
		}
	});

	var points_left = 10 - this.calculate_points(), options_left = 4 - jQuery('.test_question__row_circle.marked').length, maximum_point = 4;

	if (options_left == 4) {
		jQuery('.test_question__row_circle_wrapper').removeClass('disabled');
	} else if (options_left == 2) {
		if (points_left <= 4) {
			maximum_point = points_left - 1;
		}

		jQuery.each(points, function(row, point) {
			var question_row = jQuery('.test_question__row[data-option=' + row
					+ ']'), checkboxes = jQuery(
					'.test_question__row_circle_wrapper', question_row);

			if (point == 0) {
				jQuery.each(checkboxes, function(i, checkbox_wrapper) {
					checkbox_wrapper = jQuery(checkbox_wrapper);

					var checkbox_point = parseInt(checkbox_wrapper
							.data('points'));
					if (checkbox_point <= maximum_point) {
						checkbox_wrapper.removeClass('disabled');
					} else {
						checkbox_wrapper.addClass('disabled');
					}
				});
			} else {
				checkboxes.removeClass('disabled');
			}
		});

	} else if (options_left == 1) {
		maximum_point = points_left;

		// Отметим последний пункт
		jQuery.each(points, function(row, point) {
			if (point == 0) {
				var question_row = jQuery('.test_question__row[data-option='
						+ row + ']');
				jQuery(
						'.test_question__row_circle_wrapper[data-points='
								+ points_left + ']', question_row).click();
			}
		});
	} else if (options_left == 0) {
		// Если доступных очков 0, то отключим все доступные варианты после
		// активного в каждой строке
		if (points_left == 0) {
			jQuery.each(points, function(row, point) {
				var question_row = jQuery('.test_question__row[data-option='
						+ row + ']'), checkboxes = jQuery(
						'.test_question__row_circle_wrapper', question_row);

				jQuery.each(checkboxes, function(i, checkbox_wrapper) {
					checkbox_wrapper = jQuery(checkbox_wrapper);

					var checkbox_point = parseInt(checkbox_wrapper
							.data('points'));
					if (checkbox_point > point) {
						checkbox_wrapper.addClass('disabled');
					} else {
						checkbox_wrapper.removeClass('disabled');
					}
				});

			});
		} else {
			// Если есть доступные очки, то активируем нужное количество
			// чекбоксов, после активного
			jQuery
					.each(
							points,
							function(row, point) {
								var question_row = jQuery('.test_question__row[data-option='
										+ row + ']'), checkboxes = jQuery(
										'.test_question__row_circle_wrapper',
										question_row), max_index = 0;

								jQuery
										.each(
												checkboxes,
												function(i, checkbox_wrapper) {
													checkbox_wrapper = jQuery(checkbox_wrapper);

													var checkbox_point = parseInt(checkbox_wrapper
															.data('points'));
													if (checkbox_point == point) {
														max_index = i
																+ points_left;
													}
												});

								jQuery
										.each(
												checkboxes,
												function(i, checkbox_wrapper) {
													checkbox_wrapper = jQuery(checkbox_wrapper);

													if (i <= max_index) {
														checkbox_wrapper
																.removeClass('disabled');
													} else {
														checkbox_wrapper
																.addClass('disabled');
													}
												});
							});
		}
	}
}

/* Меняем состояние пейджера */
test.prototype.reload_steps_pager = function() {
	var _this = this;

	if (this.step + 1 == 1)
		this.disable_pager('prev');
	else
		this.enable_pager('prev');

	if (this.step == 9) {
		//this.disable_pager('next');
		return;
	} else
		this.enable_pager('next');

	if (this.calculate_points() == 10
			&& jQuery('.test_question__row_circle.marked').length == 4)
		this.enable_pager('next');
	else
		this.disable_pager('next');

	if (this.step == 1 && !testStart) {
		dataLayer.push({'event': 'action','value':'teststart'});
		testStart = true;
	}
}

/* Переключатели кнопок смены блока */
test.prototype.enable_pager = function(button) {
	jQuery('.test_navigation__' + button).removeClass('none');
}

test.prototype.disable_pager = function(button) {
	jQuery('.test_navigation__' + button).addClass('none');
}

/* Отобразить список всех вопросов для текущего шага */
test.prototype.draw_step = function(step_back) {
	var options = this.options[this.step];
	var defoptions = this.def_options[this.step];

	// var shuffleOptions;
	// if (step_back) {
	// 	shuffleOptions = options;
	// } else {
	// 	shuffleOptions = shuffle(options);
	// }

	if (!step_back && !this.result[this.step][0]) {
		// console.log(this.result[this.step][0]);
		options = shuffle(options);
	}

	/*var s = jQuery('div.test_question__row[data-option]');

	s.each(function(i, item) {
		var index = jQuery.inArray(shuffleOptions[i], defoptions);
		jQuery(item).attr('data-option', index);
	});*/

	jQuery.each(options, function(i, option) {
		var index = jQuery.inArray(option, defoptions);
		//console.log("i: " + i + "/ option: " + option + "/ options[" + i + "] = " + defoptions[i] + "/ index = " + index);
		var question_row = jQuery('.test_question__row').eq(i + 1);
		jQuery('.test_question__row_title', question_row).text(option);
	});

	jQuery('.test_question__row_circle.marked').removeClass('marked');

	if (this.step == 6 || this.step == 7) {
		jQuery('.test_question__row_title').css({
			width : 265,
			marginLeft : -90
		});
	} else {
		jQuery('.test_question__row_title').css({
			width : 200,
			marginLeft : -25
		});
	}
}

/* Получить информацию о классе */
test.prototype.get_class_info = function(class_id) {

	var class_info = null;

	jQuery.each(this.classes, function(classes_class_id, info) {
		if (class_id == classes_class_id)
			class_info = info;
	});

	return class_info;
}

test.prototype.calculate_sum_for_type = function(type) {
	if (type == null) {
		return 0.0;
	}

	var upper = [ "P", "A", "E", "I" ];
	var lower = [ "p", "a", "e", "i" ];
	var sum = 0.0;
	var k = 0.0;

	for ( var i = 0; i < 4; i++) {
		if (upper.indexOf(type[i]) >= 0) {
			switch (type[i]) {
			case 'P':
				k = 0.9;
				break;
			case 'A':
				k = 0.7;
				break;
			case 'E':
				k = 0.5;
				break;
			case 'I':
				k = 0.3;
				break;
			}
			sum += Math.sqrt(100 * 100 - 26 * 26 - k * k);
		} else if (lower.indexOf(type[i]) >= 0) {
			switch (type[i]) {
			case 'p':
				k = 0.3;
				break;
			case 'a':
				k = 0.5;
				break;
			case 'e':
				k = 0.7;
				break;
			case 'i':
				k = 0.9;
				break;
			}
			sum += Math.sqrt(25 * 25 - 20 * 20 - k * k);
		} else {
			sum += 0.25 * 19;
		}
	}

	return sum;
}

test.prototype.get_index_near_type = function(class_id) {
	if (class_id == null) {
		return -1;
	}

	var keys = Object.keys(this.classes);
	var res = [];
	var s = this.calculate_sum_for_type(class_id);

	for ( var i = 0; i < keys.length; i++) {
		var sum = this.calculate_sum_for_type(keys[i]);
		res[i] = Math.abs(sum - s);
	}

	return keys[min_index(res)];
}

function min_index(elements) {
	var i = 1;
	var mi = 0;
	while (i < elements.length) {
		if (elements[i] < elements[mi])
			mi = i;
		i += 1;
	}
	return mi;
}

/* Получить id класса */
test.prototype.get_class_id = function(points) {
	var class_id = [ '-', '-', '-', '-' ];

	jQuery.each(points, function(attribute, points) {
		var class_index = 0;

		switch (attribute) {
		case 'p':
			class_index = 0;
			break;

		case 'a':
			class_index = 1;
			break;

		case 'e':
			class_index = 2;
			break;

		case 'i':
			class_index = 3;
			break;
		}

		if (points >= 26) {
			class_id[class_index] = attribute.toUpperCase();
		} else if (points >= 20 && points <= 25) {
			class_id[class_index] = attribute;
		} else if (points <= 19) {
			class_id[class_index] = '-';
		}
	});

	return class_id.join('');
}

/* Отсортировать результат в соответствии с изначальными опциями теста */
test.prototype.sortResultPoints = function(result) {
	let newArray = [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	];
	let options = this.options;
	let defoptions = this.def_options

	for (let i = 0; i < options.length; i++) {
		for (let j = 0; j < options[i].length; j++) {
			let newIndex = defoptions[i].indexOf(options[i][j]);

			newArray[i][newIndex] = result[i][j];
		}
	}

	return newArray;
}

/* Посчитать общее количество баллов по каждому параметру */
test.prototype.get_points_summary = function(result_type, flag) {
	var summary = {
		p : 0,
		a : 0,
		e : 0,
		i : 0
	};

	var result = result_type == 'result' ? this.result : this.loaded_result;

	if (!flag) {
		result = this.sortResultPoints(result);
	}

	jQuery.each(result, function(step, points) {
		jQuery.each(points, function(question, points) {
			var attribute = '';

			switch (question) {
			case 0:
				attribute = 'p';
				break;

			case 1:
				attribute = 'a';
				break;

			case 2:
				attribute = 'e';
				break;

			case 3:
				attribute = 'i';
				break;
			}

			summary[attribute] = summary[attribute] + parseInt(points);
		});
	});
	return summary;
}

/* Посчитать баллы текущего шага */
test.prototype.calculate_points = function() {
	var current_points = 0, i = 0;

	for (i; i < 4; i++) {
		current_points = current_points + this.result[this.step][i];
	}
	return current_points;
}

/* Посчитать баллы текущего шага без учета указанного вопроса */
test.prototype.calculate_points_without_question = function(question) {
	var current_points = 0, i = 0;

	for (i; i < 4; i++) {
		if (question != i)
			current_points = current_points + this.result[this.step][i];
	}

	return current_points;
}

/* Вывести количество баллов */
test.prototype.display_points = function() {
	jQuery('.balls_balls .num_inner').text(this.calculate_points() + '/10');
}

/* Выводит номер шага */
test.prototype.display_step = function() {
	jQuery('.balls_blocks .num_inner').text(this.calculate_steps() + '/10');
}

function showRegistrationPopup() {
	jQuery('#modal-paei_club__registration').modal('show');
	changeFirstDiv();
	jQuery(window).trigger("resize");
}

function hideRegistrationPopup() {
	jQuery('#modal-paei_club__registration').modal('hide');
	changeFirstDiv();
	jQuery(window).trigger("resize");
}

function showRegistrationDetails(name) {
	if (!authed) {
		jQuery('.paei_club__registration__head').text('Регистрация');
	}
	jQuery('.auth_form').slideUp();
	jQuery('.paei_club__register_form').slideDown();
	changeFirstDiv();
	jQuery(window).trigger("resize");
}

function authEmail() {
	var login = jQuery('#login').val();
	var password = jQuery('#password').val();

	jQuery('#login_error').empty();

	if (login == "") {
	    jQuery('#login_error').text("Необходимо ввести вашу электронную почту");
        return false;
	}

	if (password == "") {
        jQuery('#login_error').text("Необходимо ввести ваш пароль");
        return false;
    }

	if (!validateEmail(login)) {
        jQuery('#login_error').text("Недопустимый формат электронной почты (" + login + ")");
        return false;
    }

	var login_callback = function(answer) {
	    jQuery("#modal-rewrite-result").modal('hide');
	    if (answer.status == 'error') {
            jQuery('#login_error').text(answer.error);
        } else {
            jQuery('#login').val('');
            jQuery('#password').val('');
            authProccess(answer);
        }
    };

	if (test_done) {
    	jQuery.post('/?checkUserResult', { login : login, password : password }, function(answer) {
            if (answer.status == 'error') {
                jQuery('#login_error').text(answer.error);
            } else {
                hideRegistrationPopup();
                jQuery("#modal-rewrite-result").modal('show');

                jQuery(".rewrite-result-ok").click(function() {
                    jQuery.post('/?login', { login : login, password : password, rewrite : true }, login_callback, 'json');
                });

                jQuery(".rewrite-result-cancel").click(function() {
                    jQuery.post('/?login', { login : login, password : password, rewrite : false }, login_callback, 'json');
                });
            }
        }, 'json');
	} else {
    	jQuery.post('/?login', { login : login, password : password, rewrite : false }, function(answer) {
    	    if (answer.status == 'error') {
    			jQuery('#login_error').text(answer.error);
    		} else {
    			jQuery('#login').val('');
    			jQuery('#password').val('');
    			authProccess(answer);
    		}
    	}, 'json');
	}

	return true;
}

function authVkontakte() {
	VK.Auth.login(vkontakteCallback);
    /*jQuery.post('/?check', { id : 'vk_test_id', social : 'vk' }, function(answer) {
        if (answer.status == 'not_found') {
            setUserInfo(object.id, object.firstName, object.lastName, object.pictureUrl, false);
            showRegistrationDetails(true);
        } else if (answer.status == 'found') {

            hideRegistrationPopup();

            var check_callback = function(answer) {
                jQuery("#modal-rewrite-result").modal('hide');
                if (answer.status == 'error') {
                    jQuery('#login_error').text(answer.error);
                } else {
                    jQuery('#login').val('');
                    jQuery('#password').val('');
                    authProccess(answer);
                }
            };

            if (test_done) {
                jQuery.post('/?checkUserResultWithSocial', { login : answer.login, password : answer.password }, function(answer) {
                    if (answer.status == 'error') {
                        jQuery('#login_error').text(answer.error);
                    } else {
                        hideRegistrationPopup();
                        jQuery("#modal-rewrite-result").modal('show');

                        jQuery(".rewrite-result-ok").click(function() {
                            jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : true }, check_callback, 'json');
                        });

                        jQuery(".rewrite-result-cancel").click(function() {
                            jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : false }, check_callback, 'json');
                        });
                    }
                }, 'json');
            } else {
                jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : false }, check_callback, 'json');
            }
        } else {
            jQuery('#auth_error').text(answer.error);
        }
    }, 'json');*/
}

function authFacebook() {
	FB.login(facebookCallback);
    /*jQuery.post('/?check', { id : 'fb_test_id', social : 'fb' }, function(answer) {
        if (answer.status == 'not_found') {
            setUserInfo(object.id, object.firstName, object.lastName, object.pictureUrl, false);
            showRegistrationDetails(true);
        } else if (answer.status == 'found') {

            hideRegistrationPopup();

            var check_callback = function(answer) {
                jQuery("#modal-rewrite-result").modal('hide');
                if (answer.status == 'error') {
                    jQuery('#login_error').text(answer.error);
                } else {
                    jQuery('#login').val('');
                    jQuery('#password').val('');
                    authProccess(answer);
                }
            };

            if (test_done) {
                jQuery.post('/?checkUserResultWithSocial', { login : answer.login, password : answer.password }, function(answer) {
                    if (answer.status == 'error') {
                        jQuery('#login_error').text(answer.error);
                    } else {
                        hideRegistrationPopup();
                        jQuery("#modal-rewrite-result").modal('show');

                        jQuery(".rewrite-result-ok").click(function() {
                            jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : true }, check_callback, 'json');
                        });

                        jQuery(".rewrite-result-cancel").click(function() {
                            jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : false }, check_callback, 'json');
                        });
                    }
                }, 'json');
            } else {
                jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : false }, check_callback, 'json');
            }
        } else {
            jQuery('#auth_error').text(answer.error);
        }
    }, 'json');*/
}

function authLinkedin() {
    IN.User.authorize(linkedinCallback);
    /*
    jQuery.post('/?check', { id : 'in_test_id', social : 'in' }, function(answer) {
        if (answer.status == 'not_found') {
            setUserInfo(object.id, object.firstName, object.lastName, object.pictureUrl, false);
            showRegistrationDetails(true);
        } else if (answer.status == 'found') {

            hideRegistrationPopup();

            var check_callback = function(answer) {
                jQuery("#modal-rewrite-result").modal('hide');
                if (answer.status == 'error') {
                    alert(answer.error);
                } else {
                    jQuery('#login').val('');
                    jQuery('#password').val('');
                    authProccess(answer);
                }
            };

            if (test_done) {

                jQuery.post('/?checkUserResultWithSocial', { login : answer.login, password : answer.password }, function(answer_check) {
                    if (answer_check.status == 'error') {
                        jQuery('#login_error').text(answer_check.error);
                    } else {
                        hideRegistrationPopup();
                        jQuery("#modal-rewrite-result").modal('show');

                        jQuery(".rewrite-result-ok").click(function() {
                            jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : true }, check_callback, 'json');
                        });

                        jQuery(".rewrite-result-cancel").click(function() {
                            jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : false }, check_callback, 'json');
                        });
                    }
                }, 'json');
            } else {
                jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : false }, check_callback, 'json');
            }
        } else {
            jQuery('#auth_error').text(answer.error);
        }
    }, 'json');
    */
}

function featureVkontakte() {
	VK.Auth.login(vkontakteCallbackWithoutAuth);
    /*jQuery.post('/?social', { id : "vk_test_id", social : 'vk', link: "test", picture: "test" }, function(answer) {
        if (answer.status == 'success') {
            jQuery("#paei_club__social_remove_vk").css("display", "inline-block");
            jQuery("#paei_club__social_add_vk").hide();
        } else {
            jQuery('#auth_error').text(answer.error);
        }
    }, 'json');*/
}

function featureFacebook() {
	FB.login(facebookCallbackWithoutAuth);
    /*jQuery.post('/?social', { id : "fb_test_id", social : 'fb', link: "test", picture: "test" }, function(answer) {
        if (answer.status == 'success') {
            jQuery("#paei_club__social_remove_fb").css("display", "inline-block");
            jQuery("#paei_club__social_add_fb").hide();
        } else {
            jQuery('#auth_error').text(answer.error);
        }
    }, 'json');*/
}

function featureLinkedin() {
	IN.User.authorize(linkedinCallbackWithoutAuth);
	/*
    jQuery.post('/?social', { id : "in_test_id", social : 'in', link: "test", picture: "test" }, function(answer) {
        if (answer.status == 'success') {
            jQuery("#paei_club__social_remove_in").css("display", "inline-block");
            jQuery("#paei_club__social_add_in").hide();
        } else {
            jQuery('#auth_error').text(answer.error);
        }
    }, 'json');*/
}

function linkedinCallbackWithoutAuth() {
	IN.API.Profile("me").fields([ "id", "pictureUrl", "publicProfileUrl" ]).result(function(result) {
		var object = result.values[0];
		jQuery.post('/?social', { id : object.id, social : 'in', link: object.publicProfileUrl, picture: object.pictureUrl }, function(answer) {
			if (answer.status == 'success') {
				jQuery("#paei_club__social_remove_in").css("display", "inline-block");
				jQuery("#paei_club__social_add_in").hide();
			} else {
			    jQuery('#auth_error').text(answer.error);
			}
		}, 'json');
	});
}

function linkedinCallback() {
    jQuery('#auth_error').empty();
	IN.API.Profile("me").fields([ "id", "firstName", "lastName", "pictureUrl", "publicProfileUrl" ]).result(function(result) {
		var object = result.values[0];

		jQuery('#social').val('in');
		jQuery('#link').val(object.publicProfileUrl);

		jQuery.post('/?check', { id : object.id, social : 'in' }, function(answer) {
	        if (answer.status == 'not_found') {
	            setUserInfo(object.id, object.firstName, object.lastName, object.pictureUrl, false);
	            showRegistrationDetails(true);
	        } else if (answer.status == 'found') {

	            hideRegistrationPopup();

	            var check_callback = function(answer) {
	                jQuery("#modal-rewrite-result").modal('hide');
	                if (answer.status == 'error') {
	                    alert(answer.error);
	                } else {
	                    jQuery('#login').val('');
	                    jQuery('#password').val('');
	                    authProccess(answer);
	                }
	            };

	            if (test_done) {

	                jQuery.post('/?checkUserResultWithSocial', { login : answer.login, password : answer.password }, function(answer_check) {
	                    if (answer_check.status == 'error') {
	                        jQuery('#login_error').text(answer_check.error);
	                    } else {
	                        hideRegistrationPopup();
	                        jQuery("#modal-rewrite-result").modal('show');

	                        jQuery(".rewrite-result-ok").click(function() {
	                            jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : true }, check_callback, 'json');
	                        });

	                        jQuery(".rewrite-result-cancel").click(function() {
	                            jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : false }, check_callback, 'json');
	                        });
	                    }
	                }, 'json');
	            } else {
	                jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : false }, check_callback, 'json');
	            }
	        } else {
	            jQuery('#auth_error').text(answer.error);
	        }
	    }, 'json');

		/*
		jQuery.post('/?check', { id : object.id, social : 'in' }, function(answer) {
			if (answer.status == 'not_found') {
				setUserInfo(object.id, object.firstName, object.lastName, object.pictureUrl, false);
				showRegistrationDetails(true);
			} else if (answer.status == 'found') {
				jQuery('.auth_form').slideUp();

				var check_callback = function(answer) {
		            if (answer.status == 'not_found') {
		                setUserInfo(object.id, object.firstName, object.lastName, object.pictureUrl, false);
		                showRegistrationDetails(true);
		            } else if (answer.status == 'found') {
		                jQuery('.auth_form').slideUp();
		                authProccess(answer);
		            } else {
		                jQuery('#auth_error').text(answer.error);
		            }
		        };

				if (test_done) {
				    jQuery.post('/?checkUserResultWithSocial', { login : answer.login, password : answer.password }, function(answer) {
		                if (answer.status == 'error') {
		                    jQuery('#login_error').text(answer.error);
		                } else {
		                    hideRegistrationPopup();
		                    jQuery("#modal-rewrite-result").modal('show');

		                    jQuery(".rewrite-result-ok").click(function() {
		                        jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : true }, check_callback, 'json');
		                    });

		                    jQuery(".rewrite-result-cancel").click(function() {
		                        jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : false }, check_callback, 'json');
		                    });
		                }
		            }, 'json');
				} else {
				    jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : false }, check_callback, 'json');
				}
			} else {
			    jQuery('#auth_error').text(answer.error);
			}
		}, 'json');
		*/
	});
}

function facebookCallbackWithoutAuth(response) {
	if (response.status == 'connected') {
		FB.api('/me',function(response) {
			jQuery.post('/?social',{ id : response.id, social : 'fb', link: response.link, picture: 'http://graph.facebook.com/' + response.id + '/picture?type=square&width=62&height=62'},function(answer) {
				if (answer.status == 'success') {
					jQuery("#paei_club__social_remove_fb").css("display", "inline-block");
					jQuery("#paei_club__social_add_fb").hide();
				} else {
				    jQuery('#auth_error').text(answer.error);
				}
			}, 'json');
		});
	} else {
		console.log("facebook api: not auth");
	}
}

function facebookCallback(response) {
    jQuery('#auth_error').empty();
	if (response.status == 'connected') {
		FB.api('/me',function(response) {
			jQuery('#social').val('fb');
			jQuery('#link').val(response.link);
			/*
			jQuery.post('/?check',{ id : response.id, social : 'fb'},function(answer) {
				if (answer.status == 'not_found') {
					setUserInfo(response.id, response.first_name, response.last_name,
								'http://graph.facebook.com/' + response.id + '/picture?type=square&width=62&height=62',
								false);
					showRegistrationDetails(true);
				} else if (answer.status == 'found') {
					jQuery('.auth_form').slideUp();
					authProccess(answer);
				} else {
				    jQuery('#auth_error').text(answer.error);
				}
			}, 'json');
			*/
			jQuery.post('/?check',{ id : response.id, social : 'fb'},function(answer) {
			    if (answer.status == 'not_found') {
                    setUserInfo(response.id,
                                response.first_name,
                                response.last_name,
                                'http://graph.facebook.com/' + response.id + '/picture?type=square&width=62&height=62',
                                false);
                    showRegistrationDetails(true);
	            } else if (answer.status == 'found') {

	                hideRegistrationPopup();

	                var check_callback = function(answer) {
	                    jQuery("#modal-rewrite-result").modal('hide');
	                    if (answer.status == 'error') {
	                        alert(answer.error);
	                    } else {
	                        jQuery('#login').val('');
	                        jQuery('#password').val('');
	                        authProccess(answer);
	                    }
	                };

	                if (test_done) {

	                    jQuery.post('/?checkUserResultWithSocial', { login : answer.login, password : answer.password }, function(answer_check) {
	                        if (answer_check.status == 'error') {
	                            jQuery('#login_error').text(answer_check.error);
	                        } else {
	                            hideRegistrationPopup();
	                            jQuery("#modal-rewrite-result").modal('show');

	                            jQuery(".rewrite-result-ok").click(function() {
	                                jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : true }, check_callback, 'json');
	                            });

	                            jQuery(".rewrite-result-cancel").click(function() {
	                                jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : false }, check_callback, 'json');
	                            });
	                        }
	                    }, 'json');
	                } else {
	                    jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : false }, check_callback, 'json');
	                }
	            } else {
	                jQuery('#auth_error').text(answer.error);
	            }
	        }, 'json');
		});
	} else {
		console.log("facebook api: not auth");
	}
}

function vkontakteCallbackWithoutAuth(response) {
	if (response.session) {
		VK.Api.call('users.get',{ uids : response.session.mid, fields : 'photo_100' }, function(r) {
			if (r.response) {
				jQuery.post('/?social', { id : response.session.mid, social : 'vk', link: 'http://vk.com/id' + r.response[0].uid, picture: r.response[0].photo_100 }, function(answer) {
					if (answer.status == 'success') {
						jQuery("#paei_club__social_remove_vk").css("display", "inline-block");
						jQuery("#paei_club__social_add_vk").hide();
					} else {
					    jQuery('#auth_error').text(answer.error);
					}
				}, 'json');
			}
		});
	} else {
		console.log("vk api: not auth");
	}
}

$(document).mouseup(function (e) {
    var container = $('#modal-paei_club__registration .paei_club__registration');
    if ($('#modal-paei_club__registration').css('display') === 'block') {
        if (container.has(e.target).length === 0 &&
	        container[0] !== e.target &&
	        e.target) {
	        // $('#modal-paei_club__registration').hide();
	        $('#gkBottom6').hide();
	        jQuery('#modal-paei_club__registration').modal('hide');
	    }
    }
});

function vkontakteCallback(response) {
    jQuery('#auth_error').empty();
	if (response.session) {
		// VK.Api.call('users.get',{ uids : response.session.mid, fields : 'photo_100, city' }, function(r) {
		VK.Api.call('users.get',{ uids : response.session.mid, fields : 'photo_100, city', v: '5.73' }, function(r) {
			if (r.response) {
				jQuery('#social').val('vk');
				jQuery('#link').val('http://vk.com/id' + r.response[0].uid);

				if (r.response[0].city > 0) {
					VK.Api.call('places.getCityById', { cids : r.response[0].city }, function(c_r) {
					    /*
						jQuery.post('/?check', { id : response.session.mid, social : 'vk' }, function(answer) {
							if (answer.status == 'not_found') {
								setUserInfo(response.session.mid,
											r.response[0].first_name,
											r.response[0].last_name,
											r.response[0].photo_100,
											c_r.response[0].name);
								showRegistrationDetails(true);
							} else if (answer.status == 'found') {
								jQuery('.auth_form').slideUp();
								authProccess(answer);
							} else {
							    jQuery('#auth_error').text(answer.error);
							}
						}, 'json');
						*/

						jQuery.post('/?check', { id : response.session.mid, social : 'vk' }, function(answer) {
						    if (answer.status == 'not_found') {
                                setUserInfo(response.session.mid,
                                            r.response[0].first_name,
                                            r.response[0].last_name,
                                            r.response[0].photo_100,
                                            c_r.response[0].name);
                                showRegistrationDetails(true);
			                } else if (answer.status == 'found') {

			                    hideRegistrationPopup();

			                    var check_callback = function(answer) {
			                        jQuery("#modal-rewrite-result").modal('hide');
			                        if (answer.status == 'error') {
			                            alert(answer.error);
			                        } else {
			                            jQuery('#login').val('');
			                            jQuery('#password').val('');
			                            authProccess(answer);
			                        }
			                    };

			                    if (test_done) {

			                        jQuery.post('/?checkUserResultWithSocial', { login : answer.login, password : answer.password }, function(answer_check) {
			                            if (answer_check.status == 'error') {
			                                jQuery('#login_error').text(answer_check.error);
			                            } else {
			                                hideRegistrationPopup();
			                                jQuery("#modal-rewrite-result").modal('show');

			                                jQuery(".rewrite-result-ok").click(function() {
			                                    jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : true }, check_callback, 'json');
			                                });

			                                jQuery(".rewrite-result-cancel").click(function() {
			                                    jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : false }, check_callback, 'json');
			                                });
			                            }
			                        }, 'json');
			                    } else {
			                        jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : false }, check_callback, 'json');
			                    }
			                } else {
			                    jQuery('#auth_error').text(answer.error);
			                }
			            }, 'json');
					});
				} else {
					/*jQuery.post('/?check', { id : response.session.mid, social : 'vk' }, function(answer) {
						if (answer.status == 'not_found') {
							setUserInfo(response.session.mid,
										r.response[0].first_name,
										r.response[0].last_name,
										r.response[0].photo_100,
										false);
							showRegistrationDetails(true);
						} else if (answer.status == 'found') {
							jQuery('.auth_form').slideUp();
							authProccess(answer);
						} else {
						    jQuery('#auth_error').text(answer.error);
						}
					}, 'json');*/

					jQuery.post('/?check', { id : response.session.mid, social : 'vk' }, function(answer) {
					    if (answer.status == 'not_found') {
                            setUserInfo(response.session.mid,
                                        r.response[0].first_name,
                                        r.response[0].last_name,
                                        r.response[0].photo_100,
                                        false);
                            showRegistrationDetails(true);
                        } else if (answer.status == 'found') {

                            hideRegistrationPopup();

                            var check_callback = function(answer) {
                                jQuery("#modal-rewrite-result").modal('hide');
                                if (answer.status == 'error') {
                                    alert(answer.error);
                                } else {
                                    jQuery('#login').val('');
                                    jQuery('#password').val('');
                                    authProccess(answer);
                                }
                            };

                            if (test_done) {

                                jQuery.post('/?checkUserResultWithSocial', { login : answer.login, password : answer.password }, function(answer_check) {
                                    if (answer_check.status == 'error') {
                                        jQuery('#login_error').text(answer_check.error);
                                    } else {
                                        hideRegistrationPopup();
                                        jQuery("#modal-rewrite-result").modal('show');

                                        jQuery(".rewrite-result-ok").click(function() {
                                            jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : true }, check_callback, 'json');
                                        });

                                        jQuery(".rewrite-result-cancel").click(function() {
                                            jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : false }, check_callback, 'json');
                                        });
                                    }
                                }, 'json');
                            } else {
                                jQuery.post('/?loginWithSocial', { login : answer.login, password : answer.password, rewrite : false }, check_callback, 'json');
                            }
                        } else {
                            jQuery('#auth_error').text(answer.error);
                        }
                    }, 'json');
				}
			}
		});
	} else {
		console.log("vk api: not auth");
	}
}

function authProccess(answer) {
	setUserData(answer.data);
	if (answer.result != null && answer.data.token != '') {
		loaded_result = answer.result;
		test_obj.loaded_result = answer.result;
		test_obj.show_loaded_result();
		addthisurl = URL + answer.data.token;
		addthis.update('share', 'url', addthisurl);
		addthis.url = addthisurl;
		addthis.toolbox(".addthis_toolbox");
		jQuery(".result_link_field").val(addthisurl);
	}

	authed = true;

	jQuery("#paei_club__best").change();

	if (answer.data.test_done) {
		test_done = true;
		jQuery('#gkBottom5').show();
		jQuery('#gkBottom6').show();
		var container = $('.paei_club__registration');
		jQuery(window).scroll(function() {
			var scrollTop = jQuery(this).scrollTop(), clubOffsetTop = jQuery(
					'#club').offset().top;
			if (scrollTop > (clubOffsetTop - 100)) {
				jQuery('#gkBottom5').addClass('fixed');
			} else {
				jQuery('#gkBottom5').removeClass('fixed');
			}
		});
	}

	if (!authed || !test_done) {
		jQuery("#start_test_content").hide();
		jQuery(".test_wrapper").show();
		jQuery(".test_navigation").show();
	} else {
		jQuery("#start_test_content").show();
		jQuery(".test_wrapper").hide();
		jQuery(".test_navigation").hide();
	}

	if (authed) {
		jQuery.get('/?getSocial', {}, function(answer) {
			if (answer.status == 'success') {
				if (answer.data.vk) {
					jQuery("#paei_club__social_add_vk").hide();
					jQuery("#paei_club__social_remove_vk").css("display", "inline-block");
				}
				if (answer.data.facebook) {
					jQuery("#paei_club__social_add_fb").hide();
					jQuery("#paei_club__social_remove_fb").css("display", "inline-block");
				}
				if (answer.data.linkedin) {
					jQuery("#paei_club__social_add_in").hide();
					jQuery("#paei_club__social_remove_in").css("display", "inline-block");
				}
			} else {
				console.log('Ошибка: ' + answer.error);
			}
		}, 'json');
		jQuery(".modal-close").css("display", "inline-block");
		if (authedAgain)
		    jQuery(window).scrollTop(jQuery('#result').offset().top);
		else
		    jQuery(window).scrollTop(jQuery('#club').offset().top);
	}
}

function setUserData(data) {
    jQuery('#auth_error').empty();
	jQuery('.show_login').addClass('loggedin').removeClass('show_login');
	jQuery("#paei_club__social_feature_detail_text").hide();
	jQuery(".paei_club__social_feature_detail").show();
	jQuery('.paei_club__registration__head').text('Мои данные');

	/*
	 * Заполним данные в форме
	 */
	jQuery('#_name').val(data.name);
	jQuery('#_city').val(data.city);
	jQuery('#_email').val(data.email);
	jQuery('#_description').val(data.description);

	if (data.partnership) {
		jQuery('#_partnership').attr('checked', 'checked').prop('checked', true).trigger('refresh');
	} else {
		jQuery('#_partnership').removeAttr('checked', 'checked').prop('checked', false).trigger('refresh');
	}

	if (data.person == 'job') {
		jQuery('#_job').prop('checked', true).trigger('refresh');
		jQuery('#_employee').prop('checked', false).trigger('refresh');
	} else {
		jQuery('#_employee').prop('checked', true).trigger('refresh');
		jQuery('#_job').prop('checked', false).trigger('refresh');
	}

	if (data.test_done) {
		jQuery('#paei_club__best').removeAttr('disabled').trigger('refresh');
		jQuery("#paei_club__best").prop('checked', true).trigger('refresh');
	} else {
		jQuery('#paei_club__best').attr('disabled', 'disabled').trigger(
				'refresh');
	}

	jQuery('.paei_club__auth_form').slideUp();
	jQuery('.paei_club__user_data_form').slideDown();

	jQuery('#_name').change(function() {
	    userDataChanged = true;
    });

	jQuery('#_city').change(function() {
        userDataChanged = true;
    });

	jQuery('#_email').change(function() {
        userDataChanged = true;
    });

	jQuery('#_description').change(function() {
        userDataChanged = true;
    });

	jQuery('#_partnership').change(function() {
        userDataChanged = true;
    });

	jQuery('#_job').change(function() {
        userDataChanged = true;
    });

	jQuery('#_employee').change(function() {
        userDataChanged = true;
    });

	hideRegistrationPopup();
}

function setUserInfo(social_id, first_name, last_name, photo, city) {
	jQuery('#social_id').val(social_id);
	jQuery('#name').val(last_name + ' ' + first_name).prop('readonly', true);

	if (city !== false) {
		jQuery('#city').val(city).prop('readonly', true);
	}

	if (photo != null && photo.length > 0) {
		jQuery('#photo').val(photo);
	}
}

function filterResults() {
	var filters = {};

	filters.partnership = jQuery('#filter_partnership').is(':checked');

	var person = [];

	if (jQuery('#filter_person_job').is(':checked'))
		person.push('job');

	if (jQuery('#filter_person_employee').is(':checked'))
		person.push('employee');

	if (person.length > 0)
		filters.person = person;

	for ( var i = 0; i < 4; i++) {

		switch (i) {
		case 0:
			var c = 'p';
			break;

		case 1:
			var c = 'a';
			break;

		case 2:
			var c = 'e';
			break;

		case 3:
			var c = 'i';
			break;
		}

		var slider = jQuery("#club_filter__slider_" + (i + 1)), value = parseInt(slider
				.val());

		filters[c] = value;
		filters.key = null;
	}

	jQuery.getJSON('/?results', {
		filters : filters
	}, function(answer) {
		if (answer != null) {
			jQuery('.people_list.nano-content').html(answer.results);
			jQuery('.nano').nanoScroller();
		}
	});
}

function adjustModalMaxHeightAndPosition() {
	jQuery('.modal').each(function() {
		if (jQuery(this).hasClass('in') === false) {
			jQuery(this).show();
		}

		var contentHeight = jQuery(window).height() - 60;
		var headerHeight = jQuery(this).find('.modal-header')
				.outerHeight() || 2;
		var footerHeight = jQuery(this).find('.modal-footer')
				.outerHeight() || 2;
		jQuery(this).find('.modal-content').css({
			'max-height' : function() {
				return contentHeight;
			}
		});

		jQuery(this).find('.modal-body').css({
			'max-height' : function() {
				return contentHeight - (headerHeight + footerHeight);
			}
		});

		jQuery(this).find('.modal-dialog').addClass(
				'modal-dialog-center').css({
			'margin-top' : function() {
				return -(jQuery(this).outerHeight() / 2);
			},
			'margin-left' : function() {
				return -(jQuery(this).outerWidth() / 2);
			}
		});
		if (jQuery(this).hasClass('in') === false) {
			jQuery(this).hide();
		}
	});
}

var test_obj;

jQuery(document).ready(function(jQuery){
	test_obj = new test();

	if (authed) {
		setCookie('closeBanner', 'true');
	}

	if (getCookie('finishTest')) {
		$('.copylink-helper').show();
	}

	if (jQuery(window).height() >= 320) {
	    jQuery(window).resize(adjustModalMaxHeightAndPosition).trigger("resize");
	}

	var $document = jQuery(document), sliders = [ 0, 0, 0, 0 ];

	for ( var i = 0; i < 4; i++) {
		var slider = jQuery("#club_filter__slider_" + (i + 1)).noUiSlider({
			start : sliders[i],
			range : {
				'min' : 0,
				'max' : 100
			},
			step : 1,
			serialization : {
				lower : [ jQuery.Link({
					target : jQuery("#club_filter__value_" + (i + 1))
						}) ],
						format : {
							postfix : '%',
							decimals : 0
						}
			}
		});

		slider.on('change', function() {
			if (authed) {
				jQuery("#paei_club__best").prop('checked', false).trigger('refresh');
			}
			filterResults();
		});
	}

	/*
	 * Авторизация через email
	 */
	jQuery('.email_auth').click(function() {
	    jQuery('#auth_error').empty();
	    jQuery('#login_error').empty();
		jQuery('.paei_club__registration__head').text('Авторизация');
		jQuery('.paei_club__registration__intro').slideUp();
		jQuery('.paei_club__auth').slideUp();
		jQuery('.paei_club__auth_form').slideDown();
		return false;
	});

	jQuery('.paei_club__login').click(authEmail);

	$document.on('mouseover', '.people_item__name_inner', function() {
		jQuery(this).closest('.people_item').find('.people_item__comment').fadeIn();
	}).on('mousemove', function(e) {
		var comment = jQuery('.people_item__comment:visible');
		if (comment.length) {
			var userNameWrapper = comment.eq(0).closest('.people_item').find('.people_item__name');
			var userName = userNameWrapper.find('.people_item__name_inner');
			var X1 = userNameWrapper.offset().left - 35;
			var Y1 = userNameWrapper.offset().top;
			var X2 = X1 + userName.outerWidth() + 35;
			var Y2 = Y1 + userNameWrapper.outerHeight();
			var X3 = X1 + comment.outerWidth();
			var Y3 = Y2 + comment.outerHeight();
			var scrollTop = jQuery(window).scrollTop();
			var	yPos = e.clientY + scrollTop;

			if (e.clientX < X1 || e.clientX > X3) {
				comment.eq(0).fadeOut();
				return;
			} else if (yPos < Y2 && e.clientX > X2) {
				comment.eq(0).fadeOut();
				return;
			}

			if (yPos < Y1 || yPos > Y3) {
				comment.eq(0).fadeOut();
				return;
			}
		}
	}).on('click', '.paei_club__show_instruction', function() {
		jQuery('.paedi_club__instruction').fadeIn();
	}).on('click', '.club_filter__application', function() {
		showRegistrationPopup();
		jQuery("#paei_club__social_feature_detail_text").hide();
		jQuery(".paei_club__social_feature_detail").show();
		changeFirstDiv();
		jQuery(window).trigger("resize");

	}).on('click', '.modal-close', function(e) {
		e.preventDefault();
		hideRegistrationPopup();
		jQuery("#modal-rewrite-result").modal('hide');
		changeFirstDiv();
		jQuery(window).trigger("resize");
		$('#gkBottom6').hide();
		jQuery('#modal-paei_club__registration').modal('hide');

	}).on('click', '.subscribe_form__field__submit', function(e) {
		e.preventDefault();
		var mail = jQuery('#subscribe_mail');
		var enableSubscribe = $('#subscribe_user').is(':checked');
		var form = jQuery(".subscribe_form");

		if (isSendMail)
		    return;

		isSendMail = true;

		if (validateEmail(mail.val())) {
			var data = {
				mail : mail.val(),
				subscribe: enableSubscribe ? 1 : 0
			};

			jQuery.post("/?mail", data, function(answer) {
				if (answer != null) {
					if (answer.status == "error") {
					    form.find("p").remove();
                        form.parent().append('<p id="isSendMail">Ошибка при запросе подписки: ' + answer.error + '</p>');
                        form.find("p").fadeOut(5000);
                        isSendMail = false;
					} else if (answer.status == 'success') {
					    isSendMail = true;
					    form.find("p").remove();
			            form.parent().append('<p id="isSendMail">Спасибо. Скоро отправим.</p>');
			            form.find("p").fadeOut(5000);
			            form.hide();
					}
				}
			}, 'json');
			mail.val("");
		} else {
			form.find("p").remove();
			form.append("<p>Адрес почты не соответствует формату.</p>");
			form.find("p").fadeOut(5000);
			isSendMail = false;
		}
    }).on('click', '.gkBottom5-show', function(e) {
        var self = jQuery(this);
        if (jQuery('#build').css('display') === 'none') {
            jQuery('#build').slideDown();
            self.html('скрыть <i id="gkBottom5-show-icon" class="fa fa-chevron-down"></i>');
        } else {
            jQuery('#build').slideUp();
            self.html('показать <i id="gkBottom5-show-icon" class="fa fa-chevron-up"></i>');
        }

    }).on('focus', '.copylink_name_field', function(e) {
        jQuery('.copylink_name_tip').show();
    }).on('blur', '.copylink_name_field', function(e) {
        jQuery('.copylink_name_tip').hide();
    }).on('keydown', '.copylink_name_field', function(e) {
        if (jQuery(this).val() === '') {
            jQuery('.copylink_name_tip').show();
        } else {
            jQuery('.copylink_name_tip').hide();
        }
	}).on('click', function(e) {
		var target = e.target;

		if (jQuery(target).hasClass('close')) {
			jQuery('.paedi_club__instruction').fadeOut();
		}

		if (!jQuery(target).hasClass('paei_club__show_instruction') && !jQuery(target).closest('.paedi_club__instruction').length) {
			jQuery('.paedi_club__instruction').fadeOut();
		}
	});

	/* url для addthis */
	if (addthisurl != null) {
		jQuery("#addthis_toolbox").attr('addthis:url', addthisurl);
	}

	if (authed) {
		jQuery('#gkBottom5').show();
		jQuery(window).scroll(function() {
			var scrollTop = jQuery(this)
			.scrollTop(), clubOffsetTop = jQuery(
			'#club').offset().top;
			if (scrollTop > (clubOffsetTop - 100)) {
				jQuery('#gkBottom5').addClass(
				'fixed');
			} else {
				jQuery('#gkBottom5')
				.removeClass('fixed');
			}
		});

		jQuery.get('/?getSocial', {}, function(answer) {
			if (answer.status == 'success') {
				if (answer.data.vk) {
					jQuery("#paei_club__social_add_vk").hide();
					jQuery("#paei_club__social_remove_vk").css("display", "inline-block");
				}
				if (answer.data.facebook) {
					jQuery("#paei_club__social_add_fb").hide();
					jQuery("#paei_club__social_remove_fb").css("display", "inline-block");
				}
				if (answer.data.linkedin) {
					jQuery("#paei_club__social_add_in").hide();
					jQuery("#paei_club__social_remove_in").css("display", "inline-block");
				}
			} else {
				console.log('Ошибка: ' + answer.error);
			}
		}, 'json');
	} else {
		jQuery('#gkBottom5').hide();
	}

	if (authed || test_done) {
		jQuery('#paei_club__best').removeAttr('disabled').trigger('refresh');
		jQuery("#paei_club__best").prop('checked', true).trigger('refresh');
		jQuery("#paei_club__best").change();
	}

	if (!test_done) {
		jQuery("#gkBottom5").hide();
		jQuery("#gkBottom6").hide();
		jQuery(".paei_club__auth__email").hide();
	}

	if (test_done && authed) {
		jQuery('.test_navigation__next').html("Узнать результат<span class=\"arrow\">c</span>");
	}

	if (!authed || !test_done) {
		jQuery("#start_test_content").hide();
		jQuery(".test_wrapper").show();
		jQuery(".test_navigation").show();
	} else {
		jQuery("#start_test_content").show();
		jQuery(".test_wrapper").hide();
		jQuery(".test_navigation").hide();
	}

	jQuery(".paei_club__social_feature_detail").click(function(e) {
		e.preventDefault();
		jQuery("#paei_club__social_feature_detail_text").fadeIn(1000);
	});

	jQuery("#paei_club__social_add_in").click(function(e) {
		e.preventDefault();
		featureLinkedin();
	});

	jQuery("#paei_club__social_add_fb").click(function(e) {
		e.preventDefault();
		featureFacebook();
	});

	jQuery("#paei_club__social_add_vk").click(function(e) {
		e.preventDefault();
		featureVkontakte();
	});

	jQuery("#paei_club__social_remove_in").click(function(e) {
		e.preventDefault();
		jQuery.post('/?social', { id : "", social : 'in', link: "", picture: "" }, function(answer) {
			if (answer.status == 'success') {
				jQuery("#paei_club__social_add_in").css("display", "inline-block");
				jQuery("#paei_club__social_remove_in").hide();
			} else {
				alert('Ошибка: ' + answer.error);
			}
		}, 'json');
	});

	jQuery("#paei_club__social_remove_fb").click(function(e) {
		e.preventDefault();
		jQuery.post('/?social', { id : "", social : 'fb', link: "", picture: "" }, function(answer) {
			if (answer.status == 'success') {
				jQuery("#paei_club__social_add_fb").css("display", "inline-block");
				jQuery("#paei_club__social_remove_fb").hide();
			} else {
				alert('Ошибка: ' + answer.error);
			}
		}, 'json');
	});

	jQuery("#paei_club__social_remove_vk").click(function(e) {
		e.preventDefault();
		jQuery.post('/?social', { id : "", social : 'vk', link: "", picture: "" }, function(answer) {
			if (answer.status == 'success') {
				jQuery("#paei_club__social_add_vk").css("display", "inline-block");
				jQuery("#paei_club__social_remove_vk").hide();
			} else {
				alert('Ошибка: ' + answer.error);
			}
		}, 'json');
	});

	jQuery(function() {
	    jQuery('.jcarousel').jcarousel();

	    jQuery('.jcarousel').jcarouselSwipe();

	    jQuery('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                jQuery(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                jQuery(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

	    jQuery('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                jQuery(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                jQuery(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
    });

	changeFirstDiv();

	let url = window.location.href;
	let match = url.indexOf('?');
	if (match >= 0) {
		jQuery('#copylink_name_wrapper').slideDown(500);
	}
});

// Alert a message when the user shares somewhere
function shareEventHandler(evt) {
    if (evt.type == 'addthis.menu.share') {
        dataLayer.push({'event': 'action','value': 'social-share'});
    }
}

// Listen for the share event
addthis.addEventListener('addthis.menu.share', shareEventHandler);


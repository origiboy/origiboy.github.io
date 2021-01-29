/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
function isObject(val) {
    if (val === null) { return false;}
    return ( (typeof val === 'function') || (typeof val === 'object') );
}

jQuery(window).load(function(){

	jQuery(function() {
		jQuery(".nano").nanoScroller({ alwaysVisible: true });
	});
	
	// add the loaded class to <body> with small delay to avoid low framerate	
	setTimeout(function() {
		jQuery('body').addClass('loaded');
	}, 500);
	// smooth anchor scrolling 
	jQuery('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var _this = $(this);
		var target = this.hash;
		if (target != "") {
			target = jQuery(target);
			if(isObject(target) && target.parent() !== jQuery('#gkStyleArea') && target.offset() !== undefined) {
				// Проверим не нажалили мы на "Подобрать команду"
				if (target.selector == '#club') {
					jQuery('html, body').stop().animate({'scrollTop': target.offset().top}, 1000, 'swing', function () {
						window.location.hash = target.selector;
						if (_this.hasClass('show_login')) {
							$('#modal-paei_club__registration').modal('show');
						}
					});
	      			} else {
	        			jQuery('html, body').stop().animate({'scrollTop': target.offset().top}, 1000, 'swing', function () {
						window.location.hash = target.selector;
	        			});
	      			}
			} 
		}
	});

	// style area
	if(jQuery('#gkStyleArea').length > 0){
		jQuery('#gkStyleArea').find('a').each(function(i, element){
			jQuery(element).click(function(e){
				e.preventDefault();
				e.stopPropagation();
				changeStyle(i+1);
			});
		});
	}
	// system message container auto hide
	if(jQuery('#system-message-container').length > 0){
		jQuery('#system-message-container').each(function(i, element){
			(function() {
				jQuery(element).fadeOut('slow');
			}).delay(6000);
		});
	} 
	
	setTimeout(function() {
		var elementsToAnimate = jQuery('.gkAnimate');
		
		if(elementsToAnimate) {
			elementsToAnimate.each(function(i, el) {
				gkAddClass(el, 'active', i, 300);
			});
		}
	}, 350);
	
	
	// font-size switcher
	if(jQuery('#gkTools').length > 0 && jQuery('#gkMainbody').length > 0) {
		var current_fs = 100;
		
		jQuery('#gkMainbody').css('font-size', current_fs+"%");
		
		jQuery('#gkToolsInc').click(function(e){ 
			e.stopPropagation();
			e.preventDefault(); 
			if(current_fs < 150) {  
				jQuery('#gkMainbody').animate({ 'font-size': (current_fs + 10) + "%"}, 200); 
				current_fs += 10; 
			} 
		});
		jQuery('#gkToolsReset').click(function(e){ 
			e.stopPropagation();
			e.preventDefault(); 
			jQuery('#gkMainbody').animate({ 'font-size' : "100%"}, 200); 
			current_fs = 100; 
		});
		jQuery('#gkToolsDec').click(function(e){ 
			e.stopPropagation();
			e.preventDefault(); 
			if(current_fs > 70) { 
				jQuery('#gkMainbody').animate({ 'font-size': (current_fs - 10) + "%"}, 200); 
				current_fs -= 10; 
			} 
		});
	}
	// K2 font-size switcher fix
	if(jQuery('#fontIncrease').length > 0 && jQuery('.itemIntroText').length > 0) {
		jQuery('#fontIncrease').click(function() {
			jQuery('.itemIntroText').attr('class', 'itemIntroText largerFontSize');
		});
		
		jQuery('#fontDecrease').click( function() {
			jQuery('.itemIntroText').attr('class', 'itemIntroText smallerFontSize');
		});
	}
	if(jQuery('#gkTop').length > 0 && !jQuery('#gkTop').hasClass('active')) {
		jQuery(window).scroll(function() {
			var currentPosition = jQuery(window).scrollTop();
            if (jQuery("#gkHeader").is(":visible")) {
                if(currentPosition >= jQuery('#gkHeader').height() && !jQuery('#gkTop').hasClass('active')) {
				jQuery('#gkTop').addClass('active');
                } else if(currentPosition < jQuery('#gkHeader').height() && jQuery('#gkTop').hasClass('active')) {
                    jQuery('#gkTop').removeClass('active');
                }
            } else if (jQuery("#gkBottom3").is(":visible")) {
                if(currentPosition >= 150 && !jQuery('#gkTop').hasClass('active')) {
				jQuery('#gkTop').addClass('active');
                } else if(currentPosition < 150 && jQuery('#gkTop').hasClass('active')) {
                    jQuery('#gkTop').removeClass('active');
                }
            }
			
		});
	}
	// maps
	jQuery('.gkMap').each(function(i, map) {
		map = jQuery(map);
		map.closest('.box').css('overflow', 'hidden');
		
		var img = new jQuery('<img src="'+map.attr('data-src')+'" class="gkMap beforeload" />');
		map.after(img);
		
		var timer = setInterval(function() {
			if(img[0].complete) {
				clearInterval(timer);
				map.addClass('beforeload');
				setTimeout(function() {
					map.remove();
					img.addClass('active');
				}, 350);
			}
		}, 500);
	});
	// overlays fix
	var overlays11 = jQuery('.overlay-1x1');
	var overlays12 = jQuery('.overlay-1x2');
	var overlays21 = jQuery('.overlay-2x1');
	var overlays22 = jQuery('.overlay-2x2');
	
	jQuery([overlays11, overlays12, overlays21, overlays22]).each(function(i, collection) {
		jQuery(collection).each(function(j, block) {
			block = jQuery(block);
			var classToUse = 'overlay-';
			classToUse += (i === 0) ? '1x1' : ((i == 1) ? '1x2' : ((i == 2) ? '2x1' : '2x2'));
			block.attr('data-oldclass', classToUse);
			
			if(!block.hasClass('box')) {
				block.mouseenter(function() {
					block.removeClass(block.attr('data-oldclass'));
				});
				
				block.mouseleave(function() {
					block.addClass(block.attr('data-oldclass'));
				});
			} else {
				block.find('.content').mouseenter(function() {
					block.removeClass(block.attr('data-oldclass'));
				});
				
				block.find('.content').mouseleave(function() {
					block.addClass(block.attr('data-oldclass'));
				});
			}
		});
	});
	// title-right lines separation
	jQuery('.title-right > .header').each(function(i, title) {
		title = jQuery(title);
		if(title.parent().hasClass('big-title')) {
			var tmpTitle = title.html().split('<br>');
			tmpTitle = jQuery.map(tmpTitle, function(str) {
				return '<span>' + str + '</span>';
			});
			title.html(tmpTitle.join(''));

			title.parent().find('.content').mouseenter(function() {
				title.addClass('title-hover');
			});
			
			title.parent().find('.content').mouseleave(function() {
				title.removeClass('title-hover');
			});
		}
	});
});

jQuery(document).ready(function() {
	if (!Modernizr.svg) {
		jQuery("img").each(function(i, item) {
			item = jQuery(item);
			if(item.attr('data-fallback')) {
				item.attr("src", item.attr("data-fallback"));
			}
		});
	}

	gkReplaceImages();
	
	// header loading
	jQuery('.gkHeaderBg').each(function(i, img) {
		img = jQuery(img);
		var timer = setInterval(function() {
			if(img[0].complete) {
				clearInterval(timer);
				var bg = new jQuery('<div class="gkHeaderBg" style="background-image: url(\''+img.attr('src')+'\');"></div>');
				
				img.before(bg);
				img.remove();
				
				setTimeout(function() {
					bg.addClass('active');
				}, 150);
			}
		}, 500);
	});
	// team overlays
	/*if(jQuery('.gkTeam').length > 0) {
		var figures = jQuery('.gkTeam figure');

		figures.each(function(i, figure) {
			figure = jQuery(figure);
			if(
				figure.attr('data-fb') !== null || 
				figure.attr('data-twitter') !== null || 
				figure.attr('data-gplus') !== null
			) {
				var overlay = new jQuery('<div class="gkTeamOverlay"></div>');

				var htmloutput = '';
				var classcounter = 0;

				if(figure.attr('data-fb') !== null) {
					htmloutput += '<a href="'+figure.attr('data-fb')+'" data-type="fb">Facebook</a>';
					classcounter++;
				}

				if(figure.attr('data-twitter') !== null) {
					htmloutput += '<a href="'+figure.attr('data-twitter')+'" data-type="twitter">Twitter</a>';
					classcounter++;
				}

				if(figure.attr('data-gplus') !== null) {
					htmloutput += '<a href="'+figure.attr('data-gplus')+'" data-type="gplus">Google+</a>';
					classcounter++;
				}

				overlay.html(htmloutput);
				overlay.addClass('gkIcons' + classcounter);

				figure.find('img').after(overlay);

				figure.bind({
					'touchend': function() {
						if(!figure.hasClass('hover')) {
							figure.trigger('mouseenter');
						} else {
							figure.trigger('mouseleave');
						}
					},
					'mouseenter': function() { 
						figure.addClass('hover'); 
						var linksAmount = figure.find('.gkTeamOverlay a').length;
						for(i = 0; i < linksAmount; i++) {
							gkAddClass(figure.find('.gkTeamOverlay').find('a').eq(i), 'active', i);	
						}
					},
					'mouseleave': function() { 
						figure.removeClass('hover'); 
						figure.find('.gkTeamOverlay a').removeClass('active');
					}
				});
			}
		});
	}*/


	// team pagination
	/*jQuery('.gkTeam').each(function(i, item) {
		item = jQuery(item);
		if(parseInt(item.attr('data-pages'), 10) > 1) {
			item.parent().css('position', 'relative');
			var current_page = 0;
			var amount_of_pages = item.attr('data-pages');
			var prevLink = new jQuery('<a class="gkTeamPrev" href="#"><i class="gk-icon-arrow-left"></i></a>');
			var nextLink = new jQuery('<a class="gkTeamNext" href="#"><i class="gk-icon-arrow-right"></i></a>');
			var wrap = item.find('div');
			
			var pages = wrap.children('div');

			jQuery(pages[0]).addClass('active');
			
			item.after(prevLink);
			item.after(nextLink);
			
			pages.each(function(i, item) {
			    if (i) {
			        jQuery(this).css('margin-left', '-1000px');
			        jQuery(this).css('opacity', 0);
			    }
            });
			
			prevLink.click(function(e) {
				e.preventDefault();
				current_page = (current_page > 0) ? current_page - 1 : amount_of_pages - 1;
				
				pages.removeClass('active');
                pages.animate({marginLeft: '-=1000px', opacity:0}, 1200);
                
                jQuery(pages[current_page]).addClass('active');
                jQuery(pages[current_page]).animate({marginLeft: '0px', opacity:1}, 1600);
                
				/*
				pages.css('margin-left', (current_page * -200) + "%");
				pages.removeClass('active');
				jQuery(pages[current_page]).css('margin-left', "0");
				jQuery(pages[current_page]).addClass('active');
				
			});
			
			nextLink.click(function(e) {
				e.preventDefault();
				current_page = (current_page < amount_of_pages - 1) ? current_page + 1 : 0;
				
				pages.removeClass('active');
				pages.animate({marginLeft: '-=1000px', opacity:0}, 1200);
				
				
				jQuery(pages[current_page]).addClass('active');
				jQuery(pages[current_page]).animate({marginLeft: '0px', opacity:1}, 1600);
                
                
				
				pages.css('margin-left', (current_page * -200) + "%");
				pages.removeClass('active');
				jQuery(pages[current_page]).css('margin-left', "0");
				jQuery(pages[current_page]).addClass('active');
				
			});
		}
	});*/
	
	if(jQuery('#gkMainMenu').length > 0) {
		// menu activation on scroll
		var menu_activators = {
			"links": [],
			"elements": [],
			"ranges": []
		};
		
		jQuery('#gkMainMenu').find('a[href^="#"]').filter(function(i, link) {
			link = jQuery(link);
			var url = link.attr('href');
			var id = link.attr('href').substr(1);
			// check the URL and existing of the section
			if(url != '#' && jQuery('#'+id)) {
				menu_activators.links.push(id);
				menu_activators.elements.push(link);
			}
		});
		
	
		if(menu_activators.links.length > 1) {
			function updateRanges() {
				jQuery(menu_activators.links).each(function(i, id) {;
					menu_activators.ranges[i] = jQuery('#'+id).offset().top;
				});
			}
			
			updateRanges();
			
			setTimeout(function() { updateRanges(); }, 2000);
			setTimeout(function() { updateRanges(); }, 5000);
			setTimeout(function() { updateRanges(); }, 10000);
			setTimeout(function() { updateRanges(); }, 15000);
			
			jQuery(window).resize(function() {
				updateRanges();
			});
			
			var previous_range = 0;
			
			jQuery(window).scroll(function() {
				var top = jQuery(window).scrollTop();
				
				var current_ranges = menu_activators.ranges.filter(function(range) {
					return range <= top;
				});
				
				if(current_ranges) {
					var current_range = current_ranges[current_ranges.length - 1];
					
					
					if(current_range != previous_range) {
						previous_range = current_range;
						var current_active = jQuery('#gkMainMenu').find('.active');
						
						if(current_active) {
							current_active.removeClass('active');
							current_active.parent().removeClass('active');
						}
						
						jQuery(menu_activators.elements).each(function(i, menu_item) {
							menu_item = jQuery(menu_item);
							menu_item.removeClass('active');
							menu_item.parent().removeClass('active');
						});
						var new_active = jQuery(menu_activators.elements[menu_activators.ranges.indexOf(previous_range)]);
						if(new_active) {
							new_active.addClass('active');
							new_active.parent().addClass('active');
						}
					}
				}
			});
		}
	}
});


function gkAddClass(element, cssclass, i, delay) {
	element = jQuery(element);
	if(!delay) {
			delay = 150;
	}

	if(!delay) {
		delay = (i !== false) ? i * 150 : 0;
	}

	setTimeout(function() {
		element.addClass(cssclass);
	}, delay*i);
}

// function to replace images depending from styles
function gkReplaceImages() {
	// replacing images
	jQuery('img[data-styles="true"]').each(function(i, img) {
		img = jQuery(img);
		var style = 1;
		for(var i = 1; i <= 4; i++) {
			if(jQuery('body').hasClass('style'+i)) {
				style = i;
			}
		}
		img.attr('src', img.attr('src').replace(/\/style[1-4]{1,1}\//, '/style' + style + '/'));
	});
}


// Function to change styles
function changeStyle(style){
	(function (factory) {
		if (typeof define === 'function' && define.amd) {
			// AMD
			define(['jquery'], factory);
		} else if (typeof exports === 'object') {
			// CommonJS
			factory(require('jquery'));
		} else {
			// Browser globals
			factory(jQuery);
		}
	}(function ($) {
	
		var pluses = /\+/g;
	
		function encode(s) {
			return config.raw ? s : encodeURIComponent(s);
		}
	
		function decode(s) {
			return config.raw ? s : decodeURIComponent(s);
		}
	
		function stringifyCookieValue(value) {
			return encode(config.json ? JSON.stringify(value) : String(value));
		}
	
		function parseCookieValue(s) {
			if (s.indexOf('"') === 0) {
				// This is a quoted cookie as according to RFC2068, unescape...
				s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
			}
	
			try {
				// Replace server-side written pluses with spaces.
				// If we can't decode the cookie, ignore it, it's unusable.
				// If we can't parse the cookie, ignore it, it's unusable.
				s = decodeURIComponent(s.replace(pluses, ' '));
				return config.json ? JSON.parse(s) : s;
			} catch(e) {}
		}
	
		function read(s, converter) {
			var value = config.raw ? s : parseCookieValue(s);
			return $.isFunction(converter) ? converter(value) : value;
		}
	
		var config = $.cookie = function (key, value, options) {
	
			// Write
	
			if (value !== undefined && !$.isFunction(value)) {
				options = $.extend({}, config.defaults, options);
	
				if (typeof options.expires === 'number') {
					var days = options.expires, t = options.expires = new Date();
					t.setTime(+t + days * 864e+5);
				}
	
				return (document.cookie = [
					encode(key), '=', stringifyCookieValue(value),
					options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
					options.path    ? '; path=' + options.path : '',
					options.domain  ? '; domain=' + options.domain : '',
					options.secure  ? '; secure' : ''
				].join(''));
			}
	
			// Read
	
			var result = key ? undefined : {};
	
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			var cookies = document.cookie ? document.cookie.split('; ') : [];
	
			for (var i = 0, l = cookies.length; i < l; i++) {
				var parts = cookies[i].split('=');
				var name = decode(parts.shift());
				var cookie = parts.join('=');
	
				if (key && key === name) {
					// If second argument (value) is a function it's a converter...
					result = read(cookie, value);
					break;
				}
	
				// Prevent storing a cookie that we couldn't decode.
				if (!key && (cookie = read(cookie)) !== undefined) {
					result[name] = cookie;
				}
			}
	
			return result;
		};
	
		config.defaults = {};
	
		$.removeCookie = function (key, options) {
			if ($.cookie(key) === undefined) {
				return false;
			}
	
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return !$.cookie(key);
		};
	
	}));
	
	var file1 = $GK_TMPL_URL+'/styles/style'+style+'.css';
	var file2 = $GK_TMPL_URL+'/styles/typography/typography.style'+style+'.css';
	jQuery('head').append('<link rel="stylesheet" href="'+file1+'" type="text/css" />');
	jQuery('head').append('<link rel="stylesheet" href="'+file2+'" type="text/css" />');
	jQuery.cookie('gk_john_s_j30_style', style, { expires: 365, path: '/' });
	jQuery.cookie('the_cookie', 'the_value');

	for(var i = 1; i <= 4; i++) {
		jQuery('body').removeClass('style' + i);
	}

	jQuery('body').addClass('style' + style);
	gkReplaceImages();
}

$("document").ready(function () {
	
//  For the sticky navigation
	$('.js--section-features').waypoint(function (direction) {
		if (direction == 'down') {
			$('nav').addClass('sticky');
		}else {
			$('nav').removeClass('sticky');
			}
		}, {
			offset: '50px;'
	});
	
// 	Scroll on buttons
// Hire me

// Explore
	$('.js--scroll-to-start').click(function() {
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top} , 1000)
	});

// Scroll on menu
// About
	$('.js--scroll-to-about').click(function() {
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top} , 1000)
	});


// Portfolio
	$('.js--scroll-to-projects').click(function() {
		$('html, body').animate({scrollTop: $('.js--section-projects').offset().top} , 1000)
	});

});



// Animation for skill histogram

//	$('.js--skills').waypoint(function (direction) {
//		if (direction == 'down') {
//            $('.rating-details-histogram .histogram-bar').animate({color: orange}, 'fast', 'ease-out', function() {})
//            console.log('Scrolled to waypoint!');
//		}
//    }, {
//        offset: '50px;'
//	});



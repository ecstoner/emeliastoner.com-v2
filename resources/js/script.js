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

	$('.js--skills').waypoint(function (direction) {
		if (direction == 'down') {
            $('.bar1').animate({width: "100%"});
            $('.bar2').animate({width: "78%"});
            $('.bar3').animate({width: "34%"});
            $('.bar4').animate({width: "12%"});
            $('.bar5').animate({width: "3%"});
            console.log('Scrolled to waypoint!');
		}
    }, {
        offset: '200px;'
	});



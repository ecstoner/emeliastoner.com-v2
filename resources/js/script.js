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
		$('html, body').animate({scrollTop: $('.js--section-projects').offset().top - 100} , 1000)
	});
		
	
// Scroll on menu
/*
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
	
*/
    
    
    
//    Maps
    map = new GMaps({
        div: '.map',
        lat: 39.1502138,
        lng: -86.482635,
        zoom: 13,
    });
    
    map.addMarker({
      lat: 39.1572393,
      lng: -86.494946,
      title: 'Bloomington',
    });
    
    
    


});



//// Animation for skill histogram
	$('.js--skills').waypoint(function (direction) {
		if (direction == 'down') {
			$('.chart__bar').addClass('animateMe');
			console.log("waypoint reached!");
		}else if (direction == 'up') {
            $('.chart__bar').removeClass('animateMe');
        }
		}, {
			offset: '500px;'
	});



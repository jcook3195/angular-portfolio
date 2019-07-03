console.log('success');

$(document).ready(function() {

	/* Smooth scrolling */
	$(".home-scroll").click(function() {
		$('html, body').animate({
			scrollTop: $("#home-dest").offset().top
		}, 500);
	});


	$(".about-scroll").click(function() {
		var winWidth = getWindowWidth();
		// Checking if nav toggle is active on mobile
		if(winWidth <= 992) {
			var offsetMinus = 210;
		} else {
			var offsetMinus = 55;
		}
		$('html, body').animate({
			scrollTop: $("#about-dest").offset().top - offsetMinus
		}, 500);
	});

	$(".about-scroll-jumbo").click(function() {
		$('html, body').animate({
			scrollTop: $("#about-dest").offset().top - 55
		}, 500);
	});

	$(".portfolio-scroll").click(function() {
		var winWidth = getWindowWidth();
		// Checking if nav toggle is active on mobile
		if(winWidth <= 992) {
			var offsetMinus = 210;
		} else {
			var offsetMinus = 55;
		}
		$('html, body').animate({
			scrollTop: $("#portfolio-dest").offset().top - offsetMinus
		}, 500);
	});

	$(".contact-scroll").click(function() {
		var winWidth = getWindowWidth();
		// Checking if nav toggle is active on mobile
		if(winWidth <= 992) {
			var offsetMinus = 210;
		} else {
			var offsetMinus = 55;
		}
		$('html, body').animate({
			scrollTop: $("#contact-dest").offset().top - offsetMinus
		}, 500);
	});

	/* Closing nav on click on mobile */
	$('.navbar span').on('click', function() {
		$('.navbar-collapse').collapse('hide');
	});

	/* Return window width */
	function getWindowWidth() {
		var $window = $(window);
		var windowSize = $window.width();

		return windowSize;
	}

});



$(document).foundation();



var $scrollReveal = $('.scroll-reveal');

window.sr = ScrollReveal({
	distance: 0,
	scale: 1,
	duration: 1000,
	easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
	mobile: true
});

sr.reveal('.scroll-reveal');

$.each($scrollReveal, function () {
	sr.reveal(this, $(this).data());
});




$('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"]):not([href^="#panel"])').click(function () {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});



jQuery(document).ready(function ($) {

	var offset = 300,

		offset_opacity = 1200,

		scroll_top_duration = 700,

		$back_to_top = $('.cd-top');


	$(window).scroll(function () {
		($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if ($(this).scrollTop() > offset_opacity) {
			$back_to_top.addClass('cd-fade-out');
		}
	});


	$back_to_top.on('click', function (event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0,
		}, scroll_top_duration
		);
	});

});
function validateForm() {
    let x = document.forms["form"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    let y = document.forms["form"]["item"].value;
    if (y == "") {
      alert("Item must be filled out");
      return false;
    }
  };


$(function () {
	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="logoS&Mitler">'
		},
		offCanvas: {
			position: 'right'
		}
	});

	let api = $('#my-menu').data('mmenu');
	api.bind('opened', function () {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function () {
		$('.hamburger').removeClass('is-active');
	});



	$('.carousel-services').on('initialized.owl.carousel', function () {
		setTimeout(function () {
			carouselService()
		}, 100);
	});
	$('.carousel-services').owlCarousel({
		// loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});
	$('.carousel-reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		autoHeight: true
	});
	$('.carousel-partners').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	function carouselService() {
		$('.carousel-services-item').each(function () {
			var ths = $(this),
				thsh = ths.find('.carousel-services-content').outerHeight();
			ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}

	$('.carousel-services-composition .h3').each(function () {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});
	$('section .h2').each(function () {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	$('select').selectize({
		create: true,
	});

	$("form.form-callback").submit(function () {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php",
			data: th.serialize()
		}).done(function () {
			$(th).find('.callback-success').addClass('active').css("display", "flex").hide().fadeIn();
			setTimeout(function () {
				$(th).find('.callback-success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	//Resize window
	$(document).ready(function () {
		function setEqualHeights() {
			$('.carousel-services-content').equalHeights();
		}

		setEqualHeights();

		$(window).resize(setEqualHeights, carouselService);
	});
});
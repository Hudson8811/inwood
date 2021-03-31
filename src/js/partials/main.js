$(document).ready(function () {
	$("input[name='phone']").mask(" +7 (000) 000-00-00");

	anchorScroll($('.anchor'));

	function anchorScroll(e) {
		e.click(function () {
			link = $(this).attr('href');
			to = $(link).offset().top;
			$('body, html').animate({
				scrollTop: to
			}, 800);
		});
	}

	$('[href ^= "#popup-"]').fancybox({
		touch: false,
		scrolling: 'no'
	});

	$('.project-card__btn--toggle').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('open').find('span').text($(this).hasClass('open') ? 'Свернуть' : 'Развернуть');
		$(this).siblings('.project-card__detail').slideToggle(300);
	});

	$('.design__btn').click(function () {
		$(this).toggleClass('active');
		$(this).siblings('.design__plans').find('.mirrored').slideToggle(300).parent().siblings('a').find('img').slideToggle(300);
	});
});

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

// JavaScript Document
jQuery(document).ready(function(e) {

	jQuery(".main_menu .mob_menu").click(function(){
		if(jQuery(".main_menu").hasClass("open")){
			jQuery(".main_menu").removeClass("open");
			jQuery(".main_menu .menu").stop().slideUp(200);
		}else{
			jQuery(".main_menu").addClass("open");
			jQuery(".main_menu .menu").stop().slideDown(200);
		}
	});

	jQuery(window).scroll(function () {
		if (jQuery("#site").width() > 1339) {
			if (jQuery(this).scrollTop() > (jQuery('#head').height() + 62)) {
				jQuery('#body').addClass("padding");
				jQuery('.main_menu_wrap').addClass("fixed");
			} else {
				jQuery('.main_menu_wrap').removeClass("fixed");
				jQuery('#body').removeClass("padding");
			}
		}
	});

	jQuery(".full_house_content .list .name").hover(function(){
		if(jQuery("#site").width()>1339){
			jQuery(this).parent().addClass("hov");
		}
	},function(){
		if(jQuery("#site").width()>1339){
			jQuery(this).parent().removeClass("hov");
		}
	});

	jQuery(".mobile_menu .mob_menu").click(function(e) {
		if(jQuery("body").hasClass("mobile_menu_open")){
			jQuery("body").removeClass("mobile_menu_open");
			jQuery(".mobile_menu_popup").stop().slideUp(300);
		}else{
			jQuery("body").addClass("mobile_menu_open");
			jQuery(".mobile_menu_popup").stop().slideDown(300);
			jQuery(".mobile_hover").height(jQuery("#site").height());
		}
	});

	jQuery(".mobile_hover").click(function(e) {
		jQuery("body").removeClass("mobile_menu_open");
		jQuery(".mobile_menu_popup").stop().slideUp(300);
	});

	jQuery(".full_house_content .list .name").click(function(){
		if(jQuery("#site").width()<1340 && jQuery("#site").width()>767){
			if(jQuery(this).parent("li").parent('.list').find(".hov").length>0){
				jQuery(this).parent("li").parent('.list').find(".hov").removeClass("hov");
				jQuery(this).parent().addClass("hov");
			}else{
				jQuery(this).parent().addClass("hov");
			}
		}else if(jQuery("#site").width()<768){
			if(jQuery(this).parent("li").hasClass("open")){
				jQuery(this).parent("li").removeClass("open");
				jQuery(this).parent("li").find(".desc").stop().slideUp(200);
			}else{
				jQuery(this).parent("li").addClass("open");
				jQuery(this).parent("li").find(".desc").stop().slideDown(200);
			}
		}
	});

	jQuery(".full_house_content .list .desc .close_ico").click(function(e) {
		if(jQuery("#site").width()<1340 && jQuery("#site").width()>767){
			jQuery(this).parents(".hov").removeClass("hov");
		}
		return false;
	});

	jQuery(".budget_tab a").click(function(e) {
		var ind = jQuery(this).parent("").index();
		jQuery(".budget_tab .act").removeClass("act");
		jQuery(this).parent("").addClass("act");
		jQuery(".budget_tab_block .vis").removeClass("vis");
		jQuery(".budget_tab_block .col-md-4").eq(ind).addClass("vis");
	});

	jQuery(".budget_bl .desc_wrap, .popup_scroll").mCustomScrollbar({
		axis:"y",
		scrollButtons:{
			enable: true,
			scrollAmount: 10,
			scrollType: "stepless"
		}
	});

	jQuery(".catalog_content .catalog_bl .catalog_tab a").click(function(e) {
		var ind = jQuery(this).parent().index();
		jQuery(this).parents(".catalog_bl").find(".catalog_tab .act").removeClass("act");
		jQuery(this).parents(".catalog_bl").find(".catalog_tab>li").eq(ind).addClass("act");
		jQuery(this).parents(".catalog_bl").find(".catalog_tab_bl .vis").removeClass("vis");
		jQuery(this).parents(".catalog_bl").find(".catalog_tab_bl>li").eq(ind).addClass("vis");
	});

	jQuery("[data-fancybox]").fancybox({
		buttons:[
			'close'
		],
		loop:true
	});

	jQuery("ol").each(function(index, element) {
		for(var i = 0; i<jQuery(this).children("li").length; i++){
			var num = i+1;
			jQuery(this).children("li").eq(i).prepend("<span class='num'>"+num+".</span>");
		}
	});

	jQuery(".comment_slider").slick({
		arrows:true,
		prevArrow:"<a class='slick-prev'><span></span></a>",
		nextArrow:"<a class='slick-next'><span></span></a>",
		dots:true,
		speed:300,
		vertical:true,
		responsive: [
			{
				breakpoint:992,
				settings: {
					vertical:false,
				}
			},
			{
				breakpoint:768,
				settings: {
					dots:false,
					vertical:false,
				}
			}
		]
	});
	jQuery(".comment_slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
		jQuery(".comment_text_bl .list>.vis").removeClass("vis");
		jQuery(".comment_text_bl .list>li").eq(nextSlide).addClass("vis");
	});

	jQuery(".catalog_slider").slick({
		arrows:true,
		prevArrow:"<a class='slick-prev'><span></span></a>",
		nextArrow:"<a class='slick-next'><span></span></a>",
		speed:300,
		fade:true
	});

	jQuery(".budget_bl .title_bl").click(function(e) {
		if(jQuery("#site").width()<768){
			if(jQuery(this).parent().hasClass("open")){
				jQuery(this).parent().removeClass("open");
				/*jQuery(this).parent().find(".description").stop().slideUp(200);*/
			}else{
				jQuery(this).parent().addClass("open");
				/*jQuery(this).parent().find(".description").stop().slideDown(200);*/
			}
		}
	});

	jQuery(".project_tab_bl > li .mobile_title").click(function(e) {
		if(jQuery("#site").width()<768){
			if(jQuery(this).parent().hasClass("open")){
				jQuery(this).parent().removeClass("open");
				jQuery(this).parent().find(".mobile_desc").stop().slideUp(200);
			}else{
				jQuery(this).parent().addClass("open");
				jQuery(this).parent().find(".mobile_desc").stop().slideDown(200);
			}
		}
	});

	jQuery(".princip_slider").slick({
		arrows:false,
		dots:true,
		speed:300,
		slidesToShow:2,
		slidesToScroll:1,
		responsive: [
			{
				breakpoint:480,
				settings: {
					slidesToShow:1,
				}
			}
		]
	});

	jQuery(".catalog_slider_2").slick({
		arrows:false,
		dots:true,
		speed:300,
		fade:true,

	});

	jQuery(".work_tab_wrap .cur_name").click(function(e) {
		if(jQuery("#site").width()<480){
			if(jQuery(".work_tab_wrap").hasClass("open")){
				jQuery(".work_tab_wrap").removeClass("open");
				jQuery(".work_tab_wrap .work_tab").stop().slideUp(200);
			}else{
				jQuery(".work_tab_wrap").addClass("open");
				jQuery(".work_tab_wrap .work_tab").stop().slideDown(200);
			}
		}
	});

	jQuery(".popup_wrapper .date input").datepicker();

	jQuery(".popup_open").click(function(){
		var h = jQuery("#site").height();
		var obj = ".popup_wrapper>."+jQuery(this).attr("href");
		jQuery(".popup_bg").css({"display":"block","height":h}).animate({opacity:1},200);
		jQuery(obj).css({"display":"block"});
		var ih = jQuery(window).innerHeight();
		var wh = jQuery(obj).outerHeight();
		var wt = (ih-wh)/2;
		var st = jQuery(document).scrollTop();
		if(wt<0){wt=0};
		wt = wt+st;
		jQuery(obj).css({"top":wt}).animate({opacity:1},200);
		if(jQuery(obj).hasClass("popup_project")){
			jQuery(obj).find(".img_slider").slick('setPosition');
		}
		/*NEW*/if(jQuery(this).attr("href") == "popup_same_proj"){
			jQuery(".popup_same_proj .proj span").text(jQuery(this).data("name"));
			jQuery(".popup_same_proj .form input[name='project']").val(jQuery(this).data("name")+" - "+jQuery(this).data("type"));
			jQuery(".popup_same_proj .proj_img img").attr("src",jQuery(this).data("img"));
		}
		return false;
	});
	jQuery(".popup_reopen").click(function(){
		jQuery(".popup_wrapper>li").animate({opacity:0},0).hide(0);
		var h = jQuery("#site").height();
		var obj = ".popup_wrapper>."+jQuery(this).attr("href");
		jQuery(obj).css({"display":"block"});
		var ih = jQuery(window).innerHeight();
		var wh = jQuery(obj).outerHeight();
		var wt = (ih-wh)/2;
		var st = jQuery(document).scrollTop();
		if(wt<0){wt=0};
		wt = wt+st;
		jQuery(obj).css({"top":wt}).animate({opacity:1},200);
		if(jQuery(obj).hasClass("popup_project")){
			jQuery(obj).find(".img_slider").slick('setPosition');
		}
		/*NEW*/if(jQuery(this).attr("href") == "popup_same_proj"){
			jQuery(".popup_same_proj .proj span").text(jQuery(this).data("name"));
			jQuery(".popup_same_proj .form input[name='project']").val(jQuery(this).data("name")+" - "+jQuery(this).data("type"));
			jQuery(".popup_same_proj .proj_img img").attr("src",jQuery(this).data("img"));
		}
		return false;
	});
	jQuery(".popup_close").click(function(){
		jQuery(this).parents("li").animate({opacity:0},200).hide(0);
		jQuery(".popup_bg").animate({opacity:0},200).hide(0);
	});
	jQuery(".popup_bg").click(function(){
		jQuery(".popup_wrapper>li").animate({opacity:0},200).hide(0);
		jQuery(".popup_bg").animate({opacity:0},200).hide(0);
	});

	jQuery(".popup_project").each(function(index, element) {
		jQuery(this).find(".img_bl .nav .pos .col").text(jQuery(this).find(".img_bl .img_slider>div").length);
	});
	jQuery(".popup_project .img_slider").slick({
		arrows:false,
		fade:true,
		dots:false,
		speed:300
	});
	jQuery(".popup_project .img_slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
		jQuery(this).parents(".img_bl").find(".nav .pos .cur").text(nextSlide+1);
	});
	jQuery(".popup_project .img_bl .nav .prev").click(function(e) {
		jQuery(this).parents(".img_bl").find(".img_slider").slick("slickPrev");
	});
	jQuery(".popup_project .img_bl .nav .next").click(function(e) {
		jQuery(this).parents(".img_bl").find(".img_slider").slick("slickNext");
	});

	jQuery("input[type='checkbox'], select").styler();

	/*Filter Setting*/
	var price_min = parseFloat(jQuery( "input[type=text].price_from" ).attr("data-value"));
	var price_max = parseFloat(jQuery( "input[type=text].price_to" ).attr("data-value"));
	var square_min = parseFloat(jQuery( "input[type=text].square_from" ).attr("data-value"));
	var square_max = parseFloat(jQuery( "input[type=text].square_to" ).attr("data-value"));

	jQuery(".filter_bl .check_wrap a").click(function(){
		if(jQuery(this).parents(".check_wrap").find(".act").length>0){
			if(jQuery(this).hasClass("act")){
				jQuery(this).removeClass("act");
			}else{
				jQuery(this).parents(".check_wrap").find(".act").removeClass("act");
				jQuery(this).addClass("act");
			}
		}else{
			jQuery(this).addClass("act");
		}
		jQuery(this).parents(".check_wrap").find("input").val((jQuery(this).parents(".check_wrap").find(".act").length>0)?(jQuery(this).parents(".check_wrap").find(".act").data("value")):"");
	});

	jQuery(".sect_tech_cherepitsa .color_bl .list li").click(function(){
		var ind = jQuery(this).index();
		jQuery(".sect_tech_cherepitsa .color_bl .list .act").removeClass("act");
		jQuery(this).addClass("act");
		jQuery(".sect_tech_cherepitsa .cherep_list>.vis").removeClass("vis");
		jQuery(".sect_tech_cherepitsa .cherep_list>li").eq(ind).addClass("vis");
	});

	jQuery(".project_tab_bl li .mobile_desc .close_arrow").click(function(e) {
		if(jQuery("#site").width()<768){
			jQuery(this).parents(".open").removeClass("open");
		}
	});




	jQuery('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		adaptiveHeight: true
	});

	//filter function
	jQuery("#test_filter").click(function(){

		jQuery(this).addClass('active');
		var data = {
			action : "filterproject",
			min_price : parseFloat(jQuery( "input[type=text].price_from" ).attr("data-value")),
			max_price : parseFloat(jQuery( "input[type=text].price_to" ).attr("data-value")),
			curr_min_price : parseFloat(jQuery( "input[type=text].price_from" ).val()),
			curr_max_price : parseFloat(jQuery( "input[type=text].price_to" ).val()),
			curr_min_square : parseFloat(jQuery( "input[type=text].square_from" ).val()),
			curr_max_square : parseFloat(jQuery( "input[type=text].square_to" ).val()),
			sort_by : parseFloat(jQuery( "#test_select" ).find(':selected').attr("data-value")),
			etazh_1 : parseFloat(jQuery( "input[type=hidden].floor_inp" ).val())
		};

		jQuery.post(myajax, data, function (msg) { jQuery(".catalog_content_full").html(msg);
			var duration = 1000; //'slow'
			var pause = 150;
			jQuery(".catalog_content_full .catalog_bl").each(function(index) {
				jQuery(this).delay(pause * index).slideDown(duration);
			});


		});

		console.log(data);
	});


});


// JavaScript Document	$('text a').hover(function(){
$(document).ready(function () {
	$('#vision-text a').hover(function(){	
		$('#vision-text p').css({color: "#3ca2bb"});
		$('#vision-text h2').css({color: "#3ca2bb"});
	}, function(){
			$('#vision-text p').css({color: "#000000"});
			$('#vision-text h2').css({color: "#000000"});
	});
	
	$('#identity-text a').hover(function(){	
		$('#identity-text p').css({color: "#3ca2bb"});
		$('#identity-text h2').css({color: "#3ca2bb"});
	}, function(){
			$('#identity-text p').css({color: "#000000"});
			$('#identity-text h2').css({color: "#000000"});
	});
	
	$('#goals-text1 a').hover(function(){
		$('#goals-text1 p').css({color: "#3ca2bb"});
		$('#goals-text1 h2').css({color: "#3ca2bb"});
	}, function(){
			$('#goals-text1 p').css({color: "#000000"});
			$('#goals-text1 h2').css({color: "#000000"});
	});
	
	$('#goals-text2 a').hover(function(){
		$('#goals-text2 p').css({color: "#3ca2bb"});
		$('#goals-text2 h2').css({color: "#3ca2bb"});
	}, function(){
			$('#goals-text2 p').css({color: "#000000"});
			$('#goals-text2 h2').css({color: "#000000"});	
	});
	
	$('#growth-main-text a').hover(function(){
		$('#growth-main-text p').css({color: "#3ca2bb"});
		$('#growth-main-text h2').css({color: "#3ca2bb"});
	}, function(){
			$('#growth-main-text p').css({color: "#000000"});
			$('#growth-main-text h2').css({color: "#000000"});	
	});
	
    
	$('#fmp').hover(function(){
		$('.activity-wrap-back').fadeIn(500);
	}, function(){
			$('.activity-wrap-back').fadeOut(500);
	});

});
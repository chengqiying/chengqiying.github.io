// JavaScript Document
$(document).ready(function(){
	
	$('#content').waypoint(function() {
		$("#nav").addClass('background');
		$('.nav-title').addClass('animated fadeInDown');
		$('.nav-title h2').addClass('animated fadeInDownBig');
		}, { offset: 85 }
	);
	/*$('#content').waypoint(function(){
		$('.nav-title').addClass('animated fadeOutDown');
		$('.nav-title h2').addClass('animated fadeOutDown');
		}, { offset: 290 }
	);*/

	$('#content').waypoint(function(){
		$("#nav").removeClass('background');
		$('.nav-title').removeClass('animated fadeInDown');
		$('.nav-title h2').removeClass('animated fadeInUownBig', {duration: 800});
		}, { offset: 86}
	);
	
	$('#introduction').waypoint(function(){
		$('#introduction').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '80%' }
	);
	$('#introduction').waypoint(function(){
		$('#introduction').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%'}
	);
	
	$('#concept-1').waypoint(function(){
		$('#concept-1').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '86%' }
	);
	$('#concept-1').waypoint(function(){
		$('#concept-1').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);
	
	$('#concept-2').waypoint(function(){
		$('#concept-2').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '84%' }
	);
	$('#concept-2').waypoint(function(){
		$('#concept-2').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);
	
	$('#concept-3').waypoint(function(){
		$('#concept-3').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '82%' }
	);
	$('#concept-3').waypoint(function(){
		$('#concept-3').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);
	
	$('#concept-1').hover(function(){
		$(".concept-1-mask").fadeIn(500);
		}, function(){
			$('.concept-1-mask').fadeOut(500);
	});
	$('#concept-2').hover(function(){
		$(".concept-2-mask").fadeIn(500);
		}, function(){
			$('.concept-2-mask').fadeOut(500);
	});
	$('#concept-3').hover(function(){
		$(".concept-3-mask").fadeIn(500);
		}, function(){
			$('.concept-3-mask').fadeOut(500);
	});
	
	$('#learned').waypoint(function(){
		$('#learned').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '80%' }
	);
	$('#learned').waypoint(function(){
		$('#learned').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%'}
	);
	
		
});

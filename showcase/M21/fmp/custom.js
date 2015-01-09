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
		}, { offset: 600 }
	);
	$('#introduction').waypoint(function(){
		$('#introduction').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: 700 }
	);
	
	$('#concept-1').waypoint(function(){
		$('#concept-1').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: 600 }
	);
	$('#concept-1').waypoint(function(){
		$('#concept-1').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: 700 }
	);
	
	$('#concept-2').waypoint(function(){
		$('#concept-2').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: 600 }
	);
	$('#concept-2').waypoint(function(){
		$('#concept-2').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: 700 }
	);
	
	$('#concept-3').waypoint(function(){
		$('#concept-3').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: 600 }
	);
	$('#concept-3').waypoint(function(){
		$('#concept-3').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: 700 }
	);
	
	$('#concept-4').waypoint(function(){
		$('#concept-4').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: 600 }
	);
	$('#concept-4').waypoint(function(){
		$('#concept-4').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: 700 }
	);
		
});

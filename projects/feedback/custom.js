// JavaScript Document
$(document).ready(function(){
	
	$('#wrappera').waypoint(function() {
		$("#nav").addClass('background');
		$('#home').addClass('animated fadeInDown');
		$('#home p').addClass('animated fadeInDown');
		$('.nav-title').addClass('animated fadeInDown');
		$('.nav-title h3').addClass('animated fadeInDownBig');
		}, { offset: 85 }
	);
	/*$('#content').waypoint(function(){
		$('.nav-title').addClass('animated fadeOutDown');
		$('.nav-title h2').addClass('animated fadeOutDown');
		}, { offset: 290 }
	);*/

	$('#wrappera').waypoint(function(){
		$("#nav").removeClass('background');
		$('#home').removeClass('animated fadeInDown');
		$('#home p').removeClass('animated fadeInDown');
		$('.nav-title').removeClass('animated fadeInDown');
		$('.nav-title h3').removeClass('animated fadeInUownBig', {duration: 800});
		}, { offset: 86}
	);
	
	/*$('#introduction').waypoint(function(){
		$('#introduction').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '80%' }
	);
	$('#introduction').waypoint(function(){
		$('#introduction').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%'}
	);*/
	
	
	
		
});

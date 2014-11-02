// JavaScript Document
$(document).ready(function(){
	
	$('#content').waypoint(function() {
		$('#nav').addClass('navcolor');
		$('.nav-title').addClass('animated fadeInUp');
		$('.nav-title h2').addClass('animated fadeInUpBig ');
		}, { offset: 200 }
	);
	/*$('#content').waypoint(function(){
		$('.nav-title').addClass('animated fadeOutDown');
		$('.nav-title h2').addClass('animated fadeOutDown');
		}, { offset: 290 }
	);*/
	
	$('#content').waypoint(function(){
		$('#nav').removeClass('navcolor');
		$('.nav-title').removeClass('animated fadeInUp', {duration: 800});
		$('.nav-title h2').removeClass('animated fadeInUpBig ', {duration: 800});
		}, { offset: 290 }
	);
		
});

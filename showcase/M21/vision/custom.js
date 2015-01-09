// JavaScript Document
$(document).ready(function(){
	
	$('#content').waypoint(function() {
		$('.nav-title').addClass('animated fadeInDown');
		$('.nav-title h2').addClass('animated fadeInDownBig ');
		}, { offset: 200 }
	);
	/*$('#content').waypoint(function(){
		$('.nav-title').addClass('animated fadeOutDown');
		$('.nav-title h2').addClass('animated fadeOutDown');
		}, { offset: 290 }
	);*/
	
	$('#content').waypoint(function(){
		$('.nav-title').removeClass('animated fadeInDown', {duration: 800});
		$('.nav-title h2').removeClass('animated fadeInDownBig ', {duration: 800});
		}, { offset: 290 }
	);
		
});

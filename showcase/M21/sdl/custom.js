// JavaScript Document
$(document).ready(function(){
	
	$('#content').waypoint(function() {
		$("#nav").addClass('background');
		$('#home').addClass('animated fadeInDown');
		$('#home p').addClass('animated fadeInDown');
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
		$('#home').removeClass('animated fadeInDown');
		$('#home p').removeClass('animated fadeInDown');
		$('.nav-title').removeClass('animated fadeInDown');
		$('.nav-title h2').removeClass('animated fadeInUownBig', {duration: 800});
		}, { offset: 86}
	);
	
	$('#ddw').waypoint(function(){
		$('#ddw').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '80%' }
	);
	$('#ddw').waypoint(function(){
		$('#ddw').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%'}
	);

	$('#ddw-process').waypoint(function(){
		$('#ddw-process').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '80%' }
	);
	$('#ddw-process').waypoint(function(){
		$('#ddw-process').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%'}
	);
	
	$('#ux').waypoint(function(){
		$('#ux').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '80%' }
	);
	$('#ux').waypoint(function(){
		$('#ux').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%'}
	);

	$('#ux-process').waypoint(function(){
		$('#ux-process').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '80%' }
	);
	$('#ux-process').waypoint(function(){
		$('#ux-process').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%'}
	);
	
	$('#gsk').waypoint(function(){
		$('#gsk').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '80%' }
	);
	$('#gsk').waypoint(function(){
		$('#gsk').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%'}
	);

	$('#gsk-process').waypoint(function(){
		$('#gsk-process').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '80%' }
	);
	$('#gsk-process').waypoint(function(){
		$('#gsk-process').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%'}
	);
	
	
	
	$('#reference').waypoint(function(){
		$('#reference').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '80%' }
	);
	$('#reference').waypoint(function(){
		$('#reference').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%'}
	);
	
	$('#other').waypoint(function(){
		$('#other').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);
	$('#other').waypoint(function(){
		$('#other').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '95%'}
	);
	
	
		
});

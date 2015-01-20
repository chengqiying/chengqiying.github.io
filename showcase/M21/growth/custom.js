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
	
	$('#past').waypoint(function(){
		$('#past').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '80%' }
	);
	$('#past').waypoint(function(){
		$('#past').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%'}
	);

	$('#pastlink-1').waypoint(function(){
		$('#pastlink-1').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '65%' }
	);
	$('#pastlink-1').waypoint(function(){
		$('#pastlink-1').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);
	
	$('#pastlink-2').waypoint(function(){
		$('#pastlink-2').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '60%' }
	);
	$('#pastlink-2').waypoint(function(){
		$('#pastlink-2').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);
	
	$('#pastlink-3').waypoint(function(){
		$('#pastlink-3').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '55%' }
	);
	$('#pastlink-3').waypoint(function(){
		$('#pastlink-3').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);
	
	$('#pastlink-1').hover(function(){
		$(".pastlink-1-mask").fadeIn(500);
		}, function(){
			$('.pastlink-1-mask').fadeOut(500);
	});
	$('#pastlink-2').hover(function(){
		$(".pastlink-2-mask").fadeIn(500);
		}, function(){
			$('.pastlink-2-mask').fadeOut(500);
	});
	$('#pastlink-3').hover(function(){
		$(".pastlink-3-mask").fadeIn(500);
		}, function(){
			$('.pastlink-3-mask').fadeOut(500);
	});
	
	$('#present').waypoint(function(){
		$('#present').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '80%' }
	);
	$('#present').waypoint(function(){
		$('#present').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%'}
	);

	$('#competency').waypoint(function(){
		$('#competency').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '80%' }
	);
	$('#competency').waypoint(function(){
		$('#competency').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%'}
	);
	
	$('#future').waypoint(function(){
		$('#future').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '80%' }
	);
	$('#future').waypoint(function(){
		$('#future').removeClass('animated fadeInUpBig', {duration: 1600});
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

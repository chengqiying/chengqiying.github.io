// JavaScript Document
$(document).ready(function(){
	
	$('#wrapper').waypoint(function() {
		$("#nav").addClass('background');
		$('#cv').addClass('animated fadeInDown');
		$('.nav-title').addClass('animated fadeInDown');
		$('.nav-title h2').addClass('animated fadeInDownBig');
		}, { offset: 85 }
	);
	/*$('#content').waypoint(function(){
		$('.nav-title').addClass('animated fadeOutDown');
		$('.nav-title h2').addClass('animated fadeOutDown');
		}, { offset: 290 }
	);*/

	$('#wrapper').waypoint(function(){
		$("#nav").removeClass('background');
		$('#cv').removeClass('animated fadeInDown');
		$('.nav-title').removeClass('animated fadeInDown');
		$('.nav-title h2').removeClass('animated fadeInUownBig', {duration: 800});
		}, { offset: 86}
	);
	
	/*$('#portfolio').waypoint(function(){
		$('#portfolio').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '80%' }
	);
	$('#portfolio').waypoint(function(){
		$('#portfolio').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%'}
	);*/
	
	$('#works-1').waypoint(function(){
		$('#works-1').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '60%' }
	);
	$('#works-1').waypoint(function(){
		$('#works-1').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);
	$('#works-1-title').waypoint(function(){
		$('#works-1-title').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '80%' }
	);
	$('#works-1-title').waypoint(function(){
		$('#works-1-title').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);
	
	$('#works-2').waypoint(function(){
		$('#works-2').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '60%' }
	);
	$('#works-2').waypoint(function(){
		$('#works-2').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);
	$('#works-2-title').waypoint(function(){
		$('#works-2-title').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '80%' }
	);
	$('#works-2-title').waypoint(function(){
		$('#works-2-title').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);
	
	$('#works-3').waypoint(function(){
		$('#works-3').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '60%' }
	);
	$('#works-3').waypoint(function(){
		$('#works-3').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);
	$('#works-3-title').waypoint(function(){
		$('#works-3-title').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '80%' }
	);
	$('#works-3-title').waypoint(function(){
		$('#works-3-title').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);
	
	$('#works-4').waypoint(function(){
		$('#works-4').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '80%' }
	);
	$('#works-4').waypoint(function(){
		$('#works-4').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);
	$('#works-4-title').waypoint(function(){
		$('#works-4-title').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '80%' }
	);
	$('#works-4-title').waypoint(function(){
		$('#works-4-title').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);
	
	$('.sleep-front').hover(function(){
		$(".sleep-back").fadeIn(500);
		}, function(){
			$('.sleep-back').fadeOut(500);
	});
	$('.cv-front').hover(function(){
		$(".cv-back").fadeIn(500);
		}, function(){
			$('.cv-back').fadeOut(500);
	});	
	$('.feedback-front').hover(function(){
		$(".feedback-back").fadeIn(500);
		}, function(){
			$('.feedback-back').fadeOut(500);
	});
	$('.levo-front').hover(function(){
		$(".levo-back").fadeIn(500);
		}, function(){
			$('.levo-back').fadeOut(500);
	});
	$('.ghost-front').hover(function(){
		$(".ghost-back").fadeIn(500);
		}, function(){
			$('.ghost-back').fadeOut(500);
	});	
	$('.iwall-front').hover(function(){
		$(".iwall-back").fadeIn(500);
		}, function(){
			$('.iwall-back').fadeOut(500);
	});
	$('.buer-front').hover(function(){
		$(".buer-back").fadeIn(500);
		}, function(){
			$('.buer-back').fadeOut(500);
	});
	$('.cloud-front').hover(function(){
		$(".cloud-back").fadeIn(500);
		}, function(){
			$('.cloud-back').fadeOut(500);
	});
	$('.bee-front').hover(function(){
		$(".bee-back").fadeIn(500);
		}, function(){
			$('.bee-back').fadeOut(500);
	});
	$('.sbracelet-front').hover(function(){
		$(".sbracelet-back").fadeIn(500);
		}, function(){
			$('.sbracelet-back').fadeOut(500);
	});
	$('.pcard-front').hover(function(){
		$(".pcard-back").fadeIn(500);
		}, function(){
			$('.pcard-back').fadeOut(500);
	});
	$('.stool-front').hover(function(){
		$(".stool-back").fadeIn(500);
		}, function(){
			$('.stool-back').fadeOut(500);
	});
	
	$('#contact').waypoint(function(){
		$('#contact').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '80%' }
	);
	$('#contact').waypoint(function(){
		$('#contact').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%'}
	);
	
	
		
});

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
	
	/*$('#works-1').waypoint(function(){
		$('#works-1').addClass('animated fadeInUpBig', {duration: 3000});
		$('#works-1-line').addClass('animated fadeInUpBig', {duration: 3000});
		$('#works-1-circle').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '60%' }
	);
	$('#works-1').waypoint(function(){
		$('#works-1').removeClass('animated fadeInUpBig', {duration: 1600});
		$('#works-1-line').removeClass('animated fadeInUpBig', {duration: 1600});
		$('#works-1-circle').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);
	$('#works-1-title').waypoint(function(){
		$('#works-1-title').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '70%' }
	);
	$('#works-1-title').waypoint(function(){
		$('#works-1-title').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);
	
	
	$('#works-2').waypoint(function(){
		$('#works-2').addClass('animated fadeInUpBig', {duration: 3000});
		$('#works-2-title').addClass('animated fadeInUpBig', {duration: 3000});
		$('#works-2-line').addClass('animated fadeInUpBig', {duration: 3000});
		$('#works-2-circle').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '80%' }
	);
	$('#works-2').waypoint(function(){
		$('#works-2').removeClass('animated fadeInUpBig', {duration: 1600});
		$('#works-2-title').removeClass('animated fadeInUpBig', {duration: 1600});
		$('#works-2-line').removeClass('animated fadeInUpBig', {duration: 1600});
		$('#works-2-circle').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);

	
	$('#works-3').waypoint(function(){
		$('#works-3').addClass('animated fadeInUpBig', {duration: 3000});
		$('#works-3-title').addClass('animated fadeInUpBig', {duration: 3000});
		$('#works-3-line').addClass('animated fadeInUpBig', {duration: 3000});
		$('#works-3-circle').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '80%' }
	);
	$('#works-3').waypoint(function(){
		$('#works-3').removeClass('animated fadeInUpBig', {duration: 1600});
		$('#works-3-title').removeClass('animated fadeInUpBig', {duration: 1600});
		$('#works-3-line').removeClass('animated fadeInUpBig', {duration: 1600});
		$('#works-3-circle').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);*/
	
	/*$('#works-3-title').waypoint(function(){
		$('#works-3-title').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '80%' }
	);
	$('#works-3-title').waypoint(function(){
		$('#works-3-title').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);*/
	
	/*
	$('#works-4').waypoint(function(){
		$('#works-4').addClass('animated fadeInUpBig', {duration: 3000});
		$('#works-4-title').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '80%' }
	);
	$('#works-4').waypoint(function(){
		$('#works-4').removeClass('animated fadeInUpBig', {duration: 1600});
		$('#works-4-title').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);*/
	
	
	/*$('#works-4-title').waypoint(function(){
		$('#works-4-title').addClass('animated fadeInUpBig', {duration: 3000});
		}, { offset: '80%' }
	);
	$('#works-4-title').waypoint(function(){
		$('#works-4-title').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%' }
	);*/

	$('.meituan-front').hover(function(){
		$(".meituan-back").fadeIn(200);
		move('.meituan-front')
			.scale(1.3)
      		.duration('0.8s')
      		.end();
		move('.meituan-back')
			.scale(1.3)
      		.duration('0.8s')
      		.end(); 
		}, function(){
			$('.meituan-back').fadeOut(100);
			move('.meituan-front')
				.scale(1)
      			.duration('0.8s')
      			.end(); 
			move('.meituan-back')
				.scale(1)
      			.duration('0.8s')
      			.end();
	});
	
	$('.sleep-front').hover(function(){
		$(".sleep-back").fadeIn(200);
		move('.sleep-front')
			.scale(1.3)
      		.duration('0.8s')
      		.end();
		move('.sleep-back')
			.scale(1.3)
      		.duration('0.8s')
      		.end(); 
		}, function(){
			$('.sleep-back').fadeOut(100);
			move('.sleep-front')
				.scale(1)
      			.duration('0.8s')
      			.end(); 
			move('.sleep-back')
				.scale(1)
      			.duration('0.8s')
      			.end();
	});
	
	$('.cv-front').hover(function(){
		$(".cv-back").fadeIn(200);
		move('.cv-front')
			.scale(1.3)
      		.duration('0.8s')
      		.end();
		move('.cv-back')
			.scale(1.3)
      		.duration('0.8s')
      		.end(); 
		}, function(){
			$('.cv-back').fadeOut(100);
			move('.cv-front')
				.scale(1)
      			.duration('0.8s')
      			.end(); 
			move('.cv-back')
				.scale(1)
      			.duration('0.8s')
      			.end();
	});	
	
	$('.feedback-front').hover(function(){
		$(".feedback-back").fadeIn(200);
		move('.feedback-front')
			.scale(1.3)
      		.duration('0.8s')
      		.end();
		move('.feedback-back')
			.scale(1.3)
      		.duration('0.8s')
      		.end(); 
		}, function(){
			$('.feedback-back').fadeOut(100);
			move('.feedback-front')
				.scale(1)
      			.duration('0.8s')
      			.end(); 
			move('.feedback-back')
				.scale(1)
      			.duration('0.8s')
      			.end();
	});
	
	$('.yelp-front').hover(function(){
		$(".yelp-back").fadeIn(200);
		move('.yelp-front')
			.scale(1.3)
      		.duration('0.8s')
      		.end();
		move('.yelp-back')
			.scale(1.3)
      		.duration('0.8s')
      		.end(); 
		}, function(){
			$('.yelp-back').fadeOut(100);
			move('.yelp-front')
				.scale(1)
      			.duration('0.8s')
      			.end(); 
			move('.yelp-back')
				.scale(1)
      			.duration('0.8s')
      			.end();
	});	
	
	$('.levo-front').hover(function(){
		$(".levo-back").fadeIn(200);
		move('.levo-front')
			.scale(1.3)
      		.duration('0.8s')
      		.end();
		move('.levo-back')
			.scale(1.3)
      		.duration('0.8s')
      		.end(); 
		}, function(){
			$('.levo-back').fadeOut(100);
			move('.levo-front')
				.scale(1)
      			.duration('0.8s')
      			.end(); 
			move('.levo-back')
				.scale(1)
      			.duration('0.8s')
      			.end();
	});
	
	$('.ghost-front').hover(function(){
		$(".ghost-back").fadeIn(200);
		move('.ghost-front')
			.scale(1.3)
      		.duration('0.8s')
      		.end();
		move('.ghost-back')
			.scale(1.3)
      		.duration('0.8s')
      		.end(); 
		}, function(){
			$('.ghost-back').fadeOut(100);
			move('.ghost-front')
				.scale(1)
      			.duration('0.8s')
      			.end(); 
			move('.ghost-back')
				.scale(1)
      			.duration('0.8s')
      			.end();
	});	
	
	$('.iwall-front').hover(function(){
		$(".iwall-back").fadeIn(200);
		move('.iwall-front')
			.scale(1.3)
      		.duration('0.8s')
      		.end();
		move('.iwall-back')
			.scale(1.3)
      		.duration('0.8s')
      		.end(); 
		}, function(){
			$('.iwall-back').fadeOut(100);
			move('.iwall-front')
				.scale(1)
      			.duration('0.8s')
      			.end(); 
			move('.iwall-back')
				.scale(1)
      			.duration('0.8s')
      			.end();
	});
	
	$('.buer-front').hover(function(){
		$(".buer-back").fadeIn(200);
		move('.buer-front')
			.scale(1.3)
      		.duration('0.8s')
      		.end();
		move('.buer-back')
			.scale(1.3)
      		.duration('0.8s')
      		.end(); 
		}, function(){
			$('.buer-back').fadeOut(100);
			move('.buer-front')
				.scale(1)
      			.duration('0.8s')
      			.end(); 
			move('.buer-back')
				.scale(1)
      			.duration('0.8s')
      			.end();
	});
	
	$('.cloud-front').hover(function(){
		$(".cloud-back").fadeIn(200);
		move('.cloud-front')
			.scale(1.3)
      		.duration('0.8s')
      		.end();
		move('.cloud-back')
			.scale(1.3)
      		.duration('0.8s')
      		.end(); 
		}, function(){
			$('.cloud-back').fadeOut(100);
			move('.cloud-front')
				.scale(1)
      			.duration('0.8s')
      			.end(); 
			move('.cloud-back')
				.scale(1)
      			.duration('0.8s')
      			.end();
	});
	
	$('.bee-front').hover(function(){
		$(".bee-back").fadeIn(200);
		move('.bee-front')
			.scale(1.3)
      		.duration('0.8s')
      		.end();
		move('.bee-back')
			.scale(1.3)
      		.duration('0.8s')
      		.end(); 
		}, function(){
			$('.bee-back').fadeOut(100);
			move('.bee-front')
				.scale(1)
      			.duration('0.8s')
      			.end(); 
			move('.bee-back')
				.scale(1)
      			.duration('0.8s')
      			.end();
	});
	
	$('.sbracelet-front').hover(function(){
		$(".sbracelet-back").fadeIn(200);
		move('.sbracelet-front')
			.scale(1.3)
      		.duration('0.8s')
      		.end();
		move('.sbracelet-back')
			.scale(1.3)
      		.duration('0.8s')
      		.end(); 
		}, function(){
			$('.sbracelet-back').fadeOut(100);
			move('.sbracelet-front')
				.scale(1)
      			.duration('0.8s')
      			.end(); 
			move('.sbracelet-back')
				.scale(1)
      			.duration('0.8s')
      			.end();
	});
	
	$('.pcard-front').hover(function(){
		$(".pcard-back").fadeIn(200);
		move('.pcard-front')
			.scale(1.3)
      		.duration('0.8s')
      		.end();
		move('.pcard-back')
			.scale(1.3)
      		.duration('0.8s')
      		.end(); 
		}, function(){
			$('.pcard-back').fadeOut(100);
			move('.pcard-front')
				.scale(1)
      			.duration('0.8s')
      			.end(); 
			move('.pcard-back')
				.scale(1)
      			.duration('0.8s')
      			.end();
	});
	
	$('.stool-front').hover(function(){
		$(".stool-back").fadeIn(200);
		move('.stool-front')
			.scale(1.3)
      		.duration('0.8s')
      		.end();
		move('.stool-back')
			.scale(1.3)
      		.duration('0.8s')
      		.end(); 
		}, function(){
			$('.stool-back').fadeOut(100);
			move('.stool-front')
				.scale(1)
      			.duration('0.8s')
      			.end(); 
			move('.stool-back')
				.scale(1)
      			.duration('0.8s')
      			.end();
	});
	/*
	$('#contact').waypoint(function(){
		$('#contact').addClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '80%' }
	);
	$('#contact').waypoint(function(){
		$('#contact').removeClass('animated fadeInUpBig', {duration: 1600});
		}, { offset: '90%'}
	);*/
	
	
		
});

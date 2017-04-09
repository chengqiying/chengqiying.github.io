$(document).ready(function(){
	$('#cv').hover(function(){
		$('#cv h2').css({color: "#ffffff"});
		$('#cv').addClass("cvcolor1");
		}, function(){
			$('#cv h2').css({color: "#E9E9E9"});
			$('#cv').removeClass("cvcolor1");;
	});
	$('#cv').click(function(){
		$(".footer, #all, #nav, #header").hide();
		$('#cv-page').fadeIn(500);
		$('#cv-close').fadeIn(500);
		
	});
	
	$('#cv-1').hover(function(){
		$('#cv-1 h2').css({color: "#515151"});
		$('#cv-1').addClass("cvcolor1");
		}, function(){
			$('#cv-1 h2').css({color: "#515151"});
			$('#cv-1').removeClass("cvcolor1");;
	});
	$('#cv-1').click(function(){
		$(".footer, #all").hide();
		$('#cv-page').fadeIn(500);
		$('#cv-close').fadeIn(500);
		
	});
	
	$('#arrow').hover(function(){
		$('#arrow').addClass("animated pulse");
		}, function(){
			$('#arrow').removeClass("animated pulse");;
	});
	
	$('#cv-close').click(function(){
		$('#cv-page').fadeOut(500);
		$('#cv-close').fadeOut(500);
		$(".footer, #all, #nav, #header").fadeIn(500);
	});
});

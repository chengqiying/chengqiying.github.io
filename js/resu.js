$(document).ready(function(){
	$('#cv').hover(function(){
		$('#cv h2').css({color: "#26C6DA"});
		$('#cv').addClass("cvcolor1");
		}, function(){
			$('#cv h2').css({color: "#ffffff"});
			$('#cv').removeClass("cvcolor1");;
	});
	$('#cv').click(function(){
		$(".footer, #all, #nav, #header").hide();
		$('#cv-page').fadeIn(500);
		
	});
	
	$('#cv-1').hover(function(){
		$('#cv-1 h2').css({color: "#26C6DA"});
		$('#cv-1').addClass("cvcolor1");
		}, function(){
			$('#cv-1 h2').css({color: "#ffffff"});
			$('#cv-1').removeClass("cvcolor1");;
	});
	$('#cv-1').click(function(){
		$(".footer, #all").hide();
		$('#cv-page').fadeIn(500);
		
	});
	
	$('#arrow').hover(function(){
		$('#arrow').addClass("animated pulse");
		}, function(){
			$('#arrow').removeClass("animated pulse");;
	});
	
	$('#cv-close').click(function(){
		$('#cv-page').fadeOut(500);
		$(".footer, #all, #nav, #header").fadeIn(500);
	});
});

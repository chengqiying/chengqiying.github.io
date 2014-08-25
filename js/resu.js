$(document).ready(function(){
	$('#cv').hover(function(){
		$('#cv h2').css({color: "#FFFFFF"});
		$('#cv').addClass("cvcolor1");
		}, function(){
			$('#cv h2').css({color: "#CDCDCD"});
			$('#cv').removeClass("cvcolor1");;
	});
	$('#cv').click(function(){
		$(".footer, #all, #border").hide();
		$('#cv-page').fadeIn(500);
		
	});
	$('#cv-close').click(function(){
		$('#cv-page').fadeOut(500);
		$(".footer, #all, #border").fadeIn(500);
	});
});

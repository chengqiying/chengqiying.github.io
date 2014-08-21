$(document).ready(function(){
	$('#cv').click(function(){
		$(".footer, #all, #border").hide();
		$('#cv-page').fadeIn(500);
		
	});
	$('#cv-page').click(function(){
		$('#cv-page').fadeOut(500);
		$(".footer, #all, #border").show();
	});
});

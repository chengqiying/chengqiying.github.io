$(document).ready(function(){
	$('#cv-page').hide(),
	$('#cv').click(function(){
		$('#cv-page').FadeIn(500),
		$("#all, #border, #footer").hide();
	});
});

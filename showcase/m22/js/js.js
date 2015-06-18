$(document).ready(function(){
	$('#prototype').hover(function(){
		$("#prototype").css("background-color", "#BDE9F4");
		$("#prototype p").css("color", "#ffffff");
		$("#prototype p").css("text-decoration", "none");
		}, 
		function() {
			$("#prototype").css("background-color", "#ffffff");
			$("#prototype p").css("color", "#4f4f4f");
	});

	$('#feedback').hover(function(){
		$("#feedback").css("background-color", "#BDE9F4");
		$("#feedback p").css("color", "#ffffff");
		$("#feedback p").css("text-decoration", "none");
		}, 
		function() {
			$("#feedback").css("background-color", "#ffffff");
			$("#feedback p").css("color", "#4f4f4f");
	});

	$('#report').hover(function(){
		$("#report").css("background-color", "#BDE9F4");
		$("#report p").css("color", "#ffffff");
		$("#report p").css("text-decoration", "none");
		}, 
		function() {
			$("#report").css("background-color", "#ffffff");
			$("#report p").css("color", "#4f4f4f");
	});
})
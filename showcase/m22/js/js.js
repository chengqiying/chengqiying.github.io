$(document).ready(function(){
	$('.cross-menu').click(function(){
		$('.cross-menu').toggleClass("cross-open");
		$('.nav').toggleClass("out");
	});

	$('#vi').waypoint(function(){
		$('.cross-menu').addClass('animated fadeInDown', {duration: 1600});
		$('.menu-text').addClass('animated fadeInDown', {duration: 1600});
		}, { offset: '88%' }
	);

	$('#vi').waypoint(function(){
		$('.cross-menu').removeClass('animated fadeInDown', {duration: 1600});
		$('.menu-text').removeClass('animated fadeInDown', {duration: 1600});
		}, { offset: '90%' }
	);

	$('#nav-vision').hover(function(){
		$("#nav-vision p").css("color", "#35c1d5");
		}, 
		function() {
			$("#nav-vision p").css("color", "#fefefe");
	});

	$('#nav-goals').hover(function(){
		$("#nav-goals p").css("color", "#35c1d5");
		}, 
		function() {
			$("#nav-goals p").css("color", "#fefefe");
	});

	$('#nav-project').hover(function(){
		$("#nav-project p").css("color", "#35c1d5");
		}, 
		function() {
			$("#nav-project p").css("color", "#fefefe");
	});

	$('#nav-sdl').hover(function(){
		$("#nav-sdl p").css("color", "#35c1d5");
		}, 
		function() {
			$("#nav-sdl p").css("color", "#fefefe");
	});

	$('#nav-growth').hover(function(){
		$("#nav-growth p").css("color", "#35c1d5");
		}, 
		function() {
			$("#nav-growth p").css("color", "#fefefe");
	});

	$('#nav-contact').hover(function(){
		$("#nav-contact p").css("color", "#35c1d5");
		}, 
		function() {
			$("#nav-contact p").css("color", "#fefefe");
	});

	$('#prototype').hover(function(){
		$("#prototype").css("background-color", "#94ebf7");
		$("#prototype p").css("color", "#ffffff");
		$("#prototype p").css("text-decoration", "none");
		}, 
		function() {
			$("#prototype").css("background-color", "#ffffff");
			$("#prototype p").css("color", "#4f4f4f");
	});

	$('#feedback').hover(function(){
		$("#feedback").css("background-color", "#94ebf7");
		$("#feedback p").css("color", "#ffffff");
		$("#feedback p").css("text-decoration", "none");
		}, 
		function() {
			$("#feedback").css("background-color", "#ffffff");
			$("#feedback p").css("color", "#4f4f4f");
	});

	$('#report').hover(function(){
		$("#report").css("background-color", "#94ebf7");
		$("#report p").css("color", "#ffffff");
		$("#report p").css("text-decoration", "none");
		}, 
		function() {
			$("#report").css("background-color", "#ffffff");
			$("#report p").css("color", "#4f4f4f");
	});

	$('#m21').hover(function(){
		$("#m21").css("background-color", "#94ebf7");
		$("#m21 p").css("color", "#ffffff");
		$("#m21 p").css("text-decoration", "none");
		}, 
		function() {
			$("#m21").css("background-color", "#f7f7f7");
			$("#m21 p").css("color", "#4f4f4f");
	});

	$('#portfolio-g').hover(function(){
		$("#portfolio-g").css("background-color", "#94ebf7");
		$("#portfolio-g p").css("color", "#ffffff");
		$("#portfolio-g p").css("text-decoration", "none");
		}, 
		function() {
			$("#portfolio-g").css("background-color", "#f7f7f7");
			$("#portfolio-g p").css("color", "#4f4f4f");
	});

	$('#yelp-seemore').hover(function(){
		$("#yelp-seemore").css("background-color", "#94ebf7");
		$("#yelp-seemore p").css("color", "#ffffff");
		$("#yelp-seemore p").css("text-decoration", "none");
		}, 
		function() {
			$("#yelp-seemore").css("background-color", "#ffffff");
			$("#yelp-seemore p").css("color", "#4f4f4f");
	});

	$('#ibm-seemore').hover(function(){
		$("#ibm-seemore").css("background-color", "#94ebf7");
		$("#ibm-seemore p").css("color", "#ffffff");
		$("#ibm-seemore p").css("text-decoration", "none");
		}, 
		function() {
			$("#ibm-seemore").css("background-color", "#ffffff");
			$("#ibm-seemore p").css("color", "#4f4f4f");
	});

	$('#insole-seemore').hover(function(){
		$("#insole-seemore").css("background-color", "#94ebf7");
		$("#insole-seemore p").css("color", "#ffffff");
		$("#insole-seemore p").css("text-decoration", "none");
		}, 
		function() {
			$("#insole-seemore").css("background-color", "#ffffff");
			$("#insole-seemore p").css("color", "#4f4f4f");
	});

	$('#email').hover(function(){
		$("#email").css("background-color", "#ffffff");
		$("#email p").css("color", "#94ebf7");
		$("#email-icon").css("color", "#94ebf7");
		}, 
		function() {
			$("#email").css("background-color", "#fcfcfc");
			$("#email p").css("color", "#b7b7b7");
			$("#email-icon").css("color", "#b7b7b7");
	});

	$('#linkedin').hover(function(){
		$("#linkedin").css("background-color", "#ffffff");
		$("#linkedin p").css("color", "#94ebf7");
		$("#linkedin-icon").css("color", "#94ebf7");
		}, 
		function() {
			$("#linkedin").css("background-color", "#fcfcfc");
			$("#linkedin p").css("color", "#b7b7b7");
			$("#linkedin-icon").css("color", "#b7b7b7");
	});

	$('#portfolio').hover(function(){
		$("#portfolio").css("background-color", "#ffffff");
		$("#portfolio p").css("color", "#94ebf7");
		$("#portfolio-icon").css("color", "#94ebf7");
		}, 
		function() {
			$("#portfolio").css("background-color", "#fcfcfc");
			$("#portfolio p").css("color", "#b7b7b7");
			$("#portfolio-icon").css("color", "#b7b7b7");
	});

	$('#facebook').hover(function(){
		$("#facebook").css("background-color", "#ffffff");
		$("#facebook p").css("color", "#94ebf7");
		$("#facebook-icon").css("color", "#94ebf7");
		}, 
		function() {
			$("#facebook").css("background-color", "#fcfcfc");
			$("#facebook p").css("color", "#b7b7b7");
			$("#facebook-icon").css("color", "#b7b7b7");
	});
})
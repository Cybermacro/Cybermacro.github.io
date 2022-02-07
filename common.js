$(document).ready(function(){
	$(".preload").fadeOut(1800);
});

$("#options_btn").click(function() {
	$(".screenoverlay2").fadeIn(300);
	$("#options").fadeIn(700);
	$(".box").fadeOut(400);
});

$("#screen_btn").click(function() {
	$(".screenoverlay").fadeIn(300);
	$("#screenshots").fadeIn(700);
	$(".box").fadeOut(400);
});

$(".close").click(function() {
	$(".screenoverlay").fadeOut(700);
	$(".screenoverlay2").fadeOut(700);
	$("#options").fadeOut(200);
	$("#screenshots").fadeOut(200);
	$(".box").fadeIn(700);
});
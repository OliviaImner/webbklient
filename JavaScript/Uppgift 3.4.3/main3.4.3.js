$(document).ready(function meny() {
	$(".dropdown").mouseenter(function () {
		$(this).children().slideDown("fast");
	});
	$(".dropdown").mouseleave(function () {
		$(".dropdown #lista").slideUp("fast");
	});
});
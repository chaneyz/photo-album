$(document).ready(function () {

$(".album-containers a").on("click", function(e) {
		var target = $(this);
		var targetName = target.attr("href");
		
		$('.album-containers').hide();
		$('.albums-nav a').show();
		$(targetName).show();
		$('.albums-nav a').show();
	});

$(".albums-nav a").on("click", function(e) {
		// hide all `.album`
		$(".albums [id^=album]").hide();
		// show `target` `.album`
		$($(this).attr("href")).show();
	});

$("#title").on("click", function(e) {
	$("#all-photos sections").hide();
	$(".albums-nav a").hide();
	$(".album-containers").show();	


	});

// $("#all-photos a").click (function(e) {
// 		// hide all `.album`
// 		$(".albums [id^=album]").hide();
// 		// show `target` `.album`
// 		$($(this).attr("href")).show();
// 	});



});
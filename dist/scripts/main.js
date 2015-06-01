$(document).ready(function () {

$(".album-containers a").on("click", function(e) {
		var target = $(this);
		var targetName = target.attr("href");
		
		$('.album-containers').hide();
		$(targetName).show();
		$('.albums-nav').show();
	});

$(".albums-nav a").on("click", function(e) {
		// hide all `.album`
		$(".albums [id^=album]").hide();
		// show `target` `.album`
		$($(this).attr("href")).show();
	});

// $("#title").on("click", function(e) {
// 	$(".album-containers").show();
// 	$(".sidemenu").hide();

// 	});

// $(".albums-nav a").on("click", function(e) {
// 		// hide all `.album`
// 		$(".albums [id^=album]").hide();
// 		// show `target` `.album`
// 		$($(this).attr("href")).show();
// 	});



});
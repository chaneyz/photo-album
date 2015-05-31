$(document).ready(function () {

// var targetSection = $(window.location.hash);
// 	if(!targetSection.length) {
// 		targetSection = $(".albums album1-photos").eq(0);
// 	}
// 	targetSection.show();


$(".album-containers a").on("click", function(e) {
		var target = $(this);
		var targetName = target.attr("href");
		
		$('.album-containers').hide();
		$(targetName).show();
		$('.albums-nav').show();
	});



$("#albums-nav a").on("click", function(e) {
		var target = $(this);
		var targetName = target.attr("href");

		$(targetName).show();
		$('.album-containers').hide();
		$('.albums-nav').show();

	});



});
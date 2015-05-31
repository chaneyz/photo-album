$(document).ready(function () {

// $('.album-containers a').on('click', clickToView);

// function clickToView() {
// 	$('.album1-photos').show();
// 	$('.albums-nav').show();
// 	$('.album-containers').hide();
// 	}


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
});
$(document).ready(function () {

// $('.album-containers a').on('click', clickToView);

// function clickToView() {
// 	$('.album1-photos').show();
// 	$('.albums-nav').show();
// 	$('.album-containers').hide();
// 	}


var targetSection = $(window.location.hash);
	if(!targetSection.length) {
		targetSection = $(".albums album1-photos").eq(0);
	}
	targetSection.show();

$(".album-containers a").on("click", function(e) {
		var target = $(this);
		var targetName = target.attr("href");
		$('.album-containers').hide();
		$(targetName).show();
		$('.albums-nav').show();
	});

// $('.albums-nav').on('click', function(e) {
// 		var $target = $(e.target);
// 		var targetName = $target.attr('href');
// 		$('albums-containers').hide();
// 		$(targetName).show();
// 	});


// function clickToAlbum() {
// 	$('.album2').show();
// 	$('.album2-photos').show();
// 	$('.album-containers').hide();
// }

// $('.albums-nav a').click(function(e) {
// 	var target = $(e.target);
// 	if(target.is("a")) {
// 		target.show();
// 	}
// });


// $('#album1-photos').click(function(e) {
// 	var target = $(e.target);

// })

});
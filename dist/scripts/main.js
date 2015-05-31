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

$(".albums-nav a").on("click", function(e) {
  // hide all `.album`
  $(".albums [id^=album]").hide();
  // show `target` `.album`
  $($(this).attr("href")).show();
});

// $(".albums-nav a").on("click", function(e) {
// 		var target = $(this);
// 		var targetName = target.attr("href");

// 		$(target).addClass("active");
		
// 		if($(target).hasClass("active")) {
// 			$(targetName).show();
// 		}

// 		else {
// 			$(".albums").hide();
// 		}

// 		$('.album-containers').hide();
// 		$('.albums-nav').show();

// 	});

});
$(document).ready(function () {

$('.album-containers a').on('click', clickToView);

function clickToView() {
	$('.album1-photos').show();
	$('.albums-nav').show();
	$('.album-containers').hide();
	}

function clickToAlbum() {
	$('.album1').show();
	$('.album1-photos').show();
	$('.album-containers').hide();
}

});
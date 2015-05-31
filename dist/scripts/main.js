$(document).ready(function () {

$('.album-containers a').on('click', clickToView);

function clickToView() {
	$('.album1').show();
	$('.album-containers').hide();

	}
// var myInterval = setInterval(function () {
// 	console.log(new Date());
// }, 1000)


});
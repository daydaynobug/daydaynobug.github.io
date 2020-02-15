$(document).ready(function () {
	$('.list .item').eq(1).hover(function(){
	    $(".down").show()
	},function(){
	    $(".down").hide()
	});
	$("#back-top").click(function() {
	    $('body,html').animate({
	      scrollTop: 0
	    },
	    500);
	    return false;
	});
})
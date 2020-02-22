var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?a13011faf0a28bb07ae3b4b10e3e52ad";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
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
    $(".shangqiao").click(function(event) {
        if ($('#nb_icon_wrap').length > 0) {
            $('#nb_icon_wrap').click();
        }
    });
})
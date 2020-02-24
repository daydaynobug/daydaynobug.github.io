var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?a13011faf0a28bb07ae3b4b10e3e52ad";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
$(document).ready(function () {
	$('.fix-top-nav .list .item').eq(1).hover(function(){
	    $(".fix-top-nav .down").show()
	},function(){
	    $(".fix-top-nav .down").hide()
	});
    $('header .list .item').eq(1).hover(function(){
        $("header .down").show()
    },function(){
        $("header .down").hide()
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
    $(window).scroll(function(){
    	var sTop = $(window).scrollTop()
    	if (sTop<50) {
    		$('.fix-top-nav').fadeOut()
    	}else{
    		$('.fix-top-nav').fadeIn()
    	}
    })
})
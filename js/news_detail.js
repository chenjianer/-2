$(function(){
	$(".main_new ul li ").mouseover(function(){
		$(".main_new ul li ").removeAttr("class");
		$(this).attr("class","current");
		var i = $(this).index();
		$(".news_detial_control .news_detial").removeClass("current")
		$(".news_detial_control .news_detial").eq(i).addClass("current");
	})
})
$(function(){
	$(".main_new ul li ").mouseover(function(){
		$(".main_new ul li ").removeAttr("class");
		$(this).attr("class","current");
		var i = $(this).index();
		$(".news_center div").removeClass("current")
		$(".news_center div").eq(i).addClass("current");
	})
})
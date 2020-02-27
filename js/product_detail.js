$(function(){
	$(".main_new ul li ").mouseover(function(){
		$(".main_new ul li ").removeAttr("class");
		$(this).attr("class","current");
		var i = $(this).index();
		$(".product_detial_control .product_detial").removeClass("current")
		$(".product_detial_control .product_detial").eq(i).addClass("current");
	})
})
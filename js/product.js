$(function(){
	$(".main_new ul li ").mouseover(function(){
		$(".main_new ul li ").removeAttr("class");
		$(this).attr("class","current");
		var i = $(this).index();
		$(".product_list .product_center").removeClass("current")
		$(".product_list .product_center").eq(i).addClass("current");
	})
})
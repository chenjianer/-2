$(function(){
	
	$(".about_list ul li").mouseover(function(){
	$(".about_list ul li").removeAttr("class");
	$(this).attr("class","current");
	var i = $(this).index();
	$(".about_main .about_menu").removeClass("current")
	$(".about_main .about_menu").eq(i).addClass("current");
	})
	
	
	var lin = $(".about_banner ul li").length;
	var liw = $(".about_banner ul li").width();
	var ulw = liw * lin;
	$(".about_banner ul").css("width",ulw);	
	$(".about_banner ul li:first").before($(".about_banner ul li:last"));
	$(".about_banner ul").css({"margin-left":-liw});
	
	var bool = true;	
	//左按钮
	$(".about_banner .btn_prev").click(function(){
		if(bool){
			bool = false;
			$(".about_banner ul").animate({"left":liw},function(){
			$(".about_banner ul li:first").before($(".about_banner ul li:last"));
	        $(".about_banner ul").css({"left":"0"});
	        bool = true;
		});
		}
	})
	//右按钮
	$(".about_banner .btn_next").click(function(){
		if(bool){
			bool = false;
			$(".about_banner ul").animate({"left":-liw},function(){
			$(".about_banner ul li:last").after($(".about_banner ul li:first"));
	        $(".about_banner ul").css({"left":"0"});
	        bool = true;
		});
		}
	})
})
$(function(){
	/*对应点对应图*/
	$(".imgCoin ol li").mouseover(function(){
		$(".imgCoin ol li").removeAttr("class");
		$(this).attr("class","current");
		var i = $(this).index();
		$(".imgBox ul li").removeAttr("class");
		$(".imgBox ul li").eq(i).attr("class","current");
	})
	/*自动轮播*/
	var i =0;
	var time = setInterval(autoplay,1500);
	function autoplay(){
		(i>=2)?i=0:i++;
		$(".imgCoin ol li").removeAttr("class");
		$(".imgCoin ol li").eq(i).attr("class","current");
		$(".imgBox ul li").removeAttr("class");
		$(".imgBox ul li").eq(i).attr("class","current");
	}
	$(".imgBox").hover(function(){
		//清除自动播放
		clearInterval(time);
	},function(){
		time = setInterval(autoplay,1500);
	})

/*间歇滚动*/   /*通过function scrollUp2()的else不断推进来满足if以及定时器循环：function moving2()-->function scrollUp2() else-->function scrollUp2() if*/
// <ul id="Dong"> overflow:hidden;
	var Dong = document.getElementById("Dong");
	Dong.innerHTML += Dong.innerHTML;         //克隆
	var iLiHeight = 45;				//设置高度
	Dong.scrollTop = 0;							//初始值，从0开始
	var tim;					//设置全局变量tim																
	function moving2() {
		Dong.scrollTop++;							//**起始滚动使功能scrollUp2()中的if得到满足
		tim = setInterval(scrollUp2, 30);
	}											//**设置定时器按照功能scrollUp2()不断使Dong.scrollTop++；
	function scrollUp2() {
		if (Dong.scrollTop % iLiHeight ==0) {
			clearInterval(tim);										/*		注意：全局变量......    */
			setTimeout(moving2, 3000)
		}											//**暂停定时器，设置延时器（停顿。）							
		else {
			Dong.scrollTop++;								//**因为if还未满足，需继续使Dong.scrollTop++
			if (Dong.scrollTop >= Dong.scrollHeight/2) {
				Dong.scrollTop =0;        	//克隆循环
			}
		}
	}
	setTimeout(moving2,3000); 		//初始化
})

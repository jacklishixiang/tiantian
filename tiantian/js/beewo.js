$(function()
{
	$(".nav>a").eq(6).hover(function()
	{
		$(this).addClass("qu");
		$(".mainPopMenu").css("display","block");
	},function()
	{
		$(this).removeClass("qu");
		$(".mainPopMenu").css("display","none");
	})
	$(".mainPopMenu").hover(function()
	{
		$(".nav>a").eq(6).addClass("qu");
		$(this).css("display","block");
	},function()
	{
		$(".nav>a").eq(6).removeClass("qu");
		$(this).css("display","none");
	})
})



$(function()
{
	var windowgao=$(window).height();
	var fixedwarp=$(".info_right_nav").height();
	var blackTop=$('.info_right_nav li a.last');
	var fixedTop=(windowgao-fixedwarp)/2
	var num=0;
	$(".info_right_nav li").click(function()
	{
		var ind=$(".info_right_nav li").index(this)+1;
		var topVal=$("#float0"+ind).offset().top;
		$("body,html").animate({scrollTop:topVal},1000);
		num=ind-1;
	})
	
	$('.info_right_nav li a.last').click(function(){
		$('body,html').animate({scrollTop:0},1000)
	})
	
	
	$(window).scroll(scrolls)
	scrolls()
	function scrolls()
	{
		var f1,f2,f3,f4,f5,bck;
		var fixRight=$(".info_right_nav li");
		var sTop=$(window).scrollTop();
		f1 = $('#float01').offset().top;
		f2 = $('#float02').offset().top;
		f3 = $('#float03').offset().top;
		f4 = $('#float04').offset().top;
		f5 = $('#float05').offset().top;
		var topPx = sTop+fixedTop;
		
		if(sTop<=f2-100){
			   blackTop.fadeOut(300).css('display','none')
			   }
		   else{
			   blackTop.fadeIn(300).css('display','block')
			   }
		
		
		$(".info_right_nav").stop().animate({top:topPx});
		
		if(sTop>=f1)
		{
			fixRight.eq(0).addClass('onthis').siblings().removeClass('onthis');
		}
		if(sTop>=f2-100){
		   fixRight.eq(1).addClass('onthis').siblings().removeClass('onthis');
		}
		if(sTop>=f3-100)
		{
			fixRight.eq(2).addClass('onthis').siblings().removeClass('onthis');
		}
		if(sTop>=f4-100)
		{
			fixRight.eq(3).addClass('onthis').siblings().removeClass('onthis');
		}
		if(sTop>=f5-100)
		{
			fixRight.eq(4).addClass('onthis').siblings().removeClass('onthis');
		}
	}
})

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
	var num=0;
	setInterval(function()
	{
		$(".slide>div").eq(num).addClass("slideImgon").siblings().removeClass("slideImgon");
		if(num<$(".slide>div").length-1)
		{
			num++;
		}else
		{
			num=0;
		}
	},2000);
})

$(function()
{
	$(".lefs h1").animate({"top":"230px"},800).fadeIn(600).delay(200,function()
			{
				$(".lefs h2").animate({"top":"290px"},800).slideDown(800).delay(200,function()
				{
					$(".lefs .btn_down").animate({"top":"370px"},800).show(800).delay(200,function()
					{
						$(".lefs .guide").animate({"top":"458px"},800).slideToggle(1000).delay(200,function()
						{
							$(".lefs p").animate({"top":"500px"},800).fadeIn(600).delay(200,function()
							{
								$(".info_to").fadeIn(300).delay(200,function()
								{
									
								});
							});
						});
					});
				});
			});

	
	$(window).scroll(function(){
		var a = $(window).scrollTop();
		var c=$("#section1").offset().top;
		var d = $("#section2").offset().top;
		var b=$("#section3").offset().top;
		var e=$("#section4").offset().top;
		if(a >=c)
		{
			$(".lefs h1").animate({"top":"230px"},800).fadeIn(600).delay(200,function()
			{
				$(".lefs h2").animate({"top":"290px"},800).slideDown(800).delay(200,function()
				{
					$(".lefs .btn_down").animate({"top":"370px"},800).show(800).delay(200,function()
					{
						$(".lefs .guide").animate({"top":"458px"},800).slideToggle(1000).delay(200,function()
						{
							$(".lefs p").animate({"top":"500px"},800).fadeIn(600).delay(200,function()
							{
								$(".info_to").fadeIn(200);
							});
						});
					});
				});
			});
		}
		if(a>=b-400)
		{
			$(".pc_name h4").animate({"top":"0px"},1000).slideDown(500).delay(5,function()
			{
				$(".outside").animate({"left":"180px","opacity":"1"},1000);
				$(".outside p").animate({"left":"180px","opacity":"1"},1000);
				$(".outside span").animate({"left":"80px","opacity":"1"},1000);
				$(".home").animate({"right":"210px","opacity":"1"},1000);
				$(".home p").animate({"right":"210px","opacity":"1"},1000);
				$(".night .ani_right").animate({"opacity":"1"},1000);
			});
			
		}
		if(a>=e-400)
		{
			$(".android h4").animate({"top":"75px","opacity":"1"},1000).delay(200,function()
			{
				$(".on_1").css({"transform": "scale(1)","opacity":"1"}).delay(500,function()
				{
					$(".on_2").css({"transform":"scale(1)","opacity":"1"}).delay(200,function(){
						$(".on_3").animate({"right":"-113px","opacity":"1"},1000);
					})
				})
			});
		}
	})
	
})

$(function()
{
	var nums=0;
	setInterval(function()
	{
		$(".role img").eq(nums).addClass("onlk").siblings().removeClass("onlk");
		if(nums<$(".role img").length-1)
		{
			nums++;
		}else
		{
			nums=0;
		}
	},2000);
})


//第三块特效
$(function()
{
	setInterval(function(){
		$(".ani_left i").animate({"left":"-10px","opacity":"0.5"},function(){
			$(".ani_left i").animate({"left":"0px","opacity":"1"},500);
		})
	},2000);
	
	
})



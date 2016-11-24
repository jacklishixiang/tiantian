$(window).on("resize",function()
	{
		var jsonp=[
			{
				big:"url(img/1.jpg)",
				img:"img/sm-1.jpg",
			},
			{
				big:"url(img/2.jpg)",
				img:"img/sm-2.jpg"
			},
			{
				big:"url(img/3.jpg)",
				img:"img/sm-3.jpg"
			},
			{
				big:"url(img/4.jpg)",
				img:"img/sm-4.jpg"
			}
		];
		var num=0;
		var isMobile=true;
		var width=$(window).width();
		if(width<=320)
		{
			$(".bs h2").css({"width":"69%","text-indent":"0em"});
			$(".android_btm_1").css("top","533px");
			$(".android_btm_1 .bg_step_01").css({"width":"100%","height":"270px"});
			$(".android_btm_1 .bg_step_02").css({"width":"100%","height":"270px"});
			$(".android_btm_2 .bg_step_03").css({"width":"100%","height":"270px"});
			$(".android_btm_2 .bg_step_04").css({"width":"100%","height":"270px"});
			$(".android_btm_1").css("height","830px");
			$(".android_btm_2").css({"height":"624px","top":"374px"});
			$(".footer").css("top","300px");
			$(".bak").css("margin-top","22%");
			
		}else if(width<=375)
		{
			$(".android_btm_1").css("top","434px");
			$(".bs h2").css({"width":"100%","text-indent":"0em"});
			$(".android_btm_1 .bg_step_01").css({"width":"100%","height":"270px"});
			$(".android_btm_1 .bg_step_02").css({"width":"100%","height":"270px"});
			$(".android_btm_2 .bg_step_03").css({"width":"100%","height":"270px"});
			$(".android_btm_2 .bg_step_04").css({"width":"100%","height":"270px"});
			$(".android_btm_1").css("height","830px");
			$(".android_btm_2").css({"height":"624px","top":"300px"});
			$(".footer").css("top","300px");
			$(".bak").css("margin-top","55%");
		}else if(width<=414)
		{
			$(".android_btm_1").css("top","365px");
			$(".android_btm_1 .bg_step_01").css({"width":"100%","height":"270px"});
			$(".android_btm_1 .bg_step_02").css({"width":"100%","height":"270px"});
			$(".android_btm_2 .bg_step_03").css({"width":"100%","height":"270px"});
			$(".android_btm_2 .bg_step_04").css({"width":"100%","height":"270px"});
			$(".android_btm_1").css("height","830px");
			$(".android_btm_2").css("height","624px");
			$(".footer").css("top","300px");
			$(".bak").css("margin-top","40%");
		}
		else if(width<=435)
		{
			$(".android_btm_1").css("top","328px");
			$(".android_btm_1 .bg_step_01").css({"width":"100%","height":"270px"});
			$(".android_btm_1 .bg_step_02").css({"width":"100%","height":"270px"});
			$(".android_btm_2 .bg_step_03").css({"width":"100%","height":"270px"});
			$(".android_btm_2 .bg_step_04").css({"width":"100%","height":"270px"});
			$(".android_btm_1").css("height","1405px");
			$(".android_btm_2").css("height","624px");
			$(".android_btm_2").css("top","-333px");
			$(".footer").css("top","-294px");
			$(".bak").css("margin-top","38%");
		}
		else if(width<=768)
		{
			isMobile=true;
			$(".bs h2").css({"width":"100%","text-indent":"0em"});
			$(".android_btm_1").css("top","77px");
			$(".android_btm_1 .bg_step_01").css({"width":"802px","height":"653px"});
			$(".android_btm_1 .bg_step_02").css({"width":"904px","height":"656px"});
			$(".android_btm_2 .bg_step_03").css({"width":"880px","height":"592px"});
			$(".android_btm_2 .bg_step_04").css({"width":"749px","height":"696px"});
			$(".android_btm_1").css("height","1405px");
			$(".android_btm_2").css({"height":"1379px","top":"300px"});
			$(".footer").css("top","300px");
			
		}else
		{
			isMobile=false;
			$(".bs h2").css({"width":"69%","text-indent":"2em"});
			$(".android_btm_1").css("top","300px");
			$(".android_btm_1 .bg_step_01").css({"width":"802px","height":"653px"});
			$(".android_btm_1 .bg_step_02").css({"width":"904px","height":"656px"});
			$(".android_btm_2 .bg_step_03").css({"width":"880px","height":"592px"});
			$(".android_btm_2 .bg_step_04").css({"width":"749px","height":"696px"});
			$(".android_btm_2").css({"height":"1379px","top":"300px"});
			$(".android_btm_1").css("height","1405px");
			$(".footer").css("top","300px");
		};
//		var data={
//			isMobile:isMobile,
//			jsonp:jsonp
//		};
//		var html=template("BOX",data);
//		$("#inder").html("");
//		$("#inder").append(html);
//		$(".carousel-indicators").html("");
//		for(var i=0;i<jsonp.length;i++){
//      	$("<li data-target='#carousel-example-generic' data-slide-to="+((i+1)-1)+"></li>").appendTo(".carousel-indicators");
//  	}light();
//		function light(){
//  		$(".carousel-indicators li").eq(num).addClass("active").siblings().removeClass("active");
// }
//		
//			if($("item").eq(1))
//			{
//				$(".anniu").show(1000).fadeIn(500);
//				$("<div class='anniu-inner-one'><button type='button'>立即购买</button></div>").appendTo(".anniu");
//			}
			
	}).trigger("resize");//页面加载触发
		


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

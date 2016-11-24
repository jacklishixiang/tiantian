$(function() {
    $(".business").on({
        "mouseenter": function() {
            var T = $(this).children(".businessShow");
            T.show().css("z-index", 555).stop().animate({
                "opacity": 1,
                "right": "-52px"
            }, 500);
        },
        "mouseleave": function() {
            var T = $(this).children(".businessShow");
            T.stop().css("z-index", 0).animate({
                "opacity": 0,
                "right": "-272px"
            }, 500, function() {
                T.hide();
            });
        }
    });

    $('#Box').mouseenter(function() {
        $('#language').removeClass('hide');
    }).mouseleave(function() {
        $('#language').addClass('hide');
    });
    
    
})

$(function()
{
	setTimeout(function(){
		$(".topAnd").animate({"top":"180px"},1000);
		$(".topHand").animate({"top":"200px"},1000);
	},2000);
})

 $(function () {
            $("#Box").show();
        })


$(function()
{
	$(".current .topAvd").css("display","block").stop();
	setTimeout(function(){
	$(".topAvd").css("transform","perspective(200px) rotateX(5deg) rotate(0deg)");
	$(".topAvd").css("transition","all 1s ease 0s");
	},4000);
})


$(function(){
	$(".floorOne").on("load",function()
	{
		$(".topAvd").css("display","block");
	})
})

$(function()
{
	$(".floorOneBtn").hover(function()
	{
		$(this).css("box-shadow","0 0 25px #ff0753");
	},function()
	{
		$(this).css("box-shadow","0 0 0px #fff");
	})
})

$(function()
{
	$(".marksBox").css({"transform-style":"preserve-3d","transform":"translateX(0px) translateY(0px) translateZ(0) rotateX(30deg) rotateY(20deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)"});
	$(".emulator-3 .marks-3 .marksbg").css({"transform":"translateX(6px) translateY(0px) translateZ(0px) rotateX(1deg) rotateY(-4deg) rotateZ(-17deg) scaleX(1) scaleY(1) scaleZ(1)"});
})

$(function()
{
	var nums=58000;
			var box1=document.getElementById("box1");
			function tp()
			{
				if(nums>=60000)
				{
					clearInterval(timer);
				}else
				{
					nums++;
					box1.innerHTML=nums+"+";
					setTimeout(tp,0.1);	
				}
			}
			setTimeout(tp,0.1);	
})




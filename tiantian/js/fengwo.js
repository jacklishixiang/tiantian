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


//$(".game-box").hover(function()
//{
//	$(".game-box").addClass("game-box-hover");
//},function()
//{
//	$(".game-box").removeClass("game-box-hover");
//})

$(function()
{
	$(".game-box").eq(0).hover(function()
	{
		$(".game-box").eq(0).addClass("game-box-hover");
	},function()
	{
		$(".game-box").eq(0).removeClass("game-box-hover");
	})
	$(".game-box").eq(1).hover(function()
	{
		$(".game-box").eq(1).addClass("game-box-hover");
	},function()
	{
		$(".game-box").eq(1).removeClass("game-box-hover");
	})
	$(".game-box").eq(2).hover(function()
	{
		$(".game-box").eq(2).addClass("game-box-hover");
	},function()
	{
		$(".game-box").eq(2).removeClass("game-box-hover");
	})
	$(".game-box").eq(3).hover(function()
	{
		$(".game-box").eq(3).addClass("game-box-hover");
	},function()
	{
		$(".game-box").eq(3).removeClass("game-box-hover");
	})
	$(".game-box").eq(4).hover(function()
	{
		$(".game-box").eq(4).addClass("game-box-hover");
	},function()
	{
		$(".game-box").eq(4).removeClass("game-box-hover");
	})
	$(".game-box").eq(5).hover(function()
	{
		$(".game-box").eq(5).addClass("game-box-hover");
	},function()
	{
		$(".game-box").eq(5).removeClass("game-box-hover");
	})
	$(".game-box").eq(6).hover(function()
	{
		$(".game-box").eq(6).addClass("game-box-hover");
	},function()
	{
		$(".game-box").eq(6).removeClass("game-box-hover");
	})
	$(".game-box").eq(7).hover(function()
	{
		$(".game-box").eq(7).addClass("game-box-hover");
	},function()
	{
		$(".game-box").eq(7).removeClass("game-box-hover");
	})
	$(".game-box").eq(8).hover(function()
	{
		$(".game-box").eq(8).addClass("game-box-hover");
	},function()
	{
		$(".game-box").eq(8).removeClass("game-box-hover");
	})
	$(".game-box").eq(9).hover(function()
	{
		$(".game-box").eq(9).addClass("game-box-hover");
	},function()
	{
		$(".game-box").eq(9).removeClass("game-box-hover");
	})
})
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
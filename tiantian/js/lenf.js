$(function() {
	function e(a) {
		var b = -a * f;
		$("#focus ul").stop(!0, !1).animate({
			left: b
		}, 300);
		$(".focusLink a").removeClass("on").eq(a).addClass("on");
		$(".focusLink a").stop(!0, !1).animate({
			opacity: "1"
		}, 300).eq(a).stop(!0, !1).animate({
			opacity: "1"
		}, 300)
	}
	var f = $("#focus").width(),
		g = $("#focus ul li").length,
		c = 0,
		h;
	$(".focusLink a").mouseenter(function() {
		c = $(".focusLink a").index(this);
		e(c)
	}).eq(0).trigger("mouseenter");
	$("#focus ul").css("width", f * g);
	$("#focus").hover(function() {
		clearInterval(h)
	}, function() {
		h = setInterval(function() {
			e(c);
			c++;
			c == g && (c = 0)
		}, 4E3)
	}).trigger("mouseleave");
	var d = function() {
		this.time = null;
		this.interval = 1E3;
		this.index = 0;
		this.playIng = !0;
		this.leng = 0
	};
	d.prototype.setTime = function() {
		var a = this;
		this.time = window.setTimeout(function() {
			var b = a.index + 1;
			b >= a.leng && (b = 0);
			a.play(b)
		}, this.interval)
	};
	d.prototype.play = function(a) {
		this.index = a;
		this.ui(this.index);
		this.playIng && this.setTime()
	};
//	(function() {
//		var a = new d,
//			b = $("#bannerBgBox").children().length;
//		a.ui = function(a) {
//			$("#bannerBgBox").children().eq(a).addClass("slideImgOn").siblings().removeClass("slideImgOn");
//			$("#role").children("img").eq(a).addClass("on").siblings().removeClass("on");
//		};
//		a.leng = b;
//		a.interval = 2500;
//		a.play(0)
//	})();
//	$(window).scroll(function() {
//		var a = $(window).scrollTop(),
//			b = $("#wrap .pages"),
//			c = $("#section1").offset().top,
//			d = $("#section2").offset().top,
//			e = $("#section3").offset().top,
//			f = $("#section4").offset().top;
//		a >= c && b.eq(0).addClass("animate").siblings().removeClass("animate");
//		a >= d - 200 && b.eq(1).addClass("animate").siblings().removeClass("animate");
//		a >= e - 400 && b.eq(2).addClass("animate").siblings().removeClass("animate");
//		a >= f - 400 && b.eq(3).addClass("animate").siblings().removeClass("animate")
//	})
});


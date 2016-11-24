$(function () {
		var flag=true;
		// 点击电脑端
		var disInt;
		$("#web").on("click",function() {
			if (flag) {
				return;
			}else{
			$(this).addClass('webAct').removeClass('web');
			$("#andr").addClass('andr').removeClass('andrAct');
			$("#andLeft").removeClass('active');
			$("#andRight").removeClass('active');
			$("#disApk").css("display","none");
			flag=true;
			}
		})
		// 点击安卓手机端
		$("#andr").on("click",function() {
			if (!flag) {
				return;
			}else{
			$(this).addClass('andrAct').removeClass('andr');
			$("#web").addClass('web').removeClass('webAct');
			$("#andLeft").addClass('active');
			$("#andRight").addClass('active');
			disInt=setTimeout(function () {
				/* body... */
				$("#disApk").css("display","block");
				flag=false;
			}, 500);
			}
		})
})
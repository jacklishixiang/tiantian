var app=angular.module('findApp', []);
app.controller('findCtrl', ['$scope', function($scope){
	$scope.yzm=1;
	var rep=1;
	var yzmCode=[
	{'index':1,'code':'6cAn'},
	{'index':2,'code':'U8rp'},
	{'index':3,'code':'8tLc'},
	{'index':4,'code':'y2QC'},
	{'index':5,'code':'mWWG'},
	{'index':6,'code':'8Yfy'},
	{'index':7,'code':'DDTk'},
	{'index':8,'code':'LdE6'}]
	$scope.change=function () {
		$scope.yzm=Math.ceil(Math.random()*8);
		if (rep==$scope.yzm) {
			$scope.change();
		}
		rep=$scope.yzm;
		console.log($scope.yzm);
	}
	$scope.suit=function () {
		console.log($scope.userYzm);
		console.log
		if (yzmCode[$scope.yzm-1].code==$scope.userYzm) {
			alert("重置链接已发送至邮箱，请验收！");
		}
		else{
			alert("验证错误，请重新输入");
		}
	}
}])
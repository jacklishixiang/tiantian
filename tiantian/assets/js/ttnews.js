var app=angular.module('ttnewApp', []);
app.controller('ttnewCtrl', ['$scope','$http',function($scope,$http){
	$scope.page=1;
	$scope.start=($scope.page-1)*10;
	$scope.end=$scope.page*10-$scope.start;
	$http.get('assets/js/json/ttnews.json').success(function (response) {
		/* body... */
		$scope.response=response.txt;
		console.log($scope.response);
		$scope.data=$scope.response.slice(0);
		$scope.tasks=$scope.data.splice($scope.start,$scope.end);
		console.log($scope.response);
	})
	$scope.nextClick=function (argument) {
		if ($scope.page>=Math.ceil($scope.response.length/10)) {
			return;
		}
		$scope.page++;
		$scope.data=$scope.response.slice(0);
		$scope.start=($scope.page-1)*10;
	$scope.end=$scope.page*10-$scope.start;
		$scope.tasks=$scope.data.splice($scope.start,$scope.end);
		console.log($scope.tasks);
	}
	$scope.preClick=function (argument) {
		if ($scope.page<=1) {
			return;
		}
		$scope.page--;
		$scope.data=$scope.response.slice(0);
		$scope.start=($scope.page-1)*10;
	$scope.end=$scope.page*10-$scope.start;
		$scope.tasks=$scope.data.splice($scope.start,$scope.end);
		console.log($scope.tasks);
	}
}]);
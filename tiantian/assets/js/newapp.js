var app=angular.module('newapp', []);
app.controller('newsTxt', ['$scope','$http',function($scope,$http){
	$scope.page=1;
	$scope.start=($scope.page-1)*10;
	$scope.end=$scope.page*10-$scope.start;
	$http.get('assets/js/json/news.json').success(function (response) {
		/* body... */
		$scope.response=response.newsTxt;
		$scope.data=$scope.response.slice(0);
		$scope.tasks=$scope.data.splice($scope.start,$scope.end);
		console.log($scope.response);
	})
	$scope.nextClick=function (argument) {
		if ($scope.page>=2) {
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
app.controller('rank', ['$scope','$http', function($scope,$http){
	$http.get('assets/js/json/news.json').success(function (response) {
		/* body... */
		$scope.tasks=response.rank;
		// console.log($scope.tasks);
	})
}]);
app.controller('surf', ['$scope','$http', function($scope,$http){
	$http.get('assets/js/json/news.json').success(function (response) {
		/* body... */
		$scope.tasks=response.surf;
		// console.log($scope.tasks);
	})
}]);
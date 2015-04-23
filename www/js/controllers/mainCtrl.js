angular.module('app').controller('mainCtrl', function($scope) {

	$scope.nbSlices = 6;
	$scope.slices = [];

	var getCircleX = function(rad) {
		return 100 + 97 * Math.cos(rad * Math.PI);
	};

	var getCircleY = function(rad) {
		return 100 + 97 * Math.sin(rad * Math.PI);
	};

	$scope.getSlices = function() {
		$scope.slices = [];

		if($scope.nbSlices > 1) {
			var step = ($scope.nbSlices < 2 ? 2 : 2 / $scope.nbSlices);
			var current = 0;
			for(var i = 0; i < $scope.nbSlices; i++) {
				$scope.slices.push({
					x1: getCircleX(step * i),
					y1: getCircleY(step * i)
				});
			}
		}
	};

	$scope.getSlices();
});
'use strict';
angular.module('myApp.controllers', [])
.controller('MapCtrl', function ($scope, $timeout) {
	$scope.person = {
		firstName: "Jane",
		lastName: "Doe"
	};
	$scope.mask = "(999) 999-9999 ext 99";

	$scope.myMarkers = [];

	$scope.mapOptions = {
		center: new google.maps.LatLng(37.782, -122.418),
		zoom: 4,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	};

	var cloudLayer = new google.maps.weather.CloudLayer();

	$timeout(function(){
		cloudLayer.setMap($scope.myMap);
	}, 1000);

	$scope.getModel = function () {
		return JSON.stringify($scope.person, undefined, 2);
	};

	var colors = ["#CCC", "#F77", "#9F9"];
	var activeColor = 0;
	$scope.modelStatus = function () {
		return { backgroundColor: colors[activeColor] };
	};
	$scope.focusCallback = function () {
		activeColor = 1;
	};
	$scope.blurCallback = function () {
		activeColor = 2;
		$timeout(function () { activeColor = 0; }, 2000);
	};

	$scope.helpKeyDown = function ($event) {
		console.log($event);
		$scope.helpText = "Fácil. Basta digitar seu nome.";
		$timeout(function() { $scope.helpText = "" }, 10000);
	};

	$scope.tooltip = function() {
		if (!$scope.person.hasOwnProperty("phone")) {
			return $scope.person.firstName + " has no phone?";
		}
		else { return "All good."}
	};
});
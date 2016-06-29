var displayInfo = angular.module("displayInfo");

displayInfo.controller('displayInfoCtrl', ['$scope', '$http', function($scope, $http) { 
    
    $scope.showFaculties = function () {
        $scope.result = "Please wait..";
        $http.get("http://ec2-52-38-234-109.us-west-2.compute.amazonaws.com//Faculty/getRecords")
            .then(function(response) {
                $scope.result = response.data;
        });
    }  
    $scope.showGroups = function(event) {
    	$http.get("http://ec2-52-38-234-109.us-west-2.compute.amazonaws.com//Group/getRecords")
            .then(function(response) {
                $scope.resultGroup = response.data;
        });
	};             
}]);
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
                
                console.log(event.target.innerText);
                $scope.groupsSelected = [];
                for (var i=0; i<$scope.result.length; i++) {
                    if ($scope.result[i].faculty_name == event.target.innerText) {
                        $scope.universitySelected = $scope.result[i].faculty_id;
                        break;
                    }
                }

                for (var j=0; j<$scope.resultGroup.length; j++) {
                    if ($scope.resultGroup[j].faculty_id == $scope.universitySelected) {
                        $scope.groupsSelected.push($scope.resultGroup[j]);
                    }
                }
                console.log($scope.groupsSelected);
        });
	}; 
    $scope.showStudents = function(event) {
        $http.get("http://ec2-52-38-234-109.us-west-2.compute.amazonaws.com//Student/getRecords")
            .then(function(response) {
                $scope.resultStudents = response.data;
                
                console.log(event.target.innerText);
                $scope.studentsSelected = [];
                for (var i=0; i<$scope.resultGroup.length; i++) {
                    if ($scope.resultGroup[i].group_name == event.target.innerText) {
                        $scope.groupSelectedName = $scope.resultGroup[i].group_id;
                        break;
                    }
                }

                for (var j=0; j<$scope.resultStudents.length; j++) {
                    if ($scope.resultStudents[j].group_id == $scope.groupSelectedName) {
                        $scope.studentsSelected.push($scope.resultStudents[j]);
                    }
                }
                console.log($scope.studentsSelected);
                
        });
    };            
}]);
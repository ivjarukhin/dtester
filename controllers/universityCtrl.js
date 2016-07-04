var displayInfo = angular.module("displayInfo");

displayInfo.controller('displayInfoCtrl', ['$scope', '$filter', '$http', 'dataService', function($scope, $filter, $http, dataService) { 
    
    $scope.showFaculties = function () {
        $scope.result = "Please wait..";
        dataService.getFaculties()
        .then(
            function(response) {
                $scope.pageNum = 1;
                $scope.result = response;
                $scope.populateResults = $scope.firstPageResult($scope.pageNum, $scope.result);
            }
        );
    }

    $scope.showGroups = function(event) {
        dataService.getGroups()
        .then(
            function(response) {
                $scope.pageNumGroup = 1;
                $scope.resultGroup = response;
                $scope.groupsSelected = $filter("subdivision")($scope.resultGroup, $scope.result, event.target.innerText, "faculty");
                $scope.populateResultsGroup = $scope.firstPageResult($scope.pageNumGroup, $scope.groupsSelected);
            }
        );
	}; 

    $scope.showStudents = function(event) {
        dataService.getStudents()
        .then(
            function(response) {
                $scope.pageNumStud = 1;
                $scope.resultStudents = response;
                $scope.studentsSelected = $filter("subdivision")($scope.resultStudents, $scope.resultGroup, event.target.innerText, "group"); 
                $scope.populateResultsStudents = $scope.firstPageResult($scope.pageNumStud, $scope.studentsSelected); 
            }
        );
    }; 

    $scope.firstPageResult = function(page, result) {
        return result.slice((page - 1) * 7, (page - 1) * 7 + 7);
    };
            
}]);

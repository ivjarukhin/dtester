var displayInfo = angular.module("displayInfo");
 
displayInfo.service('dataService', ['$http', '$q', function($http, $q){
 
    return {
         
        getFaculties: function() {
            return $http.get("http://ec2-52-38-234-109.us-west-2.compute.amazonaws.com/Faculty/getRecords")
                .then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        return $q.reject(errResponse);
                    }
                );
        },
        getGroups: function() {
            return $http.get("http://ec2-52-38-234-109.us-west-2.compute.amazonaws.com/Group/getRecords")
                .then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        return $q.reject(errResponse);
                    }
                );
        },
        getStudents: function() {
            return $http.get("http://ec2-52-38-234-109.us-west-2.compute.amazonaws.com/Student/getRecords")
                .then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        return $q.reject(errResponse);
                    }
                );
        }
    }    
}]);
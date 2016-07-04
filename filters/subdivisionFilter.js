var displayInfo = angular.module("displayInfo");

displayInfo.filter('subdivision', function() {
    return function(arrayFiltering, arrayComparing, filterCriteria, department) {
        var filteringResult = [];
            for (var i=0; i<arrayComparing.length; i++) {
                if (arrayComparing[i][department+"_name"] == filterCriteria) {
                    itemSelectedName = arrayComparing[i][department+"_id"];
                    break;
                }
            }

            for (var j=0; j<arrayFiltering.length; j++) {
                if (arrayFiltering[j][department+"_id"] == itemSelectedName) {
                    filteringResult.push(arrayFiltering[j]);
                }
            }
        return filteringResult;
    };
});
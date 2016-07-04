var displayInfo = angular.module("displayInfo");

displayInfo.directive('pagination', function() {
  return {
    restrict: 'E',
    scope: {
        populateResults: '=',
        pageNum: '=',
        result: '='
    },
    template: '<div class="text-center" ng-show="populateResults.length"><b>{{pageNum}} сторінка з {{pagesCount}}</b></div>' + 
        '<div class="text-center"><a ng-show="pageNum > 1" ng-click="changePage(false)">Попередня сторінка</a>' + 
        '<a ng-show="populateResults.length && pageNum * 7 < result.length" ng-click="changePage(true)">Наступна сторінка</a></div>',
    link: function (scope) {
        console.log(scope);
        scope.pagesCount = "1";
        scope.changePage  = function (pageOrder) {
            if (pageOrder) {
                scope.pageNum++;
            } else {
                scope.pageNum--;
            }    
            
            if ((scope.result.length / 7) > Math.floor(scope.result.length / 7)) {
                scope.pagesCount = Math.floor(scope.result.length / 7) + 1;
            } else {
                scope.pagesCount = Math.floor(scope.result.length / 7);
            }

            scope.populateResults = scope.result.slice((scope.pageNum - 1) * 7, (scope.pageNum - 1) * 7 + 7);
        };  
    }
  };
});
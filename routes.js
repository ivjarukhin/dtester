angular.module("displayInfo", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/main');
    
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'templates/mainFile.html'
        })
        .state('info', {
            url: '/info',
            templateUrl: 'templates/university.html',
            controller: 'displayInfoCtrl'      
        });       
});
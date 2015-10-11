// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // pros page that will use the ProController
        .when('/pros', {
            templateUrl: 'views/pro.html',
            controller: 'ProController'
        });

    $locationProvider.html5Mode(true);

}]);

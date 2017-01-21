var app = angular.module('cloudEmoticonWebsite', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: './pages/homepage.html'
        })
        .when('/mobile', {
            templateUrl: './pages/mobile.html'
        })
        .when('/desktop', {
            template: 'desktop'
        })
        .otherwise({
            redirectTo: '/'
        })
});
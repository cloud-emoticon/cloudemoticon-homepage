var app = angular.module('cloudEmoticonWebsite', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: './pages/homepage.html'
        })
        .when('/mobile', {
            template: 'mobile'
        })
        .when('/desktop', {
            template: 'desktop'
        })
        .otherwise({
            redirectTo: '/'
        })
});
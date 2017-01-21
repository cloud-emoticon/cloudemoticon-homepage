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
            templateUrl: './pages/desktop.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});

app.run(function ($rootScope, $location) {
    var path = function () {
        return $location.path();
    };
    $rootScope.$watch(path, function (new_route, old_route) {
        console.log(new_route, old_route);
        $rootScope.activeTab = new_route;
    });
});
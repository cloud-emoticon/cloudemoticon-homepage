var app = angular.module('cloudEmoticonWebsite', ['ngRoute', 'ng.deviceDetector']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: './pages/homepage.html',
            controller: 'HomepageController'
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
        $rootScope.activeTab = new_route;
    });
});

app.constant('Platforms', {
    'ios': {
        text: 'iOS',
        link: 'https://itunes.apple.com/cn/app/yun-yan-wen-zi-cloud-emoticon/id796508155?mt=8'
    },
    'android': {
        text: 'Android',
        link: 'https://play.google.com/store/apps/details?id=org.ktachibana.cloudemoji'
    },
    'windows-phone': {
        text: 'Windows Phone',
        link: 'http://www.windowsphone.com/en-us/store/app/cloud-emoticon/5890cf94-b104-4997-9fb7-7af6c94ed863'
    },
    'windows': {
        text: 'Windows',
        link: 'https://github.com/kinosang/cloudemoji_win/tree/master/release'
    }
});
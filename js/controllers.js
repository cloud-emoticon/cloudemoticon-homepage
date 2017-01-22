app.controller('HomepageController', function ($scope, deviceDetector, Platforms) {
    var os = deviceDetector.os;
    console.log(os);
    if (Platforms[os]) {
        $scope.name = Platforms[os].name;
        $scope.link = Platforms[os].link;
        $scope.show = true
    } else {
        $scope.show = false
    }
});
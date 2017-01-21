app.controller('HomepageController', function ($scope, deviceDetector, Platforms) {
    var os = deviceDetector.os;
    console.log(os);
    if (Platforms[os]) {
        $scope.text = Platforms[os].text;
        $scope.link = Platforms[os].link;
        $scope.show = true
    } else {
        $scope.show = false
    }
});
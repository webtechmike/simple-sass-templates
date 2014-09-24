var app = angular.module('app', []);

app.directive('leftColumn', function () {
    return {
        restrict: "E",
        templateUrl: "templates/leftcolumn.html"
    }
});

app.directive('rightColumn', function () {
    return {
        restrict: "E",
        templateUrl: "templates/rightcolumn.html"
    }
});

app.directive('threeColumn', function () {
    return {
        restrict: "E",
        templateUrl: "templates/threecolumn.html"
    }
});
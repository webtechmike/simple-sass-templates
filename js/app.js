"use strict";

var app = angular.module('app', []);

app.directive('sixteen', function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "templates/layouts/16.html"
    }
});

app.directive('eighteen', function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "templates/layouts/18.html"
    }
});

app.directive('footer', function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "templates/footer.html"
    }
});

app.directive('footer', function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "templates/footer.html"
    }
});

app.directive('header', function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "templates/header.html"
    }
});

app.directive('footer', function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "templates/footer.html"
    }
});

app.directive('left', function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "templates/left.html"
    }
});

app.directive('right', function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "templates/right.html"
    }
});

app.directive('mainMenu', function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "templates/main-menu.html"
    }
});

app.directive('edit', function () {
    return {
        restrict: "A",
        templateUrl: "templates/edit-actions.html"
    }
});
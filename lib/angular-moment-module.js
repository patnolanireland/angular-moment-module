/*global angular */
(function () {
    'use strict';

    angular
        .module('angular-moment-module', [])
        .factory('moment', ['$window', function ($window) {
            return $window.moment;
        }]);
})();
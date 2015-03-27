'use strict';
angular.module('BlackBook',[
    'ngRoute'
])

.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/',
        {
            templateUrl: 'public/views/home.html',
            controller: 'IdxController'
        })
    }]);
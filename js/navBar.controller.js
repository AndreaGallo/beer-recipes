'use strict'

angular.module('app')  
        .controller('navBarCtrl',navBarCtrl);

navBarCtrl.$inject = ['$scope','userInfo'];

function navBarCtrl($scope,userInfo){
    $scope.userName = userInfo.name;
}
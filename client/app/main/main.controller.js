'use strict';

angular.module('afsphonegapApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth, constants) {
    $scope.awesomeThings = [];

    $http.get(constants.BACKEND_URL + '/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post(constants.BACKEND_URL + '/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete(constants.BACKEND_URL + '/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });

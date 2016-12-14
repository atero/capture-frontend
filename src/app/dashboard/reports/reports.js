/**
 * Angular module for frontend.dashboard.reports component. Basically this file contains actual angular module initialize
 * and route definitions for this module.
 */
(function() {
  'use strict';

  // Define frontend.public module
  angular.module('frontend.dashboard.reports', []);

  // Module configuration
  angular.module('frontend.dashboard.reports').config([
    '$stateProvider',
    function($stateProvider) {
      $stateProvider.state('dashboard.reports', {
        url: '/dashboard',
        data: {
          access: 1
        },
        views: {
          'content@': {
            templateUrl: '/frontend/dashboard/reports/reports.html',
            controller: 'ReportsController'
          }
        }
      });
    }
  ]);

  angular.module('frontend.dashboard.reports').controller('ReportsController', [
    '$scope',
    '$http',
    '$sailsSocket',
    'BackendConfig',
    function($scope, $http, $sailsSocket, BackendConfig) {
      // Initialize used scope variables
      $scope.title = 'Reports';
    }
  ]);
}());

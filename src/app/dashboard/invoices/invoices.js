/**
 * Angular module for frontend.dashboard.invoices component. Basically this file contains actual angular module initialize
 * and route definitions for this module.
 */
(function() {
  'use strict';

  // Define frontend.public module
  angular.module('frontend.dashboard.invoices', []);

  // Module configuration
  angular.module('frontend.dashboard.invoices')
    .config([
      '$stateProvider',
      function($stateProvider) {
        $stateProvider
          .state('dashboard.invoices', {
            url: '/invoices',
            data: {
              access: 1
            },
            views: {
              'content@': {
                templateUrl: '/frontend/dashboard/invoices/invoices.html',
                controller: 'InvoicesController'
              },

            }
          })
        ;
      }
    ])
  ;
  angular.module('frontend.dashboard.invoices').controller('InvoicesController', [
    '$scope',
    '$http',
    '$sailsSocket',
    'BackendConfig',
    function($scope, $http, $sailsSocket, BackendConfig, UserService, AuthService) {
      // Initialize used scope variables
      $scope.title = 'Invoices';
    }
  ]);
}());

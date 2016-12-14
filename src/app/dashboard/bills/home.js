/**
 * Angular module for frontend.dashboard.home component. Basically this file contains actual angular module initialize
 * and route definitions for this module.
 */
(function() {
  'use strict';

  // Define frontend.public module
  angular.module('frontend.dashboard.home', []);

  // Module configuration
  angular.module('frontend.dashboard.home')
    .config([
      '$stateProvider',
      function($stateProvider) {
        $stateProvider
          .state('dashboard.home', {
            url: '/dashboard',
            data: {
              access: 1
            },
            views: {
              'content@': {
                templateUrl: '/frontend/dashboard/home/home.html'
              },

            }
          })
        ;
      }
    ])
  ;
}());

/**
 * Messages component which is divided to following logical components:
 *
 *  Controllers
 *
 * All of these are wrapped to 'frontend.auth.signup' angular module.
 */
(function() {
  'use strict';

  // Define frontend.auth.signup angular module
  angular.module('frontend.core.auth.signup', []);

  // Module configuration
  angular.module('frontend.core.auth.signup')
    .config([
      '$stateProvider',
      function config($stateProvider) {
        $stateProvider
          // signup
          .state('auth.signup', {
            url: '/signup',
            data: {
              access: 0
            },
            views: {
              'content@': {
                templateUrl: '/frontend/core/auth/signup/signup.html',
                controller: 'SignupController'
              }
            }
          })
        ;
      }
    ])
  ;
}());

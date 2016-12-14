/**
 * This file contains all necessary Angular controller definitions for 'frontend.auth.signup' module.
 *
 * Note that this file should only contain controllers and nothing else.
 */
(function() {
  'use strict';

  /**
   * signup controller to handle user's signup to application. Controller uses 'Auth' service to make actual HTTP
   * request to server and try to authenticate user.
   *
   * After successfully signup Auth service will store user data and JWT token via 'Storage' service where those are
   * asked whenever needed in application.
   *
   * @todo
   *  1) different authentication providers
   *  2) user registration
   */
  angular.module('frontend.core.auth.signup')
    .controller('SignupController', [
      '$scope', '$state',
      'AuthService', 'FocusOnService',
      function controller(
        $scope, $state,
        AuthService, FocusOnService
      ) {
        // Already authenticated so redirect back to books list
        if (AuthService.isAuthenticated()) {
          $state.go('dashboard.books');
        }

        // Scope function to perform actual signup request to server
        $scope.signup = function signup() {
          AuthService
            .signup($scope.credentials)
            .then(
              function successCallback() {
                $state.go('dashboard.books');
              },
              function errorCallback() {
                _reset();
              }
            )
          ;
        };

        /**
         * Private helper function to reset credentials and set focus to username input.
         *
         * @private
         */
        function _reset() {
          FocusOnService.focus('username');

          // Initialize credentials
          $scope.credentials = {
            identifier: '',
            password: ''
          };
        }

        _reset();
      }
    ])
  ;
}());

/**
 * Angular module for dashboard component. This component is divided to following logical components:
 *
 *  frontend.dashboard.home
 *
 * Each component has it own configuration for ui-router.
 */
(function() {
  'use strict';

  // Define frontend.admin module
  angular.module('frontend.dashboard', [
    'frontend.dashboard.home',
    'frontend.dashboard.invoices',
    'frontend.dashboard.reports',

  ]);

  // Module configuration
  angular.module('frontend.dashboard')
    .config([
      '$stateProvider',
      function($stateProvider) {
        $stateProvider
          .state('dashboard', {
            parent: 'frontend',
            data: {
              access: 1
            },
            views: {
              'content@': {
                controller: [
                  '$state',
                  function($state) {
                    $state.go('dashboard.home');
                  }
                ]
              },
              'pageNavigation@': {
                templateUrl: '/frontend/core/layout/partials/navigation.html',
                controller: 'NavigationController',
                resolve: {
                  _items: [
                    'ContentNavigationItems',
                    function resolve(ContentNavigationItems) {
                      return ContentNavigationItems.getItems('dashboard');
                    }
                  ]
                }
              }
            }
          })
        ;
      }
    ])
  ;
}());

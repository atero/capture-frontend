/**
 * This file contains all necessary Angular service definitions for 'frontend.core.layout' module.
 *
 * Note that this file should only contain services and nothing else.
 */
(function() {
  'use strict';

  // Generic service to return all available menu items for main level navigation.
  angular.module('frontend.core.layout')
    .factory('HeaderNavigationItems', [
      'AccessLevels',
      function factory(AccessLevels) {
        return [
          // {
          //   state: 'dashboard.features',
          //   title: 'Features',
          //   access: AccessLevels.anon
          // },
          // {
          //   state: 'dashboard.pricing',
          //   title: 'Pricing',
          //   access: AccessLevels.anon
          // },
          // {
          //   state: 'dashboard.customers',
          //   title: 'Customers',
          //   access: AccessLevels.anon
          // },
          // {
          //   state: 'admin',
          //   title: 'Admin',
          //   access: AccessLevels.admin
          // }
        ];
      }
    ])
  ;

  // Generic service to return all available menu items for specified sub level navigation.
  angular.module('frontend.core.layout')
    .factory('ContentNavigationItems', [
      'AccessLevels',
      function factory(AccessLevels) {
        var items = {
          'dashboard': [
            {
              state: 'dashboard.home',
              title: 'Dashboard',
              access: AccessLevels.user
            },
            {
              state: 'dashboard.reports',
              title: 'Reports',
              access: AccessLevels.user
            },
            {
              state: 'dashboard.invoices',
              title: 'Invoices',
              access: AccessLevels.user
            },
            {
              state: 'dashboard.bills',
              title: 'Bills',
              access: AccessLevels.user
            },
            {
              state: 'dashboard.estimates',
              title: 'Estimates',
              access: AccessLevels.user
            },
            {
              state: 'dashboard.bills',
              title: 'Track',
              access: AccessLevels.user
            },
            {
              state: 'dashboard.clients',
              title: 'Clients',
              access: AccessLevels.user
            },
            {
              state: 'dashboard.settings',
              title: 'Business Settings',
              access: AccessLevels.user
            }
          ],
          'admin': [
            {
              state: '',
              title: 'Users',
              access: AccessLevels.admin
            },
            {
              state: '',
              title: 'Request log',
              access: AccessLevels.admin
            },
            {
              state: 'admin.login-history',
              title: 'Login history',
              access: AccessLevels.admin
            }
          ]
        };

        return {
          getItems: function getItems(section) {
            return items[section];
          }
        };
      }
    ])
  ;

  /**
   * Service which contains information about all used files (back- and frontend) within specified example page.
   * These files are shown in example page info modal, so that users can easily see what current example page is
   * using to do things.
   */
  angular.module('frontend.core.layout')
    .factory('NavigationInfoModalFiles', [
      '_',
      function factory(_) {
        /**
         * Base url for code repository.
         *
         * @type {string}
         */
        var repository = 'https://github.com/tarlepp/angular-sailsjs-boilerplate/blob/master/';

        /**
         * Type configuration for files.
         *
         * @type    {{
         *            generic: {
         *              controller: string,
         *              data: string,
         *              model: string,
         *              template: string
         *            },
         *            backend: {
         *              baseController: string,
         *              baseModel: string
         *            },
         *            frontend: {
         *              module: string,
         *              listConfig: string
         *            }
         *          }}
         */
        var types = {
          generic: {
            controller: 'Used controller.',
            data: 'Initial data that is loaded to database at first time that sails lift.',
            model: 'Used model.',
            template: 'Used HTML template.'
          },
          backend: {
            baseController: 'Generic base controller that is extended by real controllers.',
            baseModel: 'Generic base model that is extended by real models.',
            policy: {
              authenticated: 'Authentication policy that will check if request contains correct JWT or not.',
              passport: 'Policy to initialize passport.js library to use.'
            }
          },
          frontend: {
            module: 'Current angular module configuration.',
            modelFactory: 'Generic model factory that all individual models uses. This contains default functions for each model.',
            dataService: 'Generic data service, which handles all the communications between back- and frontend via $sailsSocket service.',
            listConfig: 'Service that contains all list specified configurations (title items, default configurations, etc.).',
            backendConfig: 'Backend config, this contains backend url and other "static" backend specified definitions.',
            authInterceptor: 'Authentication interceptor, that attach JWT to $http and $sailsSockets requests.',
            errorInterceptor: 'Generic error interceptor, this will handle all error situations and shows those to user.',
            directive: 'Used directive(s) in this example page.'
          }
        };

        /**
         * Generic files that are used across each GUI example.
         *
         * @type    {{}}
         */
        var generic = {
          'backend': {
            'Backend <span class="text-muted">generic</span>': [
              {
                url: repository + 'backend/api/base/controller.js',
                title: 'controller.js',
                info: types.backend.baseController
              },
              {
                url: repository + 'backend/api/base/model.js',
                title: 'model.js',
                info: types.backend.baseModel
              },
              {
                url: repository + 'backend/api/policies/Authenticated.js',
                title: 'Authenticated.js',
                info: types.backend.policy.authenticated
              },
              {
                url: repository + 'backend/api/policies/Passport.js',
                title: 'Passport.js',
                info: types.backend.policy.passport
              }
            ]
          },
          'frontend': {
            'Frontend <span class="text-muted">generic</span>': [
              {
                url: repository + 'frontend/src/app/core/services/ListConfigService.js',
                title: 'ListConfigService.js',
                info: types.frontend.listConfig
              },
              {
                url: repository + 'frontend/src/app/core/models/factory.js',
                title: 'factory.js',
                info: types.frontend.modelFactory
              },
              {
                url: repository + 'frontend/src/app/core/services/DataService.js',
                title: 'DataService.js',
                info: types.frontend.dataService
              },
              {
                url: repository + 'frontend/src/app/core/constants/BackendConfig.js',
                title: 'BackendConfig.js',
                info: types.frontend.backendConfig
              },
              {
                url: repository + 'frontend/src/app/core/interceptors/AuthInterceptor.js',
                title: 'AuthInterceptor.js',
                info: types.frontend.authInterceptor
              },
              {
                url: repository + 'frontend/src/app/core/interceptors/ErrorInterceptor.js',
                title: 'ErrorInterceptor.js',
                info: types.frontend.errorInterceptor
              }
            ]
          }
        };

        /**
         * Actual data for each example page. This data contains used files in each example GUI item, these
         * files are grouped to following sections:
         *  - backend
         *  - backend (generic)
         *  - frontend
         *  - frontend (generic)
         *
         * @type    {{}}
         */
        var data = {
          'dashboard.books': {
            'Backend': [
              {
                url: repository + 'backend/api/models/Book.js',
                title: 'Book.js',
                info: types.generic.model
              },
              {
                url: repository + 'backend/api/controllers/BookController.js',
                title: 'BookController.js',
                info: types.generic.controller
              },
              {
                url: repository + 'backend/test/fixtures/Book.json',
                title: 'Book.json',
                info: types.generic.data
              }
            ],
            'Frontend': [
              {
                url: repository + 'frontend/src/app/dashboard/book/book.js',
                title: 'book.js',
                info: types.frontend.module
              },
              {
                url: repository + 'frontend/src/app/dashboard/book/book-controllers.js',
                title: 'book-controllers.js',
                info: types.generic.controller
              },
              {
                url: repository + 'frontend/src/app/dashboard/book/book-models.js',
                title: 'book-models.js',
                info: types.generic.model
              },
              {
                url: repository + 'frontend/src/app/dashboard/book/list.html',
                title: 'list.html',
                info: types.generic.template
              }
            ]
          },
          'dashboard.authors': {
            'Backend': [
              {
                url: repository + 'backend/api/models/Author.js',
                title: 'Author.js',
                info: types.generic.model
              },
              {
                url: repository + 'backend/api/controllers/AuthorController.js',
                title: 'AuthorController.js',
                info: types.generic.controller
              },
              {
                url: repository + 'backend/test/fixtures/Author.json',
                title: 'Author.json',
                info: types.generic.data
              }
            ],
            'Frontend': [
              {
                url: repository + 'frontend/src/app/dashboard/author/author.js',
                title: 'author.js',
                info: types.frontend.module
              },
              {
                url: repository + 'frontend/src/app/dashboard/author/author-controllers.js',
                title: 'author-controllers.js',
                info: types.generic.controller
              },
              {
                url: repository + 'frontend/src/app/dashboard/author/author-models.js',
                title: 'author-models.js',
                info: types.generic.model
              },
              {
                url: repository + 'frontend/src/app/dashboard/author/list.html',
                title: 'list.html',
                info: types.generic.template
              }
            ]
          },
          'dashboard.messages': {
            'Frontend': [
              {
                url: repository + 'frontend/src/app/dashboard/messages/messages.js',
                title: 'messages.js',
                info: types.frontend.module
              },
              {
                url: repository + 'frontend/src/app/dashboard/messages/messages-controllers.js',
                title: 'messages-controllers.js',
                info: types.generic.controller
              }
            ]
          },
          'dashboard.chat': {
            'Backend': [
              {
                url: repository + 'backend/api/models/Message.js',
                title: 'Message.js',
                info: types.generic.model
              },
              {
                url: repository + 'backend/api/controllers/MessageController.js',
                title: 'MessageController.js',
                info: types.generic.controller
              }
            ],
            'Frontend': [
              {
                url: repository + 'frontend/src/app/dashboard/chat/chat.js',
                title: 'chat.js',
                info: types.frontend.module
              },
              {
                url: repository + 'frontend/src/app/dashboard/chat/chat-controllers.js',
                title: 'chat-controllers.js',
                info: types.generic.controller
              }
            ]
          }
        };

        return {
          /**
           * Service function to fetch all defined backend and frontend used files.
           *
           * @returns {{}}    All the file definitions
           */
          getAll: function getAll() {
            return data;
          },
          /**
           * Service function to fetch specified GUI used backend and frontend used files.
           *
           * @param   {string}    state
           *
           * @returns {{}}
           */
          get: function get(state) {
            var files = data[state];

            switch (state) {
              case 'dashboard.books':
              case 'dashboard.authors':
              case 'dashboard.chat':
                files = _.merge(files, generic.backend, generic.frontend);
                break;
              default:
                break;
            }

            return files;
          }
        };
      }
    ])
  ;
}());

(function(module) {
try {
  module = angular.module('frontend-templates');
} catch (e) {
  module = angular.module('frontend-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/frontend/admin/loginHistory/index.html',
    '\n' +
    '<h3>\n' +
    '    User login history ({{itemCount}})\n' +
    '\n' +
    '    <div class="col-xs-6 pull-right list-search">\n' +
    '        <list-search\n' +
    '            data-filters="filters"\n' +
    '            data-options="itemsPerPageOptions"\n' +
    '            data-items="itemsPerPage"\n' +
    '        ></list-search>\n' +
    '\n' +
    '        <pagination class="pagination-sm"\n' +
    '            data-total-items="itemCount"\n' +
    '            data-ng-model="currentPage"\n' +
    '            data-items-per-page="itemsPerPage"\n' +
    '            data-max-size="10"\n' +
    '            data-boundary-links="true"\n' +
    '            data-rotate="false"\n' +
    '        ></pagination>\n' +
    '    </div>\n' +
    '</h3>\n' +
    '\n' +
    '<table class="table">\n' +
    '    <thead class="no-select">\n' +
    '        <tr>\n' +
    '            <th class="text-nowrap {{item.class}}"\n' +
    '                data-ng-repeat="item in titleItems"\n' +
    '            >\n' +
    '                <a\n' +
    '                    data-ng-show="item.column"\n' +
    '                    data-ng-click="changeSort(item)"\n' +
    '                    data-ng-bind-html="item.title"\n' +
    '                ></a>\n' +
    '                    <span\n' +
    '                        data-ng-show="!item.column"\n' +
    '                        data-ng-bind-html="item.title"\n' +
    '                    ></span>\n' +
    '\n' +
    '                <i class="fa"\n' +
    '                    data-ng-show="sort.column == item.column"\n' +
    '                    data-ng-class="{\'fa-angle-down\': !sort.direction, \'fa-angle-up\': sort.direction}"\n' +
    '                ></i>\n' +
    '            </th>\n' +
    '        </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '        <tr data-ng-repeat="item in items">\n' +
    '            <td class="col-xs-2">\n' +
    '                {{item.ip}}\n' +
    '            </td>\n' +
    '            <td class="col-xs-2">\n' +
    '                {{item.browser}}\n' +
    '            </td>\n' +
    '            <td class="col-xs-2">\n' +
    '                {{item.os}}\n' +
    '            </td>\n' +
    '            <td class="col-xs-2">\n' +
    '                {{item.user.lastName}}, {{item.user.firstName}}\n' +
    '\n' +
    '                <span class="text-muted">\n' +
    '                    ({{item.user.username}})\n' +
    '                </span>\n' +
    '            </td>\n' +
    '            <td class="col-xs-4">\n' +
    '                {{item.createdAt | amDateFormat : \'LLLL\'}},\n' +
    '                <span data-am-time-ago="item.createdAt"></span>\n' +
    '            </td>\n' +
    '        </tr>\n' +
    '\n' +
    '        <tr data-ng-if="items.length === 0">\n' +
    '            <td colspan="100%" class="text-center text-muted">\n' +
    '                <em>no data founded...</em>\n' +
    '            </td>\n' +
    '        </tr>\n' +
    '    </tbody>\n' +
    '</table>\n' +
    '\n' +
    '<pagination class="pagination-sm pull-right"\n' +
    '    data-total-items="itemCount"\n' +
    '    data-ng-model="currentPage"\n' +
    '    data-items-per-page="itemsPerPage"\n' +
    '    data-max-size="10"\n' +
    '    data-boundary-links="true"\n' +
    '    data-rotate="false"\n' +
    '></pagination>\n' +
    '\n' +
    '<div class="clearfix"></div>\n' +
    '\n' +
    '<div class="row">\n' +
    '    <div class="col-xs-4">\n' +
    '        <highchart id="statsBrowser" config="chartBrowser"></highchart>\n' +
    '    </div>\n' +
    '    <div class="col-xs-4">\n' +
    '        <highchart id="statsOs" config="chartOs"></highchart>\n' +
    '    </div>\n' +
    '    <div class="col-xs-4">\n' +
    '        <highchart id="statsUser" config="chartUser"></highchart>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('frontend-templates');
} catch (e) {
  module = angular.module('frontend-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/frontend/dashboard/estimates/home.html',
    '<div class="row">\n' +
    '  <div class="col-sm-12">\n' +
    '    \n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('frontend-templates');
} catch (e) {
  module = angular.module('frontend-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/frontend/dashboard/home/home.html',
    '<div class="row">\n' +
    '  <div class="col-sm-12">\n' +
    '\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('frontend-templates');
} catch (e) {
  module = angular.module('frontend-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/frontend/dashboard/invoices/invoices.html',
    '<header>\n' +
    '  <div class="navbar navbar-fixed-top">\n' +
    '    <div>\n' +
    '      <h2>{{title}}</h2>\n' +
    '      <ul class="nav navbar-nav pull-right">\n' +
    '\n' +
    '        <li class="" data-ng-show="auth.isAuthenticated()">\n' +
    '          <a href="#" data-ng-click="logout()">Logout</a>\n' +
    '        </li>\n' +
    '\n' +
    '        <li class="" data-ui-sref-active="active" data-ng-show="auth.isAuthenticated()">\n' +
    '          <a href="#" data-ui-sref="profile.edit"></a>\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</header>\n' +
    '<div class="row">\n' +
    '  <div class="col-sm-12">\n' +
    '\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('frontend-templates');
} catch (e) {
  module = angular.module('frontend-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/frontend/dashboard/reports/reports.html',
    '<header>\n' +
    '  <div class="navbar navbar-fixed-top">\n' +
    '    <div>\n' +
    '      <h2>{{title}}</h2>\n' +
    '      <ul class="nav navbar-nav pull-right">\n' +
    '\n' +
    '        <li class="" data-ng-show="auth.isAuthenticated()">\n' +
    '          <a href="#" data-ng-click="logout()">Logout</a>\n' +
    '        </li>\n' +
    '\n' +
    '        <li class="" data-ui-sref-active="active" data-ng-show="auth.isAuthenticated()">\n' +
    '          <a href="#" data-ui-sref="profile.edit"></a>\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</header>\n' +
    '<div class="row">\n' +
    '  <div class="col-sm-12">\n' +
    '\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('frontend-templates');
} catch (e) {
  module = angular.module('frontend-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/frontend/core/auth/login/login.html',
    '\n' +
    '<div class="form-login">\n' +
    '    <form name="loginForm" method="post" novalidate="novalidate">\n' +
    '        <h2 class="title">Please login</h2>\n' +
    '\n' +
    '        <div class="form-group"\n' +
    '             data-show-errors\n' +
    '        >\n' +
    '            <input type="text" name="username" class="form-control username" placeholder="enter username or email" autofocus autocomplete="off" required="required"\n' +
    '                data-focus-on="username"\n' +
    '                data-ng-model="credentials.identifier"\n' +
    '            />\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group"\n' +
    '            data-show-errors\n' +
    '        >\n' +
    '            <input type="password" name="password" class="form-control password" placeholder="enter password" required="required"\n' +
    '                data-ng-model="credentials.password"\n' +
    '            />\n' +
    '        </div>\n' +
    '\n' +
    '        <button class="btn btn-primary btn-block"\n' +
    '            data-ng-click="login()"\n' +
    '            data-ng-disabled="!loginForm.$valid"\n' +
    '        >Login</button>\n' +
    '    </form>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('frontend-templates');
} catch (e) {
  module = angular.module('frontend-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/frontend/dashboard/bills/home.html',
    '<div class="row">\n' +
    '  <div class="col-sm-12">\n' +
    '    \n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('frontend-templates');
} catch (e) {
  module = angular.module('frontend-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/frontend/core/directives/partials/ListSearch.html',
    '<div class="list-search-filters">\n' +
    '    <form class="form-inline" role="form">\n' +
    '        <div class="form-group">\n' +
    '            <div class="input-group" dropdown>\n' +
    '                <input class="form-control input-sm col-sm-10" type="text" placeholder="search filter"\n' +
    '                    data-ng-model="filters.searchWord"\n' +
    '                />\n' +
    '\n' +
    '                <ul class="dropdown-menu pull-right dropdown-menu-arrow" role="menu">\n' +
    '                    <li class="title">Columns where filter affects</li>\n' +
    '                    <li class="divider"></li>\n' +
    '                    <li data-ng-repeat="column in filters.columns | filter: inSearch">\n' +
    '                        <a href="#" data-ng-click="column.inSearch = !column.inSearch; $event.preventDefault(); $event.stopPropagation();">\n' +
    '                            <i class="fa fa-fw"\n' +
    '                                data-ng-class="{\'fa-check\': column.inSearch}"\n' +
    '                            ></i>\n' +
    '\n' +
    '                            <span\n' +
    '                                data-ng-if="column.titleSearch"\n' +
    '                                data-ng-bind="column.titleSearch"\n' +
    '                            ></span>\n' +
    '\n' +
    '                            <span\n' +
    '                                data-ng-if="!column.titleSearch"\n' +
    '                                data-ng-bind="column.title"\n' +
    '                            ></span>\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '\n' +
    '                <span class="input-group-addon search dropdown-toggle"\n' +
    '                    data-tooltip="Click to select columns where search filter affects."\n' +
    '                >\n' +
    '                    <i class="fa fa-search text-info"></i>\n' +
    '                </span>\n' +
    '            </div>\n' +
    '\n' +
    '            <select class="form-control input-sm"\n' +
    '                data-ng-model="items"\n' +
    '                data-ng-options="page for page in options"\n' +
    '            >\n' +
    '            </select>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('frontend-templates');
} catch (e) {
  module = angular.module('frontend-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/frontend/core/error/partials/error.html',
    '<h3>Error occurred</h3>\n' +
    '\n' +
    '<p>\n' +
    '    Damn gerbils have stopped running again! Someone has been dispatched to poke them with a sharp stick.\n' +
    '</p>\n' +
    '\n' +
    '<!--\n' +
    'TODO:\n' +
    ' 1) show actual error somehow...\n' +
    ' 2) show stack trace?\n' +
    '-->\n' +
    '\n' +
    '<p data-ng-show="error.fromState.name">\n' +
    '    <a href="#"\n' +
    '        data-ng-click="goToPrevious()"\n' +
    '    >\n' +
    '        Back to previous page\n' +
    '    </a>\n' +
    '</p>');
}]);
})();

(function(module) {
try {
  module = angular.module('frontend-templates');
} catch (e) {
  module = angular.module('frontend-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/frontend/core/layout/partials/files.html',
    '<div>\n' +
    '  <h4>Files used in this example</h4>\n' +
    '\n' +
    '  <p>\n' +
    '    Below you can see all the actual <em>backend / frontend</em> files which are used to make this example page work.\n' +
    '  </p>\n' +
    '\n' +
    '  <div class="row">\n' +
    '    <div class="col-xs-3" data-ng-repeat="(title, items) in filesJson">\n' +
    '      <h5 data-ng-bind-html="title"></h5>\n' +
    '\n' +
    '      <ul class="list-unstyled">\n' +
    '        <li data-ng-repeat="item in items">\n' +
    '          <a href="{{item.url}}" target="_blank" data-tooltip-html-unsafe="{{getTooltip(item)}}" data-tooltip-placement="left" data-ng-bind-html="item.title"></a>\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('frontend-templates');
} catch (e) {
  module = angular.module('frontend-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/frontend/core/layout/partials/footer.html',
    '<!-- <footer>\n' +
    '  <div class="navbar navbar-default">\n' +
    '    <div class="container">\n' +
    '\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</footer> -->\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('frontend-templates');
} catch (e) {
  module = angular.module('frontend-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/frontend/core/layout/partials/header.html',
    '<header>\n' +
    '  <div class="navbar navbar-fixed-top">\n' +
    '    <div>\n' +
    '\n' +
    '      <ul class="nav navbar-nav pull-right">\n' +
    '        <h2>{{title}}</h2>\n' +
    '        <li class="" data-ng-show="auth.isAuthenticated()">\n' +
    '          <a href="#" data-ng-click="logout()">Logout</a>\n' +
    '        </li>\n' +
    '\n' +
    '        <li class="" data-ui-sref-active="active" data-ng-show="auth.isAuthenticated()">\n' +
    '          <a href="#" data-ui-sref="profile.edit"></a>\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</header>\n' +
    '<div class="navbar-header">\n' +
    '  <a href="/" class="navbar-brand"><img src="assets/invoicate-logo-notext.svg" alt="" /> {{user().firstName}} {{user().lastName}}</a>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('frontend-templates');
} catch (e) {
  module = angular.module('frontend-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/frontend/core/layout/partials/help.html',
    '<div class="modal-header">\n' +
    '  <button type="button" class="close" data-dismiss="modal" data-ng-click="dismiss()">\n' +
    '        <span aria-hidden="true">&times;</span>\n' +
    '        <span class="sr-only">Close</span>\n' +
    '    </button>\n' +
    '\n' +
    '  <h3 class="modal-title">{{title}}</h3>\n' +
    '</div>\n' +
    '<div class="modal-body modal-help">\n' +
    '  <div data-ng-include="template"></div>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '  <button class="btn btn-primary" data-ng-click="dismiss()">Close</button>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('frontend-templates');
} catch (e) {
  module = angular.module('frontend-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/frontend/core/layout/partials/navigation.html',
    '<ul>\n' +
    '  <li>\n' +
    '    <a href="/dashboard" data-ui-sref="dashboard.home"><i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</a>\n' +
    '  </li>\n' +
    '  <li>\n' +
    '    <a href="#" data-ui-sref="dashboard.reports"><i class="fa fa-area-chart" aria-hidden="true"></i> Reports</a>\n' +
    '  </li>\n' +
    '  <li>\n' +
    '    <a href="#" data-ui-sref="dashboard.invoices"><i class="fa fa-file-text-o" aria-hidden="true"></i> Invoices</a>\n' +
    '  </li>\n' +
    '  <li>\n' +
    '    <a href="#" data-ui-sref="dashboard.bills"><i class="fa fa-file-excel-o" aria-hidden="true"></i> Bills</a>\n' +
    '  </li>\n' +
    '  <li>\n' +
    '    <a href="#" data-ui-sref="dashboard.estimates"><i class="fa fa-file-o" aria-hidden="true"></i> Estimates</a>\n' +
    '  </li>\n' +
    '  <li>\n' +
    '    <a href="#" data-ui-sref="dashboard.bills"><i class="fa fa-clock-o" aria-hidden="true"></i> Track</a>\n' +
    '  </li>\n' +
    '  <li>\n' +
    '    <a href="#" data-ui-sref="dashboard.clients"><i class="fa fa-users" aria-hidden="true"></i> Clients</a>\n' +
    '  </li>\n' +
    '  <li>\n' +
    '    <a href="#" data-ui-sref="dashboard.settings"><i class="fa fa-cogs" aria-hidden="true"></i> Business Settings</a>\n' +
    '  </li>\n' +
    '</ul>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('frontend-templates');
} catch (e) {
  module = angular.module('frontend-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/frontend/core/auth/signup/signup.html',
    '\n' +
    '<div class="form-login">\n' +
    '    <form name="loginForm" method="post" novalidate="novalidate">\n' +
    '        <h2 class="title">Please login</h2>\n' +
    '\n' +
    '        <div class="form-group"\n' +
    '             data-show-errors\n' +
    '        >\n' +
    '            <input type="text" name="username" class="form-control username" placeholder="enter username or email" autofocus autocomplete="off" required="required"\n' +
    '                data-focus-on="username"\n' +
    '                data-ng-model="credentials.identifier"\n' +
    '            />\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group"\n' +
    '            data-show-errors\n' +
    '        >\n' +
    '            <input type="password" name="password" class="form-control password" placeholder="enter password" required="required"\n' +
    '                data-ng-model="credentials.password"\n' +
    '            />\n' +
    '        </div>\n' +
    '\n' +
    '        <button class="btn btn-primary btn-block"\n' +
    '            data-ng-click="login()"\n' +
    '            data-ng-disabled="!loginForm.$valid"\n' +
    '        >Login</button>\n' +
    '    </form>\n' +
    '</div>\n' +
    '');
}]);
})();

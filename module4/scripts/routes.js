(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
   .state('home', {
    url: '/',
    templateUrl: 'view/template/home-template.html'
  })
  .state('categories', {
     url: '/categories',
     templateUrl: 'view/template/main-categories-template.html',
     controller: 'categoriesController as catCtrl',
     resolve: {
       item: ['MenuDataService',
           function (MenuDataService) {
             return MenuDataService.getAllCategories()
               .then(function (categories) {
                 return categories;
               })
       }]
 })
 .state('items', {
    url: '/items',
    templateUrl: 'view/template/items-template.html',
    controller: 'ItemsController as itemCtrl',
    resolve: {
      item: ['$stateParams', 'MenuDataService',
          function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory()
              .then(function (items) {
                return items;
              })
      }]
    }
});
}

})();

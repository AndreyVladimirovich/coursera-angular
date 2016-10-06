(function () {
'use strict';

angular.module('Categories')
.component('Categories', {
  templateUrl: 'view/template/categories-template.html',
  bindings: {
    items: '<'
  }
});

})();

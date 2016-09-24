(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function ToBuyShoppingController(ShoppingListCheckOffService) {
  var buyCtrl = this;

  buyCtrl.buyList = ShoppingListCheckOffService.getToBuyShoppingList();

  buyCtrl.BoughtItem = function (itemIndex) {
    ShoppingListCheckOffService.bought(itemIndex);
  };
}

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var boughtCtrl = this;

  boughtCtrl.boughtList = ShoppingListCheckOffService.getBoughtShoppingList();
}

function ShoppingListCheckOffService() {
  var toBuyList = [];
  var bougthList = [];

  var item = {
      name: 'itemName',
      quantity: 2
    };
    toBuyList.push(item);

  this.getBoughtShoppingList = function () {
    return bougthList;
  };

  this.getToBuyShoppingList = function () {
    return toBuyList;
  };

  this.bought = function (itemIndex) {
    bougthList.push(toBuyList[itemIndex]);
    toBuyList.splice(itemIndex, 1);
  };

}


})();

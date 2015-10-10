Shirts = new Mongo.Collection("shirts");

if (Meteor.isClient) {
  angular.module('inkInventory',['angular-meteor'])

  angular.module('inkInventory')
  .controller('mainController', ['$scope', '$meteor', function($scope, $meteor){
    $scope.shirts = $meteor.collection(Shirts);
    var vm = this;
    // vm.message = 'testing';
    // vm.shirts = [
    //   {sex: 'unisex', design: 'ABCdog', color: 'blue' , size: 'med', image: 'stuffA', quantity: 4 },
    //   {sex: 'mens'  , design: 'XYZcat', color: 'pink' , size: 'lg' , image: 'stuffB', quantity: 5 },
    //   {sex: 'womans', design: 'YelPup', color: 'green', size: 'sm' , image: 'stuffC', quantity: 0 }
    // ];

    vm.shirtData = {};

    vm.addShirt = function(){

      console.log('clicked submit', this);

      vm.shirts.push({
        sex     : vm.shirtData.sex,
        design  : vm.shirtData.design,
        color   : vm.shirtData.color,
        size    : vm.shirtData.size,
        image   : vm.shirtData.image,
        quantity: vm.shirtData.quantity
      });

      vm.computerData = {};
    }

  }])
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    console.log("back end stuff");
    // if (Shirts.find().count() === 90) {
      var shirts = [
        {'sex': 'unisex', 'design': 'ABCdog', 'color': 'blue' , 'size': 'med', 'image': 'stuffA', 'quantity': '4' },
        {'sex': 'mens'  , 'design': 'XYZcat', 'color': 'pink' , 'size': 'lg' , 'image': 'stuffB', 'quantity': '5' },
        {'sex': 'womans', 'design': 'YelPup', 'color': 'green', 'size': 'sm' , 'image': 'stuffC', 'quantity': '0' }
      ];
      for (var i = 0; i < shirts.length; i++)
        Shirts.insert(shirts[i]);
    // }
  });
}

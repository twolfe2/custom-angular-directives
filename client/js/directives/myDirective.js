'use strict';


var app = angular.module('myDirectiveModule', []);

// app.directive('myDirective', [function () {
//   return {
//     restrict: 'A, E',
//     controller: 'myDirectiveCtrl',
//     template: '<h1>Hi from myDirective {{color}}</h1>'
      
    
//   };
// }]);


app.directive('myTable', [function () {
  return {
    restrict: 'E',
    // controller: 'myDirectiveCtrl',
    scope: {
      data: '='
    },
    controller: 'tableCtrl',
    templateUrl: '../../html/myTable.html' ,

      
    
  };
}]);


// app.controller('myDirectiveCtrl', ['$scope', function ($scope) {
//   $scope.color = 'blue';
// }]);
app.controller('tableCtrl', ['$scope', function ($scope) {
  console.log($scope.data);
   $scope.keys = Object.keys($scope.data[0]);
   $scope.reverseSort = false;
   $scope.orderByField = 'meat';
   $scope.orderSet = (key) => {
    $scope.orderByField = key;
    $scope.reverseSort = !$scope.reverseSort;
   }

}]);


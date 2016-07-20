'use strict';



var app = angular.module('myApp');


app.controller('mainCtrl', function($scope) {
  console.log('hello!');
  $scope.names = ['dude', 'bob', 'dudebob'];
  $scope.tacos = [
    {
      meat: 'chicken', 
      cheese: 'nacho',
      spicy: true
    },
    {
      meat: 'beef',
      cheese: 'chedder',
      spicy: false
    },
    {
      meat: 'tofurky',
      cheese: 'fake',
      spicy: true
    }
  ];
});
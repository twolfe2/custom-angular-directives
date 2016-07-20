'use strict';



var app = angular.module('myApp');


app.controller('mainCtrl', function($scope) {
  console.log('hello!');

  $scope.submit = (data) => {
    console.log('submit!!!', data);
  }


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


  $scope.fields = [
  {
    label: 'Price',
    model: 'flavor',
    type: 'text',
    required: false
  }

  ]
});



'use strict';


var app = angular.module('myDirectiveModule', []);

// app.directive('myDirective', [function () {
//   return {
//     restrict: 'A, E',
//     controller: 'myDirectiveCtrl',
//     template: '<h1>Hi from myDirective {{color}}</h1>'
      
    
//   };
// }]);

app.directive('myCustomForm', [function () {
  return {
    restrict: 'E',
    scope: {
      fields: '<', //one way data binding
      onSubmit: '<'
    },
     controller: 'myCustomFormCtrl',
     templateUrl: '../../html/myCustomForm.html'    
  };
}]);



app.controller('myCustomFormCtrl', function($scope) {
  console.log('$scope', $scope);

  // $scope.submit = (data) => {
  //   console.log('d data:', data);
  // }

});








app.directive('myTable', [function () {
  return {
    restrict: 'E',
    // controller: 'myDirectiveCtrl',
    scope: {
      data: '='
    },
    controller: 'tableCtrl',
    templateUrl: '../../html/myTable.html',
    link: function(scope, el, attrs, controller, transcludeFn) {
      console.log('el:', el);

      el.find('table').addClass('table-hover');

    }
    
  };
}]);


// app.controller('myDirectiveCtrl', ['$scope', function ($scope) {
//   $scope.color = 'blue';
// }]);
app.controller('tableCtrl', ['$scope', function ($scope) {
   $scope.keys = Object.keys($scope.data[0]);
   $scope.reverseSort = false;
   $scope.orderByField = 'meat';
   $scope.orderSet = (key) => {
    $scope.orderByField = key;
    $scope.reverseSort = !$scope.reverseSort;
   };

}]);


app.directive('myTextColor', [function () {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      // console.log(attrs); 
      elem.css('color', attrs.myTextColor);
    }
  };
}])




app.filter('titlecase', function() {
    return function (input) {
        var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

        input = input.toLowerCase();
        return input.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title) {
            if (index > 0 && index + match.length !== title.length &&
                match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
                (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
                title.charAt(index - 1).search(/[^\s-]/) < 0) {
                return match.toLowerCase();
            }

            if (match.substr(1).search(/[A-Z]|\../) > -1) {
                return match;
            }

            return match.charAt(0).toUpperCase() + match.substr(1);
        });
    }
});





app.directive('myDraggable', ['$document', function($document) {
  return {
    link: function(scope, element, attr) {
      var startX = 0, startY = 0, x = 0, y = 0;

      element.css({
       position: 'relative',
       
       cursor: 'pointer'
      });

      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.pageX - x;
        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    }
  };
}]);

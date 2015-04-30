;

angular.module('app')
  .controller('baseCtrl', ['$scope', function($scope) {
      var
        dic = { 'A': 1, 'T': 2, 'G': 3, 'C': 4 },
        // Container div:
        container = document.getElementById("base_distribution"),
        // Data series:
        ylabs = [[0, "A"], [1, "T"], [2, "G"], [3, "C"]],
        // A couple flotr configuration options:
        options = {
          bars : {
            show : true,
            horizontal : true,
            shadowSize : 0,
            barWidth : 0.5
          },
          mouse : {
            track : true,
            relative : true
          },
          yaxis : {
            ticks : ylabs,
            min : 0,
            autoscaleMargin : 1
          },
          xaxis: {
            min : 0,
            minorTickFreq: 4
          }, 
          grid: {
            minorVerticalLines: true
          }
        };

      $scope.change_inputsequence = function() {
          var data = [[0, 0], [0, 1], [0, 2], [0, 3]];
          $scope.inputsequence.split('').map(function(v) {
            var n = dic[v.toUpperCase()];
            if (n) { data[n - 1][0]++; }
          });
          console.log(data);
          // Draw the graph:
          Flotr.draw(container,  [ data ], options);
      };
  }])
  .directive('baseDistribution', function() {
    return {
        restrict: 'E',
        template: '<div id="base_distribution"></div>'
    }
  });

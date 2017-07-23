var app = angular.module('calc', []);

app.controller('MainCtrl', function($scope) {
  $scope.cor = [ {name:'Oświetlenie', 
                  value: 0, 
                  power: 0 }];
  $scope.kit = [ {name:'Oświetlenie', value: 0, power: 0 }, {name:'Lodówka', value: 0, power: 0 }, {name:'Zmywarka', value: 0, power: 0}];
  $scope.bat = [ {name:'Oświetlenie', value: 0, power: 0 }, {name:'Pralka', value: 0, power: 0 }];
  $scope.liv = [ {name:'Oświetlenie', value: 0, power: 0 }, {name:'Stereo', value: 0, power: 0 }, {name:'Telewwizor', value: 0, power: 0}];
  $scope.ter = [ {name:'Oświetlenie', value: 0, power: 0 }];
  $scope.sta = [ {name:'Oświetlenie', value: 0, power: 0 }, {name:'Lodówka', value: 0, power: 0 }, {name:'Zmywarka', value: 0, power: 0}];
  $scope.corup = [ {name:'Oświetlenie', value: 0, power: 0 }];
  $scope.room1 = [ {name:'Oświetlenie', value: 0, power: 0 }, {name:'Stereo', value: 0, power: 0 }, {name:'Komputer', value: 0, power: 0}];
  $scope.room2 = [ {name:'Oświetlenie', value: 0, power: 0 }, {name:'Stereo', value: 0, power: 0 }, {name:'Komputer', value: 0, power: 0}];
  $scope.room3 = [ {name:'Oświetlenie', value: 0, power: 0 }, {name:'Drukarka', value: 0, power: 0 }, {name:'Komputer', value: 0, power: 0}, {name:'Telewwizor', value: 0, power: 0}];
  $scope.room4 = [ {name:'Oświetlenie', value: 0, power: 0 }, {name:'Drukarka', value: 0, power: 0 }, {name:'Komputer', value: 0, power: 0}, {name:'Telewwizor', value: 0, power: 0}];
  $scope.other = [ {name:'Ładowarka', value: 0, power: 0 }, {name:'Odkurzacz', value: 0, power: 0 }];

 $scope.sum = function(list) {
  var total=0;
  angular.forEach(list , function(item){
    total= total + (parseInt(item.value)*parseInt(item.power))/1000;
  });
  return total;
 }




});

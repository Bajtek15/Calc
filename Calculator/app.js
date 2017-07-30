var App = angular.module("App", ['ngRoute']);

App.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home.html',
    })
    .when('/dom', {
      templateUrl: 'dom.html',
    })
    .when('/calc', {
      templateUrl: 'calc.html',
      controller: 'calcCtrl'
    })
    .when('/kontakt', {
      templateUrl: 'kontakt.html',
    })
    .otherwise({
      redirectTo: '/home'
    });
});

App.controller('calcCtrl', function($scope) {
  $scope.cor = [ {name:'Oświetlenie', value: 0, power: 0 }];
  $scope.kit = [ {name:'Oświetlenie', value: 0, power: 0 }, {name:'Lodówka', value: 0, power: 0 }, {name:'Zmywarka', value: 0, power: 0}];
  $scope.bat = [ {name:'Oświetlenie', value: 0, power: 0 }, {name:'Pralka', value: 0, power: 0 }];
  $scope.liv = [ {name:'Oświetlenie', value: 0, power: 0 }, {name:'Stereo', value: 0, power: 0 }, {name:'Telewwizor', value: 0, power: 0}];
  $scope.ter = [ {name:'Oświetlenie', value: 0, power: 0 }];
  $scope.sta = [ {name:'Oświetlenie', value: 0, power: 0 }];
  $scope.corup = [ {name:'Oświetlenie', value: 0, power: 0 }];
  $scope.room1 = [ {name:'Oświetlenie', value: 0, power: 0 }, {name:'Stereo', value: 0, power: 0 }, {name:'Komputer', value: 0, power: 0}];
  $scope.room2 = [ {name:'Oświetlenie', value: 0, power: 0 }, {name:'Stereo', value: 0, power: 0 }, {name:'Komputer', value: 0, power: 0}];
  $scope.room3 = [ {name:'Oświetlenie', value: 0, power: 0 }, {name:'Drukarka', value: 0, power: 0 }, {name:'Komputer', value: 0, power: 0}, {name:'Telewwizor', value: 0, power: 0}];
  $scope.room4 = [ {name:'Oświetlenie', value: 0, power: 0 }, {name:'Drukarka', value: 0, power: 0 }, {name:'Komputer', value: 0, power: 0}, {name:'Telewwizor', value: 0, power: 0}];
  $scope.other = [ {name:'Ładowarka', value: 0, power: 0 }, {name:'Odkurzacz', value: 0, power: 0 }];

  var x=100;

 $scope.sum = function(list) {
  var total=0;
  angular.forEach(list , function(item){
    total= total + (parseInt(item.value)*parseInt(item.power))/1000;
  });
  return total;
 }

  });

App.controller('pogodaCtrl', function($scope, $http) {
    $http.get('http://api.wunderground.com/api/09bf51e7b7f8f2bc/conditions/q/PL/Bydgoszcz.json').
        then(function(dane) {
            $scope.pogoda = dane.data;
        });
});

App.directive("adres", function() {
    return {
      restrict : "A",
        template : "<p>ul. XXXXXX XX/XX <br>XX-XXX Bydgoszcz</p>"
    };
});

App.directive("kont", function() {
    return {
      restrict : "A",
        template : "<p>tel: XXX-XXX-XXX <br>e-mail: XXXXX@xxx.xx</p>"
    };
});

App.directive("map", function() {
    return {
      restrict : "A",
        template : "<p>Znajdź Nas na mapie   </p>"
    };
});
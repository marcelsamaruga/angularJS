var myApp = angular.module('myApp', []);

// directives
// ng-app: 
// ng-controller:
// ng-model:  
// ng-class: 
// ng-if: 
// ng-repeat: 

// $scope: service to bind the controller and the view layers
// $log: better service to log on the console
// $timeout: simple way to use timeout js function
// $filter: extra functions to handle with data

myApp.controller('mainController', ['$scope', '$log', '$timeout', '$filter', function($scope, $log, $timeout, $filter) {
    
	// populate variables to use on the html viewer
    $scope.firstName = 'Aragorn';
    $scope.armyPosition = 'Knight Rider';
    
    $scope.getName = function() {
        return $scope.firstName + ': ' + $scope.armyPosition;
    }
    
    $log.info($scope.getName());
	
	// ------------------------------------
	
	$timeout(function() {
		$log.info($scope.getName() + ' using timeout angular service.');
	}, 1000);
	
	// ------------------------------------
	
	$scope.twitterAccountLowerCase = function(value) {
		return $filter('lowercase')(value);
	};
	
	// ------------------------------------
	
	$scope.characters = 5;
	
	$scope.rules = [      
        { ruleName: "Less than 5 characters!", codeError: 0 },
        { ruleName: "More than 5 characters!", codeError: 1 },
		{ ruleName: "Something else", codeError: -1 }
    ];
    
    console.log($scope.rules);
	
	// ------------------------------------
    
}]);
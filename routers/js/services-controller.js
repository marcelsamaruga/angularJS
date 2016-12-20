/*
@author: Marcel Samaruga da Costa
@date:2016-12-18
@description: controller used on the http service request
 */

myApp.controller('servicesController', ['$scope', '$http', '$location', '$log', function($scope, $http, $location, $log) {
    
	// ------------------------------------
	// location service: 
	$scope.locationAbsUrl = $location.absUrl();
	$scope.url = $location.url();
	$scope.host = $location.host();
	$scope.path = $location.path();
	$scope.protocol = $location.protocol();
	$scope.port = $location.port();
    
	// ------------------------------------
	// http
	$http.get("http://www.w3schools.com/angular/customers.php")
		  .then(function (response) {
					$scope.names = response.data.records;
					// response variables
					$log.info( 'data: ' + response.data );
					$log.info( 'status: ' + response.status );
					$log.info( 'statusText: ' + response.statusText );
					$log.info( 'headers: ' + response.headers );
				});
				
	/*$http({
        method : "GET",
        url : "welcome.htm"
    }).then(function mySucces(response) {
        $scope.myWelcome = response.data;
    }, function (response) {
        $scope.myWelcome = response.statusText;
    });
	
	$http.get('/api')
        .success(function (result) {
			$scope.rules = result;
        })
        .error(function (data, status) {
            console.log(data);
        });

    $scope.newRule = '';
    $scope.addRule = function () {
        $http.post('/api', { newRule: $scope.newRule })
            .success(function (result) {
                console.log(result);
                $scope.rules = result;
                $scope.newRule = '';
            })
            .error(function (data, status) {
                console.log(data);
            });
    };*/
	
	
	// ------------------------------------
	
	
	
	
}]);
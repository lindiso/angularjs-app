'use strict';

angular.module('myApp.view2', ['ngRoute'])

.controller('View2Ctrl', ['$scope','$http',function($scope,$http) {

    $scope.data3 = [];
    $scope.responseTemp = [];


    $scope.loadCharacters = function(){
        console.info('Before call...........');
        $http.get('http://localhost:8080/api/marvel/charactors').then(function (response) {
            console.info('Response : ' + response.data.characters[0].name);
            //return response.data;
            $scope.data = response.data;
            /*$scope.characters = response.data.characters
              .map(function (character) {
                return character.name;
              })
              .join('\n');*/
        });
    };


        console.info('After call...........');
       $scope.characters = [];


        $scope.getImage = function(name) {
        console.info('name selected is : ' + name);
        if ($scope.responseTemp.length > 0){
            var x = 0;
            for (x = 0; x < $scope.responseTemp.length; x++){
                //return response.data;
                console.info('Temp Data : ' + $scope.responseTemp[x].name)
                var responseName = $scope.responseTemp[x].name;
                if (name ==  responseName){
                    $scope.data3=[];
                    $scope.data3.push($scope.responseTemp[x]);

                }
            }
        } else {
            $http.post('http://localhost:8080/api/marvel/charactors/profile', name).
            then(function(response) {
                console.info('Response : '+ response.data);
                $scope.responseTemp = response.data;
                var x = 0;
                for (x = 0; x < response.data.length; x++){
                    //return response.data;
                    var responseName = response.data[x].name;
                    if (name ==  responseName){
                        $scope.data3=[];
                        $scope.data3.push(response.data[x]);

                    }
                }
                console.log($scope.data2);

            });
        }






        };

    //$scope.get();

}]);
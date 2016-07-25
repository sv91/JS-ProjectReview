'use strict';

/**
* @ngdoc function
* @name projectReviewApp.controller:ReviewCtrl
* @description
* # ReviewCtrl
* Controller responsible for the .review page.
*/
angular.module('projectReviewApp')
.controller('ReviewCtrl', function ($scope, $stateParams) {
  $scope.proposals = [
    {'name':'Prop1','type':'0','author':'Author1','picture':'images/bronze.png','startDate':"24/02/2016",'endDate':"21/06/2016",'subDate':"20/01/2016"},
    {'name':'Prop2','type':'1','author':'Author2','picture':'images/silver.png','startDate':"24/02/2016",'endDate':"21/06/2016",'subDate':"20/01/2016"},
    {'name':'Super project','type':'2','author':'Super Author','picture':'images/gold.png','startDate':"24/02/2016",'endDate':"21/06/2016",'subDate':"20/01/2016"},
    {'name':'Short','type':'0','author':'Lazy Author','picture':'images/bronze.png','startDate':"24/02/2016",'endDate':"21/06/2016",'subDate':"20/01/2016"},
    {'name':'Long','type':'2','author':'Studious Author','picture':'images/gold.png','startDate':"24/02/2016",'endDate':"21/06/2016",'subDate':"20/01/2016"}
  ];
    $scope.params = $stateParams;
});

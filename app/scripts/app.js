'use strict';

/**
 * @ngdoc overview
 * @name jsApp
 * @description
 * # jsApp
 *
 * Main module of the application.
 */
angular
.module('projectReviewApp', ['ui.router','ui.select','angular.filter','hbpCommon','bbpOidcClient','ui.bootstrap','ngMaterial', 'ngMessages'])
.config(function ($stateProvider, $urlRouterProvider) {
	// link adresses to views and controllers
	$stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'views/index.html',
    controller:'MainCtrl'
  })
	.state('list', {
		url: '/list',
		templateUrl: 'views/list.html'
	})
  .state('review', {
		url: '/review',
		templateUrl: 'views/review.html',
		controller:'ReviewCtrl'
	})
  .state('reviewing', {
		url: '/review/:param',
		templateUrl: 'views/reviewing.html',
		controller:'ReviewCtrl'
	})
  .state('proposal', {
		url: '/review/:param/proposal',
		templateUrl: 'views/proposal.html'
	})
  .state('note', {
		url: '/review/:param/note',
		templateUrl: 'views/note.html'
	})
  .state('summary', {
		url: '/review/:param/summary',
		templateUrl: 'views/summary.html'
	});
	$urlRouterProvider.otherwise('/');
})

.controller('MainCtrl',function($scope){
  $scope.proposals = [
    {'name':'Prop1','type':'0','author':'Author1'},
    {'name':'Prop2','type':'1','author':'Author2'},
    {'name':'Super project','type':'2','author':'Super Author'},
    {'name':'Short','type':'0','author':'Lazy Author'},
    {'name':'Long','type':'2','author':'Studious Author'}
  ];
});

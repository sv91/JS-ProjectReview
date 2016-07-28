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
  .state('form', {
    templateUrl: 'views/form.html',
    controller:'formController'
  })
  .state('form.review', {
		url: '/review',
		templateUrl: 'views/review.html'
	})
  .state('form.reviewing', {
		url: '/review/:param',
		templateUrl: 'views/reviewing.html',
		controller:'ReviewCtrl'
	})
  .state('form.proposal', {
		url: '/review/:param/proposal',
		templateUrl: 'views/proposal.html',
    controller:'ProposalCtrl'
	})
  .state('form.note', {
		url: '/review/:param/note',
		templateUrl: 'views/note.html'
	})
  .state('summary', {
		url: '/review/:param/summary',
		templateUrl: 'views/summary.html'
	});
	$urlRouterProvider.otherwise('/review');
})

.controller('formController', function ($scope) {
  $scope.proposals = [
    {'name':'Super cool project','type':'0','author':'Author1','picture':'images/bronze.png','startDate':"24/02/2016",'endDate':"21/06/2016",'subDate':"20/01/2016",'proposal':{
  "projectType": "2",
  "pi": {
    "id": "196683",
    "updatedAt": "2015-04-23T11:36:18",
    "username": "vostriak",
    "givenName": "Alexander",
    "familyName": "Vostriakov",
    "displayName": "Alexander Vostriakov",
    "title": "MR",
    "profile": null,
    "picture": null,
    "emails": [
      {
        "value": "alexander.vostriakov@epfl.ch",
        "primary": true,
        "verified": true
      }
    ],
    "phones": [],
    "institutions": [],
    "ims": []
  },
  "copi": {
    "id": "212887",
    "updatedAt": "2016-07-06T15:29:52",
    "username": "delalond",
    "givenName": "Fabien Jonathan",
    "familyName": "Delalondre",
    "displayName": "Fabien Jonathan Delalondre",
    "title": "MR",
    "profile": null,
    "picture": null,
    "emails": [
      {
        "value": "fabien.delalondre@epfl.ch",
        "primary": true,
        "verified": true
      }
    ],
    "phones": [
      {
        "value": "+41216937266",
        "primary": true
      }
    ],
    "institutions": [
      {
        "name": "EPFL",
        "department": "Blue Brain Project",
        "postalAddress": "EPFL ENT CBS BBP $ QIJ 3 115.10 (EPFL Innovation Park J) $ CH-1015 Lausanne",
        "title": "Scientist",
        "primary": true
      },
      {
        "name": "Ecole Polytechnique Federale de Lausanne",
        "department": null,
        "postalAddress": null,
        "title": null,
        "primary": false
      }
    ],
    "ims": []
  },
  "members": [
    {
      "id": "262785",
      "updatedAt": "2016-07-13T07:55:40",
      "username": "jchaumon",
      "givenName": "Joseph",
      "familyName": "Chaumont",
      "displayName": "Joseph Chaumont",
      "title": "MR",
      "profile": null,
      "picture": null,
      "emails": [
        {
          "value": "joseph.chaumont@epfl.ch",
          "primary": true,
          "verified": true
        }
      ],
      "phones": [
        {
          "value": "+41216955231",
          "primary": true
        }
      ],
      "institutions": [
        {
          "name": "Ecole Polytechnique Federale de Lausanne",
          "department": null,
          "postalAddress": null,
          "title": null,
          "primary": true
        }
      ],
      "ims": []
    },
    {
      "id": "234682",
      "updatedAt": "2015-04-23T11:36:17",
      "username": "rondelli",
      "givenName": "Dafne",
      "familyName": "Rondelli",
      "displayName": "Dafne Rondelli",
      "title": "MRS",
      "profile": null,
      "picture": null,
      "emails": [
        {
          "value": "dafne.rondelli@epfl.ch",
          "primary": true,
          "verified": true
        }
      ],
      "phones": [
        {
          "value": "+41216937284",
          "primary": true
        }
      ],
      "institutions": [
        {
          "name": "EPFL",
          "department": "Blue Brain Project",
          "postalAddress": "EPFL ENT CBS BBP $ QIJ 3 115.7 (EPFL Innovation Park J) $ CH-1015 Lausanne",
          "title": "Secretary",
          "primary": true
        }
      ],
      "ims": []
    }
  ],
  "teams": [
    {
      "name": "Algorithms",
      "shortName": "Algo",
      "displayName": "BBP Team: Algorithms"
    },
    {
      "name": "Data Integration",
      "shortName": "DI",
      "displayName": "BBP Team: Data Integration"
    }
  ],
  "newproject": "true",
  "projectStartDateMD": "2016-07-27T12:28:26.340Z",
  "relatedProjects": [],
  "shortDeliverable": [],
  "publications": [],
  "projectTitle": "Super cool project",
  "projectStartDate": "2016-07-27T22:00:00.000Z",
  "projectEndDate": "2017-07-30T22:00:00.000Z",
  "grants": [
    "Human Brain Project",
    "Blue Brain Project"
  ],
  "tasks": [
    {
      "name": "TaskHBP1",
      "grant": "Human Brain Project"
    },
    {
      "name": "TaskBBP1",
      "grant": "Blue Brain Project"
    },
    {
      "name": "TaskBBP2",
      "grant": "Blue Brain Project"
    }
  ],
  "tags": [
    "Science"
  ],
  "executiveSummary": "Blabla",
  "impactStatement": "fdsfsdf",
  "benefitToCommunity": "Pouet",
  "scientificSummary": "Cacahouette",
  "technologicalSummary": "Plop",
  "requirements": [
    {
      "title": "Super infrastructure",
      "open": true,
      "feature": "Some cool stuff",
      "requirement": "ysdadsd",
      "type": {
        "name": "Infrastructure",
        "desc": ""
      },
      "input": [
        {
          "tag": "Input 1",
          "format": {
            "name": "HDF5"
          },
          "number": 10,
          "size": 15,
          "open": true
        },
        {
          "tag": "Input small",
          "format": {
            "name": "ASCII"
          },
          "number": 1,
          "size": 1,
          "open": true
        }
      ],
      "output": [
        {
          "tag": "Output",
          "format": {
            "name": "HDF5"
          },
          "number": 12,
          "size": 34,
          "open": true
        }
      ]
    }
  ],
  "usecase": "Super stuff",
  "deliverables": [
    {
      "name": "Deliverable 1",
      "date": "2016-07-29T22:00:00.000Z",
      "risks": "fsdfsdfsdf",
      "description": "dsadasd",
      "requirement": [],
      "dependency": [],
      "members": [
        {
          "name": "Joseph Chaumont",
          "role": "Technical Lead",
          "pm": 12,
          "description": ""
        },
        {
          "name": "Alexander Vostriakov",
          "role": "Deliverable lead",
          "pm": 100,
          "description": "Lead"
        }
      ],
      "hpc": [
        {
          "type": {
            "name": "Intel x86",
            "desc": ""
          },
          "runs": 1,
          "open": true,
          "part": 2,
          "time": 3,
          "arte": 4,
          "size": 5
        },
        {
          "type": {
            "name": "Intel accelarators",
            "desc": "(KNL, SKL, ...)"
          },
          "runs": 6,
          "open": true,
          "part": 7,
          "time": 8,
          "arte": 9,
          "size": 10
        }
      ],
      "cloud": [],
      "hardware": [],
      "requirements": [
        {
          "title": "Super infrastructure",
          "open": true,
          "feature": "Some cool stuff",
          "requirement": "ysdadsd",
          "type": {
            "name": "Infrastructure",
            "desc": ""
          },
          "input": [
            {
              "tag": "Input 1",
              "format": {
                "name": "HDF5"
              },
              "number": 10,
              "size": 15,
              "open": true
            },
            {
              "tag": "Input small",
              "format": {
                "name": "ASCII"
              },
              "number": 1,
              "size": 1,
              "open": true
            }
          ],
          "output": [
            {
              "tag": "Output",
              "format": {
                "name": "HDF5"
              },
              "number": 12,
              "size": 34,
              "open": true
            }
          ]
        }
      ],
      "softdev": [
        {
          "name": "Continuous integration",
          "desc": "(Jenkins, ...)"
        },
        {
          "name": "Ticketing system",
          "desc": "(JIRA, ...)"
        }
      ],
      "datatransfer": [
        {
          "name": "globus online",
          "desc": ""
        }
      ],
      "collabs": [
        {
          "id": 4,
          "created": "2015-04-24T14:29:37.396185Z",
          "edited": "2015-04-24T14:29:37.396220Z",
          "title": "About Collab",
          "content": "Collab about collabs",
          "private": false,
          "deleted": null
        }
      ],
      "virtualization": [
        {
          "name": "Virtual Machine",
          "desc": "(OpenStack, VMware, ...)"
        }
      ],
      "devenv": [
        {
          "name": "Python",
          "desc": "(2.6, 2.7, 3.1, 3.2)"
        }
      ]
    }
  ]
}},
    {'name':'Prop2','type':'1','author':'Author2','picture':'images/silver.png','startDate':"24/02/2016",'endDate':"21/06/2016",'subDate':"20/01/2016"},
    {'name':'Super project','type':'2','author':'Super Author','picture':'images/gold.png','startDate':"24/02/2016",'endDate':"21/06/2016",'subDate':"20/01/2016"},
    {'name':'Short','type':'0','author':'Lazy Author','picture':'images/bronze.png','startDate':"24/02/2016",'endDate':"21/06/2016",'subDate':"20/01/2016"},
    {'name':'Long','type':'2','author':'Studious Author','picture':'images/gold.png','startDate':"24/02/2016",'endDate':"21/06/2016",'subDate':"20/01/2016"}
  ];
});

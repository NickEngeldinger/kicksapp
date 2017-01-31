var myApp = angular.module('kicksapp', ['ui.router', 'ngAnimate']);

myApp.config(function($stateProvider) {
  var states = [
    { 
      name: 'hello', 
      url: '/hello', 
      component: 'hello'  
    },
    
    { 
      name: 'about', 
      url: '/about', 
      component: 'about'
    },
    
    { 
      name: 'kicks', 
      url: '/kicks', 
      component: 'kicks',
      resolve: {
        people: function(KicksService) {
          return KicksService.getAllKicks();
        }
      }
    },
    
    { 
      name: 'kick', 
      url: '/kicks/{kickId}', 
      component: 'kick',
      resolve: {
        person: function(KicksService, $transition$) {
          return KicksService.getKick$transition$.params().kickId);
        }
      }
    },

    {
      name: 'addKick',
      url: '/addKick',
      component: 'addKick'
    }
  ]
  
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});
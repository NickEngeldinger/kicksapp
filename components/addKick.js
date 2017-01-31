angular.module('kicksapp').component('addKick', {
  templateUrl:  '/templates/addKick.html',
  controller: addKickCtrl,
  bindings: {
  	kickInfo: '='
  }
})
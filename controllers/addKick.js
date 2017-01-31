function addKickCtrl($scope, KickService) {
		$scope.statusOptions = [{
			label: "Active",
			val: "true"
		},{
			label: "Inactive",
			val: "false"
		}];
		$scope.defaultOption = true;

  	this.addKick = function() {
      return KicksService
      			.addKick(this)
      			.success(function(data){ 
      				console.log(data)
      				if (data === 'failed') {
      					$scope.alertErr = true;
      				} else {
      					$scope.alertOk = true;
      				}
      			});
    }
  }
function randomTask() {
	var directive = {
		restrict: 'E',
		scope: {
			list: '='
		},
		templateUrl: 'src/Components/randomTask.html',
		transclude: true,
		replace: true,
		controller: 'RandomTaskController',
		controllerAs: 'random',
		bindToController: true
	};

	return directive;
}

angular
	.module('todoApp')
	.directive('randomTask', randomTask);
function HeaderController($route) {
	this.active = $route.current.$$route.originalPath;
}

HeaderController.$inject = ['$route'];

angular
	.module('todoApp')
	.controller('HeaderController', HeaderController);
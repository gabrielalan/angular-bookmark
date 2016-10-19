function RandomTaskController() {
	var list = this.list || [];

	this.task = list[Math.floor(Math.random() * list.length)];
}

angular
	.module('todoApp')
	.controller('RandomTaskController', RandomTaskController);
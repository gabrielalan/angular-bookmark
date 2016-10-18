function RandomTaskController() {
	this.task = this.list[Math.floor(Math.random() * this.list.length)];
}

angular
	.module('todoApp')
	.controller('RandomTaskController', RandomTaskController);
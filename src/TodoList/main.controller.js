function MainController($http) {
	var me = this;

	me.order = 'text';

	me.addTask = function(newTask) {
		me.list.push({
			text: newTask.text,
			value: parseFloat(newTask.value),
			completed: false
		});

		newTask.text = newTask.value = '';
	};

	me.removeTask = function(task) {
		me.list = me.list.filter(function(current){
			return current.text !== task.text;
		});
	};

	$http
		.get('server/list.php')
		.success(function(data){
			me.list = data;
		});
}

MainController.$inject = ['$http'];

angular
	.module('todoApp')
	.controller('MainController', MainController);
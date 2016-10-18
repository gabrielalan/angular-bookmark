angular
	.module('todoApp')
	.controller('MainController', MainController);

function MainController() {
	var me = this;

	me.order = 'text';

	me.list = [
		{
			text: "B Text",
			completed: false,
			value: 50
		},
		{
			text: "A Text",
			completed: false,
			value: 100
		},
		{
			text: "C Text",
			completed: false,
			value: 70
		}
	];

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
}
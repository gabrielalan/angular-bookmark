function routeConfig($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'src/Home/_home.html'
		})
		.when('/todo', {
			templateUrl: 'src/TodoList/_list.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
		.otherwise({
			redirectTo: '/home'
		});
}

routeConfig.$inject = ['$routeProvider'];

angular
	.module('todoApp')
	.config(routeConfig);
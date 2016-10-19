function routeConfig($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider
		.when('/home', {
			templateUrl: 'src/Home/_home.html',
			controller: 'MainController',
			controllerAs: 'home'
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

routeConfig.$inject = ['$routeProvider', '$locationProvider'];

angular
	.module('todoApp')
	.config(routeConfig);
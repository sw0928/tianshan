(function(angular) {

  angular
    .module('shantian.login', [])
    .config(['$routeProvider',  function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: './views/login/login.html',
           controller: 'LoginController'
        })
         .otherwise({
            // 用来指定路由的路径
            redirectTo: '/'
          });
    
    
    }])
      .controller('LoginController',['$scope','$routeParams',LoginController])

          function LoginController($scope, $routeParams) {  
            
          }

})(angular);
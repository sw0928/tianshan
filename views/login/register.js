(function(angular) {

  angular
    .module('shantian.register', [])
    .config(['$routeProvider',  function($routeProvider) {
      $routeProvider
        .when('/register',{
          templateUrl: './views/login/register.html',
          controller: 'RegisterController'
        })
         .otherwise({
            // 用来指定路由的路径
            redirectTo: '/'
          });
    
    
    }])
      .controller('RegisterController',['$scope','$routeParams',RegisterController])

          function RegisterController($scope, $routeParams) {  
            
          }

})(angular);
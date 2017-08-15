(function(angular) {

  angular
    .module('shantian_login', 
    ['ngRoute',
      'shantian.login',
      'shantian.register'

    ])
    .config([ '$locationProvider', function( $locationProvider) {
    
      $locationProvider.hashPrefix('');
    }])
    

})(angular);
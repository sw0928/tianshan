
var app=angular.module('app',['ng', 'ngRoute', 'ngAnimate','ngTouch','ngCookies'])
    .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: './views/main/main.html',
          controller: 'home'
        })
      .when('/login', {
        templateUrl: './views/login/login.html',
        controller: 'LoginController'
      })
      .when('/register',{
        templateUrl: './views/login/register.html',
        controller: 'RegisterController'
      })
        .when('/forget',{
            templateUrl: './views/login/forget.html',
            controller: 'forget'
        })
      .when('/brand/:goods_id/:specification_id/:url_id',{
            templateUrl: './views/main/brand.html',
            controller: 'brand'
      })
        .when('/patent/:goods_id/:specification_id/:url_id',{
            templateUrl: './views/main/patent.html',
            controller: 'patent'
        })
        .when('/other/:goods_id/:specification_id/:url_id',{
            templateUrl: './views/main/other.html',
            controller: 'other'
        })
        .when('/search',{
            templateUrl: './views/main/search.html',
            controller: 'search'
        })
        .when('/message',{
            templateUrl: './views/main/message.html',
            controller: 'message'
        })
        .when('/trad_detail',{
            templateUrl: './views/main/trademarkDetail.html',
            controller: 'trademarkDetail'
        })
        .when('/pay/:order_id',{
            templateUrl: './views/cart/payment.html',
            controller: 'pay'
        })
        .when('/shop',{
            templateUrl: './views/cart/shopping.html',
            controller: 'shop'
        })
        .when('/info',{
            templateUrl: './views/information/information.html',
            controller: 'info'
        })
        .when('/expenses',{
            templateUrl: './views/myFinance/expenses.html',
            controller: 'expenses'
        })
        .when('/recharge',{
            templateUrl: './views/myFinance/recharge.html',
            controller: 'recharge'
        })
        .when('/comment/:order_id',{
            templateUrl: './views/personageCenter/comment.html',
            controller: 'comment'
        })
        .when('/discounts',{
            templateUrl: './views/personageCenter/discounts.html',
            controller: 'discounts'
        })
        .when('/evaluate',{
            templateUrl: './views/personageCenter/evaluate.html',
            controller: 'evaluate'
        })
        .when('/finish',{
            templateUrl: './views/personageCenter/finish.html',
            controller: 'finish'
        })
        .when('/obligation',{
            templateUrl: './views/personageCenter/obligation.html',
            controller: 'obligation'
        })
        .when('/personage',{
            templateUrl: './views/personageCenter/personage.html',
            controller: 'personage'
        })
        .when('/order_detail/:order_id',{
            templateUrl: './views/personageCenter/orderDetails.html',
            controller: 'order_detail'
        })
        .when('/transact',{
            templateUrl: './views/personageCenter/transact.html',
            controller: 'transact'
        })
        .when('/invoice/:order_id',{
            templateUrl: './views/personageCenter/invoice.html',
            controller: 'invoice'
        })
        .when('/cause/:order_id',{
            templateUrl: './views/personageCenter/cause.html',
            controller: 'cause'
        })
        .when('/refund',{
            templateUrl: './views/personageCenter/refund.html',
            controller: 'refund'
        })
        .when('/account_mess',{
            templateUrl: './views/personageSetting/accountMess.html',
            controller: 'account_mess'
        })
        .when('/address',{
            templateUrl: './views/personageSetting/address.html',
            controller: 'address'
        })
        .when('/company_mess',{
            templateUrl: './views/personageSetting/companyMess.html',
            controller: 'company_mess'
        })
        .when('/new_add/:address_id',{
            templateUrl: './views/personageSetting/newAdd.html',
            controller: 'new_add'
        })
        .when('/copyright_up/:order_good_id/:order_id',{
            templateUrl: './views/uploadData/copyrightUp.html',
            controller: 'copyright_up'
        })
        .when('/parent_up/:order_good_id/:order_id',{
            templateUrl: './views/uploadData/parentUp.html',
            controller: 'parent_up'
        })
        .when('/trademark_up/:order_good_id/:order_id',{
            templateUrl: './views/uploadData/trademarkUp.html',
            controller: 'trademark_up'
        })
        .when('/zhiYan/:url_id',{
            templateUrl: './views/zhiYan/zhiYan.html',
            controller: 'zhiYan'
        })
      .otherwise({

        redirectTo: '/'
      });
  }])

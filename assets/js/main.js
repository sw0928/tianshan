app.controller('home', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
     $scope.homeUrl= 'http://stdx.tstweiguanjia.com/';
    $scope.order_num  = function () {
        $http.post(
            $scope.homeUrl + "orderInterfaces.api?getOrdersCount", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id')
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    //console.log(data['data'])
                    $scope.all_data = data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
    }
    $scope.cart_shop = function () {
        $http.post(
            $scope.homeUrl + "shoppingCarInterfaces.api?getMemberShoppingCarCount", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id')
    }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    $scope.cart_num = data.data
                    $cookieStore.put('cart_num',$scope.cart_num)
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];

                }else if(data['error'] == 'token failed'){
                }
            });
    }
    $scope.cookies = function () {
        $scope.phone = $cookieStore.get('phone')
        $scope.cart_num = $cookieStore.get('cart_num')
        $scope.head_img = $cookieStore.get('head_img')
        $scope.real_name = $cookieStore.get('real_name')
    }
    $scope.hide_obligation = function () {

        $('#hintOne').slideUp(200);
        $('#compile').slideUp(200);
        $('#compile .hint_con input').val('')
    }

    $scope.cookies()
    $scope.search = function () {
        var text_con = $('#nav .content .search .text_con').val();
        var search_id = $('#nav .content .search .query select').val()

       if(text_con != '' || search_id != ''){
           $http.post(
               $scope.homeUrl + "goodsInterfaces.api?searchTrademark", $.param({
                   key: text_con,
                   type: search_id
               }),
               {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
           ).success(function (data) {
                   if (data['status'] == 'ok') {
                       console.log(data)
                       $location.path('search')
                   } else if (data['status'] == 'error') {
                       console.log(data)
                       $scope.Er = data['error'];
                   }else if(data['error'] == 'token failed'){
                   }
               });
       }

    }
    $scope.personage = function () {
        $location.path('personage')
    }
    //获取商品分类列表
    $http.post(
        $scope.homeUrl + "goodsInterfaces.api?getGoodsClasss", $.param({
            parent_id:'0',
            level:'1'
        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {
                $scope.serve_lists = data['data']
            } else if (data['status'] == 'error') {
                console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){

            }
        });
    //banner列表
    $http.post(
        $scope.homeUrl + "bannerInterfaces.api?getAllBanners", $.param({
            banner_position:'home'
        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {

                $scope.pic = data['data']
            } else if (data['status'] == 'error') {
                console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){

            }
        });
    //列表1
    $http.post(
        $scope.homeUrl + "goodsInterfaces.api?getGoodsListByClass", $.param({
            class_id:1
        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {
                //console.log(data['data'])
                $scope.brand = data['data']
                $scope.brand_arr = [];
            } else if (data['status'] == 'error') {
                console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){

            }
        });
    //列表2
    $http.post(
        $scope.homeUrl + "goodsInterfaces.api?getGoodsListByClass", $.param({
            class_id:2
        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {

                $scope.brand2 = data['data']
            } else if (data['status'] == 'error') {
                console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){

            }
        });
    //列表3
    $http.post(
        $scope.homeUrl + "goodsInterfaces.api?getGoodsListByClass", $.param({
            class_id:3
        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {

                $scope.brand3 = data['data']
            } else if (data['status'] == 'error') {
                console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){
            }
        });
    //列表4
    $http.post(
        $scope.homeUrl + "goodsInterfaces.api?getGoodsListByClass", $.param({
            class_id:4
        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {

                $scope.brand4 = data['data']
            } else if (data['status'] == 'error') {
                console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){
            }
        });
    //列表5
    $http.post(
        $scope.homeUrl + "goodsInterfaces.api?getGoodsListByClass", $.param({
            class_id:5
        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {

                $scope.brand5 = data['data']
            } else if (data['status'] == 'error') {
                console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){
            }
        });
    //热门推荐
    $http.post(
        $scope.homeUrl + "goodsInterfaces.api?getRecommendGoodsBeans", $.param({
        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {
                $scope.hot_list = data['data']
            } else if (data['status'] == 'error') {
                console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){
            }
        });
    //旋转木马
   $http.post(
        $scope.homeUrl + "memberInterfaces.api?getHomeCounselors", $.param({
        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {
                //console.log( data['data'])
                $scope.counselor = data['data']
            } else if (data['status'] == 'error') {
                console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){
            }
        });
    //为什么选择山天大蓄
    $http.post(
        $scope.homeUrl + "othersInterfaces.api?getWhyCheckUsList", $.param({
        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {
                //console.log( data['data'])
                $scope.why_check = data['data']
            } else if (data['status'] == 'error') {
                console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){
            }
        });
    //合作伙伴

    $http.post(
        $scope.homeUrl + "othersInterfaces.api?getFriendList", $.param({
        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {

                $scope.friend_list = data['data']
            } else if (data['status'] == 'error') {
                console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){
            }
        });

    //登陆
})
    .controller('LoginController', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
    $scope.phone = '';
    $scope.password = '';
    $scope.head_img = '';
    $scope.real_name = '';
    $scope.msg='';
    $scope.sign = function () {
        $http.post(
           $scope.homeUrl + "memberInterfaces.api?memberLogin", $.param({
                phone: $scope.phone,
                password: $scope.password
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    var member_id = data['data'].member_id;
                    var token = data['data'].token;
                    var head_img = data['data'].head_img;
                    var real_name = data['data'].real_name;
                    $cookieStore.put('phone',$scope.phone)
                    $cookieStore.put('head_img',head_img)
                    $cookieStore.put('password',$scope.password)
                    $cookieStore.put('real_name',real_name)
                    $cookieStore.put('token',token)
                    $cookieStore.put('member_id',member_id)
                    $scope.msg = "登陆成功"
                    $('#login .login_msg').addClass('show')
                    $timeout(function(){
                        $location.path("/");
                    },2000)

                    $http.post(
                        $scope.homeUrl + "shoppingCarInterfaces.api?getMemberShoppingCarCount", $.param({
                            token:token,
                            member_id:member_id
                        }),
                        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                    ).success(function (data) {
                            if (data['status'] == 'ok') {
                                $scope.cart_num = data.data
                                $cookieStore.put('cart_num',$scope.cart_num)
                            } else if (data['status'] == 'error') {
                                console.log(data)
                                $scope.Er = data['error'];

                            }else if(data['error'] == 'token failed'){
                            }
                        });
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                    $scope.msg = data.error
                    $('#login .login_msg').addClass('show')
                    $timeout(function(){
                        $('#login .login_msg').removeClass('show')
                        $scope.msg = '';
                    },3000)
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
    }
})
    .controller('RegisterController', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){

    $scope.phone = '';
    $scope.password = '';
    $scope.password2 = '';
    $scope.code = '';
    $scope.select = false;
    $scope.msg='';
    $('#register .register_center .register_text .phone1').blur(function () {
        if(!(/^1[34578]\d{9}$/.test( $scope.phone))){
            console.log('错误')
            return false;
        }else{
            $('#register .register_center .register_text input').removeAttr('readonly');
            $('#register .register_center .register_text .yzm').css('background','#D7474C')
            $('#register .register_center .register_text .yzm').prop('disabled',false)

        }
    })

            $scope.gain = function () {
                    $http.post(
                        $scope.homeUrl + "othersInterfaces.api?sendCode", $.param({
                            mobile: $scope.phone,
                            code_type:'member_register'
                        }),
                        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                    ).success(function (data) {
                            if (data['status'] == 'ok') {
                                console.log(data['data'])
                                $('#register .register_center .register_text .yzm').css('background','#d8d8d8')
                                $('#register .register_center .register_text .yzm').prop('disabled',true)
                                $timeout(function () {
                                    $('#register .register_center .register_text .yzm').css('background','#D7474C')
                                    $('#register .register_center .register_text .yzm').prop('disabled',false)
                                },60000)
                            } else if (data['status'] == 'error') {
                                console.log(data)
                                $scope.Er = data['error'];

                            }else if(data['error'] == 'token failed'){
                                $location.path("login");
                            }
                        });

            }


    $scope.register = function () {
        if( $scope.select === true){
            $http.post(
                $scope.homeUrl + "memberInterfaces.api?memberRegister", $.param({
                    phone: $scope.phone,
                    password: $scope.password,
                    code:$scope.code
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        console.log(data['data'])

                        $location.path("login");
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                        $scope.msg = data.error
                        $('#register .login_msg').addClass('show')
                        $timeout(function(){
                            $('#register .login_msg').removeClass('show')
                            $scope.msg = '';
                        },3000)
                    }else if(data['error'] == 'token failed'){
                        $location.path("login");
                    }
                });
        }else{
            console.log('请勾选')
        }
    }
})
    .controller('forget', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
    $scope.phone = '';
    $scope.password = '';
    $scope.password2 = '';
    $scope.code = '';
    $scope.msg='';
    $('#register .register_center .register_text .phone1').blur(function () {
        if(!(/^1[34578]\d{9}$/.test( $scope.phone))){
            console.log('错误')
            return false;
        }else{
            $('#register .register_center .register_text input').removeAttr('readonly');
            $('#register .register_center .register_text .yzm').css('background','#D7474C')

        }
    })
    $scope.gain = function () {
        $http.post(
            $scope.homeUrl + "othersInterface.api?sendCode", $.param({
                mobile: $scope.phone,
                code_type:'member_register'
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])

                    $location.path("login");
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];

                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
    }
    $scope.register = function () {

            $http.post(
                $scope.homeUrl + "memberInterfaces.api?memberForgetPassword", $.param({
                    phone: $scope.phone,
                    password: $scope.password,
                    code:$scope.code
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        console.log(data['data'])

                        $location.path("login");
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                        $scope.msg = data.error
                        $timeout(function(){
                            $scope.msg = '';
                        },3000)
                    }else if(data['error'] == 'token failed'){
                        $location.path("login");
                    }
                });

    }
})
    .controller('brand', function ($scope, $rootScope,$anchorScroll, $location,$routeParams, $timeout, $http, $cookies, $cookieStore){
    $scope.specification_id='';
    $scope.goods_id = '';
    $scope.service_arr=[];
    //$scope.num = 1;
    //获取规格详情
        if($routeParams.goods_id == '1'){
            $('#brand_shopping .content .number').addClass('hide')
        }else if($routeParams.goods_id == '3'){
            $('#brand_shopping .content .number').removeClass('hide')
        }
    if($routeParams.specification_id != '0'){
        $http.post(
            $scope.homeUrl + "goodsInterfaces.api?getGoodsSpecification", $.param({
                specification_id:$routeParams.specification_id
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    //console.log(data['data'])
                    $scope.product_case_id = data['data'].specificationBeans[0].specification_id
                    $scope.is_check_class = data['data'].specificationBeans[0].is_check_class
                    console.log(data['data'].specification_list)
                    if($scope.is_check_class == '1'){
                        $('#brand_shopping .content .items').addClass('show')
                    }else{
                        $('#brand_shopping .content .items').removeClass('show')
                    }
                    $scope.product_service_id = data['data'].specificationBeans[1].specification_id
                    $scope.product_money = data['data'].price;
                    $('#brand_shopping .content .click .btn2').attr('specification_list',data['data'].specification_list)
                    $http.post(
                        $scope.homeUrl + "goodsInterfaces.api?getChilds", $.param({
                            specification_id: $scope.product_case_id,
                            parent_id:$routeParams.goods_id
                        }),
                        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                    ).success(function (data) {
                            if (data['status'] == 'ok') {
                                $scope.service_arr = data['data']

                            } else if (data['status'] == 'error') {
                                console.log(data)
                                $scope.Er = data['error'];
                            }else if(data['error'] == 'token failed'){

                            }
                        });
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){

                }
            });
    }
//不点规格直接渲染的页面
    $http.post(
        $scope.homeUrl + "goodsInterfaces.api?getChilds", $.param({
            specification_id:$routeParams.specification_id,
            parent_id:$routeParams.goods_id
        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {
                $scope.service_arr = data['data']

            } else if (data['status'] == 'error') {
                console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){
            }
        });
    //加入购物车
    $scope.cart = function () {
        var case_id = $('#brand_shopping .center .total .money').attr('data_case_id')
        var service_id = $('#brand_shopping .center .total .money').attr('data_service_id')
        if(case_id =='' || service_id ==''){
            console.log('请选择服务类型或者案件类型')
        }else if(case_id !='' && service_id !=''){
            var specification_list = $('#brand_shopping .center .click .btn2').attr('specification_list')
            $http.post(
                $scope.homeUrl + "goodsInterfaces.api?getGoodsSpecificationByList", $.param({
                    specification_list:specification_list
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                       console.log(data['data'])
                        var specification_id = data['data'].specification_id;
                        var goods_id =  $('#brand_shopping .center h2').attr('goods_id');
                        var big_class = $('#brand_shopping .center .items .genera').text()
                        var small_class = $('#brand_shopping .center .items .small').attr('title')
                        var goods_num =  $('#brand_shopping .center .number span').text();
                        $('#brand_shopping .center .total .money').text(data['data'].price)
                        $http.post(
                            $scope.homeUrl + "shoppingCarInterfaces.api?insertShoppingCar", $.param({
                                member_id: $cookieStore.get("member_id"),
                                token: $cookieStore.get("token"),
                                goods_id:goods_id,
                                big_class:big_class,
                                small_class:small_class,
                                goods_num:goods_num,
                                specification_id:specification_id
                            }),
                            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                        ).success(function (data) {
                                if (data['status'] == 'ok') {
                                     console.log(data)
                                    $('#brand_shopping .center .click .btn1').attr('order_id',data.data)
                                    $scope.cart_shop()
                                } else if (data['status'] == 'error') {
                                    console.log(data)
                                    $scope.Er = data['error'];
                                }else if(data['error'] == 'token failed'){
                                    $location.path("login");
                                }
                            });
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                    }
                });
        }
    }
        //立即购买
    $scope.shop = function () {
        var case_id = $('#brand_shopping .center .total .money').attr('data_case_id')
        var service_id = $('#brand_shopping .center .total .money').attr('data_service_id')

        if(case_id =='' || service_id ==''){
            console.log('请选择服务类型或者案件类型')
        }else if(case_id !='' && service_id !=''){
            var specification_list = $('#brand_shopping .center .click .btn2').attr('specification_list')
            $http.post(
                $scope.homeUrl + "goodsInterfaces.api?getGoodsSpecificationByList", $.param({
                    specification_list:specification_list
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        console.log(data['data'])
                        var specification_id = data['data'].specification_id;
                        var goods_id =  $('#brand_shopping .center h2').attr('goods_id');
                        var big_class = $('#brand_shopping .center .items .genera').text()
                        var small_class = $('#brand_shopping .center .items .small').attr('title')
                        var goods_num =  $('#brand_shopping .center .number span').text();
                        $('#brand_shopping .center .total .money').text(data['data'].price)
                        $http.post(
                            $scope.homeUrl + "shoppingCarInterfaces.api?insertShoppingCar", $.param({
                                member_id: $cookieStore.get("member_id"),
                                token: $cookieStore.get("token"),
                                goods_id:goods_id,
                                big_class:big_class,
                                small_class:small_class,
                                goods_num:goods_num,
                                specification_id:specification_id
                            }),
                            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                        ).success(function (data) {
                                if (data['status'] == 'ok') {
                                    console.log(data)
                                    $scope.cart_shop()
                                    if(data.data == 'null'){
                                        $location.path("shop");
                                    }else{
                                        $location.path("pay/" +data.data);
                                    }

                                } else if (data['status'] == 'error') {
                                    console.log(data)
                                    $scope.Er = data['error'];
                                }else if(data['error'] == 'token failed'){
                                    $location.path("login");
                                }
                            });
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                    }
                });
        }


    }
    //获取商品案件类型
    $http.post(
        $scope.homeUrl + "goodsInterfaces.api?getOneGoodsDetail", $.param({
            goods_id:$routeParams.goods_id,
        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {
                $scope.brand_list = data['data']
                console.log($scope.brand_list)
                $scope.case_arr = [];

                var arr1=[];
                for(var i =0; i<=$scope.brand_list.goodsSpecificationBeans.length-1; i++ ){
                    arr1.push($scope.brand_list.goodsSpecificationBeans[i])
                }

                function obj2key(obj, keys){
                    var n = keys.length,
                        key = [];
                    while(n--){
                        key.push(obj[keys[n]]);
                    }
                    return key.join('|');
                }
                //去重操作
                function uniqeByKeys(array,keys){
                    var arr = [];
                    var hash = {};
                    for (var i = 0, j = array.length; i < j; i++) {
                        var k = obj2key(array[i].specificationBeans[0], keys);
                        if (!(k in hash)) {
                            hash[k] = true;
                            arr .push(array[i]);
                        }
                    }
                    return arr ;
                }
                $scope.case_arr = uniqeByKeys(arr1,['specification_name']);

            } else if (data['status'] == 'error') {
                console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){
            }
        });

    //获取下一层菜单列表
    $scope.child = function () {
        $('#brand_shopping .content .case ul li').on('click', function () {
            $(this).addClass('current').siblings().removeClass('current')
            var is_check_class = $(this).attr('is_check_class')
            if(is_check_class == '1'){
                $('#brand_shopping .content .items').addClass('show')
            }else{
                $('#brand_shopping .content .items').removeClass('show')
            }
            $('#brand_shopping .content .service ul li').removeClass('current')
            $('#brand_shopping .content .total .money').attr('data_service_id','')
            $('#brand_shopping .content .total .money').text('0')
            $('#brand_shopping .content .number span').text('1');
            $scope.goods_id = $('#brand_shopping .center h2').attr('goods_id')
            $scope.specification_id =  $(this).attr('case_id')

            $http.post(
                $scope.homeUrl + "goodsInterfaces.api?getChilds", $.param({
                    specification_id: $scope.specification_id,
                    parent_id: $scope.goods_id
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        //console.log(data['data'])
                        $scope.service_arr = data['data']
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                    }
                });
        })

    }
        //显示大类
    $scope.show_genera = function () {
        $('#brand_shopping .content .details').addClass('show')
        $http.post(
            $scope.homeUrl + "goodsInterfaces.api?getNiceClassByParent", $.param({
                parent_id: -1
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    $scope.genera_list = data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                }
            });

    }
        //显示小类
    $scope.show_small = function () {
            $('#brand_shopping .content .small_class').addClass('show')
            var id = $('#brand_shopping .content .items .small').attr('class_id')
            $scope.text = $('#brand_shopping .content .items .genera').text()
            $http.post(
                $scope.homeUrl + "goodsInterfaces.api?getNiceClassByParent", $.param({
                    parent_id: id
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        console.log(data['data'])
                        $scope.small_list = data['data']
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                    }
                });

        }
    //常见问题
        $http.post(
            $scope.homeUrl + "goodsInterfaces.api?getGoodsQuestions", $.param({
                goods_id:$routeParams.goods_id
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $scope.list_problem= data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                }
            });
   //用户评价
        $http.post(
            $scope.homeUrl + "goodsInterfaces.api?getGoodsAssessments", $.param({
                goods_id:$routeParams.goods_id
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $scope.list_assessment= data['data']
                    $('#brand_product .content .center_sw .brand_page').attr('data-num',data.total)
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                }
            });

    $scope.demo2 = function () {
        $('html,body').animate({scrollTop:$('#service').offset().top},1000)
    }
    $scope.demo3 = function () {
        $('html,body').animate({scrollTop:$('#advantage').offset().top},1000)
    }
    $scope.demo4 = function () {
        $('html,body').animate({scrollTop:$('#problem').offset().top},1000)
    }
    $scope.demo5 = function () {
        $('html,body').animate({scrollTop:$('#appraise').offset().top},1000)
    }
})
    .controller('patent', function ($scope, $rootScope, $location,$routeParams, $timeout, $http, $cookies, $cookieStore){
    $scope.specification_id='';
    $scope.goods_id = '';
    $scope.pet_service_arr=[];
    //获取规格详情
    if($routeParams.specification_id != '0'){
        $http.post(
            $scope.homeUrl + "goodsInterfaces.api?getGoodsSpecification", $.param({
                specification_id:$routeParams.specification_id
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    $scope.product_case_id = data['data'].specificationBeans[0].specification_id
                    $scope.product_service_id = data['data'].specificationBeans[1].specification_id
                    $scope.product_money = data['data'].price;
                    $('#patent_shopping .patent_content .click .btn2').attr('specification_list',data['data'].specification_list)
                    $http.post(
                        $scope.homeUrl + "goodsInterfaces.api?getChilds", $.param({
                            specification_id: $scope.product_case_id,
                            parent_id:$routeParams.goods_id
                        }),
                        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                    ).success(function (data) {
                            if (data['status'] == 'ok') {
                                $scope.pet_service_arr = data['data']

                            } else if (data['status'] == 'error') {
                                console.log(data)
                                $scope.Er = data['error'];
                            }else if(data['error'] == 'token failed'){

                            }
                        });
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){

                }
            });
    }
    //获取商品详细信息
    $http.post(
        $scope.homeUrl + "goodsInterfaces.api?getOneGoodsDetail", $.param({
            goods_id:$routeParams.goods_id
        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {
                $scope.pet_brand_list = data['data']
                $scope.pet_case_arr = [];

                var arr1=[];
                for(var i =0; i<=$scope.pet_brand_list.goodsSpecificationBeans.length-1; i++ ){
                    arr1.push($scope.pet_brand_list.goodsSpecificationBeans[i])
                }

                function obj2key(obj, keys){
                    var n = keys.length,
                        key = [];
                    while(n--){
                        key.push(obj[keys[n]]);
                    }
                    return key.join('|');
                }
                //去重操作
                function uniqeByKeys(array,keys){
                    var arr = [];
                    var hash = {};
                    for (var i = 0, j = array.length; i < j; i++) {
                        var k = obj2key(array[i].specificationBeans[0], keys);
                        if (!(k in hash)) {
                            hash[k] = true;
                            arr .push(array[i]);
                        }
                    }
                    return arr ;
                }
                $scope.pet_case_arr = uniqeByKeys(arr1,['specification_name']);
            } else if (data['status'] == 'error') {
                console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){
            }
        });
    //不点击规格直接渲染页面
    $http.post(
        $scope.homeUrl + "goodsInterfaces.api?getChilds", $.param({
            specification_id:$routeParams.specification_id,
            parent_id:$routeParams.goods_id
        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {

                $scope.pet_service_arr = data['data']
            } else if (data['status'] == 'error') {
                console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){
            }
        });
    //加入购物车
    $scope.cart = function () {
        var case_id = $('#patent_shopping .patent_content .total .money').attr('data_case_id')
        var service_id = $('#patent_shopping .patent_content .total .money').attr('data_service_id')
        var service_id = $('#patent_shopping .patent_content .total .money').attr('data_service_id')
        if(case_id =='' || service_id ==''){
            console.log('请选择服务类型或者案件类型')
        }else if(case_id !='' && service_id !=''){
            var specification_list = $('#patent_shopping .patent_content .click .btn2').attr('specification_list')
            $http.post(
                $scope.homeUrl + "goodsInterfaces.api?getGoodsSpecificationByList", $.param({
                    specification_list:specification_list
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        console.log(data['data'])
                        var specification_id = data['data'].specification_id;
                        var goods_id =  $('#patent_shopping .patent_content h2').attr('goods_id');
                        var goods_num =  $('#patent_shopping .patent_content .number span').text();
                        $('#patent_shopping .patent_content .total .money').text(data['data'].price)
                        $http.post(
                            $scope.homeUrl + "shoppingCarInterfaces.api?insertShoppingCar", $.param({
                                member_id: $cookieStore.get("member_id"),
                                token: $cookieStore.get("token"),
                                goods_id:goods_id,
                                goods_num:goods_num,
                                specification_id:specification_id
                            }),
                            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                        ).success(function (data) {
                                if (data['status'] == 'ok') {
                                    console.log(data)
                                    $scope.cart_shop()
                                } else if (data['status'] == 'error') {
                                    console.log(data)
                                    $scope.Er = data['error'];
                                }else if(data['error'] == 'token failed'){
                                    $location.path("login");
                                }
                            });
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                    }
                });
        }
    }
     //立即购买
     $scope.pay_patent = function () {
            var case_id = $('#patent_shopping .patent_content .total .money').attr('data_case_id')
            var service_id = $('#patent_shopping .patent_content .total .money').attr('data_service_id')
            var service_id = $('#patent_shopping .patent_content .total .money').attr('data_service_id')
            if(case_id =='' || service_id ==''){
                console.log('请选择服务类型或者案件类型')
            }else if(case_id !='' && service_id !=''){
                var specification_list = $('#patent_shopping .patent_content .click .btn2').attr('specification_list')
                $http.post(
                    $scope.homeUrl + "goodsInterfaces.api?getGoodsSpecificationByList", $.param({
                        specification_list:specification_list
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                ).success(function (data) {
                        if (data['status'] == 'ok') {
                            console.log(data['data'])
                            var specification_id = data['data'].specification_id;
                            var goods_id =  $('#patent_shopping .patent_content h2').attr('goods_id');
                            var goods_num =  $('#patent_shopping .patent_content .number span').text();
                            $('#patent_shopping .patent_content .total .money').text(data['data'].price)
                            $http.post(
                                $scope.homeUrl + "shoppingCarInterfaces.api?insertShoppingCar", $.param({
                                    member_id: $cookieStore.get("member_id"),
                                    token: $cookieStore.get("token"),
                                    goods_id:goods_id,
                                    goods_num:goods_num,
                                    specification_id:specification_id
                                }),
                                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                            ).success(function (data) {
                                    if (data['status'] == 'ok') {
                                        console.log(data)
                                        $scope.cart_shop()
                                        if(data.data == 'null'){
                                            $location.path("shop");
                                        }else{
                                            $location.path("pay/" +data.data);
                                        }
                                    } else if (data['status'] == 'error') {
                                        console.log(data)
                                        $scope.Er = data['error'];
                                    }else if(data['error'] == 'token failed'){
                                        $location.path("login");
                                    }
                                });
                        } else if (data['status'] == 'error') {
                            console.log(data)
                            $scope.Er = data['error'];
                        }else if(data['error'] == 'token failed'){
                        }
                    });
            }
        }
    //获取下一层菜单列表
    $scope.pet_child = function () {
        $('#patent_shopping .patent_content .case ul li').on('click', function () {
            $scope.goods_id = $('#patent_shopping .patent_content h2').attr('goods_id')
            $scope.specification_id =  $(this).attr('case_id')

            $http.post(
                $scope.homeUrl + "goodsInterfaces.api?getChilds", $.param({
                    specification_id: $scope.specification_id,
                    parent_id: $scope.goods_id
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        $scope.pet_service_arr = data['data']
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                    }
                });
        })

    }
     //获取下下一层缴纳菜单列表
     $scope.contribute= function () {
            $('#patent_shopping .patent_content .service ul li').on('click', function () {
                $scope.goods_id = $('#patent_shopping .patent_content h2').attr('goods_id')
                $scope.specification_id =  $(this).attr('service_id')

                $http.post(
                    $scope.homeUrl + "goodsInterfaces.api?getChilds", $.param({
                        specification_id: $scope.specification_id,
                        parent_id: $scope.goods_id
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                ).success(function (data) {
                        if (data['status'] == 'ok') {
                            console.log(data['data'])
                            $scope.pet_contribute_arr = data['data']
                            if($scope.pet_contribute_arr != ''){
                                $('#patent_shopping .patent_content .items').addClass('show')
                            }else{
                                $('#patent_shopping .patent_content .items').removeClass('show')
                            }
                        } else if (data['status'] == 'error') {
                            console.log(data)
                            $scope.Er = data['error'];
                        }else if(data['error'] == 'token failed'){
                        }
                    });
            })

        }
        //常见问题
        $http.post(
            $scope.homeUrl + "goodsInterfaces.api?getGoodsQuestions", $.param({
                goods_id:$routeParams.goods_id
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $scope.list_problem= data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                }
            });
        //用户评价
        $http.post(
            $scope.homeUrl + "goodsInterfaces.api?getGoodsAssessments", $.param({
                goods_id:$routeParams.goods_id
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $scope.list_assessment= data['data']
                    $('#patent_product .content .appraise .patent_page').attr('data-num',data.total)
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                }
            });

        $scope.demo2 = function () {
            $('html,body').animate({scrollTop:$('#service').offset().top},1000)
        }
        $scope.demo3 = function () {
            $('html,body').animate({scrollTop:$('#advantage').offset().top},1000)
        }
        $scope.demo4 = function () {
            $('html,body').animate({scrollTop:$('#problem').offset().top},1000)
        }
        $scope.demo5 = function () {
            $('html,body').animate({scrollTop:$('#appraise').offset().top},1000)
        }
})
    .controller('other', function ($scope, $rootScope, $location,$routeParams, $timeout, $http, $cookies, $cookieStore){
        $scope.specification_id='';
        $scope.goods_id = '';
        $scope.pet_service_arr=[];
        //获取规格详情
        if($routeParams.specification_id != '0'){
            $http.post(
                $scope.homeUrl + "goodsInterfaces.api?getGoodsSpecification", $.param({
                    specification_id:$routeParams.specification_id
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {

                        $scope.product_case_id = data['data'].specificationBeans[0].specification_id
                        $scope.product_money = data['data'].price;
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){

                    }
                });
        }
        //获取商品详细信息
        $http.post(
            $scope.homeUrl + "goodsInterfaces.api?getOneGoodsDetail", $.param({
                goods_id:$routeParams.goods_id,
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {

                    $scope.brand_list = data['data']
                    $scope.case_arr = [];

                    var arr1=[];
                    for(var i =0; i<=$scope.brand_list.goodsSpecificationBeans.length-1; i++ ){
                        arr1.push($scope.brand_list.goodsSpecificationBeans[i])
                    }

                    function obj2key(obj, keys){
                        var n = keys.length,
                            key = [];
                        while(n--){
                            key.push(obj[keys[n]]);
                        }
                        return key.join('|');
                    }
                    //去重操作
                    function uniqeByKeys(array,keys){
                        var arr = [];
                        var hash = {};
                        for (var i = 0, j = array.length; i < j; i++) {
                            var k = obj2key(array[i].specificationBeans[0], keys);
                            if (!(k in hash)) {
                                hash[k] = true;
                                arr .push(array[i]);
                            }
                        }
                        return arr ;
                    }
                    $scope.case_arr = uniqeByKeys(arr1,['specification_name']);
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                }
            });
        //加入购物车
        $scope.cart = function () {
            var case_id = $('#brand_shopping .center .total .money').attr('data_case_id')
            //var service_id = $('#brand_shopping .center .total .money').attr('data_service_id')
            if(case_id ==''){
                console.log('请选择服务类型或者案件类型')
            }else if(case_id !='' ){
                var specification_list = $('#brand_shopping .center .total .money').attr('data_case_id')
                $http.post(
                    $scope.homeUrl + "goodsInterfaces.api?getGoodsSpecificationByList", $.param({
                        specification_list:specification_list
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                ).success(function (data) {
                        if (data['status'] == 'ok') {
                            console.log(data['data'])
                            var specification_id = data['data'].specification_id;
                            var goods_id =  $('#brand_shopping .center h2').attr('goods_id');
                            var goods_num =  $('#brand_shopping .center .number span').text();
                            $('#brand_shopping .center .total .money').text(data['data'].price)
                            $http.post(
                                $scope.homeUrl + "shoppingCarInterfaces.api?insertShoppingCar", $.param({
                                    member_id: $cookieStore.get("member_id"),
                                    token: $cookieStore.get("token"),
                                    goods_id:goods_id,
                                    goods_num:goods_num,
                                    specification_id:specification_id
                                }),
                                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                            ).success(function (data) {
                                    if (data['status'] == 'ok') {
                                        console.log(data)
                                        $('#brand_shopping .center .click .btn1').attr('order_id',data.data)
                                        $scope.cart_shop()
                                    } else if (data['status'] == 'error') {
                                        console.log(data)
                                        $scope.Er = data['error'];
                                    }else if(data['error'] == 'token failed'){
                                        $location.path("login");
                                    }
                                });
                        } else if (data['status'] == 'error') {
                            console.log(data)
                            $scope.Er = data['error'];
                        }else if(data['error'] == 'token failed'){
                        }
                    });
            }
        }
        //立即购买
        $scope.shop = function () {
            var case_id = $('#brand_shopping .center .total .money').attr('data_case_id')
            //var service_id = $('#brand_shopping .center .total .money').attr('data_service_id')
            if(case_id ==''){
                console.log('请选择服务类型或者案件类型')
            }else if(case_id !=''){
                var specification_list = $('#brand_shopping .center .total .money').attr('data_case_id')
                $http.post(
                    $scope.homeUrl + "goodsInterfaces.api?getGoodsSpecificationByList", $.param({
                        specification_list:specification_list
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                ).success(function (data) {
                        if (data['status'] == 'ok') {
                            console.log(data['data'])
                            var specification_id = data['data'].specification_id;
                            var goods_id =  $('#brand_shopping .center h2').attr('goods_id');
                            var goods_num =  $('#brand_shopping .center .number span').text();
                            $('#brand_shopping .center .total .money').text(data['data'].price)
                            $http.post(
                                $scope.homeUrl + "shoppingCarInterfaces.api?insertShoppingCar", $.param({
                                    member_id: $cookieStore.get("member_id"),
                                    token: $cookieStore.get("token"),
                                    goods_id:goods_id,
                                    goods_num:goods_num,
                                    specification_id:specification_id
                                }),
                                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                            ).success(function (data) {
                                    if (data['status'] == 'ok') {
                                        console.log(data)
                                        $scope.cart_shop()
                                        if(data.data == 'null'){
                                            $location.path("shop");
                                        }else{
                                            $location.path("pay/" +data.data);
                                        }

                                    } else if (data['status'] == 'error') {
                                        console.log(data)
                                        $scope.Er = data['error'];
                                    }else if(data['error'] == 'token failed'){
                                        $location.path("login");
                                    }
                                });
                        } else if (data['status'] == 'error') {
                            console.log(data)
                            $scope.Er = data['error'];
                        }else if(data['error'] == 'token failed'){
                        }
                    });
            }


        }
        //获取下一层菜单列表
        $scope.child = function () {
            $('#brand_shopping .content .case ul li').on('click', function () {
                $(this).addClass('current').siblings().removeClass('current')
                $('#brand_shopping .content .number span').text('1');
                $scope.goods_id = $('#brand_shopping .center h2').attr('goods_id')
                $scope.specification_id =  $(this).attr('case_id')
                var case_id = $('#brand_shopping .center .total .money').attr('data_case_id')

                $timeout(function () {
                    if(case_id !=''){
                        var specification_list = $('#brand_shopping .center .total .money').attr('data_case_id')
                        $http.post(
                            $scope.homeUrl + "goodsInterfaces.api?getGoodsSpecificationByList", $.param({
                                specification_list:specification_list
                            }),
                            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                        ).success(function (data) {
                                if (data['status'] == 'ok') {
                                    $('#brand_shopping .center .total .money').text(data['data'].price)
                                } else if (data['status'] == 'error') {
                                    console.log(data)
                                    $scope.Er = data['error'];
                                }else if(data['error'] == 'token failed'){
                                }
                            });
                    }else{

                    }
                })
            })

        }
        //常见问题
        $http.post(
            $scope.homeUrl + "goodsInterfaces.api?getGoodsQuestions", $.param({
                goods_id:$routeParams.goods_id
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $scope.list_problem= data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                }
            });
        //用户评价
        $http.post(
            $scope.homeUrl + "goodsInterfaces.api?getGoodsAssessments", $.param({
                goods_id:$routeParams.goods_id
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $scope.list_assessment= data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                }
            });

        $scope.demo2 = function () {
            $('html,body').animate({scrollTop:$('#service').offset().top},1000)
        }
        $scope.demo3 = function () {
            $('html,body').animate({scrollTop:$('#advantage').offset().top},1000)
        }
        $scope.demo4 = function () {
            $('html,body').animate({scrollTop:$('#problem').offset().top},1000)
        }
        $scope.demo5 = function () {
            $('html,body').animate({scrollTop:$('#appraise').offset().top},1000)
        }
    })
    .controller('search', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){

})
    .controller('message', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){

    })
    .controller('trademarkDetail', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){

})
    .controller('pay', function ($scope, $rootScope,$routeParams, $location, $timeout, $http, $cookies, $cookieStore){
    $http.post(
        $scope.homeUrl + "shoppingCarInterfaces.api?getShoppingCarsWithCarids", $.param({
            ids:$routeParams.order_id,
            token:$cookieStore.get('token'),
            member_id:$cookieStore.get('member_id'),

        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {
                console.log(data['data'])
                $scope.order_list = data['data']
            } else if (data['status'] == 'error') {
                console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){
                $location.path("login");
            }
        });
    $scope.address = function () {
        $http.post(
            $scope.homeUrl + "addressInterfaces.api?getOwnerAddress", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id')

            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $scope.dizhi_list = data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
    }
    $scope.address()
    $scope.hide = function () {

        $('#hintOne').slideUp(500);
    }
    //删除地址
    $scope.cancel = function () {
        var address_id = $('#hintOne .content .hint_btn2').attr('data_id')
        $http.post(
            $scope.homeUrl + "addressInterfaces.api?deleteAddress", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id'),
                address_id:address_id
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    $('#hintOne').slideUp(500);
                    $scope.address()
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
    }
    //形成订单号
    $scope.pay = function () {
        var address_id = $('#payment_main .payment_content .aa ').attr('data-id')
        var json={}
        json.member_id=$cookieStore.get('member_id');
        json.address_id=address_id;
        json.order_type='goods';
        json.order_name='轰天鳟鱼';
        json.shopping_car_ids=$routeParams.order_id;
        json.orderBeans = [];
       var  main={};
        main.remark="完成";
        main.orderGoodsBeans = []
        $scope.order_list.forEach(function(item) {
            var obj = {}
            obj.goods_id = item.goods_id
            obj.specification_id = item.specification_id
            obj.case_no = item.case_no
            obj.price = item.goods_price
            obj.goods_num = item.goods_num
            obj.case_type = item.case_type
            obj.service_type = item.service_type
            main.orderGoodsBeans.push(obj)
        });
        json.orderBeans.push(main)
        json = JSON.stringify(json)
        $http.post(
            $scope.homeUrl + "orderInterfaces.api?insertOrder", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id'),
                json:json

            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $http.post(
                        $scope.homeUrl + "orderInterfaces.api?payRealOrders", $.param({
                            token:$cookieStore.get('token'),
                            member_id:$cookieStore.get('member_id'),
                            order_ids:data['data'].order_ids,
                            channel:'wx_pub_qr'

                        }),
                        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                    ).success(function (data) {
                            if (data['status'] == 'ok') {
                                console.log(data['data'])
                                $("#wx_pay").css("height",$(document).height());
                                $("#wx_pay").css("width",$(document).width());
                                $('#wx_pay .content .hint_con img').attr('src',data['data'])
                                $('#wx_pay').slideDown(200);
                            } else if (data['status'] == 'error') {
                                console.log(data)
                                $scope.Er = data['error'];
                            }else if(data['error'] == 'token failed'){
                                $location.path("login");
                            }
                        });
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
    }


})
    .controller('shop', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
        $scope.cart_shop()
    var show = function () {
        $http.post(
            $scope.homeUrl + "shoppingCarInterfaces.api?getShoppingCars", $.param({
                member_id: $cookieStore.get("member_id"),
                token: $cookieStore.get("token")
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $scope.carts = data['data']

                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
    }

    show()
    $scope.hide = function () {

        $('#hint').slideUp(500);
    }
    //确定删除
    $scope.confirm = function () {
        var cart_id = $('#hint .content .hint_btn2').attr('data_id')
        $http.post(
            $scope.homeUrl + "shoppingCarInterfaces.api?deleteShoppingCars", $.param({
                member_id: $cookieStore.get("member_id"),
                token: $cookieStore.get("token"),
                ids:cart_id
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    $('#hint').slideUp(500);
                    show()
                    $scope.cart_shop()
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){

                }
            });
    }
    //立即申请
    $scope.apply_for = function () {
        var order_id =  $("#shopping .content .all_cart .btn").attr('order_id')
        $location.path("pay/"+order_id);
    }

})
    .controller('info', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
        //近期消息
      $scope.aa = function () {
          $http.post(
              $scope.homeUrl + "memberInterfaces.api?getMemberMsgs", $.param({
                  token:$cookieStore.get('token'),
                  member_id:$cookieStore.get('member_id')
              }),
              {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
          ).success(function (data) {
                  if (data['status'] == 'ok') {
                      console.log(data['data'])
                      $scope.news = data['data']
                      $scope.info_num = data.total
                  } else if (data['status'] == 'error') {
                      console.log(data)
                      $scope.Er = data['error'];
                  }else if(data['error'] == 'token failed'){
                      $location.path("login");
                  }
              });
      }
        $scope.aa()
        $scope.hide = function () {

            $('#hintOne').slideUp(500);
        }
        //确定删除
        $scope.delete = function () {
            var msg_id = $('#hintOne .content .hint_btn2').attr('data_id')
            $http.post(
                $scope.homeUrl + "memberInterfaces.api?deleteMemberMsgs", $.param({
                    member_id: $cookieStore.get("member_id"),
                    token: $cookieStore.get("token"),
                    ids:msg_id
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        $('#hintOne').slideUp(500);
                        $scope.aa()
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){

                    }
                });
        }

})
    .controller('expenses', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
    $scope.recharge = function (){
        $location.path('recharge')
    }
})
    .controller('recharge', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
    $scope.expenses = function (){
        $location.path('expenses')
    }
})
    .controller('comment', function ($scope, $rootScope, $location,$routeParams, $timeout, $http, $cookies, $cookieStore){
        $http.post(
            $scope.homeUrl + "orderInterfaces.api?getOneOrderDetail", $.param({
                order_id:$routeParams.order_id,
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id'),

            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $scope.star_list = data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
        //提交
        $scope.star_refer = function () {
            var obj = []
            $scope.star_list.orderGoodsBeans.forEach(function(item) {

                obj.push(item.goods_id)
            });
            obj = obj.join(',')
                var num = $('#comment_main .content .comment .stars').attr('value')
                var text = $('#comment_main .content .comment textarea').val()
            $http.post(
                $scope.homeUrl + "orderInterfaces.api?assessmentOrder", $.param({
                    token:$cookieStore.get('token'),
                    member_id:$cookieStore.get('member_id'),
                    order_id:$routeParams.order_id,
                    assessment_desc:text,
                    assessment_star:num,
                    goods_ids:obj

                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        console.log(data['data'])
                        $location.path("finish");
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                        $location.path("login");
                    }
                });
        }

    })
    .controller('discounts', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){

    $http.post(
        $scope.homeUrl + "couponInterfaces.api?getCoupons", $.param({
            member_id: $cookieStore.get("member_id"),
            token: $cookieStore.get("token"),
            coupon_state:'not_used'
        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {
                $scope.used = data['data']
            } else if (data['status'] == 'error') { console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){
                $location.path("login");
            }
        });

    $http.post(
            $scope.homeUrl + "couponInterfaces.api?getCouponsCount", $.param({
                member_id: $cookieStore.get("member_id"),
                token: $cookieStore.get("token")
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $scope.data_num = data['data']
                } else if (data['status'] == 'error') { console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
})
    .controller('evaluate', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
        $http.post(
            $scope.homeUrl + "memberInterfaces.api?getMemberAssessmentList", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id'),
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    $scope.data_ments = data['data']
                    console.log(data)
                    $('#evaluate_main .content .page').attr('data-num',data.total)
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
})
    .controller('finish', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
        $scope.cookies()
        $scope.transact = function () {
            $location.path("transact")
        }
        $scope.obligation = function () {
            $location.path("obligation")
        }

        $scope.order_num()
         $scope.finish = function () {
          $http.post(
              $scope.homeUrl + "orderInterfaces.api?getOrders", $.param({
                  token:$cookieStore.get('token'),
                  member_id:$cookieStore.get('member_id'),
                  order_state:'end,wait_assessment,transact_over',
                  limit:5
              }),
              {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
          ).success(function (data) {
                  if (data['status'] == 'ok') {
                      console.log(data['data'])
                      $scope.end_data = data['data']
                      if( $scope.end_data == ''){
                          $('#finish_main .content .order_not').addClass('show')
                          $('#finish_main .content .list_tou').addClass('hide')
                      }else{
                          $('#finish_main .content .order_not').removeClass('show')
                          $('#finish_main .content .list_tou').removeClass('hide')
                      }
                  } else if (data['status'] == 'error') {
                      console.log(data)
                      $scope.Er = data['error'];
                  }else if(data['error'] == 'token failed'){
                      $location.path("login");
                  }
              });
      }
        $scope.finish()
        //编辑昵称
        $scope.cancel_compile = function () {
            var order_id = $('#compile .content .hint_btn2').attr('data_id')
            var name = $('#compile .content .hint_con input').val()
            $http.post(
                $scope.homeUrl + "orderInterfaces.api?updateOrderDetail", $.param({
                    token:$cookieStore.get('token'),
                    member_id:$cookieStore.get('member_id'),
                    order_id:order_id,
                    order_name:name
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        console.log(data['data'])
                        $('#compile').slideUp(200);
                        $('#compile .hint_con input').val('')
                        $scope.finish()
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                        $location.path("login");
                    }
                });
        }
        $scope.hide_finish = function () {

            $('#hintOne').slideUp(200);
        }
        $scope.finish_aa = function () {
            var show_id =  $('#finish_main .content .list_con .item7 .box3').attr('order_id')
            $("#hintOne").css("height",$(document).height());
            $("#hintOne").css("width",$(document).width());
            $('#hintOne').slideDown(200)
            $('#hintOne .content .hint_btn2').attr('data_id',show_id)
        }
        //修改订单状态
        $scope.cancel_finish = function () {
            var order_id = $('#hintOne .content .hint_btn2').attr('data_id')
            $http.post(
                $scope.homeUrl + "orderInterfaces.api?confirmOrder", $.param({
                    token:$cookieStore.get('token'),
                    member_id:$cookieStore.get('member_id'),
                    order_id:order_id
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        $('#hintOne').slideUp(200);
                        $scope.finish()
                        $scope.order_num()
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $('#hintOne').slideUp(200);
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                        $location.path("login");
                    }
                });
        }
        //搜索订单
        $scope.search_finish = function () {
            var text = $('#finish_main .content .search .sw_btn').val()
            if(text != ''){
                $http.post(
                    $scope.homeUrl + "orderInterfaces.api?searchOrders", $.param({
                        token:$cookieStore.get('token'),
                        member_id:$cookieStore.get('member_id'),
                        search:text,
                        limit:5
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                ).success(function (data) {
                        if (data['status'] == 'ok') {
                            console.log(data['data'])
                            $scope.end_data = data['data']
                        } else if (data['status'] == 'error') {
                            console.log(data)
                            $scope.Er = data['error'];
                        }else if(data['error'] == 'token failed'){
                            $location.path("login");
                        }
                    });
            }
        }
})
    .controller('obligation', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
    $scope.data = [];
    $scope.cookies()
    $scope.transact = function () {
        $location.path("transact")
    }
    $scope.finish = function () {
        $location.path("finish")
    }

    $scope.order_num()
    $scope.obligation = function () {
        $http.post(
            $scope.homeUrl + "orderInterfaces.api?getOrders", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id'),
                order_state:'wait_pay',
                limit:5
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $scope.data = data['data']
                    if( $scope.data == ''){
                        $('#obligation_main .content .order_not').addClass('show')
                        $('#obligation_main .content .list_tou').addClass('hide')
                    }else{
                        $('#obligation_main .content .order_not').removeClass('show')
                        $('#obligation_main .content .list_tou').removeClass('hide')
                    }
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
    }
        $scope.obligation()
        //编辑昵称
        $scope.cancel_compile = function () {
            var order_id = $('#compile .content .hint_btn2').attr('data_id')
            var name = $('#compile .content .hint_con input').val()
            $http.post(
                $scope.homeUrl + "orderInterfaces.api?updateOrderDetail", $.param({
                    token:$cookieStore.get('token'),
                    member_id:$cookieStore.get('member_id'),
                    order_id:order_id,
                    order_name:name
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        console.log(data['data'])
                        $('#compile').slideUp(200);
                        $('#compile .hint_con input').val('')
                        $scope.obligation()
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                        $location.path("login");
                    }
                });
        }
        $scope.hide_obligation = function () {

            $('#hintOne').slideUp(200);
            $('#compile').slideUp(200);
        }
        //删除订单
        $scope.cancel_obligation = function () {
            var order_id = $('#hintOne .content .hint_btn2').attr('data_id')
            $http.post(
                $scope.homeUrl + "orderInterfaces.api?deleteOrder", $.param({
                    token:$cookieStore.get('token'),
                    member_id:$cookieStore.get('member_id'),
                    order_id:order_id
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        $('#hintOne').slideUp(200);
                        $scope.obligation()
                        $scope.order_num()
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                        $location.path("login");
                    }
                });
        }

        //搜索订单
        $scope.search_obligation = function () {
            var text = $('#obligation_main .content .search .sw_btn').val()
         if(text != ''){
             $http.post(
                 $scope.homeUrl + "orderInterfaces.api?searchOrders", $.param({
                     token:$cookieStore.get('token'),
                     member_id:$cookieStore.get('member_id'),
                     search:text,
                     limit:5
                 }),
                 {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
             ).success(function (data) {
                     if (data['status'] == 'ok') {
                         console.log(data['data'])
                         $scope.data = data['data']
                     } else if (data['status'] == 'error') {
                         console.log(data)
                         $scope.Er = data['error'];
                     }else if(data['error'] == 'token failed'){
                         $location.path("login");
                     }
                 });
         }
        }


})
    .controller('order_detail', function ($scope, $rootScope, $location,$routeParams, $timeout, $http, $cookies, $cookieStore){

        $scope.order_detail = function () {
            $http.post(
                $scope.homeUrl + "orderInterfaces.api?getOneOrderDetail", $.param({
                    token:$cookieStore.get('token'),
                    member_id:$cookieStore.get('member_id'),
                    order_id:$routeParams.order_id
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        console.log(data['data'])
                        $scope.order_data= data['data']
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                        $location.path("login");
                    }
                });
        }
        $scope.order_detail()
        //编辑昵称
        $scope.cancel_compile = function () {
            var order_id = $('#compile .content .hint_btn2').attr('data_id')
            var name = $('#compile .content .hint_con input').val()
            $http.post(
                $scope.homeUrl + "orderInterfaces.api?updateOrderDetail", $.param({
                    token:$cookieStore.get('token'),
                    member_id:$cookieStore.get('member_id'),
                    order_id:order_id,
                    order_name:name
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        console.log(data['data'])
                        $('#compile').slideUp(200);
                        $('#compile .hint_con input').val('')
                        $scope.order_detail()
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                        $location.path("login");
                    }
                });
        }
})
    .controller('personage', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
        $scope.cookies()
        $http.post(
            $scope.homeUrl + "orderInterfaces.api?getMemberRefundCount", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id'),
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    $scope.refund_count= data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
        $http.post(
            $scope.homeUrl + "orderInterfaces.api?getOrdersCount", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id')
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    $scope.all_data = data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
       //近期消息
        $http.post(
            $scope.homeUrl + "memberInterfaces.api?getMemberMsgs", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id')
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {

                    $scope.news = data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
})
    .controller('refund', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
        //退款列表
        $scope.list = function (text) {
            $http.post(
                $scope.homeUrl + "orderInterfaces.api?getMemberRefunds", $.param({
                    token:$cookieStore.get('token'),
                    member_id:$cookieStore.get('member_id'),
                    refund_state:text
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                       console.log(data['data'])
                        $scope.refund_list = data['data']
                        if( $scope.refund_list == ''){
                            $('#refund_main .content .order_not').addClass('show')
                            $('#refund_main .content .list_tou').addClass('hide')
                        }else{
                            $('#refund_main .content .order_not').removeClass('show')
                            $('#refund_main .content .list_tou').removeClass('hide')
                        }
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                        $location.path("login");
                    }
                });
        }
        $scope.list('')
        //退款各种状态数量
        $http.post(
            $scope.homeUrl + "orderInterfaces.api?getMemberRefundCount", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id')
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {

                    $scope.refund_count = data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
        //点击显示数据和分页
        $scope.sw_refund = function () {
            $('#refund_main .content .order_nav ul li').on('click', function () {
                $(this).addClass('active1').siblings().removeClass('active1')
                var page = $(this).attr('value')/10;
                var text = $(this).data('text');
                $scope.list(text)
                page = Math.ceil(page)
                $timeout(function () {
                    $("#refund_main .content .order_page").Page({
                        totalPages:page ,//分页总数
                        liNums: 5,//分页的数字按钮数(建议取奇数)
                        activeClass: 'activP', //active 类样式定义
                        prv: '上一页',//prev button name
                        next: '下一页',//next button name
                        hasFirstPage: true,
                        hasLastPage: true,
                        hasPrv: true,
                        hasNext: true,
                        callBack : function(page){
                            $http.post(
                                $scope.homeUrl + "orderInterfaces.api?getMemberRefunds", $.param({
                                    member_id: $cookieStore.get("member_id"),
                                    token: $cookieStore.get("token"),
                                    refund_state:text,
                                    page:page,
                                    limit:5
                                }),
                                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                            ).success(function (data) {
                                    if (data['status'] == 'ok') {

                                        $scope.refund_list = data['data']
                                    } else if (data['status'] == 'error') { console.log(data)
                                        $scope.Er = data['error'];
                                    }else if(data['error'] == 'token failed'){
                                        $location.path("login");
                                    }
                                });
                        }
                    });
                })

            })
        }
        //搜索订单
        $scope.search_refund = function () {
            var text = $('#refund_main .content .search .sw_btn').val()
            if(text != ''){
                $http.post(
                    $scope.homeUrl + "orderInterfaces.api?searchOrders", $.param({
                        token:$cookieStore.get('token'),
                        member_id:$cookieStore.get('member_id'),
                        search:text,
                        limit:5
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                ).success(function (data) {
                        if (data['status'] == 'ok') {
                            $scope.refund_list = data['data']
                        } else if (data['status'] == 'error') {
                            console.log(data)
                            $scope.Er = data['error'];
                        }else if(data['error'] == 'token failed'){
                            $location.path("login");
                        }
                    });
            }
        }
})
    .controller('transact', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
        $scope.cookies()
        $scope.obligation = function () {
            $location.path("obligation")
        }
        $scope.finish = function () {
            $location.path("finish")
        }
        $scope.order_num()
        $scope.transact = function () {
            $http.post(
                $scope.homeUrl + "orderInterfaces.api?getOrders", $.param({
                    token:$cookieStore.get('token'),
                    member_id:$cookieStore.get('member_id'),
                    order_state:'wait_transact',
                    limit:5
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        //console.log(data['data'])
                        $scope.wait_data = data['data']
                        if( $scope.wait_data == ''){
                            $('#transact_main .content .order_not').addClass('show')
                            $('#transact_main .content .list_tou').addClass('hide')
                        }else{
                            $('#transact_main .content .order_not').removeClass('show')
                            $('#transact_main .content .list_tou').removeClass('hide')
                        }
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                        $location.path("login");
                    }
                });
        }
        $scope.transact()
        //编辑昵称
        $scope.cancel_compile = function () {
            var order_id = $('#compile .content .hint_btn2').attr('data_id')
            var name = $('#compile .content .hint_con input').val()
            $http.post(
                $scope.homeUrl + "orderInterfaces.api?updateOrderDetail", $.param({
                    token:$cookieStore.get('token'),
                    member_id:$cookieStore.get('member_id'),
                    order_id:order_id,
                    order_name:name
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        console.log(data['data'])
                        $('#compile').slideUp(200);
                        $('#compile .hint_con input').val('')
                        $scope.transact()
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                        $location.path("login");
                    }
                });
        }
        //搜索订单
        $scope.search_transact = function () {
            var text = $('#transact_main .content .search .sw_btn').val()
            if(text != ''){
                $http.post(
                    $scope.homeUrl + "orderInterfaces.api?searchOrders", $.param({
                        token:$cookieStore.get('token'),
                        member_id:$cookieStore.get('member_id'),
                        search:text,
                        limit:5
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                ).success(function (data) {
                        if (data['status'] == 'ok') {
                            console.log(data['data'])
                            $scope.wait_data = data['data']
                        } else if (data['status'] == 'error') {
                            console.log(data)
                            $scope.Er = data['error'];
                        }else if(data['error'] == 'token failed'){
                            $location.path("login");
                        }
                    });
            }
        }
})
    .controller('invoice', function ($scope, $rootScope, $location,$routeParams, $timeout, $http, $cookies, $cookieStore){
        $scope.content = '';
        $scope.name = '';
        $scope.taxpayer = '';
        $scope.type = '';
        $scope.rise = '';
        $scope.site = '';
        $scope.bank = '';
        $scope.telephone = '';
        $scope.account = '';
        $scope.invoice_show = function () {
            $('#invoice_main .content .tax').addClass('show');
            $('#invoice_main .content .btn1').addClass('hide');
            $('#invoice_main .content .name .select1').prop('disabled',true)
            $('#invoice_main .content .name .select2').prop('checked',true)

        }
        $scope.invoice_hide = function () {
            $('#invoice_main .content .tax').removeClass('show')
            $('#invoice_main .content .btn1').removeClass('hide');
            $('#invoice_main .content .name .select1').prop('disabled',false)
            $('#invoice_main .content .name .select2').prop('checked',false)
        }

        $http.post(
            $scope.homeUrl + "orderInterfaces.api?getOneOrderDetail", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id'),
                order_id:$routeParams.order_id
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $scope.order_one= data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
        //申请发票
      $scope.invoice  = function () {
          $http.post(
              $scope.homeUrl + "orderInterfaces.api?updateOrderDetail", $.param({
                  token:$cookieStore.get('token'),
                  member_id:$cookieStore.get('member_id'),
                  order_id:$routeParams.order_id,
                  invise_register_phone:$scope.telephone,
                  invise_bank_name: $scope.bank,
                  invise_bank_code:$scope.account ,
                  invoice_type:$scope.type,
                  invise_taxpayer_code:$scope.taxpayer,
                  invoice_company_name:$scope.content,
                  invise_register_address:$scope.site,
                  invoice_rise_type:$scope.rise
              }),
              {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
          ).success(function (data) {
                  if (data['status'] == 'ok') {
                      console.log(data)
                      $scope.msg = data.data
                      $("#invoice_main .content .hint").css("height",$(document).height());
                      $("#invoice_main .content .hint").css("width",$(document).width());
                      $('#invoice_main .content .hint').slideDown(200)
                      $timeout(function () {
                          $('#invoice_main .content .hint').slideUp(200);
                          $scope.msg = '';
                          history.back(-1);
                      },3000)
                  } else if (data['status'] == 'error') {
                      console.log(data)
                      $scope.Er = data['error'];
                  }else if(data['error'] == 'token failed'){
                      $location.path("login");
                  }
              });
      }
    })
    .controller('cause', function ($scope, $rootScope, $location,$routeParams, $timeout, $http, $cookies, $cookieStore){
        $http.post(
            $scope.homeUrl + "orderInterfaces.api?getOneOrderDetail", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id'),
                order_id:$routeParams.order_id
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $scope.order_cause= data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
        // 委托-文件上传
        $(".files").change(function(){
            var shlf = $(this)
            var id =shlf.parents("form").attr("id");
            $http({
                method: 'POST',
                url:$scope.homeUrl+'orderInterfaces.api?uploadServiceImg',
                data:{},
                headers: {
                    'Content-Type': undefined
                },
                transformRequest: function(data){
                    var formData = new FormData(document.getElementById(id));
                    formData.append("fill",shlf);
                    //实际上窗
                    return formData;
                }
            }).success(function(d){
                if(d.status=="ok"){
                    shlf.siblings('img').attr("src",d.data);
                    shlf.siblings('img').css("opacity",'1');
                }else{
                    alert(d['error']);
                }
            })
        })
        //提交
        $scope.submit = function () {
            var pic1 = $('#cause_main .content  .form_name img.pic1').attr('src');
            var text = $('#cause_main .content  .state input').val();
            var goods_id = $('#cause_main .content  .order_number').data('id').toString();
            var goods_ids = goods_id.split(',');
            for(var i=0; i<goods_ids.length; i++){
                $http.post(
                    $scope.homeUrl + "orderInterfaces.api?refundOrder", $.param({
                        token:$cookieStore.get('token'),
                        member_id:$cookieStore.get('member_id'),
                        order_id: $routeParams.order_id,
                        order_goods_id:goods_ids[i],
                        refund_count:1,
                        refund_desc:text,
                        refund_img1:pic1
                    }),
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                ).success(function (data) {
                        if (data['status'] == 'ok') {
                            console.log(data)
                            $scope.msg = data.data
                            $("#cause_main .content .hint").css("height",$(document).height());
                            $("#cause_main .content .hint").css("width",$(document).width());
                            $('#cause_main .content .hint').slideDown(200)
                            $timeout(function () {
                                $('#cause_main .content .hint').slideUp(200);
                                $scope.msg = '';
                                history.back(-1);
                            },3000)
                        } else if (data['status'] == 'error') {
                            console.log(data)
                            $scope.msg = data.error
                            $("#cause_main .content .hint").css("height",$(document).height());
                            $("#cause_main .content .hint").css("width",$(document).width());
                            $('#cause_main .content .hint').slideDown(200)
                            $timeout(function () {
                                $('#cause_main .content .hint').slideUp(200);
                                $scope.msg = '';
                                history.back(-1);
                            },3000)
                            $scope.Er = data['error'];
                        }else if(data['error'] == 'token failed'){
                            $location.path("login");
                        }
                    });
            }

        }
    })
    .controller('account_mess', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
        $scope.phone= '';
        $scope.real_name= '';
        $scope.mail= '';
        $scope.birthday= '';
        $scope.address_detail= '';
        $scope.duty= '';
        $scope.industry= '';
        $scope.address_province= '';
        $scope.address_city= '';
        $scope.address_district= '';
        $scope.head_img= '';
        $scope.isSex='';
        $scope.isType= '';
        $scope.provinces= [];
        $scope.city=[];
        $scope.dist=[];
        $scope.shuaxin = function () {
            $http.post(
                $scope.homeUrl + "memberInterfaces.api?getMemberDetail", $.param({
                    member_id:$cookieStore.get('member_id'),
                    token:$cookieStore.get('token')
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        var data =(data['data'])
                        $scope.phone = data.phone;
                        $scope.real_name = data.real_name;
                        $scope.mail = data.mail;
                        $scope.sex = data.sex;
                        $scope.birthday = data.birthday;
                        $scope.address_detail = data.address_detail;
                        $scope.duty = data.duty;
                        $scope.industry = data.industry;
                        $scope.address_province = data.address_province;
                        $scope.address_city = data.address_city;
                        $scope.address_district = data.address_district;
                        $scope.head_img = data.head_img;
                        $scope.isSex = data.sex  ;
                        $scope.isType = data.member_type;
                        $cookieStore.put('real_name',data.real_name)
                        $cookieStore.put('head_img',data.head_img)
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                        //$location.path("login");
                    }
                });
        }
            $scope.shuaxin()
        $http.post(
            $scope.homeUrl + "addressInterfaces.api?getCitys", $.param({

            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    $scope.provinces =(data['data'])
                    $scope.change()
                    $scope.district()
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                }
            });
            $scope.change = function () {
                for(var i=0; i<$scope.provinces.length; i++){
                    if($scope.address_province == $scope.provinces[i].name){
                        $scope.city = $scope.provinces[i]
                    }
                }
            }
            $scope.district = function () {
                for(var i=0; i<$scope.city.cityBeans.length; i++){
                    if($scope.address_city == $scope.city.cityBeans[i].name){
                        $scope.dist =$scope.city.cityBeans[i]
                    }
                }

            }
        // 委托-文件上传
        $(" .files").change(function(){
            var shlf = $(this)
            console.log('22')
            var id =shlf.parents("form").attr("id");
            console.log(id)
            $http({
                method: 'POST',
                url:$scope.homeUrl+'orderInterfaces.api?uploadServiceImg',
                data:{},
                headers: {
                    'Content-Type': undefined
                },
                transformRequest: function(data){
                    console.log(data)
                    var formData = new FormData(document.getElementById(id));
                    formData.append("fill",shlf);
                    //实际上窗
                    return formData;
                }
            }).success(function(d){
                console.log(d);
                if(d.status=="ok"){
                    $('#account_main form .image img').attr('src', d.data)
                }else{
                    alert(d['error']);
                }
            })
        })

        //提交
        $scope.up_data = function () {
            var imgUrl =  $('#account_main form .image img').attr('src')
            var birthday =  $('#account_main form .birth input').val()
            $http.post(
                $scope.homeUrl + "memberInterfaces.api?updateMember", $.param({
                    token:$cookieStore.get('token'),
                    member_id:$cookieStore.get('member_id'),
                    real_name:$scope.real_name,
                    mail:$scope.mail,
                    sex:$scope.isSex,
                    birthday: birthday,
                    address_province: $scope.address_province,
                    address_city: $scope.address_city,
                    address_district: $scope.address_district,
                    address_detail: $scope.address_detail,
                    head_img:imgUrl,
                    address_detail:$scope.address_detail,
                    member_type:$scope.isType,
                    duty:$scope.duty
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        console.log(data)
                        $scope.msg = data.data
                        $timeout(function () {
                            $('#account_main .content .hint').slideUp(200);
                            $scope.msg = '';
                        },2000)
                        $scope.shuaxin()
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                        $location.path("login");
                    }
                });
        }

})
    .controller('address', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
    $scope.address = function () {
        $http.post(
            $scope.homeUrl + "addressInterfaces.api?getOwnerAddress", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id')
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $scope.data = data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
    }
    $scope.address()
    $scope.hide = function () {

        $('#hintOne').slideUp(500);
    }
    //删除地址
    $scope.cancel = function () {
        var address_id = $('#hintOne .content .hint_btn2').attr('data_id')
        $http.post(
            $scope.homeUrl + "addressInterfaces.api?deleteAddress", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id'),
                address_id:address_id
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    $('#hintOne').slideUp(500);
                    $scope.address()
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
    }
})
    .controller('company_mess', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
    // 委托-文件上传
    $(".files").change(function(){
        var shlf = $(this)

        var id =shlf.parents("form").attr("id");
        console.log(id)
        $http({
            method: 'POST',
            url:$scope.homeUrl+'orderInterfaces.api?uploadServiceImg',
            data:{},
            headers: {
                'Content-Type': undefined
            },
            transformRequest: function(data){
                console.log(data)
                var formData = new FormData(document.getElementById(id));
                formData.append("fill",shlf);
                //实际上窗
                return formData;
            }
        }).success(function(d){
            console.log(d);
            if(d.status=="ok"){
                shlf.siblings('img').attr("src",d.data);
                shlf.siblings('img').css("opacity",'1');
            }else{
                alert(d['error']);
            }
        })
    })
     //提交
    $scope.up_data = function () {
        var text = $('#company_main .content .data .index input').val()
        var pic = $('#company_main .content .data form img.pic').attr('src')
        $http.post(
            $scope.homeUrl + "memberInterfaces.api?updateMember", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id'),
                license_no:text,
                license_img:pic
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
    }
})
    .controller('new_add', function ($scope, $rootScope, $location,$routeParams, $timeout, $http, $cookies, $cookieStore){
    $scope.id = $routeParams.address_id;
    $scope.phone = '';
    $scope.name	= '';
    $scope.address_province = [];
    $scope.address_city = '';
    $scope.address_district	= '';
    $scope.address_detail = '';
    $scope.zip_code = '';
    $scope.city=[];
    $scope.dist=[];

    if( $scope.id != '0'){
        $http.post(
            $scope.homeUrl + "addressInterfaces.api?getAddressDetail", $.param({
                member_id:$cookieStore.get('member_id'),
                token:$cookieStore.get('token'),
                address_id:$scope.id
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    $scope.phone = data['data'].phone;
                    $scope.name	= data['data'].name ;
                    $scope.address_province = data['data'].address_province;
                    $scope.address_city = data['data'].address_city;
                    $scope.address_district	= data['data'].address_district;
                    $scope.address_detail = data['data'].address_detail;
                    $scope.zip_code = data['data'].zip_code;
                    console.log( data['data'])
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
    }
        $http.post(
            $scope.homeUrl + "addressInterfaces.api?getCitys", $.param({

            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    $scope.provinces =(data['data'])
                    $scope.ss()
                    $scope.district()
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){

                }
            });
    $scope.ss = function () {
        for(var i=0; i<$scope.provinces.length; i++){
            if($scope.address_province == $scope.provinces[i].name){
                $scope.city = $scope.provinces[i]
            }
        }
    }
    $scope.district = function () {
        for(var i=0; i<$scope.city.cityBeans.length; i++){
            if($scope.address_city == $scope.city.cityBeans[i].name){
                $scope.dist =$scope.city.cityBeans[i]
            }
        }

    }
    //提交添加修改的地址
    $scope.refer = function(){
       if($scope.phone !='' || $scope.name != ''){
           $http.post(
               $scope.homeUrl + "addressInterfaces.api?insertAddress", $.param({
                   member_id:	$cookieStore.get('member_id'),
                   token:$cookieStore.get('token'),
                   phone: $scope.phone,
                   name:$scope.name,
                   address_province:$scope.address_province,
                   address_city:$scope.address_city,
                   address_district:$scope.address_district,
                   address_detail:$scope.address_detail,
                   zip_code: $scope.zip_code,
                   address_id:$scope.id =='0'? '':$scope.id
               }),
               {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
           ).success(function (data) {
                   if (data['status'] == 'ok') {
                       history.back(-1);
                   } else if (data['status'] == 'error') {
                       console.log(data)
                       $scope.Er = data['error'];
                   }else if(data['error'] == 'token failed'){
                       $location.path("login");
                   }
               });
       }else{
           console.log('请填写完整！')
       }
    }
})
    .controller('copyright_up', function ($scope, $rootScope, $location,$routeParams, $timeout, $http, $cookies, $cookieStore){
        $scope.trademarkUp = function () {
            var id =  $routeParams.order_good_id;
            var order_id =  $routeParams.order_id;
            $location.path('trademark_up/'+ id +'/'+ order_id)
        }
        $scope.parentUp = function () {
            var id =  $routeParams.order_good_id;
            var order_id =  $routeParams.order_id;
            $location.path('parent_up/'+id +'/'+ order_id)
        }
        $http.post(
            $scope.homeUrl + "orderInterfaces.api?getOneOrderDetail", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id'),
                order_id:$routeParams.order_id
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $scope.order_data= data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
        // 委托-文件上传
        $(".files").change(function(){
            var shlf = $(this)

            var id =shlf.parents("form").attr("id");
            console.log(id)
            $http({
                method: 'POST',
                url:$scope.homeUrl+'orderInterfaces.api?uploadServiceImg',
                data:{},
                headers: {
                    'Content-Type': undefined
                },
                transformRequest: function(data){
                    console.log(data)
                    var formData = new FormData(document.getElementById(id));
                    formData.append("fill",shlf);
                    //实际上窗
                    return formData;
                }
            }).success(function(d){
                console.log(d);
                if(d.status=="ok"){
                    shlf.siblings('img').attr("src",d.data);
                    shlf.siblings('img').css("opacity",'1');
                }else{
                    alert(d['error']);
                }
            })
        })
        //提交
        $scope.copy_up = function () {
            var pic1 = $('#copyright_main .content .data .form_name img.pic1').attr('src')
            var pic2 = $('#copyright_main .content .data .form_name img.pic2').attr('src')
            var pic3 = $('#copyright_main .content .data .form_name img.pic3').attr('src')


            $http.post(
                $scope.homeUrl + "orderInterfaces.api?updateOrderGoodsDetail", $.param({
                    token:$cookieStore.get('token'),
                    member_id:$cookieStore.get('member_id'),
                    order_goods_id: $routeParams.order_good_id,
                    product_img:pic1,
                    works_sample:pic2,
                    others:pic3
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        console.log(data['data'])
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                        $location.path("login");
                    }
                });
        }

})
    .controller('parent_up', function ($scope, $rootScope, $location,$routeParams, $timeout, $http, $cookies, $cookieStore){
        $scope.trademarkUp = function () {
            var id =  $routeParams.order_good_id;
            var order_id =  $routeParams.order_id;
            $location.path('trademark_up/'+ id +'/'+ order_id)
        }
        $scope.copyrightUp = function () {
            var id =  $routeParams.order_good_id;
            var order_id =  $routeParams.order_id;
            $location.path('copyright_up/'+ id +'/'+ order_id)
        }
        $http.post(
            $scope.homeUrl + "orderInterfaces.api?getOneOrderDetail", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id'),
                order_id:$routeParams.order_id
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $scope.order_data= data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
        // 委托-文件上传
        $(".files").change(function(){
            var shlf = $(this)

            var id =shlf.parents("form").attr("id");
            console.log(id)
            $http({
                method: 'POST',
                url:$scope.homeUrl+'orderInterfaces.api?uploadServiceImg',
                data:{},
                headers: {
                    'Content-Type': undefined
                },
                transformRequest: function(data){
                    console.log(data)
                    var formData = new FormData(document.getElementById(id));
                    formData.append("fill",shlf);
                    //实际上窗
                    return formData;
                }
            }).success(function(d){
                console.log(d);
                if(d.status=="ok"){
                    shlf.siblings('img').attr("src",d.data);
                    shlf.siblings('img').css("opacity",'1');
                }else{
                    alert(d['error']);
                }
            })
        })
        //提交
        $scope.parent_up = function () {
            var pic1 = $('#parent_main .content .data .form_name img.pic1').attr('src')
            var pic2 = $('#parent_main .content .data .form_name img.pic2').attr('src')
            var pic3 = $('#parent_main .content .data .form_name img.pic3').attr('src')
            var pic4 = $('#parent_main .content .data .form_name img.pic4').attr('src')


            $http.post(
                $scope.homeUrl + "orderInterfaces.api?updateOrderGoodsDetail", $.param({
                    token:$cookieStore.get('token'),
                    member_id:$cookieStore.get('member_id'),
                    order_goods_id: $routeParams.order_good_id,
                    product_img:pic2,
                    secrecy:pic1,
                    technique:pic3,
                    others:pic4
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        console.log(data['data'])
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                        $location.path("login");
                    }
                });
        }
})
    .controller('trademark_up', function ($scope, $rootScope, $location, $timeout,$routeParams, $http, $cookies, $cookieStore){

        $scope.parentUp = function () {
            var id =  $routeParams.order_good_id;
            var order_id =  $routeParams.order_id;
            $location.path('parent_up/'+id +'/'+ order_id)
        }
        $scope.copyrightUp = function () {
            var id =  $routeParams.order_good_id;
            var order_id =  $routeParams.order_id;
            $location.path('copyright_up/'+ id +'/'+ order_id)
        }
        $http.post(
            $scope.homeUrl + "orderInterfaces.api?getOneOrderDetail", $.param({
                token:$cookieStore.get('token'),
                member_id:$cookieStore.get('member_id'),
                order_id:$routeParams.order_id
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        ).success(function (data) {
                if (data['status'] == 'ok') {
                    console.log(data['data'])
                    $scope.order_data= data['data']
                } else if (data['status'] == 'error') {
                    console.log(data)
                    $scope.Er = data['error'];
                }else if(data['error'] == 'token failed'){
                    $location.path("login");
                }
            });
        // 委托-文件上传
        $(".files").change(function(){
            var shlf = $(this)

            var id =shlf.parents("form").attr("id");
            console.log(id)
            $http({
                method: 'POST',
                url:$scope.homeUrl+'orderInterfaces.api?uploadServiceImg',
                data:{},
                headers: {
                    'Content-Type': undefined
                },
                transformRequest: function(data){
                    console.log(data)
                    var formData = new FormData(document.getElementById(id));
                    formData.append("fill",shlf);
                    //实际上窗
                    return formData;
                }
            }).success(function(d){
                console.log(d);
                if(d.status=="ok"){
                    shlf.siblings('img').attr("src",d.data);
                    shlf.siblings('img').css("opacity",'1');
                }else{
                    alert(d['error']);
                }
            })
        })
        //提交
        $scope.data_up = function () {
            var text = $('#trademark_up_main .content .data .index input').val()
            var pic1 = $('#trademark_up_main .content .data .form_name img.pic1').attr('src')
            var pic2 = $('#trademark_up_main .content .data .form_name img.pic2').attr('src')
            var pic3 = $('#trademark_up_main .content .data .form_name img.pic3').attr('src')
            var pic4 = $('#trademark_up_main .content .data .form_name img.pic4').attr('src')
            var pic5 = $('#trademark_up_main .content .data .form_name img.pic5').attr('src')

            $http.post(
                $scope.homeUrl + "orderInterfaces.api?updateOrderGoodsDetail", $.param({
                    token:$cookieStore.get('token'),
                    member_id:$cookieStore.get('member_id'),
                    order_goods_id: $routeParams.order_good_id,
                    license_no:text,
                    license_img:pic2,
                    logo_img:pic1,
                    entrust_book:pic3,
                    contract:pic4,
                    others:pic5
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
            ).success(function (data) {
                    if (data['status'] == 'ok') {
                        console.log(data['data'])
                    } else if (data['status'] == 'error') {
                        console.log(data)
                        $scope.Er = data['error'];
                    }else if(data['error'] == 'token failed'){
                        $location.path("login");
                    }
                });
        }
})
    .controller('zhiYan', function ($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
    $scope.class_data = [];
    $scope.datas='';
    $http.post(
        $scope.homeUrl + "informationInterfaces.api?getInformationClasss", $.param({

        }),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    ).success(function (data) {
            if (data['status'] == 'ok') {
                console.log(data['data'])
                $scope.class_list = data['data']

            } else if (data['status'] == 'error') {
                console.log(data)
                $scope.Er = data['error'];
            }else if(data['error'] == 'token failed'){

            }
        });
     $scope.class_show = function(class_id){
         $http.post(
             $scope.homeUrl + "informationInterfaces.api?getInformations", $.param({
                 class_id:class_id
             }),
             {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
         ).success(function (data) {
                 if (data['status'] == 'ok') {
                     console.log(data['data'])
                     $scope.class_data = data['data']
                 } else if (data['status'] == 'error') {
                     console.log(data)
                     $scope.Er = data['error'];
                 }else if(data['error'] == 'token failed'){

                 }
             });
    }
    $scope.class_show(1)
    $scope.zhiYanShow = function () {
        $('#zhiYan .content .status ul li ').on('click', function () {
            var page = $(this).attr('num')/10;
            var class_id = $(this).attr('class_id');
            $scope.class_show(class_id)
            page = Math.ceil(page)
            $("#zhiYan .content .page").Page({
                totalPages:page ,//分页总数
                liNums: 5,//分页的数字按钮数(建议取奇数)
                activeClass: 'activP', //active 类样式定义
                prv: '上一页',//prev button name
                next: '下一页',//next button name
                hasFirstPage: true,
                hasLastPage: true,
                hasPrv: true,
                hasNext: true,
                callBack : function(page){
                    $http.post(
                        $scope.homeUrl + "informationInterfaces.api?getInformations", $.param({
                            class_id:class_id,
                            page:page,
                            limit:10
                        }),
                        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                    ).success(function (data) {
                            if (data['status'] == 'ok') {
                                $scope.class_data = data['data']
                            } else if (data['status'] == 'error') {
                                console.log(data)
                                $scope.Er = data['error'];
                            }else if(data['error'] == 'token failed'){
                                $location.path("login");
                            }
                        });
                }
            });

        })
    }

})
    .directive('showBanner1',['$timeout', function ($timeout) {
        return {
            restrict: 'A',
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#banner .sidebar .sidebar_left li').mouseenter(function () {
                            $(this).addClass('active3').css('borderBottom', '1px solid #D7474C').siblings().removeClass('active3')
                                .css('borderBottom', '1px solid #fff')

                            var index = $(this).index()

                            // 也可以用addClass 但是要注意权重
                            $('#banner .right .show_banner').eq(index).css('display', 'block').siblings().css('display', 'none')
                        })

                    });
                }
            }
        };
    }])
    .directive('showBanner2', function () {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
                $('#banner .sidebar').mouseleave(function () {
                    $('#banner .right .show_banner').css('display', 'none')
                    $('#banner .sidebar .sidebar_left li').removeClass('active3').css('borderBottom', '1px solid #fff')

                })

            }

        }
    })
    .directive('page2', function ($http,$cookieStore,$location,$timeout) {
    return {
        restrict:"EA",
        replace:'true',
        link: function (scope, elem, attrs) {
            $timeout(function () {
                var page = $('#finish_main .content .order_page').attr('page_num')/5;
                page = Math.ceil(page)
                $(".content .order_page").Page({
                    totalPages: page,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    prv: '上一页',//prev button name
                    next: '下一页',//next button name
                    hasFirstPage: true,
                    hasLastPage: true,
                    hasPrv: true,
                    hasNext: true,
                    callBack : function(page){
                        $http.post(
                            scope.homeUrl + "orderInterfaces.api?getOrders", $.param({
                                token:$cookieStore.get('token'),
                                member_id:$cookieStore.get('member_id'),
                                order_state:'end,wait_assessment,transact_over',
                                page:page,
                                limit:5
                            }),
                            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                        ).success(function (data) {
                                if (data['status'] == 'ok') {
                                    console.log(data['data'])
                                    scope.end_data = data['data']
                                } else if (data['status'] == 'error') {
                                    console.log(data)
                                    $scope.Er = data['error'];
                                }else if(data['error'] == 'token failed'){
                                    $location.path("login");
                                }
                            });
                    }
                });
            },500)

        }

    }
})
    //分页
    .directive('page1', function ($http,$cookieStore,$location,$timeout) {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
                $timeout(function () {
                    var page = $('#transact_main .content .order_page').attr('page_num')/5;
                    page = Math.ceil(page)
                    $(".content .order_page").Page({
                        totalPages: page,//分页总数
                        liNums: 5,//分页的数字按钮数(建议取奇数)
                        activeClass: 'activP', //active 类样式定义
                        prv: '上一页',//prev button name
                        next: '下一页',//next button name
                        hasFirstPage: true,
                        hasLastPage: true,
                        hasPrv: true,
                        hasNext: true,
                        callBack : function(page){
                            $http.post(
                                scope.homeUrl + "orderInterfaces.api?getOrders", $.param({
                                    token:$cookieStore.get('token'),
                                    member_id:$cookieStore.get('member_id'),
                                    order_state:'wait_transact',
                                    page:page,
                                    limit:5
                                }),
                                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                            ).success(function (data) {
                                    if (data['status'] == 'ok') {
                                        scope.wait_data = data['data']
                                    } else if (data['status'] == 'error') {
                                        console.log(data)
                                        $scope.Er = data['error'];
                                    }else if(data['error'] == 'token failed'){
                                        $location.path("login");
                                    }
                                });
                        }
                    });
                },500)

            }

        }
    })
    //分页
    .directive('page', function ($http,$cookieStore,$location,$timeout) {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
                $timeout(function () {
                    var page = $('#obligation_main .content .order_page').attr('page_num')/5;
                    page = Math.ceil(page)
                    $(".content .order_page").Page({
                        totalPages: page,//分页总数
                        liNums: 5,//分页的数字按钮数(建议取奇数)
                        activeClass: 'activP', //active 类样式定义
                        prv: '上一页',//prev button name
                        next: '下一页',//next button name
                        hasFirstPage: true,
                        hasLastPage: true,
                        hasPrv: true,
                        hasNext: true,
                        callBack : function(page){
                            $http.post(
                                scope.homeUrl + "orderInterfaces.api?getOrders", $.param({
                                    token:$cookieStore.get('token'),
                                    member_id:$cookieStore.get('member_id'),
                                    order_state:'wait_pay',
                                    page:page,
                                    limit:5
                                }),
                                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                            ).success(function (data) {
                                    if (data['status'] == 'ok') {

                                        scope.data = data['data']
                                    } else if (data['status'] == 'error') {
                                        console.log(data)
                                        $scope.Er = data['error'];
                                    }else if(data['error'] == 'token failed'){
                                        $location.path("login");
                                    }
                                });
                        }
                    });
                },500)

            }

        }
    })
    //优惠分页
    .directive('discoundsPage', function ($http,$cookieStore,$location)     {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
                var page = $('#discounts_main .content .page').attr('num')
                page = Math.ceil(page)
               var text =  $('#discounts_main .content .page').attr('text')
                $("#discounts_main .content .page").Page({
                    totalPages: page,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    prv: '上一页',//prev button name
                    next: '下一页',//next button name
                    hasFirstPage: true,
                    hasLastPage: true,
                    hasPrv: true,
                    hasNext: true,
                    callBack : function(page){
                        $http.post(
                            scope.homeUrl + "couponInterfaces.api?getCoupons", $.param({
                                member_id: $cookieStore.get("member_id"),
                                token: $cookieStore.get("token"),
                                coupon_state:text,
                                page:page,
                                limit:5
                            }),
                            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                        ).success(function (data) {
                                if (data['status'] == 'ok') {
                                    console.log(data['data'])
                                    scope.used = data['data']
                                } else if (data['status'] == 'error') { console.log(data)
                                    scope.Er = data['error'];
                                }else if(data['error'] == 'token failed'){
                                    $location.path("login");
                                }
                            });
                    }
                });
            }

        }
    })
    //退款分页
    .directive('refundPage', function ($http,$cookieStore,$location)     {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
                var page = $('#refund_main .content .order_page').attr('num')
                page = Math.ceil(page)
                $("#refund_main .content .order_page").Page({
                    totalPages: page,//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    prv: '上一页',//prev button name
                    next: '下一页',//next button name
                    hasFirstPage: true,
                    hasLastPage: true,
                    hasPrv: true,
                    hasNext: true,
                    callBack : function(page){
                        $http.post(
                            scope.homeUrl + "orderInterfaces.api?getMemberRefunds", $.param({
                                member_id: $cookieStore.get("member_id"),
                                token: $cookieStore.get("token"),
                                coupon_state:'',
                                page:page,
                                limit:5
                            }),
                            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                        ).success(function (data) {
                                if (data['status'] == 'ok') {
                                    console.log(data['data'])
                                    scope.refund_list = data['data']
                                } else if (data['status'] == 'error') { console.log(data)
                                    scope.Er = data['error'];
                                }else if(data['error'] == 'token failed'){
                                    $location.path("login");
                                }
                            });
                    }
                });
            }

        }
    })
    //导航显示隐藏

    .directive('show', function () {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {

                $('#nav .content .bar ul li.nav_one').mouseenter(function () {

                    $('#nav .content .sidebar_left').addClass('show')

                });


            }

        }
    })

    .directive('show1', function () {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {

                $('#nav .content .bar ul li').eq(0).mouseleave(function () {

                    $('#nav .content .sidebar_left').removeClass('show')

                });

            }

        }
    })
    //分类栏显示隐藏
    .directive('show2', function () {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {

                $('#nav .content .sidebar_left  li.mouse').mouseenter(function () {
                    $(this).addClass('active3').css('borderBottom', '1px solid #D7474C').siblings().removeClass('active3')
                        .css('borderBottom', '1px solid #fff')

                    var index = $(this).index()
                    // 也可以用addClass 但是要注意权重
                    $('#nav .content .right .show_banner').eq(index).css('display', 'block').siblings().css('display', 'none')
                });

            }

        }
    })
    .directive('show3', function () {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {

                $('#nav .content  .sidebar_left').mouseleave( function () {
                    $('#nav .content .sidebar_left').removeClass('show')
                    $('#nav .content .right .show_banner').css('display', 'none')
                    $('#nav .content .sidebar_left li').removeClass('active3').css('borderBottom', '1px solid #fff')
                });
            }

        }
    })
    //首页轮播图
    .directive('onFinishRenderFilters', function () {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {

                        //下面是在table render完成后执行的js
                        var count = 0,
                            timer = null;
                        // 鼠标经过Li的时候当前元素高亮，大盒子显示；
                        // 鼠标离开的大盒子的时候高亮消失 大盒子消失
                        timer = setInterval(function () {
                            carousel()
                        }, 3000)
                        function carousel() {
                            count++
                            if (count == $("#banner .slider .itmes li").length) {
                                count = 0;
                            }
                            $('#banner .slider .list i').eq(count).addClass('current').siblings().removeClass('current')

                            //让count渐渐的显示，其他兄弟渐渐的隐藏
                            $("#banner .slider .itmes li").eq(count).fadeIn().siblings("li").fadeOut();

                        }
                        $('#banner .slider .list  i').on('mouseenter', function () {
                            clearInterval(timer)
                            count = $(this).index();

                            $(this).addClass('current').siblings().removeClass('current')
                            $("#banner .slider .itmes li").eq(count).fadeIn().siblings("li").fadeOut();
                        })
                        $('#banner').mouseleave(function () {
                            timer = setInterval(function () {
                                carousel()
                            }, 3000)
                        })
                        $('#banner').mouseenter(function () {
                            clearInterval(timer)
                        })


            }

        }
    })
    .directive('carousel', function () {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                var timer = null;
                carousel()
                function carousel() {
                    var data = [
                        {
                            width: "250px",
                            height: "300px",
                            opacity:0.2 ,
                            zIndex: 1,
                            boxShadow: "0 2px 2px 0",
                            left: "55%",
                            top: "50%",
                            transform: "translate(-240%, -35%)"
                        },
                        {
                            width: "315px",
                            height: "420px",
                            opacity:0.6 ,
                            zIndex: 9,
                            boxShadow: "0 2px 3px 0",
                            left: "53%",
                            top: "50%",
                            transform: "translate(-140%, -40%)"
                        },
                        {
                            width: "480px",
                            height: "540px",
                            opacity:0.9 ,
                            zIndex: 999,
                            boxShadow: "0 2px 4px 0",
                            top: "70px",
                            left: "50%",
                            transform: "translate(-50%, 0)"
                        },
                        {
                            width: "315px",
                            height: "420px",
                            opacity:0.6 ,
                            zIndex: 9,
                            boxShadow: "0 2px 3px 0",
                            left: "47%",
                            top: "50%",
                            transform: "translate(40%, -40%)"
                        },
                        {
                            width: "250px",
                            height: "300px",
                            opacity:0.2 ,
                            zIndex: 1,
                            boxShadow: "0 2px 2px 0",
                            left: "45%",
                            top: "50%",
                            transform: "translate(140%, -35%)"
                        }
                    ];
                    var pic_data = [
                        {
                            height: "170px"
                        },
                        {
                            height: "240px"
                        },
                        {
                            height: "315px"
                        },
                        {
                            height: "240px"
                        },
                        {
                            height: "170px"
                        }
                    ];
                    $("#carousel .pic1").width("100%");
                    var list = $("#carousel li");
                    var pics = $("#carousel li .pic1");
                    list.each(function (index) {
                        $(this).css(data[index]);
                    });
                    pics.each(function (index) {
                        $(this).css(pic_data[index]);
                    });
                    var cur = 2;
                    timer =  setInterval(function () {
                        data.unshift(data.pop());
                        pic_data.unshift(pic_data.pop());
                        // console.log(data);
                        cur ++;
                        if ( cur >= list.length ) {
                            cur = 0;
                        }
                        list.eq(cur).addClass("active4").siblings().removeClass("active4");
                        list.each(function (index) {
                            $(this).css(data[index]);
                            $(this).find('.pic1').css(pic_data[index]);

                        });
                    }, 4000);
                }


            }

        }
    })

    .directive('selected', function ($location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {

                $('#nav .content .bar li ').click(function () {
                    $(this).addClass('select').siblings().removeClass('select')


                })

            }

        }
    })

    //商品服务类型选中
    .directive('onService', function ($location,$http,$q,$timeout) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                $('#brand_shopping .content .service ul li').on('click', function () {
                    $(this).addClass('current').siblings().removeClass('current')
                    var case_id = $('#brand_shopping .center .total .money').attr('data_case_id')
                    var service_id = $('#brand_shopping .center .total .money').attr('data_service_id')
                    var end = $q.defer();
                    $timeout(function () {
                        if(case_id !='' && service_id !=''){
                            var specification_list = $('#brand_shopping .center .click .btn2').attr('specification_list')
                            $http.post(
                                scope.homeUrl + "goodsInterfaces.api?getGoodsSpecificationByList", $.param({
                                    specification_list:specification_list
                                }),
                                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                            ).success(function (data) {
                                    if (data['status'] == 'ok') {
                                        $('#brand_shopping .center .total .money').text(data['data'].price)
                                    } else if (data['status'] == 'error') {
                                        console.log(data)
                                        scope.Er = data['error'];
                                    }else if(data['error'] == 'token failed'){
                                    }
                                });
                        }else{
                            end.resolve();
                        }
                    })

                })

            }

        }
    })
    //专利商品案件类型选中
    .directive('onSelectedOne', function ($location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                $('#patent_shopping .patent_content .case ul li').on('click', function () {
                    $(this).addClass('current').siblings().removeClass('current')
                    var arr = $(this).attr('case_id')
                    $('#patent_shopping .patent_content .click .btn2').attr('specification_list',arr)
                    $('#patent_shopping .patent_content .service ul li').removeClass('current')
                    $('#patent_shopping .patent_content .items ul li').removeClass('current')
                    $('#patent_shopping .patent_content .items').removeClass('show')
                    $('#patent_shopping .patent_content .total .money').attr('data_service_id','')
                    $('#patent_shopping .patent_content .total .money').attr('data_contribute_id','')
                    $('#patent_shopping .patent_content .total .money').text('0')
                    $('#patent_shopping .patent_content .number span').text('1')

                })

            }

        }
    })
    //专利商品服务类型选中
    .directive('onServiceOne', function ($timeout,$http,$q) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                $('#patent_shopping .patent_content .service ul li').on('click', function () {
                    $(this).addClass('current').siblings().removeClass('current')
                    var case_id = $('#patent_shopping .patent_content .total .money').attr('data_case_id')
                    var service_id = $('#patent_shopping .patent_content .total .money').attr('data_service_id')
                    var contribute_id = $('#patent_shopping .patent_content .items ul li').eq(1).attr('contribute_id')
                    var end = $q.defer();
                    $timeout(function () {
                        if(case_id !='' && service_id !='' && contribute_id==undefined ){
                            var specification_list = $('#patent_shopping .patent_content .click .btn2').attr('specification_list')
                            $http.post(
                                scope.homeUrl + "goodsInterfaces.api?getGoodsSpecificationByList", $.param({
                                    specification_list:specification_list
                                }),
                                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                            ).success(function (data) {
                                    if (data['status'] == 'ok') {
                                        $('#patent_shopping .patent_content .total .money').text(data['data'].price)
                                    } else if (data['status'] == 'error') {
                                        console.log(data)
                                        scope.Er = data['error'];
                                    }else if(data['error'] == 'token failed'){
                                    }
                                });
                        }else{
                            end.resolve();
                        }
                    })
                })

            }

        }
    })
    //专利缴纳选中
    .directive('onContributeOne', function ($location,$timeout,$q,$http) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        $('#patent_shopping .patent_content .items ul li').on('click', function () {
                            $(this).addClass('current').siblings().removeClass('current')
                            var contribute_id = $(this).attr('contribute_id')
                            $('#patent_shopping .patent_content .total .money').attr('data_contribute_id',contribute_id)
                            var case_id = $('#patent_shopping .patent_content .total .money').attr('data_case_id')
                            var service_id = $('#patent_shopping .patent_content .total .money').attr('data_service_id')
                            var contribute_id = $('#patent_shopping .patent_content .total .money').attr('data_contribute_id')
                            var end = $q.defer();
                            $timeout(function () {
                                if(case_id !='' && service_id !='' && contribute_id != '' ){
                                    var specification_list = $('#patent_shopping .patent_content .click .btn2').attr('specification_list')
                                    $http.post(
                                        scope.homeUrl + "goodsInterfaces.api?getGoodsSpecificationByList", $.param({
                                            specification_list:specification_list
                                        }),
                                        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                                    ).success(function (data) {
                                            if (data['status'] == 'ok') {
                                                console.log(data['data'])
                                                $('#patent_shopping .patent_content .total .money').text(data['data'].price)
                                            } else if (data['status'] == 'error') {
                                                console.log(data)
                                                scope.Er = data['error'];
                                            }else if(data['error'] == 'token failed'){
                                            }
                                        });
                                }else{
                                    end.resolve();
                                }
                            })
                        })
                    })
                }



            }

        }
    })
    //国内商品添加数量
    .directive('add', function ($location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                $('#brand_shopping .content .number .add').on('click', function () {
                   var num = $('#brand_shopping .content .number span').text()-0;
                   num ++;
                    $('#brand_shopping .content .number span').text(num)
                   var total_money =  $('#brand_shopping .content .total  span.money').text()-0;
                    total_money =(total_money/(num-1)) * num
                    $('#brand_shopping .content .total  span.money').text(total_money)
                })
            }

        }
    })
    //商标减少
    .directive('reduce', function ($location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                $('#brand_shopping .content .number .reduce').on('click', function () {
                    var num = $('#brand_shopping .content .number span').text()-0;
                    var total_money =  $('#brand_shopping .content .total  span.money').text()-0;

                    if(num <= 1){
                        $('#brand_shopping .content .number span').text(num)
                        $('#brand_shopping .content .total  span.money').text(total_money)

                    }else if(num > 1){
                        num--
                        total_money =(total_money/(num+ 1)) * num
                        $('#brand_shopping .content .number span').text(num)
                        $('#brand_shopping .content .total  span.money').text(total_money)

                    }

                })
            }

        }
    })
    //专利商品添加数量
    .directive('addPatent', function ($location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                $('#patent_shopping .patent_content .number .add').on('click', function () {
                    var num = $('#patent_shopping .patent_content .number span').text()-0;
                    num ++;
                    $('#patent_shopping .patent_content .number span').text(num)
                    var total_money =  $('#patent_shopping .patent_content  .total  span.money').text()-0;
                    total_money =(total_money/(num-1)) * num
                    console.log(total_money)
                    $('#patent_shopping .patent_content .total  span.money').text(total_money)
                })
            }

        }
    })
    //专利减少
    .directive('patentReduce', function ($location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                $('#patent_shopping .patent_content .number .reduce').on('click', function () {
                    var num = $('#patent_shopping .patent_content .number span').text()-0;
                    var total_money =  $('#patent_shopping .patent_content .total  span.money').text()-0;
                    if(num <= 1){
                        $('#patent_shopping .patent_content .number span').text(num)
                        $('#patent_shopping .patent_content .total  span.money').text(total_money)

                    }else if(num > 1){
                        num--
                        total_money =(total_money/(num+ 1)) * num
                        $('#patent_shopping .patent_content .number span').text(num)
                        $('#patent_shopping .patent_content .total  span.money').text(total_money)

                    }
                })
            }

        }
    })
    //商标进入选中
    .directive('productSpecification',['$timeout', function ($timeout) {
        return {
            restrict: 'EA',
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        var arrs =  $('#brand_shopping .content .case ul li')
                        var case_id = $('#brand_shopping .content .case p').attr('selected_id')
                        arrs.each(function (index, item) {
                            var id =  $(this).attr('case_id')
                           if(case_id === id){
                                $(this).addClass('current')
                               $('#brand_shopping .content .total .money').attr('data_case_id',id)
                            }
                        })


                    },200);
                }
            }
        };
    }])
    //商标进入页面渲染选中
    .directive('productService',['$timeout', function ($timeout) {
        return {
            restrict: 'EA',
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        var arrs2 =  $('#brand_shopping .content .service ul li')
                        var service_id = $('#brand_shopping .content .service p').attr('selected_ser_id')
                        arrs2.each(function (index, item) {
                            var id2 =  $(item).attr('service_id')
                            if(service_id === id2){
                                $(this).addClass('current')
                                $('#brand_shopping .content .total .money').attr('data_service_id',id2)
                            }
                        })

                    },500);
                }
            }
        };
    }])
    //商标选中二个生成价格
    .directive('casePrice', function ($timeout) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {

                        $('#brand_shopping .content .case ul li').on('click', function () {
                             var case_id = $(this).attr('case_id')
                            $('#brand_shopping .content .total .money').attr('data_case_id',case_id)

                        })
                    });
                }

            }

        }
    })

    //专利进入选中
    .directive('productSpecificationOne',['$timeout', function ($timeout) {
        return {
            restrict: 'EA',
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        var arrs =  $('#patent_shopping .patent_content .case ul li')
                        var case_id = $('#patent_shopping .patent_content .case p').attr('selected_id')
                        arrs.each(function (index, item) {
                            var id =  $(this).attr('case_id')
                            if(case_id === id){
                                $(this).addClass('current')
                                $('#patent_shopping .patent_content .total .money').attr('data_case_id',id)
                            }
                        })


                    },200);
                }
            }
        };
    }])
    //专利进入页面渲染选中
    .directive('productServiceOne',['$timeout', function ($timeout) {
        return {
            restrict: 'EA',
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        var arrs2 =  $('#patent_shopping .patent_content .service ul li')
                        var service_id = $('#patent_shopping .patent_content .service p').attr('selected_ser_id')
                        arrs2.each(function (index, item) {
                            var id2 =  $(item).attr('service_id')
                            if(service_id === id2){
                                $(this).addClass('current')
                                $('#patent_shopping .patent_content .total .money').attr('data_service_id',id2)
                            }
                        })

                    },500);
                }
            }
        };
}])
//专利选中二个生成价格
    .directive('casePriceOne', function ($timeout) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {

                        $('#patent_shopping .patent_content .case ul li').on('click', function () {
                            var case_id = $(this).attr('case_id')
                            $('#patent_shopping .patent_content .total .money').attr('data_case_id',case_id)

                        })
                    });
                }

            }

        }
    })
    //商标选中生成价格
    .directive('servicePrice', function ($timeout) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#brand_shopping .content .service ul li').on('click', function () {
                            var service_id = $(this).attr('service_id')
                            $('#brand_shopping .content .total .money').attr('data_service_id',service_id)
                        })
                    });
                }

            }

        }
    })
    //获取规格id
    .directive('listId', function ($timeout,$http,$routeParams) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#brand_shopping .content .service ul li').on('click', function () {
                            var arr =[]
                            arr[0] = $('#brand_shopping .content .total .money').attr('data_case_id');
                            arr[1] = $('#brand_shopping .content .total .money').attr('data_service_id');

                            arr = arr.join()
                            $('#brand_shopping .content .click .btn2').attr('specification_list',arr)
                        })
                    },200);
                }

            }

        }
    })
    //专利选中二个生成价格
    .directive('servicePriceOne', function ($timeout) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#patent_shopping .patent_content .service ul li').on('click', function () {
                            var service_id = $(this).attr('service_id')
                            $('#patent_shopping .patent_content .total .money').attr('data_service_id',service_id)
                        })
                    });
                }

            }

        }
    })
    //获取专利规格id
    .directive('listIdOne', function ($timeout,$http,$routeParams) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#patent_shopping .patent_content .service ul li').on('click', function () {
                            var arr =[]
                            arr[0] = $('#patent_shopping .patent_content .total .money').attr('data_case_id');
                            arr[1] = $('#patent_shopping .patent_content .total .money').attr('data_service_id')
                            arr = arr.join()
                            $('#patent_shopping .patent_content .click .btn2').attr('specification_list',arr)
                        })
                    },200);
                }

            }

        }
    })
    //获取专利三级规格id
    .directive('listThreeId', function ($timeout,$http,$routeParams) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#patent_shopping .patent_content .items ul li').on('click', function () {
                            var arr =[]
                            arr[0] = $('#patent_shopping .patent_content .total .money').attr('data_case_id');
                            arr[1] = $('#patent_shopping .patent_content .total .money').attr('data_service_id')
                            arr[2] = $('#patent_shopping .patent_content .total .money').attr('data_contribute_id')

                            arr = arr.join()
                            $('#patent_shopping .patent_content .click .btn2').attr('specification_list',arr)
                        })
                    },200);
                }

            }

        }
    })
    //购物车加
    .directive('cartReduce', function ($timeout,$http,$cookieStore) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#shopping .content .item ul li.num i').on('click', function () {
                            var num = $(this).parent().find('p').text()-0;
                            var total_money =  $(this).parent().parent().find('li.money p').text()-0;
                            var specification_id =  $(this).parent().parent().find('li.id  p').attr('specification_id')
                            var car_id =  $(this).parent().parent().find('li.carId  p').attr('car_id')

                            num ++;
                            $(this).parent().find('p').text(num)
                            total_money =(total_money/(num-1)) * num
                            $(this).parent().parent().find('li.money p').text(total_money)
                            var money = 0 ;
                            $('#shopping .content .item .check').each(function (i) {
                                if($(this).val() === '1') {
                                    money = money + $(this).parent().siblings('li.money').find('p').text()*1;
                                }
                            })
                            $("#shopping .content .all_cart .detail .money").text('¥'+money)
                            $http.post(
                                scope.homeUrl + "shoppingCarInterfaces.api?updateShoppingCarNum", $.param({
                                    token:$cookieStore.get('token'),
                                    member_id:$cookieStore.get('member_id'),
                                    car_id:car_id,
                                    goods_num:num,
                                    specification_id:specification_id
                                }),
                                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                            ).success(function (data) {
                                    if (data['status'] == 'ok') {
                                    } else if (data['status'] == 'error') {
                                        console.log(data)
                                        scope.Er = data['error'];
                                    }else if(data['error'] == 'token failed'){
                                    }
                                });
                        })
                    });
                }

            }

        }
    })
    //购物车减
    .directive('cartAdd', function ($timeout,$http,$cookieStore) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#shopping .content .item ul li.num span').on('click', function () {
                            var num = $(this).parent().find('p').text()-0;
                            var total_money =  $(this).parent().parent().find('li.money p').text()-0;
                            var specification_id =  $(this).parent().parent().find('li.id  p').attr('specification_id')
                            var car_id =  $(this).parent().parent().find('li.carId  p').attr('car_id')
                            if(num <= 1){
                                 $(this).parent().find('p').text(num)
                                $(this).parent().parent().find('li.money p').text(total_money)

                            }else if(num > 1){
                                num--
                                total_money =(total_money/(num+ 1)) * num
                                $(this).parent().find('p').text(num)
                                $(this).parent().parent().find('li.money p').text(total_money)
                            }
                            var money = 0 ;
                            $('#shopping .content .item .check').each(function (i) {
                                if($(this).val() === '1') {
                                    money = money + $(this).parent().siblings('li.money').find('p').text()*1;
                                }
                            })
                            $("#shopping .content .all_cart .detail .money").text('¥'+money)
                            $http.post(
                                scope.homeUrl + "shoppingCarInterfaces.api?updateShoppingCarNum", $.param({
                                    token:$cookieStore.get('token'),
                                    member_id:$cookieStore.get('member_id'),
                                    car_id:car_id,
                                    goods_num:num,
                                    specification_id:specification_id
                                }),
                                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                            ).success(function (data) {
                                    if (data['status'] == 'ok') {
                                    } else if (data['status'] == 'error') {
                                        console.log(data)
                                        scope.Er = data['error'];
                                    }else if(data['error'] == 'token failed'){
                                    }
                                });
                        })
                    });
                }

            }

        }
    })
    //购物车删除显示
    .directive('shopShow', function ($timeout,$http,$cookieStore) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#shopping .content .item ul li.carId p').on('click', function () {
                                var show_id = $(this).attr('car_id')
                                $("#hint").css("height",$(document).height());
                                $("#hint").css("width",$(document).width());
                                $('#hint').slideDown(200)
                            $('#hint .content .hint_btn2').attr('data_id',show_id)
                        })
                    });
                }

            }

        }
    })
    //账户信息提交提示
    .directive('showMess', function ($timeout,$http,$cookieStore) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                        $('#account_main  .content  .submit').on('click', function () {
                                $("#account_main .content .hint").css("height",$(document).height());
                                $("#account_main .content .hint").css("width",$(document).width());
                                $('#account_main .content .hint').slideDown(200)

                        })



            }

        }
    })
    //地址删除显示
    .directive('addressShow', function ($timeout,$http,$cookieStore) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#payment_main .payment_content .aa .address_con .address_del').on('click', function () {
                                var show_id = $(this).attr('address_id')
                                $("#hintOne").css("height",$(document).height());
                                $("#hintOne").css("width",$(document).width());
                                $('#hintOne').slideDown(200)
                            $('#hintOne .content .hint_btn2').attr('data_id',show_id)
                        })
                    });
                }

            }

        }
    })
    .directive('addressShowTwo', function ($timeout,$http,$cookieStore) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#address_main .content .address_con  .address_del').on('click', function () {
                            var show_id = $(this).attr('address_id')
                            $("#hintOne").css("height",$(document).height());
                            $("#hintOne").css("width",$(document).width());
                            $('#hintOne').slideDown(200)
                            $('#hintOne .content .hint_btn2').attr('data_id',show_id)
                        })
                    });
                }

            }

        }
    })
    //删除部分购物车
    .directive('shopShowTwo', function ($timeout,$http,$cookieStore) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {

                $('#shopping .content .all_cart .remove').on('click', function () {
                    var show_id = $('#shopping .content .all_cart .btn').attr('order_id')
                    $("#hint").css("height",$(document).height());
                    $("#hint").css("width",$(document).width());
                    $('#hint').slideDown(200)
                    $('#hint .content .hint_btn2').attr('data_id',show_id)
                })
            }

        }
    })
    //清空购物车
    .directive('shopEmpty', function ($timeout,$http,$cookieStore) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {

                $('#shopping .content .all_cart .empty').on('click', function () {
                    var arr =[]
                    $('#shopping .content .item .check').each(function (i) {
                            arr.push($(this).data('id'))
                    })
                    var b = arr.join(',')
                    $("#hint").css("height",$(document).height());
                    $("#hint").css("width",$(document).width());
                    $('#hint').slideDown(200)
                    $('#hint .content .hint_btn2').attr('data_id',b)
                })
            }

        }
    })
//山天智研tab栏
    .directive('zhiYanTab', function ($timeout,$location,$http) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#zhiYan .content .status ul li ').eq(0).addClass('active2')
                        $('#zhiYan .content .status ul li ').on('click', function () {
                            $(this).addClass('active2').siblings().removeClass('active2')


                        })
                    });
                }

            }

        }
    })
    //分页
    .directive('zhiYanPage', function ($http,$cookieStore,$timeout,$location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
                $timeout(function () {
                        var page = $("#zhiYan .content .status ul li").eq(0).attr('num')/10;
                        page = Math.ceil(page)
                        $("#zhiYan .content .page").Page({
                            totalPages:page ,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            prv: '上一页',//prev button name
                            next: '下一页',//next button name
                            hasFirstPage: true,
                            hasLastPage: true,
                            hasPrv: true,
                            hasNext: true,
                            callBack : function(page){
                                $http.post(
                                    scope.homeUrl + "informationInterfaces.api?getInformations", $.param({
                                        class_id:1,
                                        page:page,
                                        limit:10
                                    }),
                                    {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                                ).success(function (data) {
                                        if (data['status'] == 'ok') {
                                            console.log(data['data'])
                                            scope.class_data = data['data']
                                        } else if (data['status'] == 'error') {
                                            console.log(data)
                                            scope.Er = data['error'];
                                        }else if(data['error'] == 'token failed'){
                                            $location.path("login");
                                        }
                                    });
                            }
                        })
                },500)

            }

        }
    })
    //分页
    .directive('newsPage', function ($http,$cookieStore,$location,$timeout) {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
                $timeout(function () {
                    var page = $('#info_main .content .page').attr('data-num');
                     page  = Math.ceil(page/10)
                    $("#info_main .content .page").Page({
                        totalPages:page ,//分页总数
                        liNums: 5,//分页的数字按钮数(建议取奇数)
                        activeClass: 'activP', //active 类样式定义
                        prv: '上一页',//prev button name
                        next: '下一页',//next button name
                        hasFirstPage: true,
                        hasLastPage: true,
                        hasPrv: true,
                        hasNext: true,
                        callBack : function(page){
                            $http.post(
                                scope.homeUrl + "memberInterfaces.api?getMemberMsgs", $.param({
                                    token:$cookieStore.get('token'),
                                    member_id:$cookieStore.get('member_id'),
                                    page:page,
                                    limit:10
                                }),
                                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                            ).success(function (data) {
                                    if (data['status'] == 'ok') {
                                        console.log(data['data'])
                                        scope.news = data['data']
                                    } else if (data['status'] == 'error') {
                                        console.log(data)
                                        scope.Er = data['error'];
                                    }else if(data['error'] == 'token failed'){
                                        $location.path("login");
                                    }
                                });
                        }
                    });
                },500)

            }

        }
    })
    //全选不全选
    .directive('checkAll', function ($http,$cookieStore,$location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
                $("#shopping .content .all_cart .all").on("click",function(){
                     $("#shopping .content .item .check").prop("checked",this.checked);
                    if(this.checked == true){
                        $("#shopping .content .item .check").attr("value",'1');
                    }else{
                        $("#shopping .content .item .check").attr("value",'0');
                    }

                    var arr =[],num = 0,money = 0 ;
                    $('#shopping .content .item .check').each(function (i) {
                        if($(this).val() === '1') {
                            arr.push($(this).data('id'))
                            num++

                            money = money + $(this).parent().siblings('li.money').find('p').text()*1;

                        }

                    })

                    var b = arr.join(',')
                    $("#shopping .content .all_cart .btn").attr('order_id',b)
                    $("#shopping .content .all_cart .detail .num").text(num)
                    $("#shopping .content .all_cart .detail .money").text('¥'+money)

                      });
            }

        }
    })
    //信息全选不全选
    .directive('checkAllNews', function ($http,$cookieStore,$location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
                $("#info_main .content .allmess .all").on("click",function(){
                    $("#info_main .content .item input").prop("checked",this.checked);
                    if(this.checked == true){
                        $("#info_main .content .item input").attr("value",'1');
                    }else{
                        $("#info_main .content .item input").attr("value",'0');
                    }
                    var arr =[];
                    $('#info_main .content .item input').each(function (i) {
                        if($(this).val() === '1') {
                            arr.push($(this).data('id'))
                        }

                    })

                    var b = arr.join(',')
                    $("#info_main .content .allmess .btn").attr('order_id',b)

                });
            }

        }
    })
    //信息手选
    .directive('checkOneNew', function ($http,$cookieStore,$location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
                $("#info_main .content .item input").on("click",function(){
                    $(this).prop("checked",this.checked);
                    if(this.checked == true){
                        $(this).attr("value",'1');
                    }else{
                        $(this).attr("value",'0');
                    }
                    var inputs = $("#info_main .content .item input")
                    var arr=[];
                    for(var i=0;i<inputs.length;i++){
                        arr.push(inputs[i].value)
                    }
                    var obj =[];
                    $('#info_main .content .item input').each(function (i) {
                        if($(this).val() === '1') {
                            obj.push($(this).data('id'))
                        }

                    })

                    var b = obj.join(',')
                    $("#info_main .content .allmess .btn").attr('order_id',b)
                    if(arr.indexOf("0") > -1){
                        $("#info_main .content .allmess .all").prop("checked",false);
                    }else{
                        $("#info_main .content .allmess .all").prop("checked",true);
                    }

                });
            }

        }
    })
    //手选
    .directive('checkOne', function ($http,$cookieStore,$location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
                $("#shopping .content .item .check").on("click",function(){
                    $(this).prop("checked",this.checked);
                    if(this.checked == true){
                        $(this).attr("value",'1');
                    }else{
                        $(this).attr("value",'0');
                    }
                    var inputs = $("#shopping .content .item .check")
                    var arr=[];
                    for(var i=0;i<inputs.length;i++){
                        arr.push(inputs[i].value)
                    }
                    if(arr.indexOf("0") > -1){
                        $("#shopping .content .all_cart input").prop("checked",false);
                    }else{
                        $("#shopping .content .all_cart input").prop("checked",true);
                    }

                });
            }

        }
    })
    //数量和价格
    .directive('numPrice', function ($timeout,$cookieStore,$location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $("#shopping .content .item .check").on("click",function(){
                            var arr =[],num = 0,money = 0 ;
                            $('#shopping .content .item .check').each(function (i) {
                                if($(this).val() === '1') {
                                    arr.push($(this).data('id'))
                                    num++

                                   money = money + $(this).parent().siblings('li.money').find('p').text()*1;

                                }

                            })

                            var b = arr.join(',')
                            $("#shopping .content .all_cart .btn").attr('order_id',b)
                            $("#shopping .content .all_cart .detail .num").text(num)
                            $("#shopping .content .all_cart .detail .money").text('¥'+money)
                        });
                    });
                }

            }

        }
    })
//支付tab栏
    .directive('payTab', function ($timeout) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                        $('#payment_main .payment_content .mode_nav ul li ').on('click', function () {

                            $(this).addClass('active1').siblings().removeClass('active1')
                            var index = $(this).index()
                            $('#payment_main .payment_content .mode_nav .mode_list .show_pay ').eq(index).addClass('show').siblings().removeClass('show')
                        })



            }

        }
    })
//获取address_id
    .directive('payAddressId', function ($timeout) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {

                $('#payment_main .payment_content .address_con .btn input ').on('click', function () {
                    var add_id = $(this).attr('address_id')
                    $('#payment_main .payment_content .aa').attr('data-id',add_id)
                })



            }

        }
    })
//待付款删除显示
    .directive('obligationShow', function ($timeout,$http,$cookieStore) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#obligation_main .content .list_con .item7 .box2').on('click', function () {
                            var show_id = $(this).attr('order_id')
                            $("#hintOne").css("height",$(document).height());
                            $("#hintOne").css("width",$(document).width());
                            $('#hintOne').slideDown(200)
                            $('#hintOne .content .hint_btn2').attr('data_id',show_id)
                        })
                    });
                }

            }

        }
    })
    //立即支付
    .directive('payShow', function ($timeout,$http,$cookieStore,$location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#obligation_main .content .list_con .item7 .box1').on('click', function () {
                            var id = $(this).attr('order_id')
                            $http.post(
                                scope.homeUrl + "orderInterfaces.api?payRealOrders", $.param({
                                    token:$cookieStore.get('token'),
                                    member_id:$cookieStore.get('member_id'),
                                    order_ids:id,
                                    channel:'wx_pub_qr'
                                }),
                                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                            ).success(function (data) {
                                    if (data['status'] == 'ok') {
                                        console.log(data['data'])
                                        $("#wx_pay").css("height",$(document).height());
                                        $("#wx_pay").css("width",$(document).width());
                                        $('#wx_pay .content .hint_con img').attr('src',data['data'])
                                        $('#wx_pay').slideDown(200);
                                    } else if (data['status'] == 'error') {
                                        console.log(data)
                                        scope.Er = data['error'];
                                    }else if(data['error'] == 'token failed'){
                                        $location.path("login");
                                    }
                                });
                        })
                    });
                }

            }

        }
    })
    //编辑昵称
    .directive('compileName', function ($timeout,$http,$cookieStore,$location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $(' .content .order_lists .list_con img').on('click', function () {
                            var id = $(this).attr('order_id')
                            var val = $(this).parent().find('span').text()
                            console.log(val)
                            $("#compile").css("height",$(document).height());
                            $("#compile").css("width",$(document).width());
                            $('#compile').slideDown(200)
                            $('#compile .content .hint_btn2').attr('data_id',id)
                            $('#compile .hint_con input').val(val)
                        })
                    });
                }

            }

        }
    })
    //编辑昵称
    .directive('compileNameOne', function ($timeout,$http,$cookieStore,$location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                    $timeout(function() {
                        $('#order_detail_main .content .order_lists .list_con .item1 img').on('click', function () {
                            var id = $(this).attr('order_id')
                            var val = $(this).parent().find('span').text()
                            console.log(val)
                            $("#compile").css("height",$(document).height());
                            $("#compile").css("width",$(document).width());
                            $('#compile').slideDown(200)
                            $('#compile .content .hint_btn2').attr('data_id',id)
                            $('#compile .hint_con input').val(val)
                        })
                    });


            }

        }
    })
//已完成删除显示
    .directive('finishShow', function ($timeout,$http,$cookieStore,$location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#finish_main .content .list_con .item7 .box3').on('click', function () {
                            var show_id = $(this).attr('order_id')
                            console.log('22')

                        })
                    },500);
                }

            }

        }
    })
//信息删除显示
    .directive('newShow', function ($timeout,$http,$cookieStore) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                        $('#info_main .content .allmess .btn').on('click', function () {
                            var show_id = $(this).attr('order_id')
                            $("#hintOne").css("height",$(document).height());
                            $("#hintOne").css("width",$(document).width());
                            $('#hintOne').slideDown(200)
                            $('#hintOne .content .hint_btn2').attr('data_id',show_id)
                        })



            }

        }
    })
//日期显示
    .directive('datePicker', function ($http,$cookieStore,$location,$timeout) {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
                $timeout(function () {
                    $(' .datepicker').datepicker({
                        language: 'zh-CN',           // 设置语言
                        format: 'yyyy-mm-dd',        // 设置日期格式
                        endDate: '0d',               // 设置结束日期
                        //startDate: '2017-06-07'      // 设置开始日期
                    });
                },500)

            }

        }
    })

//首页高亮
    .directive('homeLight', function ($timeout,$http,$location,$routeParams) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {

                var url = $routeParams.url_id
                var list_a =  $('#nav .content .bar ul li.list_high  a')
                var aa = $location.url()
                list_a.each(function (i) {
                   var child =  $(this).attr('href')
                    var a = child.substr(child.length-1,1)
                   if(url == a){
                       $(this).addClass('select')
                   }
                })
                if(aa == '/'){
                    $('#nav .content .bar ul li.list_high .sw_one').addClass('select')
                }
            }

        }
    })
    //左边菜单栏高亮
    .directive('leftLight', function ($timeout,$http,$location,$routeParams) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                var list_a =  $('.highlight  a')
                var aa = $location.url()

                list_a.each(function (i) {
                    var child =  $(this).attr('href')

                    var a = child.substr(1,child.length-1)
                    if(aa == a){
                        $(this).addClass('select')
                    }
                })
                if(aa == '/finish' || aa =='/transact'){
                    $('.highlight  a.one').addClass('select')
                }
            }

        }
    })
//选择大类
    .directive('showBigClass', function ($timeout,$http,$location,$routeParams) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                $('#brand_shopping .content .details ul li').on('click', function () {
                    var id = $(this).attr('class_id')
                    var text = $(this).text()
                    $(this).addClass('current').siblings().removeClass('current')
                    $('#brand_shopping .content .items .small').attr('class_id',id)
                    $('#brand_shopping .content .items .genera').text(text)

                })


            }

        }
    })

//选择小类
    .directive('showSmallClass', function ($timeout,$http,$location,$routeParams) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {

                $("#brand_shopping .content .small_class ul li").on('click',function (){
                      $(this).addClass('current')

                    })

            }

        }
    })
    .directive('showSmallClassTwo', function ($timeout,$http,$location,$routeParams) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {

                $("#brand_shopping .content .small_class ul li").on('dblclick',function (){
                    if($(this).hasClass('current')){
                        $(this).removeClass('current')
                    }
                })

            }

        }
    })
    //隐藏大类
    .directive('hideDaLei', function ($timeout,$http,$location,$routeParams) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                $('#brand_shopping .content .details a').on('click', function () {
                    $('#brand_shopping .content .details ').removeClass('show')
                    $("#brand_shopping .content .small").addClass('show')
                    var bb =  $('#brand_shopping .content .items .genera ').text()
                    var cc =  $('#brand_shopping .content .small_class p ').text()
                    if(bb != cc){
                        $("#brand_shopping .content .small_class ul li").removeClass('current')
                        $("#brand_shopping .content .items .small").text('选择小类')
                    }
                })


            }

        }
    })
    //隐藏小类
    .directive('hideXiaoLei', function ($timeout,$http,$location,$routeParams) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                $('#brand_shopping .content .small_class a').on('click', function () {
                    $('#brand_shopping .content .small_class ').removeClass('show')
                    var arr = [],num = 0;
                    var lists = $('#brand_shopping .content .small_class ul li')
                    lists.each(function (i) {
                        if($(this).hasClass('current')){
                            num++
                            arr.push($(this).text())
                        }
                    })

                    $('#brand_shopping .content .small').attr('title',arr.join(','))
                    $('#brand_shopping .content .small').text('已选'+ num + '个分类')
                })


            }

        }
    })
    //商品相关内容
    .directive('correlation', function ($timeout,$http,$location,$routeParams) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                $('#brand_product .content .right .nav ul li a').on('click', function () {
                      $(this).addClass('select').parents().siblings().find('a').removeClass('select')
                })


            }

        }
    })
//商品相关内容
    .directive('correlationPatent', function ($timeout,$http,$location,$routeParams) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                $('#patent_product .content .right .nav ul li a').on('click', function () {
                    $(this).addClass('select').parents().siblings().find('a').removeClass('select')
                })


            }

        }
    })
    //商标评价分页
    .directive('brandPage', function ($http,$routeParams,$location,$timeout) {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
                $timeout(function () {
                    var page = $('#brand_product .content .center_sw .brand_page').data('num')/5;
                    page = Math.ceil(page)
                    $("#brand_product .content .brand_page").Page({
                        totalPages: page,//分页总数
                        liNums: 5,//分页的数字按钮数(建议取奇数)
                        activeClass: 'activP', //active 类样式定义
                        prv: '上一页',//prev button name
                        next: '下一页',//next button name
                        hasFirstPage: true,
                        hasLastPage: true,
                        hasPrv: true,
                        hasNext: true,
                        callBack : function(page){
                            $http.post(
                                scope.homeUrl + "goodsInterfaces.api?getGoodsAssessments", $.param({
                                    goods_id:$routeParams.goods_id,
                                    page:page,
                                    limit:5
                                }),
                                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                            ).success(function (data) {
                                    if (data['status'] == 'ok') {
                                        console.log(data['data'])
                                        scope.list_assessment = data['data']
                                    } else if (data['status'] == 'error') {
                                        console.log(data)
                                        $scope.Er = data['error'];
                                    }else if(data['error'] == 'token failed'){
                                        $location.path("login");
                                    }
                                });
                        }
                    });
                },500)

            }

        }
    })
    //专利评价分页
    .directive('patentPage', function ($http,$routeParams,$location,$timeout) {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
                $timeout(function () {
                    var page =  $('#patent_product .content .appraise .patent_page').data('num')/5;
                    page = Math.ceil(page)
                    $("#patent_product .content .patent_page").Page({
                        totalPages: page,//分页总数
                        liNums: 5,//分页的数字按钮数(建议取奇数)
                        activeClass: 'activP', //active 类样式定义
                        prv: '上一页',//prev button name
                        next: '下一页',//next button name
                        hasFirstPage: true,
                        hasLastPage: true,
                        hasPrv: true,
                        hasNext: true,
                        callBack : function(page){
                            $http.post(
                                scope.homeUrl + "goodsInterfaces.api?getGoodsAssessments", $.param({
                                    goods_id:$routeParams.goods_id,
                                    page:page,
                                    limit:5
                                }),
                                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                            ).success(function (data) {
                                    if (data['status'] == 'ok') {
                                        console.log(data['data'])
                                        scope.list_assessment = data['data']
                                    } else if (data['status'] == 'error') {
                                        console.log(data)
                                        $scope.Er = data['error'];
                                    }else if(data['error'] == 'token failed'){
                                        $location.path("login");
                                    }
                                });
                        }
                    });
                },500)

            }

        }
    })

    //优惠券栏
    .directive('discountsLan', function ($timeout,$http,$location,$cookieStore) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                $('#discounts_main .content .record_nav ul li').on('click', function () {

                    $(this).addClass('active1').siblings().removeClass('active1')
                    var val = $(this).data('text')
                    var num = $(this).attr('value')
                    $('#discounts_main .content .page').attr('data-num',num)
                    $('#discounts_main .content .page').attr('data-text',val)
                    $http.post(
                        scope.homeUrl + "couponInterfaces.api?getCoupons", $.param({
                            member_id: $cookieStore.get("member_id"),
                            token: $cookieStore.get("token"),
                            coupon_state:val
                        }),
                        {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                    ).success(function (data) {
                            if (data['status'] == 'ok') {

                                scope.used = data['data']
                            } else if (data['status'] == 'error') { console.log(data)
                                scope.Er = data['error'];
                            }else if(data['error'] == 'token failed'){
                                $location.path("login");
                            }
                        });
                })


            }

        }
    })
    //退款栏
    .directive('refundLan', function ($timeout,$http,$location,$cookieStore) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {



            }

        }
    })
   //五星评价
    .directive('starLan', function ($timeout,$http,$location,$cookieStore) {
        return {
            restrict:"EA",
            replace:'true',
            link: function(scope, element, attr) {
                $('#comment_main .content .comment .stars li').on('click',function () {
                    var index = $(this).index();

                    $(this).children('img').attr('src','./assets/images/bigstar_selected.png')
                    $(this).prevAll().children('img').attr('src','./assets/images/bigstar_selected.png')
                    $(this).nextAll().children('img').attr('src','./assets/images/bigstar_default.png')
                    $('#comment_main .content .comment .stars').attr('value',index+1)
                })

            }

        }
    })
    //用户评价分页
    .directive('evaluatePage', function ($http,$cookieStore,$location,$timeout) {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
                $timeout(function () {
                    var page = $('#evaluate_main .content .page').data('num')/5;
                    page = Math.ceil(page)
                    $("#evaluate_main .content .page").Page({
                        totalPages: page,//分页总数
                        liNums: 5,//分页的数字按钮数(建议取奇数)
                        activeClass: 'activP', //active 类样式定义
                        prv: '上一页',//prev button name
                        next: '下一页',//next button name
                        hasFirstPage: true,
                        hasLastPage: true,
                        hasPrv: true,
                        hasNext: true,
                        callBack : function(page){
                            $http.post(
                                scope.homeUrl + "memberInterfaces.api?getMemberAssessmentList", $.param({
                                    token:$cookieStore.get('token'),
                                    member_id:$cookieStore.get('member_id'),
                                    page:page,
                                    limit:5
                                }),
                                {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
                            ).success(function (data) {
                                    if (data['status'] == 'ok') {
                                        scope.data_ments = data['data']
                                    } else if (data['status'] == 'error') {
                                        console.log(data)
                                        scope.Er = data['error'];
                                    }else if(data['error'] == 'token failed'){
                                        $location.path("login");
                                    }
                                });
                        }
                    });
                },200)

            }

        }
    })
//申请退款选中单个商标
    .directive('causeCheckOne', function ($http,$cookieStore,$location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
                $("#cause_main .content .item input").on("click",function(){
                    $(this).prop("checked",this.checked);
                    if(this.checked == true){
                        $(this).attr("value",'1');
                    }else{
                        $(this).attr("value",'0');
                    }
                    var inputs = $("#cause_main .content .item input")
                    var arr=[];
                    for(var i=0;i<inputs.length;i++){
                        arr.push(inputs[i].value)
                    }
                    var obj =[];
                    $('#cause_main .content .item input').each(function (i) {
                        if($(this).val() === '1') {
                            obj.push($(this).attr('goods_id'))
                        }

                    })

                    var b = obj.join(',')
                    $("#cause_main .content .order_number").attr('data-id',b)

                });
            }

        }
    })
//支付二维码隐藏
    .directive('erWeiMa', function ($http,$cookieStore,$location) {
        return {
            restrict:"EA",
            replace:'true',
            link: function (scope, elem, attrs) {
             $('#wx_pay .hint_con img').on('click', function () {
                 $('#wx_pay').slideUp(200);
             })
            }

        }
    })
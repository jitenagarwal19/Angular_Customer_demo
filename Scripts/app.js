var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/index", {
            templateUrl:"/Views/CustomerView.html",
            controller:"customer_view"
        })
        .when("/CustomerDetail/:customerId", {
            templateUrl:"/Views/CustomerDetail.html",
            controller:"customer_detail"
        })
        .when("/CustomerEdit/:customerId", {
            templateUrl:"/Views/CustomerEdit.html",
            controller:"customer_edit"
        })
        .otherwise({
            redirectTo:"/CustomerEdit/1"
        });
    
});
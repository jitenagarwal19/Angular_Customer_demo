app.controller("customer_detail", function($scope, $routeParams) {
    $scope.id = $routeParams.customerId;
    var customer = Customer.getCustomerGivenId($scope.id);
    if (customer) {
        $scope.customer = customer;
    }
    
});
app.controller("customer_edit", function($scope, $routeParams) {
    console.log("Hello Reached here customer edit");
    $scope.id = $routeParams.customerId;
    var customer = Customer.getCustomerGivenId($scope.id)
    if ()
})
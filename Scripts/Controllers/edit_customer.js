app.controller("customer_edit", function($scope, $routeParams) {
    console.log("Hello Reached here customer edit");
    $scope.id = $routeParams.customerId;
    var customer = Customer.getCustomerGivenId($scope.id)
    if (customer) {
        $scope.firstName = customer.firstName;
        $scope.lastName = customer.lastName;
        $scope.company  = customer.company;
        $scope.age= customer.age;
        $scope.location = customer.location;
        
        
    } else {
        
    }
    
    $scope.addOrUpdate = function() {
        if (!$scope.id) {
            $scope.message = "Please enter Id"
            return;
        } 
        if (!$scope.firstName) {
            $scope.message = "Please enter Name"
            return;
        } 
        
        var whatHappeened = Customer.updateOrAddCustomer(id, {
            id:$scope.id,
            firstName:$scope.firstName,
            lastName:$scope.lastName,
            location:$scope.location,
            company:$scope.company,
            age:$scope.age,
        })
        $scope.message = whatHappeened;

    }
})
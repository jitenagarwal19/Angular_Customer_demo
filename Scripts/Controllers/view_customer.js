
app.controller("customer_view", function($scope){
     
    console.log("Hey There");
    $scope.Customers = Customer.list;
    console.log(Customer.list);
});
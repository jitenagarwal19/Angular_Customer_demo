var Customer = {};

Customer.list = [
    
    {
        id:1,
        firstName:"Jiten",
        lastName: "Agarwal",
        location:"Pune",
        company:"GharKi",
        age : 24,
    },
     {
        id:2,
        firstName:"Surbhi",
        lastName: "Agarwal",
        location:"Ajmer",
        company:"EPIC",
        age : 25,
    },
     {
        id:3,
        firstName:"Megha",
        lastName: "Garg",
        location:"Gwarlior",
        company:"Bhartiya Railway",
        age : 24,
    },
     {
        id:4,
        firstName:"Shubham",
        lastName: "Agarwal",
        location:"Ahmedabad",
        company:"PhoneSoldier",
        age : 20,
    },
    
];
Customer.getCustomerGivenId= function(id) {
     
    var i = 0;
    for (i = 0; i < Customer.list.length; i++) {
        console.log("reached here custoomer id " + Customer.list[i].id + " name " + Customer.list[i].firstName);  

        
        if (Customer.list[i].id == id ) {
            console.log("returning here " + id);
            return Customer.list[i];
            
        }
    }
}

Customer.updateOrAddCustomer = function(id, customer) {
    var i = 0;
    for (i = 0; i < Customer.list.length; i++) {
        console.log("reached here custoomer id " + Customer.list[i].id + " name " + Customer.list[i].firstName);  

        
        if (Customer.list[i].id == id {
            console.log("returning here " + id);
            customer.list[i] = customer;
            return "Customer Updated";
        }
    }
    
    Customer.list.push(customer);
    return "new Customer added"
}



// create one object called employee
let employee = {
    firstName: 'Tom',
    lastName: 'Johnson',
    printFullame: function() {
        // by default < this > is pointing to employee object
        console.log(this.firstName + ' ' + this.lastName);
    }
}

employee.printFullame();

// create another object employee2 which can have different properties but need to have function as printFullName
// We already have printFullName function with our employee object so we dont want to replicate it
let employee2 = {
    firstName: 'Sachin',
    lastName: 'Tendular',
}

// user of CALL :: function borrowing - borrow function from other object and use them 
// Every funtion in js has this inbuild CALL function 
// Call fucntion can takes the first argument as reference to this variable
// now So this.firstName  = name2.firstName

employee.printFullame.call(employee2);

// We can use it this way as well
let printDetails = function(homeTown, age) {
    console.log(this.firstName + ' ' + this.lastName + ' ' + homeTown, ' '+ age);
}

printDetails.call(employee, 'Mumbai', 34);
printDetails.call(employee2, 'Pune', 25);

// use of APPLY :: works same as call methos but only difference is in the way of passing the arguments
// In CALL we pass each arguments individually comma saperated 
// In APPLY arguments can be passed as aa array list

printDetails.apply(employee, ['Mumbai', 34]);
printDetails.apply(employee, ['Pune', 25]);

// use of BIND :: create a copy of funtion and bind to a variable to it so that it can be call later
let printMyName = printDetails.bind(employee, ['Mumbai', 34]);
printMyName();
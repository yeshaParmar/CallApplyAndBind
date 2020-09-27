// create one object called employee
let employee = {
    firstName: 'Tom',
    lastName: 'Johnson'
}

let printFullName = function(hometown, county) {
    // by default < this > is pointing to employee object
    console.log(this.firstName + ' ' + this.lastName + ' ', county + ' ' + hometown);
}

// although some browser doesn't support this bind function
let printName = printFullName.bind(employee, 'India');
printName('Mumbai');

// So we are creating our own bind function

// When you user Function.prototype - it will be available to use with all the function in scirpt
// Like CALL / APPLy etc.
Function.prototype.myBind = function(...arg) {
    // this is refering to calling function :: printFullName
    let obj = this;
    // if we want other arguments then we can write it as 
    param = arg.splice(1);
    return function(...arg2) {
        // arg2 is refering to arguments passed while actually calling with the binded variable
        // e.g printName2('pune')
        obj.apply(arg[0], [...param, ...arg2]);
    }
}

let printName2 = printFullName.myBind(employee, 'India');
printName2('Pune');

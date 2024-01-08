const students =   {
    name: 'aditya',
    age: 25,
    Marks: function () { // js object has special properties called prototype
        console.log('Aditya');
        //whenever js create a new object to default set properties called prototype
        //newly object inherite a function in prototype
    }
}
// create a new object to set own properties
const employees = {// create a new employee function
    calcTax (){
        console.log('Tax');
    }
}

const employee = {
    salary: 5000,
}

employee.__proto__ = employees;
// if object & prototype have same method objects method will be used

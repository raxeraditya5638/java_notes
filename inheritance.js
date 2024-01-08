// Now, the start method in mySecondClass first calls super.start(),
//  which invokes the start method from the parent class (myFirstClass), and then it logs "start1" to the console.
//  This way, you can extend the behavior of the parent class's method in the child class.







class myFistClass {
    // constructor() {
    //     console.log("this is constructor to automatically invoke first");
    // };
    start() {
        console.log("start");
    };
};

class mySecondClass extends myFistClass {
    // constructor() {
    //     // console.log("this is constructor to automatically invoke second");
    // };

    start() {
        super.start();
        console.log("start1");
    };
};

// let myone = new mySecondClass();
// myone.start();

class parent {
    constructor(name) {
        console.log("this is");
        this.name = name;
    }
    start() {
        console.log("this is start parent");
    }
}

class child extends parent {// child class call be a derived class
    constructor(name) {
        super(name);// because first of all called a parent constructor not use super then error 
        // because parent constructor call then any child constructor
        console.log("this is child");
    }
    start() {
        super.start();
        console.log("this is start child");
    }
}

let myone = new parent("hey");
myone.start();





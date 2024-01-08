// class is a programe of code to creat e template
// class and object work like python oops 
// create a variable in python use self.varname but js use this.varname
// please check a ingeritance like pyhton inheritance.py 
// all methods and properties invoke in other classes
class myclass {
    constructor(){
        console.log("this is constructor to automatically invoke first");
        // use like a def __init__ in python
    }
    start() {// this is methods not can be seperated by coma
        console.log("start");
    };
    stop() {
        console.log("stop");
    };
    setBrand(sbrand) {
        this.brandName = sbrand;// sbrand is a parameter to pass a sbrand object as a aguments
    }
}

let obj = new myclass();
// myclass.start();
obj.setBrand("lexus");

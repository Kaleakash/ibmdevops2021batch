function Employee(id,name) {
        this.id=id;
        this.name=name;
        this.dis1=function() {
            document.write("<br/>This is employee class function");
            document.write("<br/> Id is "+this.id);
            document.write("<br/> Name is "+this.name);
        }
}
function Manager(id,name,numberOfEmp) {
    //using call 1st parameter this, then n parameters 
    //Employee.call(this,id,name);   //it is use bind employee class object to manager 
    this.numberOfEmp=numberOfEmp;
    //2nd option to achieve inheritance
        //3rd option to achieve inheritance 
    //using apply 1st parameter this, then arguments is use to pass remaining parameter.
    Employee.apply(this,arguments);  // it is use bind Employee class object to manager
    this.dis2=function() {
        document.write("<br/>This is manager class function");
        document.write("<br/> Number of employee is "+this.numberOfEmp);
    }
}
//let emp1 = new Employee(100,"Ravi");
//emp1.dis1();
//1st options to achieve inheritance
//Manager.prototype=Object.create(emp1);
let mgr1  = new Manager(100,"Ravi",10);
mgr1.dis2();
mgr1.dis1();        //calling dis1() function of Employee through manager class object. 


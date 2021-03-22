//ES5 to create object 
function Employee(){
    console.log("Employee object created...")
    this.fname="Ravi Kumar";
    this.displayEmpInfo=function() {
        console.log("This is employee class function");
        console.log("FName is "+this.fname);
    }
}
let emp1 = new Employee();
emp1.displayEmpInfo();
//ES6 we can use Class keyword 
class Person {
    fname ="Ravi Kumar";
    constructor(){
        console.log("person object created....")
    }
    displayPersonInfo(){
        console.log("This is person class function")
        console.log("FName is "+this.fname);
    }
}
let p1 = new Person();
p1.displayPersonInfo();

/*
create Employee with 3 property id,name,salary
set value throgh parameterized constructor 
then write calSalary() to do calculation on salary 
like three variable using let keyword hra, da and pf 
hra = 10%, da = 5% and pf = 7% 
salary = salary + hra + da -pf
display id,name,salary;
*/
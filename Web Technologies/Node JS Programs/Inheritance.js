class Employee {
    empInfo() {
        console.log("Employee class function")
    }
}
class Manager extends Employee {
    mgrInfo() {
        console.log("Manager class function")
    }
}

let emp1 = new Employee();
emp1.empInfo();
let mgr1 = new Manager();
mgr1.empInfo();
mgr1.mgrInfo();
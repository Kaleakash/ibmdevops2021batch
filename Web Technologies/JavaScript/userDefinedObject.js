/*
normal function name we can use any name. 
But when creating object we have to follow pascal naming rules
*/
/*
function Person() {
    alert("Object created using constructor")
    this.name = "Ajay";
    this.age = 21; 
    this.display = function() {
        document.write("Name is  "+this.name+"<br/>")
        document.write("Age is "+this.age+"<br/>");
    }       
}
//Person();   //now it is like a normal function 
var p1 = new Person();
alert("name is "+p1.name);
alert("age is "+p1.age);
p1.display();
*/

//Parameterized construtor 
/*
function Person(name,age) {
    this.name = name;
    this.age =age; 
    this.display = function() {
        document.write("Name is  "+this.name+"<br/>")
        document.write("Age is "+this.age+"<br/>");
    }       
}

var p1 = new Person("Ramesh",21);
alert("name is "+p1.name);
alert("age is "+p1.age);
p1.display();

Person.prototype.city="Bangalore";
alert("After added property")
alert("City for 1st person is "+p1.city);

var p2 = new Person("Raju",22);
alert("name is "+p2.name);
alert("age is "+p2.age);
p2.display();
alert("City for 2nd person is "+p2.city)
p2.city="Delhi";
alert("After change city for 2nd person "+p2.city);

Person.prototype.info=function() {
        alert("This is a info function added ")
        alert("Name is "+this.name)
        alert("Age is "+this.age)
        alert("City is "+this.city);
}
p1.info();
p2.info();

delete p2.name;
alert("After deleted property")
alert(p2.name);

delete p2.info;

p2.display();

*/

/*
function Person(pid,name,age) {
    var pid =pid;       //private variable 
    this.name = name;   //public varaible 
    this.age = age;    //public variable 

    function dis1() {
        alert("This is private function") //private function 
    }
    this.dis2  = function(){
        dis1();
        alert("This is public function ")   //public function 
    }
}

let p1 = new Person(100,"Raju",21);
alert("Id is "+p1.pid)
alert("Name is "+p1.name);
alert("Age is "+p1.age);
//p1.dis1();
p1.dis2();*/

function Employee(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.displayEmployee= function() {
            document.write("<br/>id is "+this.id);
            document.write("<br/>name is "+this.name);
            document.write("<br/>salary is "+this.salary);
        }
}
function Manager(id,name,salary,numberOfEmp) {
        Employee.call(this,id,name,salary);  //passing value to employee
        this.numberOfEmp = numberOfEmp;
        this.displayMgr= function() {
            document.write("<br> Number of employee working under him "+this.numberOfEmp);
        }
}
function Programmer(projectName) {
        this.projectName= projectName;
        this.displayPrg= function() {
            document.write("<br/>Project Name is "+this.projectName);
        }
}
var mgr1 = new Manager(100,"Ravi",12000,12);
mgr1.displayEmployee();
mgr1.displayMgr();
//Prototype level inheritance. 
/*
document.write("<br/>Employee employee details through employee object<br/>")
document.write("<br/>Generic employee details <br/>")
var emp1 = new Employee(100,"Ravi",45000);
emp1.displayEmployee();
var emp2 = new Employee(101,"Ramesh",25000);
emp2.displayEmployee();
Manager.prototype= Object.create(emp1); // like extends. 
Programmer.prototype= Object.create(emp2);  //like extends 
var mgr1 = new Manager(10);
document.write("<br/>Manager details are <br/>")
mgr1.displayEmployee();
mgr1.displayMgr();

var prg1 = new Programmer("Angular Project ");
document.write("<br/>Programmer details are <br/>")
prg1.displayEmployee();
prg1.displayPrg();
*/
package com;

public class EmployeeService {

	public float calSalary(int id, String name,float salary, String desg) {
		if(desg.equals("Manager")) {
			return salary+5000;
		}else if(desg.equals("Developer")) {
			return salary+3000;
		}else {
			return salary+1500;
		}
	}
	
	public String sayHello(String name) {
		return "Welcome "+name;
	}
}

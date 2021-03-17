package com;

import java.util.Scanner;

public class DemoTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Running project using Maven");
		AccountStore ac = new AccountStore();
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the accno");
		int id = sc.nextInt();
		System.out.println("Enter the name");
		String name = sc.next();
		System.out.println("Enter the amount");
		float salary = sc.nextFloat();
		
		int res  = ac.storeAccountInfo(id,name,salary);
		if(res>0) {
			System.out.println("Account created...");
		}else {
			System.out.println("Account didn't create");
		}
	}

}

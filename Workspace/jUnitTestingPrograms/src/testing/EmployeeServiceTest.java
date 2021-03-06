package testing;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;

import com.EmployeeService;

public class EmployeeServiceTest {

	//EmployeeService es= new EmployeeService();		//when class load that time only memory created.
	static EmployeeService es;	// I have createad non static reference not memory.
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		System.out.println("This method call only once before all test start");
		es = new EmployeeService();
	}
	@AfterClass
	public static void tearDownAfterClass() throws Exception {
		System.out.println("This method call only once after test finished..");
		es = null;			// destroy the memory. 
	}
	@Before
	public void setUp() throws Exception {
		System.out.println("Before every test method");
	}
	@After
	public void tearDown() throws Exception {
		System.out.println("After every test method");
	}
	@Ignore
	@Test
	public void testCalSalary() {
		//EmployeeService es = new EmployeeService();
		float managerSalary = es.calSalary(100,"Raj", 45000, "Manager");
		assertEquals(50000, managerSalary, 0.0);
		try {
		float developerSalary = es.calSalary(101,"Ajay", 25000, "Developer");
		assertEquals(27000, developerSalary, 0.0);
		}catch (AssertionError e) {
			System.out.println(e);
		}
		float employeeSalary = es.calSalary(102,"Ram", 12000, "Clerk");
		assertEquals(13500, employeeSalary, 0.0);
		
	}
	@Test
	public void testSayHello() {
		//EmployeeService es = new EmployeeService();
		String info = es.sayHello("Ajay");
		assertEquals("Welcome Ajay", info);
	}

}
	
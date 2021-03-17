package testing;

import static org.junit.Assert.*;

import org.junit.Test;

import com.Calculation;

public class CalculationTest {

	@Test			// annotation : It is konw as meta-data. Data about data. 
	public void testAdd() {
		//fail("Not yet implemented");
		Calculation cc = new Calculation();
		int res = cc.add(100, 200);
		assertEquals(300, res);
	}
	
	@Test
	public void testSub() {
		Calculation cc = new Calculation();
		int res = cc.sub(200, 50);
		assertEquals(150, res);
	}

}

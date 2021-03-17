package testing;

import static org.junit.Assert.*;

import org.junit.Test;

import dao.AccountDao;

public class AccountDaoTest {

	@Test
	public void testGetBalance() {
		AccountDao ad = new AccountDao();
		float amount = ad.getBalance(120);
		assertEquals(27000, amount,0.0);
	}

}

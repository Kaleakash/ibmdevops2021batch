package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class AccountDao {

	public float getBalance(int accno) {
		try {
			//OracleDriver
	Class.forName("oracle.jdbc.driver.OracleDriver");
	Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521/orcl", "scott", "tiger");
	PreparedStatement pstmt = con.prepareStatement("select amount from account where accno = ?");
	pstmt.setInt(1, accno);
	ResultSet rs = pstmt.executeQuery();
	if(rs.next()) {
		return rs.getFloat(1);
	}
		} catch (Exception e) {
		System.out.println(e);
		}
		return 0;
	}
}

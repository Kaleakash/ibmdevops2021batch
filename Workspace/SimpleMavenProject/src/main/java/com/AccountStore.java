package com;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class AccountStore {

	public int storeAccountInfo(int accno,String name, float amount) {
		try {
			
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521/orcl", "scott", "tiger");
			PreparedStatement pstmt = con.prepareStatement("insert into account values(?,?,?)");
			pstmt.setInt(1, accno);
			pstmt.setString(2, name);
			pstmt.setFloat(3, amount);
			int res = pstmt.executeUpdate();
			return res;
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e);
			return 0;
		}
	}
}

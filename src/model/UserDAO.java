package model;

import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.xml.ws.RespectBinding;

import model.domain.UserDTO;
import util.DBUtil;

public class UserDAO {

	public static int insert(UserDTO user) throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("insert into newUser values(?,?,?,?,?,?)");
			pstmt.setString(1, user.getId());
			pstmt.setString(2, user.getPw());
			pstmt.setString(3, user.getName());
			pstmt.setString(4, user.getEmail());
			pstmt.setString(5, user.getCountry());
			pstmt.setString(6, user.getAddress());
			return pstmt.executeUpdate();
		}finally {
			DBUtil.close(con, pstmt);
		}
	}
	
	
	public static boolean getUser(String id,String pw) throws SQLException{
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select pw from newUser where id = ?");
			pstmt.setString(1,id);
			rset= pstmt.executeQuery();
			if(rset.next()) {
				String pw2 = rset.getString(1);
				if(pw2.equals(pw)) {
					return true;
				}
					}
		}finally {
			DBUtil.close(con, pstmt, rset);
		}
		return false;
	}
	
	}



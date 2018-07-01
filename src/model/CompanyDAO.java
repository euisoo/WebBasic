package model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import model.domain.CompanyDTO;
import util.DBUtil;

public class CompanyDAO {

	public static ArrayList<CompanyDTO> selectAll () throws SQLException {
		Connection con =null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<CompanyDTO> comp = null;
		try {
			con =DBUtil.getConnection();
			pstmt = con.prepareStatement("select * from company");
			rset = pstmt.executeQuery();
			comp = new ArrayList<CompanyDTO>();
			while(rset.next()) {
				comp.add(new CompanyDTO(rset.getString(1),rset.getString(2),rset.getString(3)));
			}
		}finally {
			DBUtil.close(con, pstmt, rset);
		}
		return comp;
	}
}

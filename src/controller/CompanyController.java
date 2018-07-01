package controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



import com.google.gson.Gson;

import model.CompanyDAO;
import model.domain.CompanyDTO;

public class CompanyController extends HttpServlet {
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.setCharacterEncoding("utf-8");
		String url ="TestChart.jsp";
		String command = request.getParameter("command");
		System.out.println(command);
		try {
			Gson gson = new Gson();
			System.out.println("========================");
			if(command.equals("selectAll")) {
				ArrayList<CompanyDTO> comp = CompanyDAO.selectAll();
				String json = gson.toJson(comp);
				System.out.println("========================");
				request.setAttribute("comp", json);
				request.getRequestDispatcher(url).forward(request, response);
			}
		}catch(SQLException e) {
			e.printStackTrace();
		}
		
		
	}
}

package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.UserDAO;
import model.domain.UserDTO;

public class Controller extends HttpServlet {
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		System.out.println("------------- " + request.getParameter("id"));
		
		PrintWriter out = response.getWriter();
		out.println(request.getParameter("command"));
		
		
		try {
			if (request.getParameter("command").equals("insert")) {
				UserDAO.insert(new UserDTO(request.getParameter("id"), request.getParameter("pw"),
						request.getParameter("name"), request.getParameter("email"), request.getParameter("country"),request.getParameter("address")));
				request.getRequestDispatcher("succSignView.jsp").forward(request, response);
				System.out.println("화면 이동전 -----");
				
			}
		} catch (SQLException e) {
			e.printStackTrace();
			request.setAttribute("id", request.getParameter("id"));
			request.getRequestDispatcher("failSignView.jsp").forward(request, response);
		}
	}

}

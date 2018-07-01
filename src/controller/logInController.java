package controller;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.UserDAO;
public class logInController extends HttpServlet {
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	request.setCharacterEncoding("utf-8");
	String command = request.getParameter("command");	
	HttpSession session = null;
	try {
		if(command.equals("login")) {
			if((UserDAO.getUser(request.getParameter("id"),request.getParameter("pw"))==true)){
				session = request.getSession();
				session.setAttribute("id", request.getParameter("id"));
				session.setAttribute("pw",request.getParameter("pw"));
				request.getRequestDispatcher("succLogInView.jsp").forward(request, response);
			}else {
				request.setAttribute("pw",request.getParameter("pw"));
				request.getRequestDispatcher("failLogInView.jsp").forward(request, response);
				
			}
		}
	}catch(SQLException e) {
		e.printStackTrace();
		
	}

}
}
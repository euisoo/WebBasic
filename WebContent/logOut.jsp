<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
System.out.println(session.getAttribute("id")+"\t"+session.getAttribute("pw")); 
session.invalidate();

response.sendRedirect("main.html");
%>
</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<META http-equiv=refresh content="0;url=afterMain.html">

<title>Insert title here</title>
</head>
<body>
<% 
System.out.println(session.getAttribute("id")+"\t"+session.getAttribute("pw")); %>
</body>
</html>
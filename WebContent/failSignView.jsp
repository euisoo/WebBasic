<%@page import="javax.swing.JOptionPane"%>
<%@page import="java.io.PrintWriter"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
</head>
<body>
<%
request.setCharacterEncoding("utf-8");
response.setContentType("text/html; charset=utf-8");
JOptionPane.showMessageDialog(null, "이미 등록된 id입니다");
%>
	
<script type="text/javascript">
location.href="signUp.html";
</script>

</body>
</html>
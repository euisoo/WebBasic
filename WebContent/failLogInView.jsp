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
JOptionPane.showMessageDialog(null, "등록되지 않은 회원입니다");

%>


<script type="text/javascript">
location.href="logIn.html"; 
</script>

</body>
</html>
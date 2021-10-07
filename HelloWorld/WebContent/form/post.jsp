<%@page import="co.yedam.common.Employee"%>
<%@page import="co.yedam.common.EmpDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>form/post.jsp</title>
</head>
<body>
	<%
	EmpDAO dao = new EmpDAO();
	Employee emp = new Employee();

	String empId = request.getParameter("eId");
	String lastName = request.getParameter("eName");
	String mail = request.getParameter("email");
	String job = request.getParameter("jobId");
	String hireDate = request.getParameter("hireDate");

	emp.setEmployeeId(Integer.parseInt(empId));
	emp.setLastName(lastName);
	emp.setEmail(mail);
	emp.setJobId(job);
	emp.setHireDate(hireDate);

	dao.insertEmp(emp);

	if (dao.insertEmp(emp)) {
		out.println("<h3>정상처리되었습니다.<h3>");
	} else {
		out.println("<h3>오류<h3>");
	}
	%>
</body>
</html>
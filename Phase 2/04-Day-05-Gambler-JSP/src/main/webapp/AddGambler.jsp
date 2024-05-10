<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add a Gambler</title>   <!--  Words for Browser Tab -->
<link rel="stylesheet" href="./resources/style.css"></link>
</head>
<body>
<!--  We need to get the Gambler Information to be submitted to the Servlet -->
<!--  to get data from a uswr, we use an HTML form -->
<form action="/silence" method="post">
	<div>
		<p>Name: 			<input type="text" size=25 name="newName" 		required> </p>
		<p>Address: 		<input type="text" size=25 name="newAddr"		required> </p>
		<p>Birth Date: 		<input type="text" size=10 name="newBirthDate"	required> </p>
		<p>Monthly Salary: 	<input type="text" size=9  name="newSalary"		required> </p>
	</div>

	<div>
		<input type="submit" value="Submit Changes">
	</div>
	
	<div>
	<a href="./HomePage.jsp">Return to HomePage</a>
	</div>
</form>
<!--  We also need the submit button to send the data to the servlet -->
</body>
</html>
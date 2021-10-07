package co.yedam.common;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class EmpDAO extends DAO {
	
	public List<Employee> getEmpList(){
		connect();
		List<Employee> list = new ArrayList();
		String sql = "select * from employees";
		try {
			stmt = conn.createStatement();
			rs=stmt.executeQuery(sql);
			while(rs.next()) {
				Employee emp =new Employee();
				emp.setEmployeeId(rs.getInt("employee_id"));
				emp.setLastName(rs.getString("last_name"));
				emp.setEmail(rs.getString("email"));
				emp.setHireDate(rs.getString("hire_date"));
				emp.setJobId(rs.getString("job_id"));
				
				list.add(emp);
				
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return list;
		
		
	}
	
	public boolean insertEmp(Employee emp) {
		connect();
		String sql = "insert into employees (employee_id, last_name, email, job_id, hire_date)\r\n"
				+ "values(?, ?, ?, ?, ?)\r\n" + "";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, emp.getEmployeeId());
			psmt.setString(2, emp.getLastName());
			psmt.setString(3, emp.getEmail());
			psmt.setString(4, emp.getJobId());
			psmt.setString(5, emp.getHireDate());
			int r = psmt.executeUpdate();
			System.out.println(r + " �엯�젰�맖. ");
			return true;
			
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		} finally {
			disconnect();
		}
	}
	
	
	
	public void updateEmp(String id, String phone, String salary) {
		connect();
		String sql = "update empl_demo set phone_number=?, salary=? where employee_id=?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, phone);
			psmt.setString(2, salary);
			psmt.setString(3, id);
			int r = psmt.executeUpdate();
			System.out.println(r+ "嫄� �닔�젙�맖.");
		} catch (SQLException e) {
			
			e.printStackTrace();
		}finally {
			disconnect();
		}
	}
	
	public void deleteEmp(int empId) {
		connect(); //conn = dbconnect.Connection
		String sql = "delete from empl_demo where employee_id =" + empId;
		try {
			stmt = conn.createStatement(); //Employee emp = new Employee();
			int r = stmt.executeUpdate(sql);
			System.out.println(r + "嫄� �궘�젣�맖.");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			disconnect();
		}
	}
		
}
package co.yedam.serv;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.EmpDAO;
import co.yedam.common.Employee;

/**
 * Servlet implementation class EmpJsonServlet
 */
@WebServlet("/empJsonServlet.json")
public class EmpJsonServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EmpJsonServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		EmpDAO dao =new EmpDAO();
		List<Employee> list=dao.getEmpList();
		//{"empId":"?","last_name":"?","email":"?","hireDate":"?","job","?"}
//		out.println("<h1>JSON</h1>");
		int cnt =0 , lastCnt= list.size();
		out.print("[");
		for(Employee emp : list) {
			out.println("{\"empId\":\""+emp.getEmployeeId()+"\",\"last_name\":\""+emp.getLastName()+"\",\"email\":\""+emp.getEmail()+"\",\"hireDate\":\""+emp.getHireDate()+"\",\"job\":\""+emp.getJobId()+"\"}");
		//,마지막 건(,)
		cnt++;
		if(cnt!=lastCnt) {
			out.print(",");
		}
			
		}
		out.print("]");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

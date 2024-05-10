package add_gambler_servlet;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import gambler.Gambler;
import gambler.GamblerDao;
import gambler.MemoryGamblerDao;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/******************************************************************************
 * Servlet to add a gambler to the Data Source
 * 
 * It is a subclass of HttpServlet
 *
 * Using the GamblerDAO
 *****************************************************************************/
@WebServlet("/silence")  // This will handle all /gambler path requests from jsp
public class AddGamblerServlet {
	// Define a reference to the GamblerDAO
	private GamblerDao gamblerDataSource;
	
	// Define a constructor to instantiate a GamblerDAO concrete class and
	// 		assign it to the reference we defined 
	
	public AddGamblerServlet() throws IOException {
		super();
		gamblerDataSource = new MemoryGamblerDao();
	}
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
			
			// Add the data sent to us from the JSP form to the Gambler Data Source
		
			// Instatiate a new gambler object to hold that data
			Gambler newGambler = new Gambler();
			
			// Get the data from JSP form HTTP request
			//		and store it in the new Gambler
			// Be sure to use the names assigned to the data in the form in the request.getParameter() method call
			String newName = request.getParameter("newName");
			String address = request.getParameter("newAddr");
			String dob = request.getParameter("newBirthDate");
			String newSalary = request.getParameter("newSalary");
			
			//Use the setters in the Gambler to populate the object 
			DateTimeFormatter EurDateFormat = DateTimeFormatter.ofPattern("yyyy-MM-dd");
			newGambler.setAddress(address);
			newGambler.setBirthDate(LocalDate.parse(dob, EurDateFormat));
			newGambler.setName(newName);
			newGambler.setMonthlySalary(Double.parseDouble(newSalary));
			// Send the new Gambler to the Dao method to add it to the data source
		
			
			// Send the browser back to the home page when we are done
	}		// End of doPost 
}

import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
    
    getEmployees(){
        //Get employee data
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        //Post employee data
        return axios.post(EMPLOYEE_API_BASE_URL, employee)
    }

    getEmployeeById(employeeId){
        //GET employee by Id
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId)
    }

}

export default new EmployeeService()
import axios from 'axios'
const EMPLOYEE_S_API_BASE_URL = "http://localhost:8080/employees"

class EmployeeService{
    saveEmployee(employee){
        return axios.post(EMPLOYEE_S_API_BASE_URL, employee)
    }
    getEmployees(){
return axios.get(EMPLOYEE_S_API_BASE_URL)
    }
    getEmployeesByID(id){
        return axios.get(EMPLOYEE_S_API_BASE_URL+"/"+id)
    }
    deleteEmployeesByID(id){
        return axios.delete(EMPLOYEE_S_API_BASE_URL+"/"+id)
    }
   updateEmployees(employee,id){
        return axios.put(EMPLOYEE_S_API_BASE_URL+"/"+id, employee)
    }

}
export default new EmployeeService();
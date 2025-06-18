package org.management.empmanagement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
private EmployeeRepo empRepo;



    @Override
    public String createEmployee(Employee employee) {
        EmployeeEntity empEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, empEntity);
        empRepo.save(empEntity);
        //employees.add(employee);
        return "Saved";
    }

@Override
    public Employee readEmployee(Long id) {
               EmployeeEntity emp = empRepo.findById(id).get();
                Employee empl = new Employee();
        BeanUtils.copyProperties(emp, empl);

        return empl;
    }
    @Override
    public List<Employee> readEmployees() {
        List<EmployeeEntity> empList = empRepo.findAll();
List<Employee> employees = new ArrayList<>();

for (EmployeeEntity empEntity : empList) {
    Employee emp = new Employee();
  emp.setId(empEntity.getId());
    emp.setName(empEntity.getName());
    emp.setEmail(empEntity.getEmail());
emp.setPhone(empEntity.getPhone());
    employees.add(emp);
    
}
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity emp = empRepo.findById(id).get();
        empRepo.delete(emp);
        return true;
    }

    @Override
    public String updateEmployee(Long id, Employee employee) {
        EmployeeEntity existEmployee = empRepo.findById(id).get();
        existEmployee.setEmail(employee.getEmail());
        existEmployee.setName(employee.getName());
        existEmployee.setPhone(employee.getPhone());
       
        empRepo.save( existEmployee);
        return "Updated Successfully";
    }

    

}

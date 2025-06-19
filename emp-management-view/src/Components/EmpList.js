import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService';
const EmpList = () => {
    const[loading, setLoading]=useState(true);
    const[employees, setEmployees]=useState(null);

useEffect(()=>{
    const fetchData=async ()=>{
        setLoading(true);
        try{
            const response=await EmployeeService.getEmployees();
            setEmployees(response.data);
        }
catch(error){
    console.log(error);
}
setLoading(false)
    };
    fetchData();
},[]);
const deleteEmployee = (e, id) =>{
    e.preventDefault();
    EmployeeService.deleteEmployeesByID(id)
    .then(() => {
        if(employees){ 
      setEmployees((prevElement) => {
        return prevElement.filter((employee) => employee.id !==id);
      })
    }
    })
};
const editEmployee =(e,id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`)
};
    const navigate=useNavigate();
  return (
    <div className="container mx-auto my-8 px-4">

    <div>
      <button 
      onClick={()=> navigate("/addEmp")}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow">➕ Add Employee👩‍💼</button>
    </div>
    <div className="bg-white/30 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden mt-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-900/80 text-white text-sm uppercase font-semibold">
          <th className="px-6 py-3 text-left">Name</th>
           <th className="px-6 py-3 text-left">Email</th>
            <th className="px-6 py-3 text-left">Phone</th>
          {/* <th className="px-6 py-3 uppercase tracking-wide ">UID</th> */}
              <th className="px-6 py-3 text-left">Actions</th>
        </thead>
        {!loading && ( 
        <tbody className="divide-y divide-gray-300 ">
            {employees.map((employee)=>{ 
                return( 
          <tr key={employee.id} className="bg-white/50 hover:bg-white/80 text-gray-900 transition-all">
             <td className="px-6 py-4">{employee.name}</td>
           <td className="px-6 py-4">{employee.email}</td>
            <td className="px-6 py-4">{employee.phone}</td>
             {/* <td className="text-left px-6 py-4 whitespace-nowrap">001</td> */}
              <td className="px-6 py-4 ">
               <span
                  onClick={(e) => editEmployee(e, employee.id)}
                className='text-blue-600 hover:text-blue-800 mr-4 cursor-pointer font-medium'
                 >  📝 Edit </span> 
                 <span
                onClick={(e) => deleteEmployee(e, employee.id)}
                className='text-red-600 hover:text-red-800 cursor-pointer font-medium'
                >  Delete 🗑️ </span>
              </td>
          </tr>
                );
          })}
        </tbody>
        )}
      </table>
    </div>
       </div>
  )
}

export default EmpList
import React, { useState , useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService'
const UpdateEmp = () => {
    const{id}=useParams();
   const navigate=useNavigate();
    const[employee, setEmployee]=useState(
        {
           id: id ,
           name: "",
           phone: "",
           email: "",
        }
    );
const handleChange=(e)=>{
    const value = e.target.value;
    setEmployee({...employee,[e.target.name]:value})
}
useEffect(()=>{
    const fetchData=async ()=>{
        
        try{
            const response=await EmployeeService.getEmployeesByID(employee.id);
            setEmployee(response.data);
        }
catch(error){
    console.log(error);
}

    };
    fetchData();
},[]);

const UpdateEmployee=(e)=>{
    e.preventDefault();
    EmployeeService.updateEmployees(employee,id)
    .then((response)=>{
        console.log("saved",response);
        navigate("/")
    })
    .catch((error)=>{
        console.log(error);
    })
}

 
  return (
    <div className='max-w-md mx-auto mt-20 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl px-8 py-5 text-white'>
        <div className='text-3xl font-bold text-center mb-8'> 
        <p> Update Employee Details 👩‍💻</p>
        </div>
        <div className='mx-10 my-2'>

        <input 
        type='text'
        name="name"
        value={employee.name}
        onChange={(e)=>handleChange(e)}

        className="w-full mb-6 px-4 py-2 rounded-lg bg-white/90 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"placeholder='Name'></input>
         <input 
         type='email'
          name="email"
          value={employee.email}
          onChange={(e)=>handleChange(e)}

         className="w-full mb-6 px-4 py-2 rounded-lg bg-white/90 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder='Email'></input>
          <input 
          type='number'
           name="phone"
           value={employee.phone}
            onChange={(e)=>handleChange(e)}

          className="w-full mb-6 px-4 py-2 rounded-lg bg-white/90 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder='Phone'></input>
           {/* <input 
           type='number'
            name="id"
            value={employee.id}
            onChange={(e)=>handleChange(e)}

           className="w-full py-2 my-4 text-slate-800" placeholder='UID'></input>  */}
            </div>

             <div className='flex my-0 space-x-2 px-20'>

            <button 
            onClick={UpdateEmployee}
            className='bg-grey-200 hover:bg-green-700 py-2 px-6 rounded' >Update</button>
           
            <button
            onClick={()=> navigate("/")}
            className='bg-grey-200 hover:bg-red-700 py-2 px-6 rounded'>Cancel</button>
</div>
    </div>

  )
}

export default UpdateEmp
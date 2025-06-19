
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './Components/Navbar';
import EmpList from './Components/EmpList';
import AddEmp from './Components/AddEmp';
import UpdateEmp from './Components/UpdateEmp';
function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
    <Routes>

<Route index element={<EmpList/>}/>
<  Route path="/" element={<EmpList/>}/>
<Route path="/addEmp" element={<AddEmp/>}/>
<Route path="/editEmployee/:id" element={<UpdateEmp/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

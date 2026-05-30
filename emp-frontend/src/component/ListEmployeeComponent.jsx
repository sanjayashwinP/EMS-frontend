
import { useEffect, useState } from "react"
import { deleteemployee, listemployees } from "../services/EmployeeService"
import { useNavigate } from "react-router-dom";
const ListEmployeeComponent = () => {

    const [employee,setemployee]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        getallemployee();
    },[])
    function getallemployee(){
        listemployees().then((response)=>{
            setemployee(response.data)
        }).catch((error)=>{
            console.error(error)
        })
    }
    function addNewEmployee(){
        navigate('/add-employee')
    }
    function updateemployee(id){
        navigate(`/update-employee/${id}`)
    }
    function removeemployee(id){
        deleteemployee(id).then((response)=>{
            getallemployee();
        }).catch(error=>console.error(error))
    }
  return (
    <div className="container">
        <h2>List of Employees</h2>
        <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee FirstName</th>
                    <th>Employee LastName</th>
                    <th>Employee Email</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
               {
                employee.map(employee=>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td><button className="btn btn-info" onClick={()=>updateemployee(employee.id)}>Update</button></td>
                        <td><button className="btn btn-danger" onClick={()=>removeemployee(employee.id)}>Delete</button></td>
                    </tr>
                )
               }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent
import axios from "axios"
const REST_API_GET_URL ='https://your-render-url.onrender.com/api/getallEmployees';
const REST_API_POST_URL='https://your-render-url.onrender.com/api/addEmployee';
const REST_API_GETSINGLE_URL ='https://your-render-url.onrender.com/api/getEmployee';
const REST_API_PUT_URL='https://your-render-url.onrender.com/api/updateEmployee';
const REST_API_DELETE_URL='https://your-render-url.onrender.com/api/deleteemployee';

export const listemployees=()=>axios.get(REST_API_GET_URL);
export const createemployee=(employee)=>axios.post(REST_API_POST_URL,employee);
export const getemployee=(employeeId)=>axios.get(REST_API_GETSINGLE_URL+'/'+employeeId);
export const updateemployee=(id,employee)=>axios.put(REST_API_PUT_URL+'/'+id,employee);
export const deleteemployee=(id)=>axios.delete(REST_API_DELETE_URL+'/'+id);
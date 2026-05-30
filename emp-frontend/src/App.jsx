import './App.css'
import FooterComponent from './component/FooterComponent'
import HeaderComponent from './component/HeaderComponent'
import ListEmployeeComponent from './component/ListEmployeeComponent'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmployeeComponent from './component/EmployeeComponent'
function App() {

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
     <Route path='/' element={ <ListEmployeeComponent/>}></Route>
     <Route path='/listofemployees' element={ <ListEmployeeComponent/>}></Route>
     <Route path='/add-employee' element={ <EmployeeComponent/>}></Route>
     <Route path='/update-employee/:id' element={ <EmployeeComponent/>}></Route>
     </Routes>
     <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App

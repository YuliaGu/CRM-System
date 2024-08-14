import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Authentication } from './Views/Authentication'
import { customersContext } from './Contexts/customersContext'
import { salesContext } from './Contexts/salesContext'
import { tasksContext } from './Contexts/tasksContext'
import { closedSalesContext } from './Contexts/closedSalesContext'
import { leftCustomersContext } from './Contexts/leftCustomersContext'
import Dashboard from './Views/Dashboard'
import Customers from './Views/Customers'
import AddCustomer from './Views/AddCustomer'
import EditCustomerCard from './Views/EditCustomerCard'
import SaleCard from './Components/SaleCard'
import Sales from './Views/Sales'
import AddSale from './Views/AddSale'
import EditSaleCard from './Views/EditSaleCard'
import Tasks from './Views/Tasks'
import AddTask from './Views/AddTask'
import EditTask from './Views/EditTask'

import NavBar from './Views/Navbar'

function App() {
  //initialize from DB with the appropriate customers list to the user that logged in
  const [customers, setCustomers] = useState([
    {
      fullName: 'Avi Levi',
      email: 'avi@gmail.com',
      customerCompany: 'Facebook',
      memberType: 'vip',
      planStart: '31.07.2024',
      planEnd: '31.12.2024'
    },
    {
      fullName: 'Moshe Cohen',
      email: 'moshe@gmail.com',
      customerCompany: 'Facebook',
      memberType: 'vip',
      planStart: '31.07.2024',
      planEnd: '31.12.2024'
    }
  ])
  const [sales, setSales] = useState([])
  const [tasks, setTasks] = useState([])
  const [closedSales, setClosedSales] = useState([
    {
        month: 4,
        year:2024
    },
    {
        month: 4,
        year:2024
    },
    {
        month: 5,
        year:2024
    },
    {
        month: 6,
        year:2024
    },
  ])
  const [leftCustomers, setLeftCustomers] = useState([
    {
      month: 11,
      year:2024
    },
    {
      month: 9,
      year:2024
    },
    {
      month: 6,
      year:2024
    },
    {
      month: 6,
      year:2024
    },
    {
      month: 1,
      year:2024
    }
])

  return (
    <>
      <NavBar/>
      <br />
      <br />
      <customersContext.Provider value={{customers, setCustomers}} >
      <salesContext.Provider value={{sales, setSales}}>
      <tasksContext.Provider value={{tasks, setTasks}}>
      <closedSalesContext.Provider value={{closedSales, setClosedSales}}>
      <leftCustomersContext.Provider value={{leftCustomers, setLeftCustomers}}>

        <Routes>
        <Route path='/' element={<Authentication/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/customers' element={<Customers/>}/>
        <Route path='/addCustomer' element={<AddCustomer/>}/>
        <Route path='/editCustomerCard' element={<EditCustomerCard/>}/>
        <Route path='/saleCard' element={<SaleCard/>}/>  {/*just for tests */}
        <Route path='/sales' element={<Sales/>}/>
        <Route path='/addSale' element={<AddSale/>}/>
        <Route path='/editSaleCard' element={<EditSaleCard/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
        <Route path='/addTask' element={<AddTask/>}/>
        {/* <Route path='/editCustomerCard' element={<EditCustomerCard/>}/> */}
        {/* <Route path='/editCustomerCard' element={<EditCustomerCard/>}/> */}
        {/* <Route path='/editCustomerCard' element={<EditCustomerCard/>}/> */}  
        </Routes>

      </leftCustomersContext.Provider>
      </closedSalesContext.Provider>
      </tasksContext.Provider>
      </salesContext.Provider>
      </customersContext.Provider>
    </>
  )
}

export default App

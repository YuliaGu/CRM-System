import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { customersContext } from '../Contexts/customersContext'
import CustomerCard from '../Components/CustomerCard'

export default function Customers() {
    const navigate = useNavigate()

    const { customers } = useContext(customersContext)

  return (
    <>
        <button onClick={() => {navigate('/addCustomer')}}>Add customer</button>
        {customers?.map(customer => {
            return <CustomerCard customerEmail={customer.email}/>
        })}

        
        <button onClick={() => navigate('/dashboard')}>Dashboard</button>
    </>
  )
}

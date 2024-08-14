import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { customersContext } from '../Contexts/customersContext'
import { leftCustomersContext } from '../Contexts/leftCustomersContext'

export default function CustomerCard({customerEmail}) {
    const navigate = useNavigate()

    const { customers, setCustomers } = useContext(customersContext)
    const { leftCustomers, setLeftCustomers } = useContext(leftCustomersContext)

    const customer = customers?.filter(customer => customer.email == customerEmail)

    function editCard(){
        navigate('/editCustomerCard',
            {
                state: {
                    fullName: customer[0]?.fullName,
                    email: customer[0]?.email,
                    customerCompany: customer[0]?.customerCompany,
                    memberType: customer[0]?.memberType,
                    planStart: customer[0]?.planStart,
                    planEnd: customer[0]?.planEnd
                }
            }
        )
    }

    //////////////////////////////////////////////////////////////////
    ////////cheack why gives wrong month and if its always the case
    //////////////////////////////////////////////////////////////////
    function deleteCard(){
        let customersAfterDeletion = customers?.filter(customer => customer?.email != customerEmail)
        const date = new Date()
        let month = date.getMonth() + 1 //gives wrong month without the +1
        let year = date.getFullYear()

        const newLeftCustomer = {
            month,
            year
        }
        console.log(month);
        leftCustomers.push(newLeftCustomer)
        // setLeftCustomers([...leftCustomers, newLeftCustomer])
        console.log(leftCustomers);
        setCustomers([...customersAfterDeletion])
        //update DB of deletion
    }
    
    return (
        <div style={{border: '1px solid black'}}>
        {customer?.map(c => {
            return(
                <div>
                    <h3>{c.fullName}</h3>
                    <p>{c.email}</p>
                    <p>{c.customerCompany}</p>
                    <p>{c.memberType}</p>
                    <p>{c.planStart}</p>
                    <p>{c.planEnd}</p>
                </div>
            )
        })}
        {/* <Link to={'/editCustomerCard'}>Edit</Link> */}
        <button onClick={() => editCard(customer[0])}>Edit</button>
        <button onClick={deleteCard}>Delete</button>
    </div>
  )
}

import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { customersContext } from '../Contexts/customersContext'

export default function AddCustomer() {
    const navigate = useNavigate()
    
    const { customers, setCustomers } = useContext(customersContext)

    const { state } = useLocation()

    function addCustomer(e){
        e.preventDefault() // prevent screen refresh and loss of data..
        const fullName = e.target.fullName.value
        const email = e.target.email.value
        const customerCompany = e.target.customerCompany.value
        const memberType = e.target.memberType.value
        const planStart = e.target.planStart.value
        const planEnd = e.target.planEnd.value

        const newCustomer = {
            fullName,
            email,
            customerCompany,
            memberType,
            planStart,
            planEnd
        }

        setCustomers([...customers, newCustomer])

        navigate('/customers')
    }

  return (
    <div>
        <form onSubmit={addCustomer}>
                <span>
                    <label htmlFor="fullName" >
                        Customers full name: 
                    </label>
                    <input id="fullName" type="text" defaultValue={state?.fullName}/>
                </span>
                <br />
                <span>
                    <label htmlFor="email" >
                        Please fill in your email: 
                    </label>
                    <input id="email" type="text" defaultValue={state?.email}/>
                </span>
                <br />
                <span>
                    <label htmlFor="customerCompany" >
                        Customer company: 
                    </label>
                    <input id="customerCompany" type='text' defaultValue={state?.customerCompany}/>
                </span>
                <br />
                <span>
                    <label htmlFor="memberType" >
                        Member type: 
                    </label>
                    <input id="memberType" type="text" />
                </span>
                <br />
                <span>
                    <label htmlFor="planStart" >
                        Customer plan start date: 
                    </label>
                    <input id="planStart" type="date" min='2020-01-01' max='2100-12-31'/>
                </span>
                <br />
                <span>
                    <label htmlFor="planEnd" >
                        Customer plan end date: 
                    </label>
                    <input id="planEnd" type="date" min='2020-01-01' max='2100-12-31'/>
                </span>
                <br />
                <button>
                    Add customer
                </button>
            </form>
    </div>
  )
}

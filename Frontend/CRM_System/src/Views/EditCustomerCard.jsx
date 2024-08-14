import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { customersContext } from '../Contexts/customersContext'


export default function EditCustomerCard() {
    const navigate = useNavigate()

    const { customers, setCustomers } = useContext(customersContext)

    const { state } = useLocation()

    let startDay = ((JSON.stringify(state.planStart))?.split('.')[0])?.slice(1)
    let startMonth = (JSON.stringify(state.planStart))?.split('.')[1]
    let startYear = ((JSON.stringify(state.planStart))?.split('.')[2])?.slice(0, -1)

    let endDay = ((JSON.stringify(state.planEnd))?.split('.')[0])?.slice(1)
    let endMonth = (JSON.stringify(state.planEnd))?.split('.')[1]
    let endYear = ((JSON.stringify(state.planEnd))?.split('.')[2])?.slice(0, -1)

    function saveChanges(e){
        e.preventDefault() // prevent screen refresh and loss of data..
        const fullName = e.target.fullName?.value
        const email = e.target.email?.value
        const customerCompany = e.target.customerCompany?.value
        const memberType = e.target.memberType?.value
        const planStart = e.target.planStart?.value
        const planEnd = e.target.planEnd?.value
        
        const changedCustomer = {
            fullName,
            email,
            customerCompany,
            memberType,
            planStart,
            planEnd
        }

        const tmp = customers.filter(customer => customer.email != state.email)
        setCustomers([...tmp, changedCustomer])
        //edit the DB record and customers array
        
        navigate('/customers')
    }

  return (
    <div>
        <form onSubmit={saveChanges}>
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
                    <input id="memberType" type="text" defaultValue={state?.memberType}/>
                </span>
                <br />
                <span>
                    <label htmlFor="planStart" >
                        Customer plan start date: 
                    </label>
                    <input id="planStart" type="date" min='2020-01-01' max='2100-12-31' 
                    defaultValue={startYear + '-' + startMonth + '-' + startDay}/>
                </span>
                <br />
                <span>
                    <label htmlFor="planEnd" >
                        Customer plan end date: 
                    </label>
                    <input id="planEnd" type="date" min='2020-01-01' max='2100-12-31' 
                    defaultValue={endYear + '-' + endMonth + '-' + endDay}/>
                </span>
                <br />
                {/* save changes in DB and customers array state */}
                <button>
                    Save
                </button>
            </form>
    </div>
  )
}

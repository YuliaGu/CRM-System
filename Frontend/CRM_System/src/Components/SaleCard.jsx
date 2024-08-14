import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { salesContext } from '../Contexts/salesContext'
import { closedSalesContext } from '../Contexts/closedSalesContext'

export default function SaleCard({saleEmail}) {
    const navigate = useNavigate()

    const { sales, setSales } = useContext(salesContext)
    const { closedSales, setClosedSales } = useContext(closedSalesContext)

    const [isMeeting, setIsMeeting] = useState(false)

    const sale = sales?.filter(sale => sale.email == saleEmail)

    // function editCard(){
    //     navigate('/editCustomerCard',
    //         {
    //             state: {
    //                 fullName: customer[0]?.fullName,
    //                 email: customer[0]?.email,
    //                 customerCompany: customer[0]?.customerCompany,
    //                 memberType: customer[0]?.memberType,
    //                 planStart: customer[0]?.planStart,
    //                 planEnd: customer[0]?.planEnd
    //             }
    //         }
    //     )
    // }

    //////////////////////////////////////////////////////////////////
    ////////cheack why gives wrong month and if its always the case
    //////////////////////////////////////////////////////////////////
    function checkStage(e){
        if(e.target.id == 'close'){
            const date = new Date()
            let month = date.getMonth()
            let year = date.getFullYear()

            const newClosedSale = {
                month,
                year
            }
            closedSales.push(newClosedSale) 
            // setClosedSales([...closedSales, newClosedSale]) 

            deleteCard()
            navigate('/addcustomer',
                {
                    state: {
                        fullName: sale[0]?.fullName,
                        email: sale[0]?.email,
                        customerCompany: sale[0]?.leadCompany,
                    }
                }
            )
        }
        if(e.target.id == 'setMeeting'){
            setIsMeeting(true)
        }

        e.target.checked = true
        e.target.disabled = true
    }

    function save(){
        
    }

    function deleteCard(){
        let salesAfterDeletion = sales?.filter(sale => sale?.email != saleEmail)
        setSales([...salesAfterDeletion])
        //update DB of deletion
    }

    return (
        <div>
            {sale?.map(s => {
                return(
                    <div>
                        <h3>{s.fullName}</h3>
                        <h4>{s.leadCompany}</h4>
                        <p>{s.email}</p>
                    </div>
                )
            })}
            <input type="checkbox" id="makeContact" onChange={checkStage}/>
            <label htmlFor="makeContact">Make contact</label>
            <br />
            <input type="checkbox" id="setMeeting" onChange={checkStage}/>
            <label htmlFor="setMeeting">Set Meeting</label>
            <br />
            {isMeeting &&
                    <>
                        <p>Meeting date</p>
                        <input type="date" />
                        <br />  
                        <br />
                    </>
            }
            <input type="checkbox" id="present" onChange={checkStage}/>
            <label htmlFor="present">Present</label>
            <br />
            <input type="checkbox" id="makeAnOffer" onChange={checkStage}/>
            <label htmlFor="makeAnOffer">Make an offer</label>
            <br />
            <input type="checkbox" id="close" onChange={checkStage}/>
            <label htmlFor="close">Close</label>
            <br />
            <button onClick={save}>Save</button>
            <button onClick={deleteCard}>Delete</button>
        </div>
    )
}

import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { salesContext } from '../Contexts/salesContext'

export default function AddSale() {
    const navigate = useNavigate()

    const { sales, setSales } = useContext(salesContext)

    function addSale(e){
        e.preventDefault() // prevent screen refresh and loss of data..
        const fullName = e.target.fullName.value
        const email = e.target.email.value
        const leadCompany = e.target.leadCompany.value

        const newSale = {
            fullName,
            email,
            leadCompany,
        }

        setSales([...sales, newSale])

        navigate('/sales')
    }

    return (
        <div>
            <form onSubmit={addSale}>
                <span>
                    <label htmlFor="fullName" >
                        Lead full name: 
                    </label>
                    <input id="fullName" type="text" />
                </span>
                <br />
                <span>
                    <label htmlFor="email" >
                        Lead email: 
                    </label>
                    <input id="email" type="text" />
                </span>
                <br />
                <span>
                    <label htmlFor="leadCompany" >
                        Lead company: 
                    </label>
                    <input id="leadCompany" type='text'/>
                </span>
                <br />
                <button>
                    Add sale
                </button>
            </form>
        </div>
    )
}

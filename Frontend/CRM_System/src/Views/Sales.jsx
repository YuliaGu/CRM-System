import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { salesContext } from '../Contexts/salesContext'
import SaleCard from '../Components/SaleCard'

export default function Sales() {
    const navigate = useNavigate()

    const { sales } = useContext(salesContext)

    return (
        <>
            <button onClick={() => {navigate('/addSale')}}>Add sale</button>
            {sales?.map(sale => {
                return <SaleCard saleEmail={sale.email}/>
            })}
        </>
  )
}

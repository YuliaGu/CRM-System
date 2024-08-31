import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BarChartJoindLeft from '../Components/BarChartJoindLeft'


export default function Dashboard() {
    const navigate = useNavigate()

    return (
        <div>
            <BarChartJoindLeft/>

            <button onClick={() => {navigate('/customers')}}>Customers</button>
            <button onClick={() => {navigate('/sales')}}>Sales</button>
            <button onClick={() => {navigate('/tasks')}}>Tasks</button>
        </div>
    )
}

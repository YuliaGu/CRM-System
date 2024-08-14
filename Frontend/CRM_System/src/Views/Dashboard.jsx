import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { closedSalesContext } from '../Contexts/closedSalesContext'
import { leftCustomersContext } from '../Contexts/leftCustomersContext'

export default function Dashboard() {
    const navigate = useNavigate()
    
    const { closedSales } = useContext(closedSalesContext)
    const { leftCustomers } = useContext(leftCustomersContext)
    
    const [data, setData] = useState([
        {month: 'Jan', joind: 0, left: 0},
        {month: 'Feb', joind: 0, left: 0},
        {month: 'Mar', joind: 0, left: 0},
        {month: 'Apr', joind: 0, left: 0},
        {month: 'May', joind: 0, left: 0},
        {month: 'Jun', joind: 0, left: 0},
        {month: 'Jul', joind: 0, left: 0},
        {month: 'Aug', joind: 0, left: 0},
        {month: 'Sep', joind: 0, left: 0},
        {month: 'Oct', joind: 0, left: 0},
        {month: 'Nov', joind: 0, left: 0},
        {month: 'Dec', joind: 0, left: 0}
    ])
    const [dataMax, setdataMax] = useState(10)
    
    function setDataJoined(){
        for(let i = 0; i < closedSales.length; i++){  
            if(closedSales[i].month == 1)
                data[0].joind++
            if(closedSales[i].month == 2)
                data[1].joind++
            if(closedSales[i].month == 3)
                data[2].joind++
            if(closedSales[i].month == 4)
                data[3].joind++
            if(closedSales[i].month == 5)
                data[4].joind++
            if(closedSales[i].month == 6)
                data[5].joind++
            if(closedSales[i].month == 7)
                data[6].joind++
            if(closedSales[i].month == 8)
                data[7].joind++
            if(closedSales[i].month == 9)
                data[8].joind++
            if(closedSales[i].month == 10)
                data[9].joind++
            if(closedSales[i].month == 11)
                data[10].joind++
            if(closedSales[i].month == 12)
                data[11].joind++
        }
    }
    
    function setDataLeft(){
        for(let i = 0; i < leftCustomers.length; i++){
            if(leftCustomers[i].month == 1)
                data[0].left++
            if(leftCustomers[i].month == 2)
                data[1].left++
            if(leftCustomers[i].month == 3)
                data[2].left++
            if(leftCustomers[i].month == 4)
                data[3].left++
            if(leftCustomers[i].month == 5)
                data[4].left++
            if(leftCustomers[i].month == 6)
                data[5].left++
            if(leftCustomers[i].month == 7)
                data[6].left++
            if(leftCustomers[i].month == 8)
                data[7].left++
            if(leftCustomers[i].month == 9)
                data[8].left++
            if(leftCustomers[i].month == 10)
                data[9].left++
            if(leftCustomers[i].month == 11)
                data[10].left++
            if(leftCustomers[i].month == 12)
                data[11].left++
        }
    }
    
    setDataJoined()
    setDataLeft()
    
    function calculatedataMax(){
        for(let i = 0; i < data.length; i++){
            if(data[i].joind > dataMax)
                setdataMax(data[i].joind )
            if(data[i].left > dataMax)
                setdataMax(data[i].left)
        }
    }

    useEffect(() =>{
        calculatedataMax()
    },[data])
    console.log(dataMax);

    function CustomTooltip({ payload, label, active }) {
        if (active) {
          return (
            <div className="custom-tooltip">
                <p className="intro">{label}</p>
                <p className="label">Customers joind: {`${payload[0].value}`}</p>
                <p className="label">Customers left: {`${payload[1].value}`}</p>
            </div>
          );
        }
        return null;
      }

    return (
        <div>
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="month"/>
                <YAxis ticks={[0, dataMax]}/>
                <Tooltip content={<CustomTooltip />}/>
                <Legend />
                {/* <Bar dataKey="joind" barSize={30} fill="#8884d8" stackId="stack"/> */}
                <Bar dataKey="joind"  fill="#8884d8" />
                <Bar dataKey="left"  fill="#82ca9d" />
            </BarChart>

            <button onClick={() => {navigate('/customers')}}>Customers</button>
            <button onClick={() => {navigate('/sales')}}>Sales</button>
            <button onClick={() => {navigate('/tasks')}}>Tasks</button>
        </div>
    )
}

import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { tasksContext } from '../Contexts/tasksContext'

export default function AddTask() {
    const navigate = useNavigate()

    const selectRef = useRef()
    const dateRef = useRef()
    const timeRef = useRef()

    const { tasks, setTasks } = useContext(tasksContext)

    const [tasksList, setTasksList] = useState([
        'Go to the gym',
        'Go to the doctor',
        'Groucery shopping'
    ])

    const [show, setShow] = useState(false)
    const [isGym, setIsGym] = useState(false)
    const [isDoctor, setIsDoctor] = useState(false)
    const [isGroucery, setIsGroucery] = useState(false)

    function display(){
        setShow(true)
        if(selectRef.current?.value == 'Go to the gym')
            setIsGym(true)
        if(selectRef.current?.value == 'Go to the doctor')
            setIsDoctor(true)
        if(selectRef.current?.value == 'Groucery shopping')
            setIsGroucery(true)
    }

    function addTask(){
        const newTask = {
            taskName: selectRef.current?.value,
            taskDate: dateRef.current?.value,
            taskTime: timeRef.current?.value
        }
        setTasks([...tasks, newTask])

        setShow(false)
        if(selectRef.current?.value == 'Go to the gym')
            setIsGym(false)
        if(selectRef.current?.value == 'Go to the doctor')
            setIsDoctor(false)
        if(selectRef.current?.value == 'Groucery shopping')
            setIsGroucery(false)

        navigate('/tasks')
    }

    return (
        <div>
            <select ref={selectRef} name="tasksList" id="tasksList" onChange={display}>
                <option value="selectTask" selected disabled>Select Task</option>
                {tasksList?.map((task, index) => (
                    <option key={index} value={task}>{task}</option>
                ))}
            </select>
            {isGym && <p>Go to the gym</p>}
            {isDoctor && <p>Go to the doctor</p>}
            {isGroucery && <p>Groucery Shopping</p>}
            {show &&
                <>  
                    <input ref={dateRef} type="date" id='date'/>
                    <br />
                    <input ref={timeRef} type="time" id='time'/>
                    <br />
                    <button onClick={addTask}>Add</button>
                </>
            }
        </div>
    )
}

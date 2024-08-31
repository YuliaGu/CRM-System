import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { tasksContext } from '../Contexts/tasksContext'
import TaskCard from '../Components/TaskCard'


export default function Tasks() {
    const navigate = useNavigate()

    const { tasks } = useContext(tasksContext)

    return (
        <>
            <button onClick={() => {navigate('/addTask')}}>Add task</button>
            {tasks?.map(task => {
                return <TaskCard taskDate={task.taskDate} taskTime={task.taskTime}/>
            })}
        </>
  )
}
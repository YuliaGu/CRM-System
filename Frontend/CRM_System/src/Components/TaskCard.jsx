import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { tasksContext } from '../Contexts/tasksContext'

export default function TaskCard({taskDate, taskTime}) {
  const navigate = useNavigate()

  const { tasks, setTasks } = useContext(tasksContext)

  // const [isMeeting, setIsMeeting] = useState(false)

  const task = tasks?.filter(task => task.taskDate == taskDate && task.taskTime == taskTime)
  return (
    <div>
      {task?.map(t => {                
        return(
          <div>
            <h3>{t.taskName}</h3>
            <h4>{t.taskDate}</h4>
            <p>{t.taskTime}</p>
          </div>
        )})}
    </div>
  )
}

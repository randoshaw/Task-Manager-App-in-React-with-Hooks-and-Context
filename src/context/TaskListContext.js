import React, {createContext, useState} from 'react'

export const TaskListContext = createContext()

const TaskListContextProvider = () => {
    const [tasks, setTasks] = useState([
        {task: 'Think of a task', id: 1},
        {task: 'Write down the task', id: 2},
        {task: 'DO the task', id: 3}
    ])

    return <div>Task List Context</div>
}

export default TaskListContextProvider

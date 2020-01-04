import React, {createContext, useState} from 'react'

export const TaskListContext = createContext()

const TaskListContextProvider = ({children}) => {
    const [state, setState] = useState({ tasks:[
        {title: 'Think of a task', id: 1},
        {title: 'Write down the task', id: 2},
        {title: 'DO the task', id: 3}
    ]})

    return(
    <TaskListContext.Provider value = {{ state }}>
    {children}
    </TaskListContext.Provider>
    )
}

export default TaskListContextProvider

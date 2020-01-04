import React, {useContext} from 'react' //Type in 'rafce'
import {TaskListContext} from '../context/TaskListContext'
import Task from './Task'

const TaskList = () => {
    const { state } = useContext(TaskListContext)
    return (
        <div>
            <ul className='list'>
                {state.tasks.map((taskys) => {
                    return <Task tasky={taskys} />
                })}
            </ul>
        </div>
    )
}

export default TaskList


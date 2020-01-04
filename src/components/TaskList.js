import React, {useContext} from 'react' //Type in 'rafce'
import {taskListContext} from '../context/TaskListContext'

const TaskList = () => {
    const { tasks } = useContext(taskListContext)
    return (
        <div>
            <ul className='list'>
                {tasks.map((task) => {
                    return
                })}
            </ul>
        </div>
    )
}

export default TaskList


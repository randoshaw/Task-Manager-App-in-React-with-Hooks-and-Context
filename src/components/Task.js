import React from 'react'

const Task = ({tasky,children}) => {
    return (
        <li className="list-item">
            <span>{tasky.title}</span>
            <div>
                <button className="btn-delete task-btn">
                    <i className="fas fa-trash"></i>
                </button>
                <button className="btn-edit task-btn">
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    )
}

export default Task

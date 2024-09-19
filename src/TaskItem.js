import React from 'react'

function TaskItem({task, setTaskStatus, removeList}) {
  return (
    <li key={task.id} className={task.status ? "done" : ""}>
        <span className="label">{task.title}</span>
        <div className="actions">
            <input type="checkbox" className="btn-action btn-action-done" checked={task.status} onChange={(e) => setTaskStatus(e, task.id)}  />
            <button onClick={(e) => removeList(e, task.id)} className="btn-action btn-action-delete">X</button>
        </div>
    </li>
  )
}

export default TaskItem
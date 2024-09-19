import React, { useState } from "react";
import Header from "./Header";
import "./App.css";
import TaskList from "./TaskList";
import AddTaskForm from "./AddTaskForm";

function App() {
    const [tasks, setTasks] = useState([
        { id: "task_1", title: "Learn JS", status: 0 },
        { id: "task_2", title: "Code a Todo List", status: 0 }, 
    ]);
    const [showIncomplete, setShowIncomplete] = useState(false);
    const [newTask, setNewTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask) {
            const task = {
                id: Date.now(),
                title: newTask,
                status: 0
            };
            setTasks([...tasks, task]);
            setNewTask("");
        }
    }
    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }
    const handleShowIncomplete = (e) => {
        setShowIncomplete(e.target.checked)
    }
    const setTaskStatus = (e, taskId) => {
        const notEqualTasks = tasks.filter(task => task.id !== taskId)
        let target = tasks.find(task => task.id === taskId)
        target.status = target.status === 0 ? 1 : 0
        setTasks([...notEqualTasks, target]);
    }
    const removeList = (e, taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }
    
    return (
        <div className="container">
            <Header />
            <TaskList tasks={tasks} showIncomplete={showIncomplete} setTaskStatus={setTaskStatus} removeList={removeList} handleShowIncomplete={handleShowIncomplete} />
            <AddTaskForm handleSubmit={handleSubmit} newTask={newTask} handleInputChange={handleInputChange} />
        </div>
    );
}

export default App;
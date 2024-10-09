import React, { useState,useMemo} from "react"

function ToDoList(){
    const [tasks, setTasks] = useState(["Ka akkk","rfvffv"]);
    const [newtask , setNewTask ]= useState("");
        
        function handleInputChange(event){
            setNewTask(event.target.value);
        }

        function addTask(){
            if(newtask.trim() !== ""){
                setTasks(t => [...t,newtask]);
                setNewTask('');
            }
        }

        function deleteTask(index){
            const updatedTasks = tasks.filter((_,i) => i !== index);
            
            setTasks(updatedTasks);
           
        }
        
        function moveTaskUp(index){
            if(index >0){
                const updatedTask = [...tasks];
                [updatedTask[index],updatedTask[index-1]]=
                [updatedTask[index-1],updatedTask[index]];
                setTasks(updatedTask);
            }
        }

        function moveTaskDown(index){
            
        }
        return(<div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
            <input type="text" placeholder="Enter a task" value={newtask} onChange={handleInputChange} />
            <button className="add-btn"
            onClick={addTask}
            >Add
            </button>
            </div>
            <ol>
            {tasks.map((task, index) =>
            <li key={index}> 
            <span className="text">{task}</span>
            <button className="delete-button" onClick={deleteTask(index)}> Delete</button>
            <button className="move-button" onClick={moveTaskUp(index)}> MoveUp</button>
            <button className="move-button" onClick={moveTaskDown(index)}> MoveDown</button>

            </li>

            )}</ol>
            </div>);
}


export default ToDoList;
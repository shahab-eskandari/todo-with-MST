import { observer } from "mobx-react-lite";
import { useState } from "react";

export const AddTask = observer((props)=>{
    const [taskTitle, setTaskTitle] = useState<string>('');
    return(
    <div>
        <input 
          type="text"
          placeholder="Add a task"
          value={taskTitle} 
          onChange={(e) => setTaskTitle(e.target.value)} 
        />
        <button
          onClick={() => {
            props.store.addTodo(Math.floor(Math.random() * 100), taskTitle);
            setTaskTitle("");
          }}
        >
            Add Task
        </button>
    </div>  
    )
})
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { UserPickerView } from "./userPickerView";

export const TaskView = observer((props) => {
  const [taskTitle, setTaskTitle] = useState<string>(props.todo.title);
  
  return(
    <div>
      <input 
        type="checkbox" 
        checked={props.todo.done} 
        onChange={() => props.todo.toggle()} 
      />
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <UserPickerView
        user={props.todo.user}
        store={props.store}
        onChange={(userId)=>props.todo.setUser(userId)}
      />
    </div>
  )
})

type TaskViewPropTypes = {
  title: string
  done: boolean
  toggle: ()=>void
}
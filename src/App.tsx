import { AddTask } from "./components/AddTask";
import { TaskView } from "./components/taskView";
import { store } from "./state/rootStore";
import { observer } from "mobx-react-lite";
import { TodoCounterView } from "./components/taskCounterView";

const App = observer (()=> {
  
  return (
    <>
      <AddTask store={store}/>
      {Array.from(store.todos.values()).map((todo) => (
        <TaskView
          key={todo.id}
          todo={todo}
          store={store}
        />  
        ))
      }
      <TodoCounterView store={store}/>
    </>
  )
})

export default App

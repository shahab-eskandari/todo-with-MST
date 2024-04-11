import { onSnapshot, types } from "mobx-state-tree" // alternatively, `import { t } from "mobx-state-tree"`

const Todo = types
  .model({
    id: types.optional(types.number, 1),
    name: types.optional(types.string, ""),
    done: types.optional(types.boolean, false),
    user: types.maybe(types.reference(types.late(()=>User)))
  })
  .actions((self)=>({
    setName(newName: string){
      self.name = newName
    },
    setUser(user){
      if(user===""){
        self.user = undefined;
      }else{
        self.user = user;
      }
    },
    toggle(){
      self.done = !self.done
    }
  }))

const User = types.model({
  id: types.identifier,
  name: types.optional(types.string,""),
})

const RootStore = types
  .model({
    users: types.map(User),
    todos: types.map(Todo)
  })
  .views((self)=>({
    get pendingCount(){
      return Array.from(self.todos.values()).filter((todo)=>!todo.done).length
    },
    get completedCount(){
      return Array.from(self.todos.values()).filter((todo)=>todo.done).length
    }
  }))
  .actions((self)=>({
    addTodo(id: number, name: string){
      self.todos.set(id, Todo.create({id, name}))
    },
  }))
  
  export const store = RootStore.create({
    users: {
      1: {
        id:"1",
        name:"Shahab",
      },
      2: {
        id:"2",
        name:"Simon"
      }
    } // users is not required really since arrays and maps are optional by default since MST3
  })

  onSnapshot(store, snapshot=>console.log(snapshot));
  //console.log("store type:", typeof(store));
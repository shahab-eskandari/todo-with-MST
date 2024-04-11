import { observer } from "mobx-react-lite"

export const UserPickerView = observer((props) => (
    <select 
      value={props.user ? props.user.id : ""} 
      onChange={(e) => props.onChange(e.target.value)}
    >
      <option value="">-none-</option>
      {Array.from(props.store.users.values()).map((user) => (
        <option 
          key={user.id}
          value={user.id}
        >
          {user.name}
        </option>
      ))}
    </select>
  ))
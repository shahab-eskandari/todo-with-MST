import { observer } from "mobx-react-lite"

export const TodoCounterView = observer((props) => (
    <div>
      {props.store.pendingCount} pending, {props.store.completedCount} completed
    </div>
  ))
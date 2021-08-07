import './index.css'

const TodoItems = props => {
  const {item, deleteTodo} = props

  const onDeleteTodo = () => {
    deleteTodo(item.id)
  }
  return (
    <div className="item">
      <input type="checkbox" htmlFor="check" className="checkbox-input" />
      <li className="label-container">
        <label id="check" className="checkbox-label">
          {item.todo}
        </label>

        <button className="btn" type="button" onClick={onDeleteTodo}>
          Delete
        </button>
      </li>
    </div>
  )
}

export default TodoItems

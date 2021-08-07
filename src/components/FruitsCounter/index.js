// Write your code here
import {Component} from 'react'

import TodoItems from '../TodoItems/index'

import './index.css'

class FruitsCounter extends Component {
  state = {inputItem: '', todoItem: []}

  componentDidMount() {
    const todo = localStorage.getItem('todoList')
    const data = JSON.parse(todo)
    console.log(todo)

    this.setState({todoItem: data})
  }

  addItem = event => {
    this.setState({inputItem: event.target.value})
  }

  addTodo = () => {
    const {inputItem, todoItem} = this.state
    if (inputItem !== '') {
      const data = {id: todoItem.length, todo: inputItem}
      todoItem.push(data)
      // this.setState({todoItem: todoItem})
      const dataitem = todoItem
      this.setState({todoItem: dataitem})
      this.setState({inputItem: ''})
    } else {
      Window.alert('Enter the valid text')
    }
  }

  deleteTodo = id => {
    const {todoItem} = this.state
    const updatedTodosList = todoItem.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todoItem: updatedTodosList,
    })
    console.log(todoItem)
  }

  saveLocal = () => {
    const {todoItem} = this.state
    localStorage.setItem('todoList', JSON.stringify(todoItem))
    console.log('save')
  }

  render() {
    const {inputItem, todoItem} = this.state
    console.log('hhhh')
    return (
      <div className="bg">
        <div className="bgH">
          <h1 className="head">Todos</h1>
        </div>
        <div className="bg1">
          <h1 className="h11">Create Tasks</h1>
          <input
            className="input"
            type="text"
            placeholder="What needs to done"
            value={inputItem}
            onChange={this.addItem}
          />

          <button type="button" className="btn" onClick={this.addTodo}>
            Add
          </button>

          <div className="resultDiv">
            <h1 className="todo-items-heading">
              MY <span className="todo-items-heading-subpart">Tasks</span>
            </h1>
            <ul className="todo-items-container">
              {todoItem.map(ite => (
                <TodoItems
                  key={ite.id}
                  item={ite}
                  deleteTodo={this.deleteTodo}
                />
              ))}
            </ul>
            <button type="button" className="btn btn1" onClick={this.saveLocal}>
              Save
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

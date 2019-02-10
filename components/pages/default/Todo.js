import React, { useState } from 'react'
import { createUseConnect } from 'react-use-redux'

import TodoList from 'components/pages/default/TodoList'
import {
  selectors as todoSelectors,
  actions as todoActions,
} from 'reducers/todo'

function Todo() {
  const { todos, addTodo } = useConnect()
  const { text, handleChange, handleSubmitIfEnterPressed } = useInputForm(
    addTodo
  )

  return (
    <div>
      <input
        value={text}
        onChange={handleChange}
        onKeyPress={handleSubmitIfEnterPressed}
      />
      <TodoList list={todos} />
    </div>
  )
}

/**
 * hooks
 */

function useInputForm(action) {
  const [text, useText] = useState('')

  const handleChange = event => {
    event.preventDefault()
    useText(event.target.value)
  }

  const handleSubmitIfEnterPressed = event => {
    if (pressedEnter(event)) {
      action({ text })
      useText('')
    }
  }

  return {
    text,
    handleChange,
    handleSubmitIfEnterPressed,
  }
}

/**redux */
const mapStateToProps = ({ todo }) => {
  return {
    todos: todoSelectors.getTodos(todo),
    count: todoSelectors.getTodosCount(todo),
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(todoActions.add(text)),
})

const useConnect = createUseConnect(mapStateToProps, mapDispatchToProps)

/**
 * helpers
 */

const pressedEnter = event => event.key === 'Enter'

export default Todo

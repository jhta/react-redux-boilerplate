import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { StoreContext, createUseConnect } from 'react-use-redux'
import { color, space } from 'styled-system'
import theme, { useTheme } from 'theme'
import store from 'store'
import { selectors as todoSelectors, actions as todoActions } from 'reducers/todo'

const Box = styled.div`
  ${color}
  ${space}
`

const Index = () => (
  <ThemeProvider theme={theme}>
    <StoreContext.Provider value={store}>
      <Box bg="tomato" color="white" p={[4]}>
        <p>Hello World!</p>
        <Todo />
      </Box>
    </StoreContext.Provider>
  </ThemeProvider>
)

function useInputForm(defaultList = [], action) {
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

const pressedEnter = event => event.key === 'Enter'

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
function Todo() {
  const { todos, addTodo } = useConnect()

  const { text, handleChange, handleSubmitIfEnterPressed } = useInputForm(todos, addTodo)
  return (
    <div>
      <input value={text} onChange={handleChange} onKeyPress={handleSubmitIfEnterPressed} />
      <TodoList list={todos} />
    </div>
  )
}

function TodoList({ list }) {
  const textColor = useTheme('colors.blue')
  return (
    <List>
      {list.map((item, index) => (
        <Item color={textColor} key={index} {...item} />
      ))}
    </List>
  )
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem;
  border: 1px solid black;
`

const StyledItem = styled.li`
  border: 1px solid green;
  color: ${p => p.color};
`

function Item({ text }) {
  return (
    <StyledItem>
      <p>{text}</p>
    </StyledItem>
  )
}
export default Index

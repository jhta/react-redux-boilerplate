import React, { useState, useContext } from 'react'
import styled, { ThemeProvider, ThemeContext } from 'styled-components'
import { color, space } from 'styled-system'
import { get } from 'lodash'

const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  space: [
    // margin and padding
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
  ],
  colors: {
    blue: '#07c',
    red: '#e10',
  },
}

const Box = styled.div`
  ${color}
  ${space}
`

function useTheme(query = '', defaultValue = null) {
  const localTheme = useContext(ThemeContext)
  return get(localTheme, query, defaultValue)
}

const getFromTheme = () => useTheme

const Index = () => (
  <ThemeProvider theme={theme}>
    <Box bg="tomato" color="white" p={[4]}>
      <p>Hello World!</p>
      <Todo />
    </Box>
  </ThemeProvider>
)

function useInputForm(defaultList = []) {
  const [list, useList] = useState(defaultList)
  const [text, useText] = useState('')

  const handleChange = event => {
    event.preventDefault()
    useText(event.target.value)
  }

  const handleSubmitIfEnterPressed = event => {
    if (pressedEnter(event)) {
      useList([...list, { text }])
      useText('')
    }
  }

  return {
    text,
    list,
    handleChange,
    handleSubmitIfEnterPressed,
  }
}

const pressedEnter = event => event.key === 'Enter'

const defaultList = [{ text: 'Cat' }, { text: 'Dog' }, { text: 'Bug' }]

function Todo() {
  const { text, list, handleChange, handleSubmitIfEnterPressed } = useInputForm(defaultList)

  return (
    <div>
      <input value={text} onChange={handleChange} onKeyPress={handleSubmitIfEnterPressed} />
      <TodoList list={list} />
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

import React from 'react'
import styled from 'styled-components'
import { space, border, borderColor } from 'styled-system'

import useTheme from 'react-use-theme'

import Item from 'components/pages/default/TodoItem'

function TodoList({ list }) {
  const textColor = useTheme('colors.blue')
  return (
    <List m={0} p={3} border={1} borderColor="blue">
      {list.map((item, index) => (
        <Item color={textColor} key={index} {...item} />
      ))}
    </List>
  )
}

const List = styled.ul`
  ${space}
  ${borderColor}
  ${border}
  list-style: none;
`

export default TodoList

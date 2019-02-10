import React from 'react'
import styled from 'styled-components'
import { space, borders, borderColor } from 'styled-system'

const StyledItem = styled.li`
  ${borderColor}
  ${borders}
`

function Item({ text }) {
  return (
    <StyledItem border={1} borderColor="blue">
      <p>{text}</p>
    </StyledItem>
  )
}

export default Item

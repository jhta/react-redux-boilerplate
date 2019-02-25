import React from 'react'
import { Box } from '@rebass/grid'

import {
  selectors as todoSelectors,
  actions as todoActions,
} from 'reducers/todo'
import { asPage } from 'lib'

import Todo from 'components/pages/default/Todo'

const Index = () => (
  <Box width={[1]} bg="tomato" color="white" p={[4]}>
    <p>Hello World!</p>
    <p>the current env is {process.env.TEST}</p>
    <Todo />
  </Box>
)

export default asPage(Index)

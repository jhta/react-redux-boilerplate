import { actions } from 'reducers/todo/actions'
import { handleActions } from 'redux-actions'
import { get } from 'lodash'

const initialState = { todos: [{ text: 'dragon' }, { text: 'turttle' }, { text: 'shark' }] }

const reducer = {
  [actions.add]: (state, action) => ({
    ...state,
    todos: [...state.todos, { text: get(action, 'payload.text', '') }],
  }),
}

export default handleActions(reducer, initialState)

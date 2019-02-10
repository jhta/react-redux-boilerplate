import { createAction } from 'redux-actions'

const namespace = 'TODO'
const types = {
  ADD: `${namespace}/ADD`,
}

export const actions = {
  add: createAction(types.ADD),
}

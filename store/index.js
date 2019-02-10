import todoReducer, { actions as todoActions, selectors as todoSelectors } from 'reducers/todo'
import { combineReducers, compose, createStore } from 'redux'

export const actions = {
  todo: todoActions,
}

export const selectors = {
  todo: todoSelectors,
}

const rootReducer = combineReducers({
  todo: todoReducer,
})

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
/* eslint-enable */

const store = createStore(rootReducer, composeEnhancers())
export default store

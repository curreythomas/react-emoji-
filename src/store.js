// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { merge, append } from 'ramda'
// import { ADD_EMOJI, SET_NEW_EMOJI, SET_EMOJIS} from './constants'
//
// const initialState = {
//   newemoji: '',
//   title: 'Emojis',
//   emojis: []
// }
//
// const rootReducer = (state = initialState, action) => {
//   if (action.type === 'ADD_EMOJI') {
//     return merge(state, {
//       newemoji: '',
//       emojis: append(action.payload, state.emojis)
//     })
//   }
//   if (action.type === 'SET_NEW_EMOJI') {
//     return merge(state, { newemoji: action.payload })
//   }
//   if (action.type === 'RESET_EMOJIS') {
//     return initialState
//   }
//   return state
// }
//
// export default createStore(rootReducer)

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { ADD_EMOJI, SET_NEW_EMOJI, SET_EMOJIS } from './constants'

import { cond, equals, always, T, append } from 'ramda'
export default createStore(
  combineReducers({
    emojis,
    newemoji,
    title
  }),
  applyMiddleware(thunk)
)

function title(state = 'Emojis', action) {
  return state
}

function emojis(state = [], action) {
  console.log('action', action)
  return cond([
    [
      equals(SET_EMOJIS),
      () => {
        return action.payload
      }
    ],
    [T, always(state)]
  ])(action.type)
}

function newemoji(state = '', action) {
  return cond([
    [equals(SET_EMOJIS), always('')],
    [
      equals(SET_NEW_EMOJI),
      () => {
        return action.payload
      }
    ],
    [T, always(state)]
  ])(action.type)
}

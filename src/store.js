import { createStore } from 'redux'
import { merge, append } from 'ramda'

const initialState = {
  newemoji: '',
  title: 'Emojis',
  emojis: ['slight_smile']
}

const rootReducer = (state = initialState, action) => {
  if (action.type === 'ADD_EMOJI') {
    return merge(state, {
      newemoji: '',
      emojis: append(action.payload, state.emojis)
    })
  }
  if (action.type === 'SET_NEW_EMOJI') {
    return merge(state, { newemoji: action.payload })
  }
  if (action.type === 'RESET_EMOJIS') {
    return initialState
  }
  return state
}

export default createStore(rootReducer)

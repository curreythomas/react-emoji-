import React from 'react'
import { emojify } from 'react-emojione'
import { Link } from 'react-router-dom'
import { map } from 'ramda'
import AddEmoji from '../components/add-emoji'
import ResetEmoji from '../components/reset-emoji'
import { ADD_EMOJI, SET_NEW_EMOJI } from '../constants'
import { addEmoji } from '../action-creators'

import { connect } from 'react-redux'

const li = emoji => (
  <Link to={`/${emoji}`}>
    <li className="list tc bb b--black pv3 mh6">
      {' '}
      {emojify(':' + emoji + ':')}{' '}
    </li>
  </Link>
)

const Home = ({ emojis, newemoji, setNewEmoji, addEmoji }) => (
  <div className="tc">
    <AddEmoji value={newemoji} onChange={setNewEmoji} onSubmit={addEmoji} />
    <ul className="pl0">{map(li, emojis)}</ul>
  </div>
)

const mapStateToProps = state => {
  return { emojis: state.emojis, newemoji: state.newemoji }
}

const mapActionsToProps = (dispatch, getState) => {
  return {
    setNewEmoji: event => {
      dispatch({ type: 'SET_NEW_EMOJI', payload: event.target.value })
    },
    addEmoji: emoji => {
      dispatch(addEmoji(emoji))
    },
    resetEmojis: event => {
      dispatch({ type: 'RESET_EMOJIS' })
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Home)

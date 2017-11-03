import React from 'react'
import { emojify } from 'react-emojione'
import { Link } from 'react-router-dom'
import { map } from 'ramda'
import AddEmoji from '../components/add-emoji'
import ResetEmoji from '../components/reset-emoji'

import { connect } from 'react-redux'

const li = emoji => <li className="list tc"> {emojify(':' + emoji + ':')} </li>

const Home = props => (
  <div className="tc br2">
    <AddEmoji
      value={props.newemoji}
      onChange={props.setNewEmoji}
      onSubmit={props.addEmoji}
    />
    <ResetEmoji onSubmit={props.resetEmojis} />
    <ul>{map(li, props.emojis)}</ul>
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
      dispatch({ type: 'ADD_EMOJI', payload: emoji })
    },
    resetEmojis: event => {
      dispatch({ type: 'RESET_EMOJIS' })
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Home)

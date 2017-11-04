import React from 'react'
import { emojify } from 'react-emojione'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeEmoji } from '../action-creators'
const Show = props => {
  return (
    <div className="min-height h5 flex flex-column items-center justify-around">
      <div className="animated lightSpeedIn">
        {emojify(':' + props.match.params.emoji + ':')}
      </div>
      <button
        className="f6 link dim br3 ph3 pv2 ba b--near-black mb2 dib white bg-near-black"
        onClick={e => {
          if (window.confirm('Are you sure?')) {
            props.removeEmoji(props.match.params.emoji, props.history)
          }
        }}
      >
        Delete Emoji
      </button>
      <Link className="avenir link tc" to="/">
        Return to Home
      </Link>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapActionsToProps = dispatch => {
  return {
    removeEmoji: (emoji, history) => dispatch(removeEmoji(emoji, history))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Show)

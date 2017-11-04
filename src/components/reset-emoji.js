import React from 'react'

const ResetEmoji = ({ onSubmit }) => {
  return (
    <form
      className="dib"
      onSubmit={e => {
        e.preventDefault()
        onSubmit()
      }}
    >
      <button className="f6 link dim br3 ph3 pv2 mb2 ml1 ba b--near-black dib white bg-near-black">
        Reset
      </button>
    </form>
  )
}

export default ResetEmoji

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
      <button className="f6 link dim br3 ph3 pv2 mb2 ml1 dib white bg-black">
        Reset
      </button>
    </form>
  )
}

export default ResetEmoji

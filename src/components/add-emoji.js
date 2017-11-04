import React from 'react'

const AddEmoji = ({ value, onChange, onSubmit }) => {
  return (
    <form
      className="dib"
      onSubmit={e => {
        e.preventDefault()
        onSubmit(value)
      }}
    >
      <input
        className="input-reset align-center ba b--near-black bw1 br3 mr2 pa2 mb2"
        placeholder="Add Fav Emoji"
        value={value}
        onChange={onChange}
      />
      <button className="f6 link dim br3 ph3 pv2 ba b--near-black mb2 dib white bg-near-black">
        Add
      </button>
    </form>
  )
}

export default AddEmoji

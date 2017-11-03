import React from 'react'
import { emojify } from 'react-emojione'

const Show = props => (
  <div className="f1">{emojify(':' + props.match.params.emojis + ':')}</div>
)
export default Show

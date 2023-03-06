import React from 'react'

import PropTypes from 'prop-types'

import './caption1.css'

const Caption1 = (props) => {
  return (
    <div className="caption1-container">
      <span className="caption1-caption">{props.Caption}</span>
    </div>
  )
}

Caption1.defaultProps = {
  Caption: 'Are you ready to take your buisness to the next level',
}

Caption1.propTypes = {
  Caption: PropTypes.string,
}

export default Caption1

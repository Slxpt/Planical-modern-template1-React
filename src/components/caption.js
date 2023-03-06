import React from 'react'

import PropTypes from 'prop-types'

import './caption.css'

const Caption = (props) => {
  return (
    <div className="caption-container">
      <span className="caption-caption">
        Are you ready to take your buisness to the next level
      </span>
    </div>
  )
}

Caption.defaultProps = {
  Caption: 'Experts in social media marketing',
}

Caption.propTypes = {
  Caption: PropTypes.string,
}

export default Caption

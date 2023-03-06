import React from 'react'

import PropTypes from 'prop-types'

import './heading1.css'

const Heading1 = (props) => {
  return (
    <div className="heading1-container">
      <h1 className="heading1-heading">{props.Heading}</h1>
    </div>
  )
}

Heading1.defaultProps = {
  Heading: 'The experts in social media marketing',
}

Heading1.propTypes = {
  Heading: PropTypes.string,
}

export default Heading1

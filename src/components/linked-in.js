import React from 'react'

import PropTypes from 'prop-types'

import './linked-in.css'

const LinkedIn = (props) => {
  return (
    <a
      href="https://www.linkedin.com/company/azara-advertising-and-marketing/?original_referer=https%3A%2F%2Flinktr.ee%2F"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="linked-in-container">
        <img
          alt={props.LinkedIn_alt}
          src={props.LinkedIn_src}
          className="social"
        />
      </div>
    </a>
  )
}

LinkedIn.defaultProps = {
  LinkedIn_alt: 'image',
  LinkedIn_src: '/playground_assets/linkedin-200h.png',
}

LinkedIn.propTypes = {
  LinkedIn_alt: PropTypes.string,
  LinkedIn_src: PropTypes.string,
}

export default LinkedIn

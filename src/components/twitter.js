import React from 'react'

import PropTypes from 'prop-types'

import './twitter.css'

const Twitter = (props) => {
  return (
    <div className="twitter-container">
      <a
        href="https://twitter.com/azaramgmt?s=21&amp;t=5cS8Ke3tduJDct69zLHShQ"
        target="_blank"
        rel="noreferrer noopener"
        className="twitter-link"
      >
        <img
          alt={props.Twitter_alt}
          src={props.Twitter_src}
          className="twitter-twitter social"
        />
      </a>
    </div>
  )
}

Twitter.defaultProps = {
  Twitter_alt: 'image',
  Twitter_src: '/playground_assets/twitter-200h.png',
}

Twitter.propTypes = {
  Twitter_alt: PropTypes.string,
  Twitter_src: PropTypes.string,
}

export default Twitter

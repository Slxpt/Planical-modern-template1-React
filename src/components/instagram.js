import React from 'react'

import PropTypes from 'prop-types'

import './instagram.css'

const Instagram = (props) => {
  return (
    <a
      href="https://www.instagram.com/azaraads/"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="instagram-container">
        <img
          alt={props.Instagram_alt}
          src={props.Instagram_src}
          className="social"
        />
      </div>
    </a>
  )
}

Instagram.defaultProps = {
  Instagram_alt: 'image',
  Instagram_src: '/playground_assets/instagram-200h.png',
}

Instagram.propTypes = {
  Instagram_alt: PropTypes.string,
  Instagram_src: PropTypes.string,
}

export default Instagram

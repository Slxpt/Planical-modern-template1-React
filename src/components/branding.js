import React from 'react'

import PropTypes from 'prop-types'

import './branding.css'

const Branding = (props) => {
  return (
    <div className={`branding-branding ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="branding-image"
      />
    </div>
  )
}

Branding.defaultProps = {
  rootClassName: '',
  image_src: '/playground_assets/unnamed%20%5B6%5D-200h.jpg',
  image_alt: 'image',
}

Branding.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Branding

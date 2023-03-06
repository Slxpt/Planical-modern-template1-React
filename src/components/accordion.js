import React from 'react'

import PropTypes from 'prop-types'

import './accordion.css'

const Accordion = (props) => {
  return (
    <div className={`accordion-accordion ${props.rootClassName} `}>
      <div data-role="accordion-container" className="accordion-element">
        <div className="accordion-details">
          <span className="accordion-text">{props.text}</span>
          <span data-role="accordion-content" className="accordion-text1">
            {props.text1}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon"
        >
          <path
            d="M366 708l196-196-196-196 60-60 256 256-256 256z"
            className=""
          ></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className="accordion-element1 accordion-element"
      >
        <div className="accordion-details1">
          <span className="accordion-text2">{props.text2}</span>
          <span data-role="accordion-content" className="accordion-text3">
            {props.text3}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon2"
        >
          <path
            d="M366 708l196-196-196-196 60-60 256 256-256 256z"
            className=""
          ></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className="accordion-element2 accordion-element"
      >
        <div className="accordion-details2">
          <span className="accordion-text4">{props.text4}</span>
          <span data-role="accordion-content" className="accordion-text5">
            {props.text5}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon4"
        >
          <path
            d="M366 708l196-196-196-196 60-60 256 256-256 256z"
            className=""
          ></path>
        </svg>
      </div>
    </div>
  )
}

Accordion.defaultProps = {
  text2: 'Cutting-edge technology',
  text1:
    "We understand that every business is unique, and we take the time to understand your specific needs and goals. We'll work with you to develop a customized marketing strategy that fits your budget and objectives.",
  text: 'Customized solutions',
  text4: 'Results-driven approach',
  text5:
    'Our ultimate goal is to help you grow your business, and we measure our success by your success. We use data-driven insights to continuously improve our strategies',
  text3:
    'We stay up-to-date with the latest marketing trends and technology to ensure that our clients stay ahead of the curve. We use advanced analytics tools and automation software to track performance and optimize campaigns for maximum ROI.',
  rootClassName: '',
}

Accordion.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Accordion

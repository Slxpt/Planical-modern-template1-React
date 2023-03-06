import React from 'react'

import PropTypes from 'prop-types'

import './faq.css'

const FAQ = (props) => {
  return (
    <div className={`faq-accordion ${props.rootClassName} `}>
      <div
        data-role="accordion-container"
        className="faq-element accordion-element"
      >
        <div className="faq-details">
          <span className="faq-text">What services do SMMA&apos;s offer?</span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element1 accordion-element"
      >
        <div className="faq-details1">
          <span data-role="accordion-content" className="faq-text1">
            .SMMA&apos;s typically offer a range of services that can help
            businesses achieve their marketing goals. This can include social
            media account setup and management, social media advertising,
            content creation, influencer marketing, and social media analytics
            and reporting.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon02">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element2 accordion-element"
      >
        <div className="faq-details2">
          <span className="faq-text2">What IS SMMA?</span>
          <span data-role="accordion-content" className="faq-text3">
            An SMMA (Social Media Marketing Agency) is a business that
            specializes in providing marketing services to clients through
            social media platforms. This can include creating and managing
            social media accounts, developing and executing social media
            marketing campaigns, and analyzing data to measure results.
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon04">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element3 accordion-element"
      >
        <div className="faq-details3">
          <span className="faq-text4">How do I know if I need an SMMA?</span>
          <span data-role="accordion-content" className="faq-text5">
            If you are struggling to effectively reach your target audience
            through social media, or if you simply don&apos;t have the time or
            expertise to manage your social media accounts, an SMMA can be a
            valuable partner for your business. They can help you develop and
            execute effective social media strategies that can drive engagement,
            brand awareness, and sales.
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon06">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element4 accordion-element"
      >
        <div className="faq-details4"></div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon08">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

FAQ.defaultProps = {
  rootClassName: '',
}

FAQ.propTypes = {
  rootClassName: PropTypes.string,
}

export default FAQ

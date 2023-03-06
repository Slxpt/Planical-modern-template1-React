import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Heading from '../components/heading'
import Accordion from '../components/accordion'
import FAQ from '../components/faq'
import Branding from '../components/branding'
import LinkedIn from '../components/linked-in'
import Instagram from '../components/instagram'
import Twitter from '../components/twitter'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Planical modern template1</title>
        <meta property="og:title" content="Planical modern template1" />
      </Helmet>
      <div className="home-container1">
        <div className="home-container2"></div>
      </div>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <div className="home-container3">
                <header className="home-header">
                  <Heading></Heading>
                  <div className="home-container4">
                    <div className="home-container5">
                      <span className="home-caption">
                        Are you ready to take your buisness to the next level?
                      </span>
                    </div>
                  </div>
                  <span className="home-caption1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </header>
                <header className="home-header1">
                  <Heading></Heading>
                  <span className="home-caption2">
                    Experts in social media marketing
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-caption3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </header>
              </div>
              <div className="home-buttons">
                <div className="home-get-started button">
                  <span className="home-text">Get started</span>
                </div>
              </div>
            </main>
            <div className="home-highlight">
              <div className="home-avatars">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image1 avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image2 avatar"
                />
              </div>
              <label className="home-caption4">
                Loved by 10,000+ people like you.
              </label>
            </div>
          </div>
          <div className="home-image3">
            <img
              alt="image"
              src="/playground_assets/heroimage-1500h.png"
              className="home-image4"
            />
          </div>
        </div>
      </section>
      <section className="home-section1">
        <div className="home-note">
          <div className="home-image5"></div>
          <div className="home-content1">
            <div className="home-caption5">
              <span className="section-head">Facts</span>
            </div>
            <div className="home-heading">
              <div className="home-header2"></div>
              <Accordion rootClassName="accordion-root-class-name"></Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section3">
        <div className="home-cube">
          <div className="home-top side"></div>
          <div className="home-front side"></div>
          <div className="home-left side"></div>
        </div>
        <main className="home-pricing">
          <header className="home-header3">
            <header className="home-left1">
              <span className="section-head">Pricing</span>
              <h2 className="section-heading home-heading1">
                Start small, think big
              </h2>
            </header>
            <div className="home-right">
              <p className="home-paragraph section-description">
                Are you looking for a reliable and effective marketing partner
                to take your business to new heights? Look no further than our
                website! We offer a range of marketing services that can help
                you connect with your target audience, build brand awareness,
                and drive sales.
              </p>
            </div>
          </header>
        </main>
        <div className="home-help">
          <span className="home-text01">
            <span>Need any help?</span>
            <br></br>
          </span>
          <div className="home-contact-support">
            <p className="home-text04">Contact support -&gt;</p>
          </div>
        </div>
      </section>
      <section className="home-section5">
        <header className="home-header4">
          <span className="section-head">FAQ</span>
          <h2 className="home-heading2 section-heading">
            Frequently asked questions
          </h2>
        </header>
        <main className="home-accordion">
          <FAQ rootClassName="faq-root-class-name"></FAQ>
        </main>
      </section>
      <footer className="home-footer">
        <div className="home-content2">
          <main className="home-main-content">
            <div className="home-content3">
              <header className="home-main1">
                <div className="home-header5">
                  <Branding rootClassName="branding-root-class-name"></Branding>
                  <span className="home-text05">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
                <div className="home-socials">
                  <LinkedIn></LinkedIn>
                  <Instagram></Instagram>
                  <Twitter></Twitter>
                </div>
              </header>
              <header className="home-categories">
                <div className="home-category">
                  <div className="home-header6">
                    <span className="footer-header">Solutions</span>
                  </div>
                  <div className="home-links">
                    <span className="footer-link">Responsive Web Design</span>
                    <span className="footer-link">Responsive Prototypes</span>
                    <span className="footer-link">Design to Code</span>
                    <span className="footer-link">Static Website Builder</span>
                    <span className="footer-link">
                      Static Website Generator
                    </span>
                  </div>
                </div>
                <div className="home-category1">
                  <div className="home-header7">
                    <span className="footer-header">Company</span>
                  </div>
                  <div className="home-links1">
                    <span className="footer-link">About</span>
                  </div>
                </div>
              </header>
            </div>
            <section className="home-copyright">
              <span className="home-text14">
                © 2022 AzaraAds. All Rights Reserved.
              </span>
            </section>
          </main>
          <main className="home-subscribe">
            <main className="home-main2">
              <h1 className="home-heading3">Subscribe to our newsletter</h1>
              <div className="home-input-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="home-textinput input"
                />
                <div className="home-buy button">
                  <span className="home-text15">-&gt;</span>
                  <span className="home-text16">
                    <span>Subscribe now</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
            <h1 className="home-notice">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </h1>
          </main>
          <section className="home-copyright1">
            <span className="home-text19">
              © 2022 latitude. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
        <DangerousHTML
          html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Home

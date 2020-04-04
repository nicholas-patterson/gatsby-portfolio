import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);

  return (
    <div className="contact" id="contact">
      <h3 className="contact__title">Contact Me</h3>
      <p className="contact__para">Let's talk, Shoot me an email at:</p>
      <p className="contact__email">
        <a
          className="contact__link"
          href={`mailto:${data.site.siteMetadata.email}`}
        >
          {data.site.siteMetadata.email}
        </a>
      </p>
      <ul className="contact__social">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://www.facebook.com/Patterson.Nicholas1"
        >
          <FontAwesomeIcon
            className="contact__social--icon"
            icon={faFacebookSquare}
          />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://www.twitter.com/Nick_Codes_"
        >
          <FontAwesomeIcon
            className="contact__social--icon"
            icon={faTwitterSquare}
          />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://www.github.com/nicholas-patterson"
        >
          <FontAwesomeIcon
            className="contact__social--icon"
            icon={faGithubSquare}
          />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/nicholas-patterson-458593188/"
        >
          <FontAwesomeIcon
            className="contact__social--icon"
            icon={faLinkedin}
          />
        </a>
      </ul>
    </div>
  );
};

export default Contact;

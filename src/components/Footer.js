import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Img from "gatsby-image";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "images/FinalDesigncopy.png" }) {
        id
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const date = new Date().getFullYear();
  return (
    <div className="footer">
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
          href="http://www.twitter.com/nicholascodes"
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
      <div className="footer-pic-container">
        <Img className="footer__img" fixed={data.image.childImageSharp.fixed} />
      </div>
      <p>Copyright &copy; {date} nicholascodes</p>
    </div>
  );
};

export default Footer;

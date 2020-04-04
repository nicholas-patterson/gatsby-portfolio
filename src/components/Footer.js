import React from "react";
import { graphql, useStaticQuery } from "gatsby";
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
      <div className="footer-pic-container">
        <Img className="footer__img" fixed={data.image.childImageSharp.fixed} />
      </div>
      <p>Copyright &copy; {date} Nicholas Codes</p>
    </div>
  );
};

export default Footer;

import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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
      <div className="contact__form">
        <form method="POST" data-netlify="true">
          <div className="field">
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div className="field">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="field">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows="7"
            ></textarea>
          </div>
          <div className="field" data-netlify-recaptcha="true"></div>
          <button type="submit">Send It</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

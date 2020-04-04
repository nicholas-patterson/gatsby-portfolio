import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

const SEO = ({ title, lang }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          email
          siteUrl
          twitter_username
          title
          site_image
        }
      }
    }
  `);

  return (
    <>
      <Helmet
        htmlAttributes={{ lang }}
        title={title || data.site.siteMetadata.title}
        meta={[
          {
            name: "description",
            content: data.site.siteMetadata.description,
          },
          {
            property: "og:url",
            content: data.site.siteMetadata.siteUrl,
          },
          {
            propert: "og:title",
            content: title,
          },
          {
            property: "og:description",
            content: data.site.siteMetadata.description,
          },
          {
            property: "og:type",
            contetnt: "website",
          },
          {
            property: "twitter:user",
            content: data.site.siteMetadata.twitter_username,
          },
          {
            property: "og:image",
            content: data.site.siteMetadata.site_image,
          },
        ]}
      />
    </>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  lang: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  lang: "en",
};

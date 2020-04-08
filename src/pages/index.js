import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/index.scss";
import SEO from "../components/SEO";

const Index = () => {
  const data = useStaticQuery(graphql`
    query ImageAndbgImage {
      image: file(relativePath: { eq: "images/FinalDesigncopy.png" }) {
        id
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      projects: allProjectsJson {
        edges {
          node {
            id
            title
            description
            resources
            github_link
            project_link
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <Layout>
        <SEO />
        <Navbar imageData={data.image.childImageSharp.fixed} />
        <Header />
        <About />
        <Portfolio projects={data.projects} />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
};

export default Index;

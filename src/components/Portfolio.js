import React from "react";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Portfolio = ({ projects }) => {
  return (
    <>
      <div className="portfolio">
        <div className="portfolio__styling">
          <h3 className="portfolio__title">Projects</h3>
          <div className="portfolio__list">
            {projects.edges.map((project, idx) => {
              console.log("PROJECT", project);
              return (
                <React.Fragment key={idx}>
                  <Img fluid={project.node.image.childImageSharp.fluid} />
                  <div className="project__info">
                    <h4 className="project__title">{project.node.title}</h4>
                    <p className="project__description">
                      {project.node.description}
                    </p>
                    <div className="project__resources">
                      <ul>
                        {project.node.resources.map((resource, idx) => {
                          return <li key={idx}>{resource}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="project__links">
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={project.node.github_link}
                      >
                        <button className="github-btn" type="button">
                          <FontAwesomeIcon
                            className="github-icon"
                            icon={faGithub}
                          />{" "}
                          {"  "}Github
                        </button>
                      </a>
                      <a rel="noopener noreferrer" target="_blank" href="#">
                        <button className="site-btn" type="button">
                          <FontAwesomeIcon
                            className="link-icon"
                            icon={faLink}
                          />
                          {"  "} Site
                        </button>
                      </a>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

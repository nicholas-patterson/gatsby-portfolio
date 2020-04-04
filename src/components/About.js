import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="clip">&nbsp;</div>
        <div className="about__styling">
          <h3 className="about__title">About Me</h3>
          <p className="about__para">
            Hello, My name is Nicholas Patterson and I am a fullstack software
            developer in the making. I currently am attending Lambda School and
            it has been an awesome journey. I started my adventure in the tech
            field when I got my associates in Network Administration from
            Northampton Community Collge. Shorly after I realized that I want to
            make software, websites, and apps. I like the feeling of being able
            to be creative and build anything you want, Before I enrolled in
            Lambda School I took online courses just to make sure this is
            something I really wanted to do. A couple of online courses later I
            developed a passion for software development. I am always eager to
            learn more and perfect my skills that I've already obtanined. Some
            of the current technologies I use right now are as follows: HTML,
            CSS, Javascript and React.
          </p>
          <ul>
            <a
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
              target="_blank"
            >
              <FontAwesomeIcon className="html5" icon={faHtml5} />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Archive/CSS3"
              target="_blank"
            >
              <FontAwesomeIcon className="css3" icon={faCss3} />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.javascript.com/"
              target="_blank"
            >
              <FontAwesomeIcon className="js" icon={faJsSquare} />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://reactjs.org/"
              target="_blank"
            >
              <FontAwesomeIcon className="react" icon={faReact} />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://sass-lang.com/"
              target="_blank"
            >
              <FontAwesomeIcon className="sass" icon={faSass} />
            </a>
          </ul>
        </div>
        <div className="clip2">&nbsp;</div>
      </div>
    </>
  );
};

export default About;

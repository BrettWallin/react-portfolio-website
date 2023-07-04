import React, { useEffect, useState } from "react";
import "../Components/About.css";
import { ReactComponent as WorkIcon } from "../Images/work.svg";
import { ReactComponent as SchoolIcon } from "../Images/school.svg";
import AWSLogo from "../Images/AWS.png";
import CSSLogo from "../Images/CSS.png";
import HTMLLogo from "../Images/HTML.png";
import JavaLogo from "../Images/Java.png";
import JavaScriptLogo from "../Images/JavaScript.png";
import PythonLogo from "../Images/Python.png";
import ReactLogo from "../Images/React.png";
import TerraformLogo from "../Images/Terraform.png";

import TimelineElements from "../Components/TimelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export default function About() {
  let workIconStyles = { background: "cyan" };
  let schoolIconStyles = { background: "cyan" };

  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const skillsSection = document.getElementById("skills-section");

      if (skillsSection && !animateSkills) {
        const sectionTop = skillsSection.offsetTop;
        const sectionHeight = skillsSection.offsetHeight;
        const windowHeight = window.innerHeight;

        const triggerOffset = windowHeight * 0.8;

        if (scrollPosition > sectionTop - triggerOffset && scrollPosition < sectionTop + sectionHeight) {
          setAnimateSkills(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [animateSkills]);

  return (
    <div className="about-me">
      <div id="about">
        <h1 className="title">My Experience</h1>
        <VerticalTimeline>
          {TimelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>

      <div>
        <h1 className="skills-title">My Skills</h1>
        <div className={`skills ${animateSkills ? "skills-animate active" : ""}`} id="skills-section">
          <div className="skills-container">
            <h1 className="skills-header">Front-End</h1>
            <ul className="skills-list">
              <li>
                <img src={JavaScriptLogo} className="skills-logo" alt="JavaScript" />
                <p className="list-text">JavaScript</p>
              </li>
              <li>
                <img src={ReactLogo} className="skills-logo" alt="React" />
                <p className="list-text">React</p>
              </li>
              <li>
                <img src={CSSLogo} className="skills-logo" alt="CSS" />
                <p className="list-text">CSS</p>
              </li>
              <li>
                <img src={HTMLLogo} className="skills-logo" alt="HTML" />
                <p className="list-text">HTML</p>
              </li>
            </ul>
          </div>
          <div className="skills-container">
            <h1 className="skills-header">Back-End</h1>
            <ul className="skills-list">
              <li>
                <img src={JavaLogo} className="skills-logo" alt="Java" />
                <p className="list-text">Java</p>
              </li>
              <li>
                <img src={PythonLogo} className="skills-logo" alt="Python" />
                <p className="list-text">Python</p>
              </li>
              <li>
                <img
                  src={TerraformLogo}
                  className="skills-logo"
                  alt="Terraform"
                />
                <p className="list-text">Terraform</p>
              </li>
              <li>
                <img src={AWSLogo} className="skills-logo" alt="AWS" />
                <p className="list-text">AWS</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}



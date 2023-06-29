import React from "react";
import '../Components/About.css'
import { ReactComponent as WorkIcon } from "../Images/work.svg";
import { ReactComponent as SchoolIcon } from "../Images/school.svg";

import TimelineElements from "../Components/TimelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export default function About() {
  let workIconStyles = { background: "cyan" };
  let schoolIconStyles = { background: "cyan" };

  return (
    <div className="about-me">
        <div>
            <h1 className="title">My Experience</h1>
            <VerticalTimeline className="custom-timeline">
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
            <div className="skills">
                
            </div>
        </div>
    </div>
  );
}


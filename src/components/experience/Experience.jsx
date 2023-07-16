import React from "react";
import { ReactComponent as HomeIcon } from "./../../home.svg";
import { ReactComponent as UserIcon } from "./../../user.svg";
import timelineElements from "./../../timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./experience.css";
import DespSvg from "../../Des.png";
import MerlionSvg from "../../merlion.jpeg";

const Experience = () => {
  /* let homeIconStyles = { background: "#06D6A0" }; */
  let despeIconStyles = {
    backgroundColor: "white",
    backgroundImage: `url(${DespSvg})`,
    backgroundSize: "cover",
  };
  let merlionIconStyles = {
    backgroundColor: "white",
    backgroundImage: `url(${MerlionSvg})`,
    backgroundSize: "cover",
  };

  return (
    <section id="experience">
      <h5>Las habilidades que tengo</h5>
      <h2>Mi experiencia</h2>

      <VerticalTimeline>
        {timelineElements.map((element, index) => {
          let isDespeIcon = element.company === "Despegar";
          let showButton =
            element.enlace !== undefined &&
            element.enlace !== null &&
            element.enlace !== "";

          return (
            <VerticalTimelineElement
              className="vertical-time-line"
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isDespeIcon ? despeIconStyles : merlionIconStyles}
              icon={
                isDespeIcon ? (
                  <div style={despeIconStyles}></div>
                ) : (
                  <div style={merlionIconStyles}></div>
                )
              }
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-client">
                {element.client}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a className={`button`} href={element.enlace} target="_blank">
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;

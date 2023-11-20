import React from "react";
import "../CSS/Skills.css";

const Skills = () => {
  const skillInfo = [
    ["HTML", "CSS", "JavaScript", "Async-Await", "Axios"],
    ["React Js", "Redux Toolkit", "Firebase", "REST API", "Git-Github"],
  ];

  return (
    <div className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="s_content bd-grid">
        {skillInfo.map((infoList, index) => (
          <ul key={index} className="skills_data">
            {infoList.map((info, subIndex) => (
              <li key={subIndex} className="s_name">
                <span className="s_circle"></span>
                {info}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Skills;

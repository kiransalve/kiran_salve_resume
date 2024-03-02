import React from "react";
import "../CSS/Skills.css";

const Skills = () => {
  const skillInfo = [
    ["HTML", "CSS", "JavaScript","React Js","Next Js" ],
    [ "Redux Toolkit", "Firebase","MongoDB",  "Git-Github", "Tailwind CSS"],
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

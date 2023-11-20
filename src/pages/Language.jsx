import React from "react";
import "../CSS/Skills.css";

const Language = () => {
  const languageInfo = [
    { title: "Marathi" },
    { title: "Hindi" },
    { title: "English" },
  ];
  return (
    <div className="language section" id="language">
      <h2 className="section-title">Language</h2>

      <div className="s_container">
        <ul className="s_content l_content">
          {languageInfo.map((info, index) => {
            return (
              <div key={index}>
                <li className="s_name">
                  <span className="s_circle"></span> {info.title}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Language;

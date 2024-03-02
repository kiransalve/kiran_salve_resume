import React from "react";
import "../CSS/Education.css";

const educationInfo = [
  {
    degree: "Bachelor of Science (Physics)",
    institute: "Birla College",
    year: "2013 - 2015",
  },
  {
    degree: "12th (IT)",
    institute: "Sonawane College",
    year: "2010 - 2012",
  },
  {
    degree: "10th",
    institute: "Subhedar Wada High-school",
    year: "2010 - 2012",
  },
];
const Education = () => {
  return (
    <>
      <div className="education section" id="education">
        <h2 className="section-title">Education</h2>

        <div className="eduction_container bd-grid">
          {educationInfo.map((info, index) => {
            return (
              <div key={index}>
                <div className="e_content">
                  <div className="e_time">
                    <span className="e_round"></span>
                    {index < 2 && <span className="e_line"></span>}
                  </div>
                  <div className="e_data bd-grid">
                    <h3 className="e_title">{info.degree} </h3>
                    <span className="education_studies">{info.institute}</span>
                    <span className="education_year">{info.year}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Education;

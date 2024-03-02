import React from "react";
import "../CSS/Education.css";

const Experience = () => {
  const experienceInfo = [
    {
      title: "MIS Executive",
      compnay: "Jan'23 - Present | Chembond Bioscience Ltd. | Mahape",
      desc: "To maintain various sales, purchase and finance MIS reports using advance excel.",
    },
    {
      title: "Sales Coordinator",
      compnay: "Mar'18 - Dec'22 | MRK Healthcare Pvt. Ltd. | Parel",
      desc: "To handle sales and marketing team's MIS, Incentive, Expense etc",
    },
    {
      title: "Medical Assistant",
      compnay: "Apr'16 - Feb'18 | Venus Medicare | Kalyan",
      desc: "To make purchase and sales entry in Medical Software",
    },
  ];

  return (
    <div className="experience section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience_container bd-grid">
        {experienceInfo.map((info, index) => {
          return (
            <div key={index}>
              <div className="e_content">
                <div className="e_time">
                  <span className="e_round"></span>
                  {index < 2 && <span className="e_line"></span>}
                </div>
                <div className="e_data bd-grid">
                  <h3 className="e_title">{info.title}</h3>
                  <span className="experience_company">{info.compnay}</span>
                  <p className="experience_desc">{info.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;

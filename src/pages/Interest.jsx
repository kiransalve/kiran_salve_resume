import React from "react";
import { FiMusic } from "react-icons/fi";
import "../CSS/Interest.css";
import { FaPlane } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
const Interest = () => {
  const interestInfo = [
    { icon: <FiMusic className="interest_icon" />, title: "Music" },
    { icon: <FaPlane className="interest_icon" />, title: "Travel" },
    { icon: <FaBookReader className="interest_icon" />, title: "Reading" },
  ];
  return (
    <div className="interest section" id="interest">
      <h2 className="section-title">Interest</h2>
      <div className="interest_container bd-grid">
        {interestInfo.map((info, index) => {
          return (
            <div key={index}>
              <div className="interest_content">
                {info.icon}
                <div className="interest_name">{info.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Interest;

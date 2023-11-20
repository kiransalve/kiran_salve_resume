import React from "react";
import { FiMapPin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiSmartphone } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/KiransalveReactDev.pdf";

const HomeAddress = () => {
  const homeInfo = [
    { icon: <FiMapPin className="home_icon" />, title: "Kalyan, Thane" },
    {
      icon: <FiMail className="home_icon" />,
      title: "salvekiran2011@gmail.com",
    },
    { icon: <FiSmartphone className="home_icon" />, title: "9768925283" },
  ];
  return (
    <div className="home_address bd-grid">
      <a href={resume} download={""}>
        <FaDownload className="download-pdf" />
      </a>
      {homeInfo.map((info, index) => {
        return (
          <div key={index}>
            <div className="home_information">
              {info.icon} {info.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeAddress;

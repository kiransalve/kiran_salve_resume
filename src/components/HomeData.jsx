import React from "react";
import profile from "../assets/profile.jpg";
import resume from "../assets/KiransalveReactDev.pdf";

const HomeData = () => {
  return (
    <div className="home_data bd-grid">
      <img src={profile} alt="profile_img" className="home_img" />
      <h1 className="home_title">Kiran Salve</h1>
      <h3 className="home_profession">Front end Developer</h3>
      <div>
        <a download={""} href={resume} className="home_button">
          DOWNLOAD
        </a>
      </div>
    </div>
  );
};

export default HomeData;

import React from "react";
import "../CSS/Homepage.css";
import HomeData from "../components/HomeData";
import HomeAddress from "../components/HomeAddress";
import SocialLinks from "../components/SocialLinks";

const Homepage = () => {
  return (
    <>
      <div className="home" id="home">
        <div className="home_container section bd-grid">
          <HomeData />
          <HomeAddress />
          <SocialLinks />
        </div>
      </div>
    </>
  );
};

export default Homepage;

import React from "react";
import "../CSS/projects.css";

const projectsInfo = [
  {
    title: "Ecommerce Website",
    link: "https://estoreapp-kiransalve.netlify.app/",
    desc: "User Auth, Product Search, Sort, Filter, Cart, Order, Payment",
  },
  {
    title: "Youtube Clone",
    link: "https://yt-clone-kiransalve.netlify.app/",
    desc: "Search Video of Youtube, Watchlist, User Auth",
  },
];
const Projects = () => {
  return (
    <>
      <div className="projects section" id="projects">
        <h2 className="section-title">projects</h2>

        <div className="projects_container bd-grid">
          {projectsInfo.map((info, index) => {
            return (
              <div key={index}>
                <div className="e_content">
                  <div className="e_data bd-grid">
                    <h3 className="e_title">{info.title} </h3>
                    <a href={info.link} target="_blank" className="p_link">
                      Live
                    </a>
                    <span className="p_desc">{info.desc}</span>
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

export default Projects;

import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="social_icon" />,
      title: "@github/kiransalve",
      link: "https://github.com/kiransalve",
    },
    {
      icon: <FaLinkedin className="social_icon" />,
      title: "@linkedin/kiran-salve",
      link: "https://www.linkedin.com/in/kiran-salve-656995188",
    },
    {
      icon: <FaTwitter className="social_icon" />,
      title: "@twitter/kiransalve15",
      link: "https://twitter.com/kiransalve15",
    },
    {
      icon: <FaInstagram className="social_icon" />,
      title: "@instagram/kironsalve",
      link: "https://www.instagram.com/kironsalve/",
    },
  ];
  return (
    <div className="section social">
      <h2 className="section-title">SOCIAL</h2>
      <div className="social_container bd-grid">
        {socialLinks.map((link, index) => {
          return (
            <div key={index}>
              <a href={link.link} className="social-link" target="_blank">
                {link.icon} {link.title}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;

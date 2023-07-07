import React from "react";
import Profile from '../Images/Profile.png';
import '../Components/Landing.css';

export default function Landing() {

  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      let offset = 0;

      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: targetPosition + offset, behavior: "smooth" });
    }
  }

  return (
    <div className="landing">
      <img src={Profile} alt="profile" className="profile-pic" />
      <div className="text-background">
        <h3 className="landing-header">Hello, I am</h3>
        <h1 className="landing-header-name">Brett Wallin</h1>
        <h2 className="landing-job-title">Full Stack Software Engineer</h2>
        <h3 className="landing-description">
          I am a junior at Illinois State University majoring in computer science.
          I am also a passionate software engineer dedicated to continuous learning and growth.
        </h3>
        <button href="#contact" onClick={scrollToSection} className="landing-button">Contact Me</button>
      </div>
    </div>
  );
}




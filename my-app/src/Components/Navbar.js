import React from "react";
import '../Components/Navbar.css';

export default function Navbar() {
  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      let offset = 0;

      // Adjust the value below to fine-tune the scroll position
      if (targetId === "#projects") {
        offset = -240; // Subtract 200 pixels from the scroll position
      } else if (targetId === "#about") {
        offset = -100; // Subtract 200 pixels from the scroll position
      } else if (targetId === "#resume") {
        offset = -50; // Subtract 200 pixels from the scroll position
      } else if (targetId === "#contact") {
        offset = -50; // Subtract 200 pixels from the scroll position
      }

      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: targetPosition + offset, behavior: "smooth" });
    }
  }

  return (
    <div className="navbar">
      <h4 className="nav-contents"><a href="#about" onClick={scrollToSection} style={{ textDecoration:"none", color:"white"}}>About Me</a></h4>
      <h4 className="nav-contents"><a href="#projects" onClick={scrollToSection} style={{ textDecoration:"none", color:"white" }}>Projects</a></h4>
      <h4 className="nav-contents"><a href="#resume" onClick={scrollToSection} style={{ textDecoration:"none", color:"white" }}>Resume</a></h4>
      <h4 className="nav-contents"><a href="#contact" onClick={scrollToSection} style={{ textDecoration:"none", color:"white" }}>Contact Me</a></h4>
    </div>
  )
}


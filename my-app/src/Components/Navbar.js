import React from "react";
import '../Components/Navbar.css'

export default function Navbar() {

    const modeToggle = document.getElementById("mode-toggle");
    const navbar = document.querySelector(".navbar");
    const body = document.body;

    modeToggle.addEventListener("change", function () {
        if (modeToggle.checked) {
            navbar.classList.add("dark-mode");
            body.classList.add("dark-mode");
        } else {
            navbar.classList.remove("dark-mode");
            body.classList.remove("dark-mode");
        }
    });

    return(
        <div className="navbar">
            <h1 className="nav-title">Brett Wallin</h1>
            <p className="nav-contents">About Me</p>
            <p className="nav-contents">Projects</p>
            <p className="nav-contents">Resume</p>
            <p className="nav-contents">Contact Me</p>
            <input type="checkbox" id="mode-toggle" />
            <label for="mode-toggle" className="mode-toggle-label"></label>
        </div>
    )
}
import React from "react";
import '../Components/Navbar.css'

export default function Navbar() {
    return(
        <div className="navbar">
            <h4 className="nav-contents">About Me</h4>
            <h4 className="nav-contents">Projects</h4>
            <h4 className="nav-contents">Resume</h4>
            <h4 className="nav-contents">Contact Me</h4>
        </div>
    )
}
import React from "react";
import '../Components/Resume.css'
import MyResume from '../Images/MyResume2023.pdf'

export default function Resume() {


    return(
        <div className="resume">
            <h1 className="resume-title">My Resume</h1>
            <iframe src={MyResume} title="My Resume" className="resume-pdf"></iframe>
        </div>
    )
}
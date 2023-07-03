import React, { useEffect, useState } from "react";
import Profile from '../Images/Profile.png';
import '../Components/Landing.css';

export default function Landing() {
  const [isTyping, setIsTyping] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const textToType = [
    "Hello, I am",
    "Brett Wallin",
    "Full Stack Software Engineer",
    "I am a junior at Illinois State University majoring in computer science. I am also a passionate software engineer dedicated to continuous learning and growth.",
  ];
  const typingSpeed = 75; // Adjust typing speed (in milliseconds)

  useEffect(() => {
    if (!isTyping || currentTextIndex >= textToType.length) {
      setIsTyping(false);
      return;
    }

    let interval;

    const startTyping = () => {
      interval = setInterval(() => {
        setCurrentText((prevText) => {
          const fullText = textToType[currentTextIndex];
          const currentChar = fullText[prevText.length];
          return prevText + currentChar;
        });

        if (currentText === textToType[currentTextIndex]) {
          clearInterval(interval);

          setCurrentTextIndex((prevIndex) => prevIndex + 1);
          setCurrentText(""); // Reset current text
        }
      }, typingSpeed);
    };

    startTyping();

    return () => {
      clearInterval(interval);
    };
  }, [currentText, currentTextIndex, isTyping]);

  return (
    <div className="landing">
      <img src={Profile} alt="profile" className="profile-pic" />
      <div className="text-background">
        {currentTextIndex >= 0 && (
          <h3 className="landing-header">
            {currentTextIndex === 0 ? currentText : textToType[0]}
          </h3>
        )}
        {currentTextIndex >= 1 && (
          <h1 className="landing-header-name">{currentTextIndex === 1 ? currentText : textToType[1]}</h1>
        )}
        {currentTextIndex >= 2 && (
          <h2 className="landing-job-title">{currentTextIndex === 2 ? currentText : textToType[2]}</h2>
        )}
        {currentTextIndex >= 3 && (
          <h3 className="landing-description">{currentTextIndex === 3 ? currentText : textToType[3]}</h3>
        )}
        <button className="landing-button">Contact Me</button>
      </div>
    </div>
  );
}



import React, { useState, useEffect } from "react";
import myPhoto from "../../webpage.png";
import "./Header.css";

const typingTexts = [
  "Frontend Developer",
  "UI/UX Designer",
  "React Enthusiast",
  "Creative Coder",
];

export default function Header() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 50 : 150; // typing speed
    const timeout = setTimeout(() => {
      const current = typingTexts[index];
      if (!deleting) {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === current.length) setDeleting(true);
      } else {
        setText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setIndex((index + 1) % typingTexts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <div id="home" className="header">
      <div className="text-container">
        <h1>Hello, I'm Frank</h1>
        <h4>{text}</h4>
        <p>Professional software engineer creating modern web applications.</p>
        <a href="#contact" className="btn">
          Contact Me
        </a>
      </div>
      <div className="image-container">
        <img src={myPhoto} alt="Frank Kundu Asong" />
      </div>
    </div>
  );
}

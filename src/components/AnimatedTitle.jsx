import React, { useState, useEffect } from "react";

function AnimatedTitle() {
  const titles = [
    "Frontend Developer.",
    "Backend Developer.",
    "DevOps Engineer.",
    "Cloud Specialist.",
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 80;

    const handleTyping = () => {
      const current = titles[index];
      if (!isDeleting) {
        // Typing forward
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText === current) {
          setTimeout(() => setIsDeleting(true), 800);
        }
      } else {
        // Deleting backward
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <span className="text-red-600 font-semibold text-2xl fade-text transition-all duration-500">
      {displayText}
      <span className="blinking-cursor">|</span>
    </span>
  );
}

export default AnimatedTitle;

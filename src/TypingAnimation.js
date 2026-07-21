import React, { useEffect, useState } from "react";

const roles = [
  "Java Developer",
  "React Developer",
  "Frontend Developer",
  "Full Stack Developer",
  "Software Engineer",
];

function TypingAnimation() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span
      style={{
        color: "#38bdf8",
        fontWeight: "700",
      }}
    >
      {text}
      <span>|</span>
    </span>
  );
}

export default TypingAnimation;
import { useEffect, useState } from "react";
import "./ScrollTop.css";
import { playWhoosh } from "./Sound";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    playWhoosh();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button className="scroll-top" onClick={scrollToTop}>
        ↑
      </button>
    )
  );
}

export default ScrollTop;
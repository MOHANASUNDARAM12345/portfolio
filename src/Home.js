import React, { useEffect,useState} from "react";
import "./code.css";
import profile from "./images/myphoto.jpg";

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleDownload = async () => {
    if (!name.trim() || !email.trim()) {
      alert("Please enter your Name and Email");
      return;
    }
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyOlhyhY8g4pxs1xCqCe8kH7Io2ZBe7Anm7v8-8oVE7Z31AZA52VVDKqvxknLJQJNd8/exec",
        {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
          }),
        }
      );
      const link = document.createElement("a");
      link.href = `${process.env.PUBLIC_URL}/Mohanasundaram_CV.pdf`;
      link.download = "Mohanasundaram_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setShowPopup(false);
      setName("");
      setEmail("");
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section id="home" className="home">

      <div className="home-content">

        <h1>Hi,I'm MOHANASUNDARAM</h1>

        <h3>Web Developer</h3>

        <p>
          I am an Information Technology student with a passion for Web
          Development. I have knowledge in Java, Python, HTML, CSS,
          JavaScript, React and MySQL. I enjoy learning new technologies
          and building innovative projects.
        </p>

        <div className="home-sci">

          <a
            href="https://leetcode.com/u/MOHANASUNDARAM-V/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bx-code-alt"></i>
          </a>

          <a
            href="https://github.com/MOHANASUNDARAM12345"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/mohanasundaram-v-237846356"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a href="mailto:sundaramm838@gmail.com">
            <i className="bx bx-envelope"></i>
          </a>

        </div>

        <button
        className="cv-btn"
        onClick={() => setShowPopup(true)}
        >
          <i className="bx bx-download"></i>
          <span>Download CV</span>
        </button>

      </div>

      <div className="home-image">
  <img src={profile} alt="Mohanasundaram" />
</div>

{showPopup && (
  <div className="popup-overlay">
    <div className="popup-box">

      <h2>Download Resume</h2>

      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="popup-buttons">
        <button onClick={handleDownload}>
          Submit & Download
        </button>

        <button onClick={() => setShowPopup(false)}>
          Cancel
        </button>
      </div>

    </div>
  </div>
)}

</section>
  );
}

export default Home;
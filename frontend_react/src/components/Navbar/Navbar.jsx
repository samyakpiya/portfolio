import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import Resume from "../../assets/resume.pdf";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // Create a function to scroll to an element with an offset
  const scrollTo = (id) => {
    // Get the element
    const element = document.getElementById(id);

    // If the element exists
    if (element) {
      // Get its position
      const rect = element.getBoundingClientRect();
      const offset = 88; // Change this to the desired offset
      const yPos = rect.top + window.pageYOffset - offset;

      // Scroll to the element
      window.scrollTo({ top: yPos, behavior: "smooth" });
    }
  };

  return (
    <nav className="app__navbar">
      <a href="./">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo" />
        </div>
      </a>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "cv", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <button onClick={() => scrollTo(item)}>{item}</button>
          </li>
        ))}
      </ul>

      <a
        className="app__navbar-resume"
        href={Resume}
        target="_blank"
        rel="noreferrer"
      >
        <div className="app__navbar-logo">Resume</div>
      </a>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "cv", "contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        setToggle(false);
                        scrollTo(item);
                      }}
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

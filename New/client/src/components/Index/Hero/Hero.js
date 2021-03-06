import React, { useContext } from "react";

import classes from "./Hero.module.css";
import homeLogo from "../../../assets/images/home-logo.png";
import homeLogoLight from "../../../assets/images/home-logo-light.png";
import { ThemeContext } from "../../../context/theme-context";

const Section1 = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <div className="row mx-auto" style={{ minHeight: "100vh" }}>
        <div
          className={
            classes.logoRotation + " col-12 col-lg-6 text-center my-auto"
          }
        >
          <div className="">
            <img
              src={themeContext.isDark ? homeLogo : homeLogoLight}
              alt="dscommunity"
              width="70%"
            />
          </div>
        </div>
        <div className="col-12 col-lg-4 text-center text-lg-left my-lg-auto">
          <div className={classes.main}>
            <h1 className={classes.animation}>Developers Point</h1>
            <p>
            The Developers Point is a tech community run by student developers of National Institute of
             Technology, Andhra Pradesh. The main characteristics that lay the foundation of what the 
             Developers Point stands for are curiosity and a willingness to learn.
            </p>
          </div>
        </div>
        <div className={classes.scrollAnchor + " d-none d-lg-block"}>
          <a href="#section02"
          >
            <span></span>
          </a>
        </div>
        <div className="col-12"></div>
      </div>
    </>
  );
};

export default Section1;

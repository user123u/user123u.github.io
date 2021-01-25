import React from "react";

import classes from "./Focus.module.css";
import workshopIMG from "../../../assets/images/workshop.svg";
import trainingIMG from "../../../assets/images/training.svg";
import projectIMG from "../../../assets/images/project.svg";

const Home_Section2 = () => {
  return (
    <React.Fragment>
      <div className="mx-auto mt-3">
        <div className={classes.main + " col-12 col-lg-8 mx-auto text-center"}>
          <h1 data-aos="flip-up">
            <span style={{ color: "#6F389F" }}>O</span>UR FOCUS.
          </h1>
          <p>
          The community actively conducts workshops, webinars,
          networking sessions, and everything possible to manifest
          our mission and vision. It also provides a platform for
          folks to collaborate, share ideas, connect and develop their
          knowledge in a peer-to-peer learning environment
          </p>
        </div>
        <div className="row mx-auto text-center">
          <div
            data-aos={window.innerWidth < 768 ? "fade-up" : "fade-right"}
            className={classes.card + " col-12 col-lg-3"}
          >
            <img height="100" width="200" src={workshopIMG} alt="workshops" />
            <h4>WORKSHOPS</h4>
            <p>For the enthusiasts</p>
          </div>
          <div
            data-aos={window.innerWidth < 768 ? "fade-up" : "fade-down"}
            className={classes.card + " col-12 col-lg-3"}
          >
            <img height="100" width="200" src={projectIMG} alt="projects" />
            <h4>PROJECTS</h4>
            <p>For the effectuators</p>
          </div>
          <div
            data-aos={window.innerWidth < 768 ? "fade-up" : "fade-left"}
            className={classes.card + " col-12 col-lg-3"}
          >
            <img height="100" width="200" src={trainingIMG} alt="trainings" />
            <h4>TRAINING</h4>
            <p>For the perfectionists</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home_Section2;

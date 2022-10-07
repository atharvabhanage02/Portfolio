import React from "react";
import "./projects.css";
import APEX from "../../assets/apex-thb.png";
import STORE from "../../assets/cricstore-thb.png";
import PLAY from "../../assets/cricplay-thb.png";
import NOTES from "../../assets/notes-thb.png";
import TIMER from "../../assets/timer-thb.png";
const Projects = () => {
  const projectsList = [
    {
      id: 1,
      projectName: "Apex UI",
      img: APEX,
      github: "https://github.com/atharvabhanage02/Apex-UI",
      liveDemo: "https://apex-ui-p1.netlify.app/",
    },
    {
      id: 2,
      projectName: "CricStore",
      img: STORE,
      github: "https://github.com/atharvabhanage02/CricStore",
      liveDemo: "https://cricstore-react.netlify.app/",
    },
    {
      id: 3,
      projectName: "CricPlay",
      img: PLAY,
      github: "https://github.com/atharvabhanage02/CricPlay",
      liveDemo: "https://cricplay.netlify.app/",
    },
    {
      id: 4,
      projectName: "Get It Done",
      img: NOTES,
      github: "https://github.com/atharvabhanage02/Get-It-Done",
      liveDemo: "https://get-it-done-notes-app.netlify.app/",
    },
    {
      id: 5,
      projectName: "Be Focused",
      img: TIMER,
      github: "https://github.com/atharvabhanage02/Pomodoro-App",
      liveDemo: "https://be-focused.netlify.app/",
    },
  ];
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        {projectsList.map((project) => {
          return (
            <article className="project__item">
              <div className="project__item-image">
                <img src={project.img} alt="" />
              </div>
              <h3>{project.projectName}</h3>
              <div className="project__item-cta">
                <a href={project.github} className="btn" target="_blank">
                  Github Repo
                </a>
                <a href={project.liveDemo} className="btn btn-primary" target="_blank">
                  Live Project
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export { Projects };

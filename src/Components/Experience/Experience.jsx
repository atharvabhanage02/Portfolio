import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Tailwind",
    "TypeScript",
    "Redux",
  ];
  const backendSkills = ['NodeJS','Express','Mongoose','Postman']
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendSkills.map((skill) => {
              return (
                <article className="experience__details">
                  <BsPatchCheckFill />
                  <h4>{skill}</h4>
                </article>
              );
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendSkills.map((skill) => {
              return (
                <article className="experience__details">
                  <BsPatchCheckFill />
                  <h4>{skill}</h4>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Experience };

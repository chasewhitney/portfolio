import React from "react";
import Card from "./Card.js";
import "./sass/main.scss";
import projectData from "./projectData.json";

const renderCards = () => {
  return projectData.map(v => {
    return <Card key={v.name} data={v} />;
  });
};

const Content = () => {
  return (
    <div className="projects__container">
      <h2 className="projects__header">PROJECTS</h2>
      <div className="projects__subhead">
        // Click project card for info. Note: Demos are hosted on Heroku and
        will take a moment to spin up.
      </div>
      <div className="projects__content flex-row">{renderCards()}</div>
    </div>
  );
};

export default Content;

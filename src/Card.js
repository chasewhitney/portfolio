import React from "react";
import "./sass/main.scss";

const renderStack = data => data.stack.map(v => <li key={v}>{v}</li>);

const Card = props => {
  return (
    <div className="project__card">
      <div className="project__card__content">
        <h3>{props.data.name}</h3>
        <ul>{renderStack(props.data)}</ul>
      </div>
    </div>
  );
};

export default Card;

// H- ctr
// DNDWiki
// ct backend
// gamenight
// cSharp todo
// choice
// H-riotAPI

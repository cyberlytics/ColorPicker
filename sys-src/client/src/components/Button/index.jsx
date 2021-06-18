/**
 * Ermöglicht das Ausführen von Funktionen wenn es angeklickt wird.
 */

import React from "react";
import { Title } from "../Title";
import "./index.css";

export function Button(props) {
    //get values for title and colors from props
  const { title, colors, name } = props;

  //function for submitting colors to backend; not created yet
  const submitPalette = (saveColor, saveName) => {
    fetch('http://localhost:5000/palette/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({name: saveName, color: saveColor})
    }).then(console.log('Die zu speichernden Farben sind: ' + saveColor + '. Der zu speichernde Name ist: ' + saveName + '.'));
  };

  return (
    <button
      className="buttonStyle"
      type="button"
      onClick={() => submitPalette(colors, name)}
    >
      <Title>{title}</Title>
    </button>
  );
}

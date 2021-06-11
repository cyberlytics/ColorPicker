/**
 * Ermöglicht das Ausführen von Funktionen wenn es angeklickt wird.
 */

import React from "react";
import { Title } from "../Title";
import "./index.css";

export function Button(props) {
    //get values for title and colors from props
  const { title, colors } = props;

  //function for submitting colors to backend; not created yet
  const submitPalette = (savePalette) => {
    alert(savePalette);
  };

  return (
    <button
      className="buttonStyle"
      type="button"
      onClick={() => submitPalette(colors)}
    >
      <Title>{title}</Title>
    </button>
  );
}

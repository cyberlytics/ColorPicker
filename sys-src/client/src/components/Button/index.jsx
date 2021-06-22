/**
 * Ermöglicht das Ausführen von Funktionen wenn es angeklickt wird.
 */

import React from "react";
import { Title } from "../Title";
import "./index.css";

export function Button(props) {
    //get values for title and colors from props
  const { title, onClick } = props;

  return (
    <button
      className="buttonStyle"
      type="button"
      // onClick={() => submitPalette(colors, name)}
      onClick={onClick}
    >
      <Title>{title}</Title>
    </button>
  );
}

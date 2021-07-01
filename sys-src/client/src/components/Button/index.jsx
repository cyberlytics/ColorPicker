/**
 * enables a action which is given by the parent component if user clicks the component
 */

import React from "react";
import { Title } from "../Title";
import "./index.css";

export function Button(props) {
    //get values for title and onClick from props
  const { title, onClick } = props;

  return (
    <button
      className="buttonStyle"
      type="button"
      onClick={onClick}
    >
      <Title>{title}</Title>
    </button>
  );
}

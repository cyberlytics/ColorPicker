/**
 * Button der lediglich Text anzeigt und auf einen Click
 * eine bestimmte Funktion ausführt.
 */
import React, { Component } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class AddColorButton extends Component {
  state = {};
  render() {
    const iconAdd = <FontAwesomeIcon icon={faPlus} />;
    return (
      <div
        className="button-add-color"
        onClick={() => this.props.handleAddChild()}
      >
        <div className="button-add-color-text">{iconAdd}</div>
      </div>
    );
  }
}

export default AddColorButton;

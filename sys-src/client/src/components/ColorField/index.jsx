/**
 * Spalte die die Farbe darstellt.
 * Es gibt zwei Varianten davon, bei einer wird der HEX-Farbcode
 * mit angezeigt, bei der anderen nicht.
 */

import "./index.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class ColorField extends Component {
  render() {
    const iconTrash = <FontAwesomeIcon icon={faTrashAlt} />;
    return (
      <div className="color-field" style={{background: this.props.colors[this.props.number]}} onClick={ ()=>this.props.changeActiveColor(this.props.number) }>
        <div className="button-delete">
          <p className="button-delete-text" onClick={()=>this.props.deleteColor(this.props.number)}>{iconTrash}</p>
        </div>
        <span className="color-field-text">{ this.props.colors[this.props.number] }</span>
        

      </div>
    );
  }
}

export default ColorField;

/**
 * Spalte die die Farbe darstellt.
 * Es gibt zwei Varianten davon, bei einer wird der HEX-Farbcode
 * mit angezeigt, bei der anderen nicht.
 */

import "./index.css";
import React, { Component } from "react";

class ColorField extends Component {
  render() {
    return (
      <div className="color-field">
        <div className="button-delete">
          <p className="button-delete-text">X</p>     
        </div>
        <span className="color-field-text">#FFFFFF</span>
      </div>
    );
  }
}

export default ColorField;

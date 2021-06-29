/**
 * Bereich der bis zu 5 Farben mit ihrem Hex-Code
 * anzeigt, sind noch nicht alle 5 Plätze belegt,
 * wird an der ersten, freien Stelle ein Plus-Symbol angezeigt.
 * Enthält:
 *  -ColorColumn (Variante mit Hex)
 *  -TextButton
 */

import React, { Component } from "react";
import ColorField from "../ColorField";
import "../ColorContainer/index.css";
import AddColorButton from "../AddColorButton";

class ColorContainer extends Component {
  render() {
    const children = [];
    for (var i = 0; i < this.props.colors.length; i += 1) {
      children.push(
        <ColorField
          key={i}
          setActiveColor={this.props.setActiveColor}
          colors={this.props.colors}
          number={i}
        ></ColorField>
      );
    }
    return (
      <div className="color-container">
        <div className="container-color-tiles">{children}</div>
        <AddColorButton handleAddChild={this.props.handleAdd}></AddColorButton>
      </div>
    );
  }
}

export default ColorContainer;

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
  state = {
    counter: 0,
  };

  handleAdd = () => {
    if (this.state.counter < 5 ) {
      this.setState({ counter: this.state.counter + 1 });
    }
    console.log(this.state.counter);
  };

  render() {
    const children = [];
    for (var i = 0; i < this.state.counter; i += 1) {
      children.push(<ColorField key={i}></ColorField>);
    }
    return (
      <div className="divColorContainer">
        <div className="container-color-buttons">{children}</div>
        <AddColorButton
          handleAddChild={this.handleAdd}
        ></AddColorButton>
      </div>
    );
  }
}

export default ColorContainer;

/**
 * Der Bereich der später die Auswahl der Farbe und Feinkalibrierung über Schiebregler
 * ermöglicht.
 * Enthält:
 *  -ColorWheel
 *  -SliderContainer
 */

import React, { Component } from "react";
import ColorWheel from "../ColorWheel/index.jsx";
import SliderContainer from "../SliderContainer";

class Picker extends Component {

  

  constructor(props) {
    super(props);

  }

  hexToRGB = (hex) => {
    hex = "0x" + hex;
    let r = (hex >> 16) & 0xff;
    let g = (hex >> 8) & 0xff;
    let b = hex & 0xff;
    return [r,g,b];
  };

  rgbToHex = (r,g,b) => {

    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length === 1)
      r = "0" + r;
    if (g.length === 1)
      g = "0" + g;
    if (b.length === 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }
  
  render() {
    // const getNewColor = (handleNewColor) => {
    //   setNewColor(handleNewColor);
    //   console.log("create palette:" + handleNewColor);
    // };

    return (
      <div class="container-picker">
        {/* <ColorWheel callbackFromParent={getNewColor} /> */}
        <ColorWheel />
        <SliderContainer
          rgbColor={ this.hexToRGB(this.props.colors[this.props.activeColor].slice(1))}
          rgbToHex={ this.rgbToHex}
          updateHexValue={this.props.updateHexValue}
        />
      </div>
    );
  }
}

export default Picker;

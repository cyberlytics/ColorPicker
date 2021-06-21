/**
 * Der Bereich der später die Auswahl der Farbe und Feinkalibrierung über Schiebregler
 * ermöglicht.
 * Enthält:
 *  -ColorWheel
 *  -SliderContainer
 */

import React, { Component } from "react";
import ColorWheel from "../ColorWheel";
import SliderContainer from "../SliderContainer";

class Picker extends Component {
  state = {};
  render() {
    // const getNewColor = (handleNewColor) => {
    //   setNewColor(handleNewColor);
    //   console.log("create palette:" + handleNewColor);
    // };

    return (
      <div>
        {/* <ColorWheel callbackFromParent={getNewColor} /> */}
        <ColorWheel/>
        <SliderContainer />
      </div>
    );
  }
}

export default Picker;

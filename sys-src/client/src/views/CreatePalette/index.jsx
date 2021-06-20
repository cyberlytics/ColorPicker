/**
 * Enthält später die View die es ermöglicht eine
 * Palette zu erstellen.
 * Enthält:
 *  -Picker
 *  -Choose
 *  -Preview
 */
import "./index.css";

import React, { Component, useState } from "react";
import ColorWheel from "../../components/ColorWheel";
import ColorContainer from "../../components/ColorContainer";
import SliderContainer from "../../components/SliderContainer";
import {Button} from "../../components/Button";


export default function CreatePalette(params) {

  //Array contains all created colors
  const [colors, setColors] = useState([]);

  //name of palette
  const [paletteName, setPaletteName] = useState("");

  //active color which should change
  const [activeColor, setActiveColor] = useState(0);

  //new created color in colorwheel or slider
  const [newColor, setNewColor] = useState("");

  return (
    <div className="create-palette">
      <div className="create-palette__row">
        <ColorWheel/>
        <SliderContainer/>
      </div>
      <div className="create-palette__row">
        <ColorContainer/>
        {/* <Button title={"Palette Speichern"} colors={colors} name={"Test"}></Button> */}
      </div>
      <div className="create-palette__row">blablabla</div>
    </div>
  );
}

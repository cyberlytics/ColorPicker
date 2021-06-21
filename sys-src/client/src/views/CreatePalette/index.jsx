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
import { Preview } from "../../components/Preview";
import Picker from "../../components/Picker";


export default function CreatePalette(params) {

  //Array contains all created colors
  const [colors, setColors] = useState([]);

  //active color which should change
  const [activeColor, setActiveColor] = useState(0);

  //new created color in colorwheel or slider
  const [newColor, setNewColor] = useState("");

  const getActiveColor = (handleActiveColor) => {setActiveColor(handleActiveColor)};

  return (
    <div className="create-palette">
      <div className="create-palette__row">
        <Picker/>
      </div>
      <div className="create-palette__row">
        <ColorContainer/>
        {/* <Button title={"Palette Speichern"} colors={colors} name={"Test"}></Button> */}
      </div>
      <div className="create-palette__row"><Preview/></div>
    </div>
  );
}

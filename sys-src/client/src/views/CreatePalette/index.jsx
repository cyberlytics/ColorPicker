/**
 * Enthält später die View die es ermöglicht eine
 * Palette zu erstellen.
 * Enthält:
 *  -Picker
 *  -Choose
 *  -Preview
 */
import "./index.css";

import React, { Component } from "react";
import ColorWheel from "../../components/ColorWheel";
import ColorContainer from "../../components/ColorContainer";
import SliderContainer from "../../components/SliderContainer";
import {Button} from "../../components/Button";


export default function CreatePalette(params) {
  return (
    <div className="above">
      <div className="row">
        <ColorWheel/>
        <SliderContainer/>
      </div>
      <div className="row">
        <ColorContainer/>
        <Button title={"Add"} colors={["#FFFFFF", "#FFFFFF", "#FFFFFF"]} name={"Test"}></Button>
      </div>
      <div className="row">blablabla</div>
    </div>
  );
}

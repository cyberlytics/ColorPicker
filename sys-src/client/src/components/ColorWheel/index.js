/**
 * Enthält das Farbrad.
 */
import React from "react";
import iro from "@jaames/iro";
import "./index.css";

 class ColorWheel extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      colors: ["#f00","#ffff","ff22", "ff32"]
    }
  }

  componentDidMount() {
    var colorPicker = new iro.ColorPicker(this.el, {
      // Set the size of the color picker
      width: 350,
      // Set the initial color to pure red
      colors: this.state.colors,
    });

    colorPicker.on("color:change", function (color) {
      // log the current color as a HEX string
      console.log(color.hexString);
      this.setState({ newColor: color.hexString });
      this.onColorChange();
      console.log(this.state.newColor);
    });
  };

  render() {
    return <div className="container-color-wheel" ref={(el) => (this.el = el)} />;
  }

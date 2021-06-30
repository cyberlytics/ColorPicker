/**
 * Enthält das Farbrad.
 */
import React from "react";
import iro from "@jaames/iro";
import "./index.css";

 class ColorWheel extends React.Component {

  constructor(props){
    super(props);
  }

  colorPicker;

  componentDidMount() {
    this.colorPicker = new iro.ColorPicker(this.el, {
      // Set the size of the color picker
      width: 350,
      // Set the initial color to pure red
      color: this.props.colors,
    });
    this.colorPicker.on("color:change", this.props.changeColor);
  };


  render() {
    return <div>
      <div className="container-color-wheel" ref={(el) => (this.el = el)} />
      </div>;
  }
}
export default ColorWheel;

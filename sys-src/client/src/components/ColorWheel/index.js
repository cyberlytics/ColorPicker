/**
 * Enthält das Farbrad.
 */
import React from "react";
import iro from "@jaames/iro";
import "./colorwheel.css";

class ColorWheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["#f00"],
      newColor: "",
    };
  }

  componentDidMount() {
    var colorPicker = new iro.ColorPicker(this.el, {
      // Set the size of the color picker
      width: 320,
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

  onColorChange=()=> {
    this.props.callbackFromParent(this.state.newColor);
  }

  render() {
    return <div ref={(el) => (this.el = el)} />;
  }
}
export default ColorWheel;

/**
 * Contains the Color Wheel
 */
import React from "react";
import iro from "@jaames/iro";
import "./index.css";

 class ColorWheel extends React.Component {

  colorPicker;

  componentDidMount() {
    this.colorPicker = new iro.ColorPicker(this.el, {
      // Color Wheel Options: Set the Size and the border width.
      width: 375,
      borderWidth: 3,
      // Initial color. Changing randomly after refreshing the page.
      color: this.props.colors[this.props.activeColor]
    });

    // Runs the function updateHexValue whenever the color picker is changed.
    this.colorPicker.on("color:change", ()=>this.props.updateHexValue(this.colorPicker.color.hexString));
  };

  componentDidUpdate(prevProps) {
    // Check if Index of active color is outside the color-field array.
    if(this.props.activeColor >= this.props.colors.length)
    {
      this.colorPicker.color.hexString = this.props.colors[0]
    }
    else {
      if(prevProps.colors[this.props.activeColor] !== this.props.colors[this.props.activeColor])
      {
        // Changes the previous color to the new color picker color. Moving the Slider also changes the Color Picker.
        this.colorPicker.color.hexString = this.props.colors[this.props.activeColor];
      }
    }
  }

  render() {
    return <div>
      <div className="container-color-wheel" ref={(el) => (this.el = el)} />
      </div>;
  }
}
export default ColorWheel;
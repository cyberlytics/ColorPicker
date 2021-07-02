/**
 * Enthält das Farbrad.
 */
import React from "react";
import iro from "@jaames/iro";
import "./index.css";

 class ColorWheel extends React.Component {

  colorPicker;

  componentDidMount() {
    this.colorPicker = new iro.ColorPicker(this.el, {
      // Set the size of the color picker
      width: 350,
      borderWidth: 3,
      // Die Farbe, mit der das Wheel initialisiert wird
      color: this.props.colors[this.props.activeColor]
    });

    // Wheel mit den Slidern verknüpft
    this.colorPicker.on("color:change", ()=>this.props.updateHexValue(this.colorPicker.color.hexString));
  };

  componentDidUpdate(prevProps) {
    //
    if(this.props.activeColor >= this.props.colors.length)
    {
      this.colorPicker.color.hexString = this.props.colors[0]
    }
    else {
      if(prevProps.colors[this.props.activeColor] !== this.props.colors[this.props.activeColor]){
      
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
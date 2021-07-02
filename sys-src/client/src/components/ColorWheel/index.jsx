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
  color;

  componentDidMount() {
    this.colorPicker = new iro.ColorPicker(this.el, {
      // Set the size of the color picker
      width: 350,
      // Set the initial color to pure red
      color: this.props.colors[this.props.activeColor],
    });
    this.colorPicker.on("color:change", ()=>this.props.updateHexValue(this.colorPicker.color.hexString));
    this.colorPicker.on("color:setActive", function(color){
      color = this.props.color[this.props.activeColor];
    });
  };

  componentDidUpdate(prevProps) {
    
    if(prevProps.colors[this.props.activeColor] !== this.props.colors[this.props.activeColor]){
      
      this.colorPicker.color.hexString = this.props.colors[this.props.activeColor];
    }
  }

  render() {
    return <div>
      <div className="container-color-wheel" ref={(el) => (this.el = el)} />
      </div>;
  }
}
export default ColorWheel;

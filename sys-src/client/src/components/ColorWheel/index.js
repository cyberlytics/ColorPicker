/**
 * Enthält das Farbrad.
 */
 import React from "react";
 import iro from "@jaames/iro";
 import './colorwheel.css'

 class ColorWheel extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      colors: ["#f00","#ffff","ff22"]
    }
  }

   componentDidMount() {
  var colorPicker = new iro.ColorPicker(this.el, {

    // Set the size of the color picker
    width: 320,
    // Set the initial color to pure red
    colors: this.state.colors
  });

  colorPicker.on('color:change', function(color) {
    // log the current color as a HEX string
    console.log(color.hexString);
  });
   }
 
   render() {
     console.log(this.props.onColorChange);
     return <div ref={el => (this.el = el)} />;
   }
 }
 export default ColorWheel;
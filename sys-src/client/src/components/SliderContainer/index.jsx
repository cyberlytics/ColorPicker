/**
 * Enthält die 4 Slider mit Logo zum Regeln von:
 * Helligkeit, Rot-, Grün- und Blauwerten.
 * Enthält:
 *  -Slider
 */
import React, { Component } from "react";
import Slider from "../Slider";
class SliderContainer extends Component {

  
  constructor(props) {

    super(props);

  }

  // Source: https://codepen.io/urosurosevic/pen/pagxYE  

  handleChange = (type, value) => {

    let newHexValue = '';

    if (type === "red") {

      newHexValue = this.props.rgbToHex(value, this.props.rgbColor[1], this.props.rgbColor[2]);
    }
    if (type === "green") {
      newHexValue = this.props.rgbToHex(this.props.rgbColor[0] , value, this.props.rgbColor[2]);
    }
    if (type === "blue") {
      newHexValue = this.props.rgbToHex(this.props.rgbColor[0] , this.props.rgbColor[1], value);
    }
    this.props.updateHexValue(newHexValue);
  };

  render() {
    return (
      <div class="container-slider font-IBM">
        <Slider
          value={this.props.rgbColor[0]}
          handleChange={this.handleChange}
          type={"red"}
          sliderText={"R"}
        ></Slider>
        <Slider
          value={this.props.rgbColor[1]}
          handleChange={this.handleChange}
          type={"green"}
          sliderText={"G"}
        ></Slider>
        <Slider
          value={this.props.rgbColor[2]}
          handleChange={this.handleChange}
          type={"blue"}
          sliderText={"B"}
        ></Slider>
      </div>
    );
  }
}

export default SliderContainer;

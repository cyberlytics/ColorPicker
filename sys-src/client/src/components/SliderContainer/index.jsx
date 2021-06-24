/**
 * Enthält die 4 Slider mit Logo zum Regeln von:
 * Helligkeit, Rot-, Grün- und Blauwerten.
 * Enthält:
 *  -Slider
 */
import React, { Component } from "react";
import Slider from "../Slider";

// TODO: CSS

class SliderContainer extends Component {
  state = { red_value: 255, green_value: 100, blue_value: 0, brightness: 200 };

  handleChange = (type, value) => {

    if (type === "red") {
      this.setState({ red_value: value });
    }
    if (type === "green") {
      this.setState({ green_value: value });
    }
    if (type === "blue") {
      this.setState({ blue_value: value });
    }
    if (type === "brightness") {
      this.setState({ brightness: value });
    }
  };

  render() {
    return (
      <div class="container-slider">
        <Slider
          value={this.state.red_value}
          handleChange={this.handleChange}
          type={"red"}
          sliderText={"R"}
        ></Slider>
        <Slider
          value={this.state.green_value}
          handleChange={this.handleChange}
          type={"green"}
          sliderText={"G"}
        ></Slider>
        <Slider
          value={this.state.blue_value}
          handleChange={this.handleChange}
          type={"blue"}
          sliderText={"B"}
        ></Slider>
        <Slider
          value={this.state.brightness}
          handleChange={this.handleChange}
          type={"brightness"}
          sliderText={"H"}
        ></Slider>
      </div>
    );
  }
}

export default SliderContainer;

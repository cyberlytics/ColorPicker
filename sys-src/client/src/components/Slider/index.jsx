/**
 * Schiebregler für die Feinkalibrierung von Werten.
 */

import "./style.css";
import React, { Component } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.value = React.createRef();
  }

  render() {
    return (
      <div>
        <fieldset>
          <label for={"slider-"+this.props.type}>{this.props.sliderText}</label>
          <input
          // key={this.props.value}
            type="range"
            min="0"
            max="255"
            class={this.props.type}
            step="1"
            ref={this.value}
            value={this.props.value}
            onChange={() =>
              this.props.handleChange(this.props.type, parseInt(this.value.current.value))
            }
          />
          <output for={"slider-"+this.props.type}>
            {this.props.value}
          </output>
        </fieldset>
      </div>
    );
  }
}

export default Slider;

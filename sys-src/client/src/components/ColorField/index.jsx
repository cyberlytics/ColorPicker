/**
 * Spalte die die Farbe darstellt.
 * Es gibt zwei Varianten davon, bei einer wird der HEX-Farbcode
 * mit angezeigt, bei der anderen nicht.
 */

import "./index.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import tinycolor from "tinycolor2";

class ColorField extends Component {
  render() {
    const iconTrash = <FontAwesomeIcon icon={faTrashAlt}/>;
    const iconCopy = <FontAwesomeIcon icon={faCopy}/>;
    return (
      // Tiles that show the colors of the palette
      // Tinycolor used to check if the color is too dark for the font to show up
      <div className="color-field font-roboto hover" style={{background: this.props.colors[this.props.number]}} onClick={ ()=>this.props.changeActiveColor(this.props.number) }>
        {/* Button that let's you delete a single color */}
        <div className="icon-position button-delete">
          <p className={"icon-text " + (tinycolor(this.props.colors[this.props.number]).isDark() ? "light icon-text-light" : "dark icon-text-dark") } onClick={()=>this.props.deleteColor(this.props.number)} >{iconTrash}</p>
        </div>
        {/* Button that let's you copy the HEX-Code */}
        <div className="icon-position button-copy">
          <p className={"icon-text " + (tinycolor(this.props.colors[this.props.number]).isDark() ? "light icon-text-light" : "dark icon-text-dark") } onClick={()=>{navigator.clipboard.writeText(this.props.colors[this.props.number])}} >{iconCopy}</p>
        </div>
        {/* HEX-Code of one color */}
        <span className={"color-field-text " + (tinycolor(this.props.colors[this.props.number]).isDark() ? "light" : "dark") + (this.props.activeColor == this.props.number ? " active" : "")}>{ this.props.colors[this.props.number] }</span>
      </div>
    );
  }
}

export default ColorField;

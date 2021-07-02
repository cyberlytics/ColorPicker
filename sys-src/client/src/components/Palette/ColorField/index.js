import "./colorfield.css";
import tinycolor from "tinycolor2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

function ColorField(props) {
    const iconCopy = <FontAwesomeIcon icon={faCopy}/>;
  return (
    <div className="column">
      {props.colors.map((d, index) => (
        <div
          key={index}
          className="item font-roboto hover"
          style={{ backgroundColor: d }}
        >
          <div className="overview-tile-single-color">
            {/* Copy button to copy the hex value to clipboard */}
            <div className="icon-position show button-copy" style={ tinycolor(d).isDark() ? { color: '#ffffff80' } : { color:'#00000080' } }>
              <p className={"icon-text " + (tinycolor(d).isDark() ? "light icon-text-light" : "dark icon-text-dark") } onClick={()=>{navigator.clipboard.writeText(d)}}>{iconCopy}</p>
            </div>
            <span className="color-field-text palette-text" style={ tinycolor(d).isDark() ? { color: '#ffffff80' } : { color:'#00000080' } }>   
            {d}           
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ColorField;

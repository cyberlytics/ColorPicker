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
            <div className="button-copy">
              <p className="button-copy-text">{iconCopy}</p>
            </div>
            <span className="color-field-text">
              #TEST00
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ColorField;

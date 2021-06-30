/**
 * Die Farbpalette mit 2 bis 5 Farben, Kommentarlogo und Ratings.
 * Enthält: 
 *  -Column
 *  -CommentRating
 *  -(opt. PopUpPalette)
 */


import CommentRating from "../../components/CommentRating/index"
import ColorField from "./ColorField/index"

import "./palette.css"

function Palette(props) {
    return (
    <div className="palette">
        <div className="colorContainer">
            <ColorField colors={props.colors}/>
        </div>
        <div className="infoContainer">
            <CommentRating rating={props.avgRating} paletteId={props.paletteId}/>
        </div>
    </div>
    );
}

export default Palette;
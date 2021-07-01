import React, { useState } from 'react';
import CommentRating from "../../components/CommentRating/index"
import ColorField from "./ColorField/index"
import PopUpPalette from '../../components/PopUpPalette/index.jsx';

import "./palette.css"

//renders the palette with all colors, an comment icon and average rating
function Palette(props) {

    const [btnPopup, setBtnPopup] = useState(false);

    return (
    <div className="palette">
        <div className="colorContainer" 
            onClick={() => setBtnPopup(true) }>
            <ColorField colors={props.colors}/>
        </div>
        <div className="infoContainer">
            <CommentRating rating={props.avgRating} paletteID={props.paletteId}/>
        </div>
        <PopUpPalette trigger={btnPopup} setTrigger={setBtnPopup} paletteID={props.paletteId}/>
    </div>
    );
}

export default Palette;
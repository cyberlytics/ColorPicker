import React, { useState } from 'react';
import CommentRating from "../../components/CommentRating/index"
import ColorField from "./ColorField/index"
import CommentsIcon from "@material-ui/icons/Message";
import PopUpPalette from '../../components/PopUpPalette/index.jsx';

import "./palette.css"

//renders the palette with all colors, an comment icon and average rating
function Palette(props) {

    const [btnPopup, setBtnPopup] = useState(false);

    return (
    <div className="palette">
        <div className="colorContainer" >
            <ColorField colors={props.colors}/>
        </div>
        <div className="infoContainer">
            <div id="commentSymbol">
                <CommentsIcon style={{ color: "#808080" }} onClick={() => setBtnPopup(true) } />
            </div>
            <PopUpPalette trigger={btnPopup} setTrigger={setBtnPopup} paletteID={props.paletteId}  colors={props.colors}/>

            <CommentRating rating={props.avgRating} paletteID={props.paletteId} colors={props.colors}/>
        </div>
        
    </div>
    );
}

export default Palette;
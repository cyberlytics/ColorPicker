/**
 * Das PopUp das angezeigt wird, wenn man eine bestimmte
 * Palette anklickt.
 * Enthält:
 *  -Palette
 *  -CommentContainer
 */

 import React from 'react'
 import './index.css'
 import CommentContainer from '../CommentContainer'
 import ColorField from './ColorFild'
 import CommentRating from '../CommentRating/index'

 function PopUpPalette (props)  {
        return (props.trigger) ? (
            <div className="popup">           
                <div className="popupInner">
                    <div id="header">
                        <div id="paletteBox">
                            
                            <ColorField colors={props.colors} />                            
                        </div>
                        <div className="infoContainer">
                            <h3>Bewerbe die Palette</h3>
                            <CommentRating rating={props.avgRating} paletteID={props.paletteId}/>
                        </div>
                    </div>
                    <div id="containerBox">
                        <CommentContainer paletteID={props.paletteID}/>                        
                    </div>

                    
                    <button className="btnPopup" id="btnClose" onClick={() => props.setTrigger(false)}>
                      Schließen
                    </button>                  
                </div>          
                
            </div>
        ):"";
    
    }

 





export default PopUpPalette;
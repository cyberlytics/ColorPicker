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
 import { Button } from '../Button'

 function PopUpPalette (props)  {
        return (props.trigger) ? (
            <div className="popup">           
                <div className="popupInner">
                    <div className="header">
                        <div className="paletteBox">                            
                            <ColorField colors={props.colors} />                            
                        </div>

                        <div className="bewertungContainer">
                            <div className="containerHeader">
                                <h3 >Bewerte die Palette</h3>
                            </div>
                            <div className="containerRating">
                                <CommentRating rating={props.avgRating} paletteID={props.paletteId}/>
                            </div>
                        </div>

                    </div>
                    <div id="containerBox">
                        <CommentContainer paletteID={props.paletteID}/>                        
                    </div>

                    
                    <Button className="btnPopup" id="btnClose" title={"Schließen"} onClick={() => props.setTrigger(false)} />
                    {/*<button className="btnPopup" id="btnClose" onClick={() => props.setTrigger(false)}>
 
                      Schließen
        </button>    */     }         
                </div>          
                
            </div>
        ):"";
    
    }

 





export default PopUpPalette;
/**
 * Das PopUp das angezeigt wird, wenn man eine bestimmte
 * Palette anklickt.
 * Enthält:
 *  -Palette
 *  -CommentContainer
 */

 import React, { Component } from 'react'
 import './index.css'
 import CommentContainer from '../CommentContainer'

 function PopUpPalette (props)  {
        return (props.trigger) ? (
            <div className="popup">             
                <div className="popupInner">
                    <div id="paletteBox">
                        <h3>Palette</h3>
                    </div>
                    <div id="containerBox">
                        <CommentContainer />                        
                    </div>

                    <button className="btnPopup" id="btnSave">Speichern</button>
                    <button className="btnPopup" id="btnClose" onClick={() => props.setTrigger(false)}>
                      Schließen
                    </button>                  
                </div>
                
                
            </div>
        ):"";
    
    }

 





export default PopUpPalette;